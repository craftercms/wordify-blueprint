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

function reducer(state, nextState) {
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
    }
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
  const [query, setQuery] = useState(() => parse(window.location.search).q ?? '');
  const onChange = useCallback((e) => setQuery(e.target.value), []);
  return [query, onChange, setQuery];
}
