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
import BaseLayout from '../shared/BaseLayout';
import { FormattedMessage } from 'react-intl';
import SidebarSearch from '../shared/SidebarSearch';
import PopularPostsAside from '../shared/PopularPostsAside';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import { useUrlSearchQueryFetchResource } from '../shared/hooks';
import CircularProgressSpinner from '../shared/CircularProgressSpinner';
import PostCard, { LANDSCAPE } from '../shared/PostCard';

function SearchResults({ resource }) {
  const { hits, total } = resource.read();
  return (
    <>
      <p>{total} result{total === 0 || total > 1 ? 's' : ''} found.</p>
      {
        hits.map((post) =>
          <PostCard key={post.craftercms.id} model={post} format={LANDSCAPE} />
        )
      }
    </>
  );
}

export default function (props) {
  const { posts } = props;
  const resource = useUrlSearchQueryFetchResource();
  return (
    <BaseLayout>
      <section className="site-section pt-5 py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">
                <FormattedMessage
                  id="common.latestPostSectionTitle"
                  defaultMessage="Search Results"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                <Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
                  <SearchResults resource={resource} />
                </Suspense>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              {/*
              <SidebarBios bios={bios_o} />
              */}

              <PopularPostsAside posts={posts} />

              <SidebarCategories />

              <SidebarTags />

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
