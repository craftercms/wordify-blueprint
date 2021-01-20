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

import React  from 'react';
import { FormattedMessage } from 'react-intl';
import PostCard, { LANDSCAPE_COMPRESSED } from './PostCard';
import { useRecentPosts } from './hooks';

function RecentPostsAside() {
  const posts = useRecentPosts();

  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="common.latestPostsTitle"
          defaultMessage="Latest Posts"
        />
      </h3>
      <div className="post-entry-sidebar">
        <ul>
          {
            posts?.map((post) =>
              <li key={post.craftercms.id}>
                <PostCard model={post} format={LANDSCAPE_COMPRESSED} />
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default RecentPostsAside;
