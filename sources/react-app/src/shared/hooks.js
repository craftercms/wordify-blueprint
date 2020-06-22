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
import { fetchQuery } from '../relayEnvironment';
import { useGlobalContext } from './context';
import { useDropZone, useICE } from '@craftercms/ice/react';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { crafterConfig, createResource, preParseSearchResults } from './utils';
import { createQuery, search } from '@craftercms/search';
import { map } from 'rxjs/operators';
import { parseDescriptor } from '@craftercms/content';

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
                about_t
                file__name(filter: {matches: "site-footer.xml"})
                internal__name
                localId
                socialLinks_o {
                  item {
                    socialNetwork_s
                    label_s
                    url_s
                  }
                }
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
        (!destroyedRef.current) && update({ footer: data.component_footer.items[0] });
      });
    }
  }, [update, footer, footerLoading]);
  return footer;
}

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
        text: `
          query Posts {
            page_post(limit: 10, offset: 0, sortBy: "lastModifiedDate_dt", sortOrder: DESC) {
              total
              items {
                guid: objectId
                path: localId
                contentTypeId: content__type
                dateCreated: createdDate_dt
                dateModified: lastModifiedDate_dt
                label: internal__name
                slug: localId(transform: "storeUrlToRenderUrl")
                pageTitle_s
                pageDescription_s
                blurb_t
                headline_s
                mainImage_s
                content_o {
                  item {
                    key
                    component {
                      ... on component_rich_text {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        content_html_raw
                      }
                      ... on component_image {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        alternativeText_s
                        image_s
                      }
                      ... on component_responsive_columns {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        columns_o {
                          item {
                            columnSize_s
                            content_o {
                              item {
                                key
                                component {
                                  ... on component_rich_text {
                                    guid: objectId
                                    path: localId
                                    contentTypeId: content__type
                                    dateCreated: createdDate_dt
                                    dateModified: lastModifiedDate_dt
                                    label: internal__name
                                    content_html_raw
                                  }
                                  ... on component_image {
                                    guid: objectId
                                    path: localId
                                    contentTypeId: content__type
                                    dateCreated: createdDate_dt
                                    dateModified: lastModifiedDate_dt
                                    label: internal__name
                                    alternativeText_s
                                    image_s
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                authorBio_o {
                  item {
                    key
                    component {
                      guid: objectId
                      contentTypeId: content__type
                      label: internal__name
                      path: localId
                      bio_t
                      name_s
                      profilePic_s
                      linkButtonText_s
                      linkButtonUrl_s
                      showLinkButton_b
                      facebookLink_s
                      twitterLink_s
                      instagramLink_s
                      youTubeLink_s
                    }
                  }
                }
                categories_o {
                  item {
                    key
                    value_smv
                  }
                }
                tags_o {
                  item {
                    key
                    value_smv
                  }
                }
              }
            }
          }
        `
      }).then(({ data }) => {
        (!destroyedRef.current) && update({ posts: parseDescriptor(data.page_post.items) });
      });
    }
  }, [update, posts]);
  return posts;
}

let useTaxonomiesLoading = false;
export function useTaxonomies(config = { filter: taxonomy => taxonomy }) {
  const [{ taxonomies }, update] = useGlobalContext();
  const destroyedRef = useRef(false);
  useEffect(() => {
    return () => {
      destroyedRef.current = true;
    };
  }, []);
  useEffect(() => {
    if (!taxonomies && !useTaxonomiesLoading) {
      useTaxonomiesLoading = true;
      fetchQuery({
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
      }).then(({ data }) => {
        (!destroyedRef.current) && update({ taxonomies: parseDescriptor(data.taxonomy.items) });
      });
    }
  }, [update, taxonomies]);
  return taxonomies?.filter(config.filter);
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

const contentTypes = ['/page/post'];
export function useUrlSearchQueryFetchResource(size = 1) {
  const [query, , , page] = useSearchQuery();
  const [resource, setResource] = useState(neverResource);

  // https://github.com/facebook/react/issues/14413
  useEffect(() => {
    // FYI: A GraphQL query could also be used instead of a direct Elasticsearch
    setResource(createResource(
      () => search(
        createQuery('elasticsearch', {
          query: {
            'bool': {
              'filter': [
                { 'bool': { 'should': contentTypes.map(id => ({ 'match': { 'content-type': id } })) } },
                { 'multi_match': { 'query': query, 'type': "phrase_prefix"} }
              ]
            }
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

