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
import { useDropZone, useICE } from '@craftercms/ice/esm2015/react';
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
  const onChange = useCallback((e) => setQuery(e.target.value), []);
  useEffect(() => {
    setQuery(parse(search).q ?? '');
  }, [search]);
  return [query, onChange, setQuery];
}

const fields = ['headline_s', 'blurb_t'];
const contentTypes = ['/page/post', '/component/post'];
export function useUrlSearchQueryFetchResource() {
  const [query] = useSearchQuery();
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
                { 'multi_match': { 'query': query, 'fields': fields } }
              ]
            }
          }
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
  }, [query]);
  return resource;
}

