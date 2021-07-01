/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { fetchQuery } from '../fetchQuery';
import { useGlobalContext } from './context';
import { useDropZone, useICE } from '@craftercms/ice/react';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { crafterConfig, createResource, preParseSearchResults } from './utils';
import { createQuery, search } from '@craftercms/search';
import { map } from 'rxjs/operators';
import { parseDescriptor } from '@craftercms/content';
import { postsQuery } from './queries.graphql';

export const neverResource = createResource(() => new Promise(() => void 0));

const reducer = (state, nextState) => {
  return { ...state, ...nextState };
}

export function useSpreadState(initializerArg, initializer) {
  return useReducer(reducer, initializerArg, initializer);
}

export function useNavigation() {
  const [{ pages, pagesLoading }, update] = useGlobalContext();
  const destroyedRef = useRef(false);
  useEffect(() => {
    return () => {
      destroyedRef.current = true;
    };
  }, []);
  useEffect(() => {
    if (!pages && !pagesLoading) {
      update({ pagesLoading: true });
      fetchQuery({
        text: `
          query Nav {
            pages {
              total
              items {
                navLabel
                contentTypeId: content__type
                url: localId(transform: "storeUrlToRenderUrl")
                placeInNav(filter: { equals: true }) @skip(if: true)
                orderDefault_f
              }
            }
          }
        `
      }).then(({ data }) => {
        (!destroyedRef.current) && update({ pages: data.pages.items });
      });
    }
  }, [update, pages, pagesLoading]);
  return pages;
}

export function useFooter() {
  const [{ footer, footerLoading }, update] = useGlobalContext();
  const destroyedRef = useRef(false);

  useEffect(() => {
    return () => {
      destroyedRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (!footer && !footerLoading) {
      update({ footerLoading: true });
      fetchQuery({
        text: `
          query Footer {
            component_footer {
              items {
                aboutTitle_s
                about_t
                aboutImage_s
                quickLinksTitle_s
                socialLinksTitle_s
                file__name(filter: {matches: "site-footer.xml"})
                internal__name
                localId
                quickLinks_o {
                  item {
                    label_s
                    url_s
                  }
                }
                copyright_html_raw
              }
            }
          }
        `
      }).then(({ data }) => {
        (!destroyedRef.current) && update({ footer: parseDescriptor(data.component_footer.items)[0] });
      });
    }
  }, [update, footer, footerLoading]);
  return footer;
}

// stores posts in globalContext to avoid multiple calls
let useRecentPostsLoading = false;
export function useRecentPosts() {
  const [{ posts }, update] = useGlobalContext();
  const destroyedRef = useRef(false);

  useEffect(() => {
    return () => {
      destroyedRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (!posts && !useRecentPostsLoading) {
      update({ postsLoading: true });
      fetchQuery({
        text: postsQuery
      }).then(({ data }) => {
        (!destroyedRef.current) && update({ posts: parseDescriptor(data.posts.items) });
      });
    }
  }, [update, posts]);
  return posts;
}

export function usePosts(paginationData, categories, tags, exclude) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    let categoriesFilter = categories
      ? Array.isArray(categories)
        ? categories.map(category => ({ matches: category.key }))
        : [{ matches: categories.key }]
      : [];
    let tagsFilter = tags
      ? Array.isArray(tags)
        ? tags.map(tag => ({ matches: tag.key }))
        : [{ matches: tags.key }]
      : [];

    fetchQuery(
      { text: postsQuery },
      {
        postsLimit: paginationData.itemsPerPage,
        postsOffset: (paginationData.currentPage * paginationData.itemsPerPage),
        categoriesFilter,
        tagsFilter,
        exclude: exclude??""
      }
    ).then(({ data }) => {
      setPosts({
        items: parseDescriptor(data.posts.items),
        total: data.posts.total,
        pageCount: Math.ceil(data.posts.total/paginationData.itemsPerPage)
      });
    });
  }, [paginationData, categories, tags, exclude]);

  return posts;
}

export function useTaxonomiesResource() {
  const [resource, setResource] = useState(neverResource);

  useEffect(() => {
    const resource = createResource(
      () => fetchQuery({
        text: `
        query Taxonomies {
          taxonomy {
            total
            items {
              guid: objectId
              path: localId
              contentTypeId: content__type
              dateCreated: createdDate_dt
              dateModified: lastModifiedDate_dt
              label: internal__name
              items {
                item {
                  key
                  value
                  image_s
                }
              }
            }
          }
        }
      `
      })
    );
    setResource(resource);
  }, []);
  return resource;
}

export function usePencil(props) {
  const { model, parentModelId } = props;
  const [{ isAuthoring }] = useGlobalContext();
  return useICE({ model, parentModelId, isAuthoring }).props;
}

export function useDnD(props) {
  const { model, fieldId } = props;
  const [{ isAuthoring }] = useGlobalContext();
  // Note on version 1.2.3 of SDK, zoneName will be deprecated, in favour of fieldId
  return useDropZone({ model, zoneName: fieldId, isAuthoring }).props;
}

export function useSearchQuery() {
  const { search } = useLocation();
  const [query, setQuery] = useState(() => parse(search).q ?? '');
  const [page, setPage] = useState(() => parse(search).p ?? 0);
  const onChange = useCallback((e) => setQuery(e.target.value), []);
  useEffect(() => {
    setQuery(parse(search).q ?? '');
    setPage(parse(search).p ?? 0);
  }, [search]);

  return [query, onChange, setQuery, page];
}

const contentTypes = ['/component/post'];
export function useUrlSearchQueryFetchResource(size = 1) {
  const [query, , , page] = useSearchQuery();
  const [resource, setResource] = useState(neverResource);

  // https://github.com/facebook/react/issues/14413
  useEffect(() => {
    // FYI: A GraphQL query could also be used instead of a direct Elasticsearch

    const fields = ['headline_t^1.5', 'content_o.item.component.content_html^1'];
    let searchQuery = {};
    let userTerm = query;
    searchQuery.filter = [
      {
        'terms': {
          'content-type': contentTypes.map(id => id)
        }
      }
    ];

    if (userTerm) {
      // Check if the user is requesting an exact match with quotes
      const regex = /.*("([^"]+)").*/;
      const matcher = userTerm.match(regex);
      if (matcher) {
        // Using must excludes any doc that doesn't match with the input from the user
        searchQuery.must = [
          {
            'multi_match': {
              'query': matcher[2],
              'fields': fields,
              'fuzzy_transpositions': false,
              'auto_generate_synonyms_phrase_query': false
            }
          }
        ];

        // Remove the exact match to continue processing the user input
        userTerm = userTerm.replace(matcher[1], '');
      } else {
        // Exclude docs that do not have any optional matches
        searchQuery.minimum_should_match = 1;
      }

      if (userTerm) {
        // Using should makes it optional and each additional match will increase the score of the doc
        searchQuery.should = [
          {
            'multi_match': {
              'query': userTerm,
              'fields': fields,
              'type': 'phrase_prefix',
              'boost': 1.5
            }
          },
          {
            'multi_match': {
              'query': userTerm,
              'fields': fields
            }
          },
          {
            'match': {
              'pageDescription_s': userTerm
            }
          },
          {
            'match': {
              'categories_o.item.value_smv': userTerm
            }
          }
        ]
      }
    }

    setResource(createResource(
      () => search(
        createQuery('elasticsearch', {
          query: {
            'bool': searchQuery
          },
          size,
          from: page
        }),
        crafterConfig
      ).pipe(
        map(({ hits, ...rest }) => {
          const counted = {};
          const parsedHits = hits.map(({ _source }) => parseDescriptor(
            preParseSearchResults(_source)
          )).filter((content) => {
            // TODO: Search currently coming with duplicates. Should address at the elastic query level.
            if (content.craftercms.id in counted) {
              return false;
            } else {
              counted[content.craftercms.id] = true;
              return true;
            }
          });
          return { ...rest, hits: parsedHits };
        })
      ).toPromise()
    ));
  }, [query, page, size]);
  return resource;
}

