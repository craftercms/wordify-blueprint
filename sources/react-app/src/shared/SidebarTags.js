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

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { usePencil, useTaxonomies } from './hooks';
import { createTaxonomyFilter } from './utils';

export default function () {
  const tags = useTaxonomies({
    filter: createTaxonomyFilter( 'tags.xml')
  })?.[0];

  const ice =  usePencil({ model: tags });

  //TODO: use resource to add suspense state

  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="sidebarTags.tagsSectionTitle"
          defaultMessage="Tags"
        />
      </h3>
      <ul className="tags" {...ice}>
        {
          tags?.items.item.map((tag) =>
            <li key={tag.key}><a href={`/tag/${tag.key}`}>{tag.value}</a></li>
          )
        }
      </ul>
    </div>
  );
}
