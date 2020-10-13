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

import Cookies from 'js-cookie';

export function isAuthoring() {
  const html = document.documentElement;
  const attr = html.getAttribute('data-craftercms-preview');
  return (
    // eslint-disable-next-line no-template-curly-in-string
    attr === '${modePreview?c}' || // Otherwise disable/enable if you want to see pencils in dev server.
    attr === 'true'
  );
}

export function createResource(factory) {
  let result;
  let status = "pending";
  let suspender = factory().then(
    response => {
      status = "success";
      result = response;
    },
    error => {
      status = "error";
      result = error;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}

let site = document.getElementById('2fb5164e').innerHTML;
if (site === 'null') {
  site = Cookies.get('crafterSite');
}

export const crafterConfig = {
  baseUrl: process.env.REACT_APP_CRAFTERCMS_BASE_URL,
  site,
  graphQLServer: process.env.REACT_APP_GRAPHQL_SERVER
};

// TODO: To be moved to sdk and/or removed
// https://github.com/craftercms/craftercms/issues/4057
const propsToRemove = ['rootId', 'crafterSite', 'crafterPublishedDate', 'crafterPublishedDate_dt', 'inheritsFrom_smv'];
export function preParseSearchResults(source) {
  Object.entries(source).forEach(([prop, value]) => {
    if (propsToRemove.includes(prop)) {
      delete source[prop];
    } else if (prop.endsWith('_o')) {
      if (!Array.isArray(value.item)) {
        source[prop] = { item: [value.item] };
      }
      source[prop].item.forEach((item, i) => {
        source[prop].item[i] = preParseSearchResults(item);
        if (item.component) {
          source[prop].item[i].component = preParseSearchResults(item.component);
        }
      });
    }
  });
  return source;
}

export function createTaxonomyFilter(name) {
  return (taxonomy => taxonomy.craftercms.path.includes(name));
};
