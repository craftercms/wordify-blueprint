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

import { environment } from '../environments/environment';
import Cookies from 'js-cookie';

export default class Utils {
  static siteName() {
    return environment.crafterSiteId || Cookies.get('crafterSite');
  }
  static computeSlug(path: string) {
    return path
      .replace(/(\/site\/components)|(index\.xml)/g, '')
      .replace(/(\/site\/website)|(index\.xml)/g, '')
      .replace(/(\/\/)/g, '/')
      .replace('.xml', '');
  }

  static crafterConfig() {
    return {
      baseUrl: environment.baseUrl,
      site: this.siteName()
    }
  }

  static createTaxonomyFilter(name) {
    return (taxonomy => taxonomy.craftercms.path.includes(name));
  }

  static formatDate(date: string) {
    return new Date(date).toLocaleDateString()
  }
}
