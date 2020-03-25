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

export default function () {
  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="sidebarTags.tagsSectionTitle"
          defaultMessage="Tags"
        />
      </h3>
      <ul className="tags">
        <li><a href="/">Travel</a></li>
        <li><a href="/">Adventure</a></li>
        <li><a href="/">Food</a></li>
        <li><a href="/">Lifestyle</a></li>
        <li><a href="/">Business</a></li>
        <li><a href="/">Freelancing</a></li>
        <li><a href="/">Travel</a></li>
        <li><a href="/">Adventure</a></li>
        <li><a href="/">Food</a></li>
        <li><a href="/">Lifestyle</a></li>
        <li><a href="/">Business</a></li>
        <li><a href="/">Freelancing</a></li>
      </ul>
    </div>
  );
}
