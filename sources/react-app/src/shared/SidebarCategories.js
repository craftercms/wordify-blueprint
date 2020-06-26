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

import React, { Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  usePencil,
  useTaxonomiesResource
} from './hooks';
import { createTaxonomyFilter } from './utils';
import CircularProgressSpinner from './CircularProgressSpinner';
import { parseDescriptor } from '@craftercms/content';

function SidebarCategoriesContent({ resource }) {
  const { data } = resource.read();
  const taxonomies =  parseDescriptor(data.taxonomy.items);
  const categories = taxonomies.filter(createTaxonomyFilter( 'categories.xml'))[0];
  const ice =  usePencil({ model: categories });

  return(
    <ul className="categories" {...ice}>
      {
        categories?.items.item.map((category) =>
          <li key={category.key}><a href={`/category/${category.key}`}>{category.value}</a></li>
        )
      }
    </ul>
  )
}

export default function () {
  let resource = useTaxonomiesResource();
  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="sidebarCategories.categoriesSectionTitle"
          defaultMessage="Categories"
        />
      </h3>
      <Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
        <SidebarCategoriesContent resource={resource} filter />
      </Suspense>
    </div>
  );
}
