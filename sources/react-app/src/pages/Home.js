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

import React, { useState } from 'react';
import BaseLayout from '../shared/BaseLayout';
import Slider from '../components/Slider';
import { FormattedMessage } from 'react-intl';
import PostCard from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import RecentPostsAside from '../shared/RecentPostsAside';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { usePosts } from '../shared/hooks';
import Paginate from '../shared/Paginate';

export default function Home(props) {
  const {
    model,
    model: {
      craftercms: {
        path
      },
      slider_o
    },
    meta: {
      siteTitle,
      socialLinks
    }
  } = props;
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 8,
    currentPage: 0
  });
  const posts = usePosts(paginationData);

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            {
              slider_o?.map((slider, index) =>
                <div className="col-md-12" key={index}>
                  <Slider model={slider} parentModelId={path} />
                </div>
              )
            }
          </div>
        </div>
      </section>
      <section className="site-section py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">
                <FormattedMessage
                  id="common.latestPostSectionTitle"
                  defaultMessage="Latest Posts"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                {
                  posts?.items.map((post) =>
                    <div className="col-md-6" key={post.craftercms.id}>
                      <PostCard model={post} />
                    </div>
                  )
                }
              </div>
              {
                posts?.pageCount > 1 &&
                <div className="row mt-5">
                  <div className="col-md-12 text-center">
                    <nav aria-label="Categories navigation" className="text-center">
                      <Paginate
                        pageCount={posts.pageCount}
                        onPageChange={(index) => {
                          setPaginationData(
                            {
                              ...paginationData,
                              currentPage: (index)
                            });
                        }}
                      />
                    </nav>
                  </div>
                </div>
              }
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBios model={model} fieldId="bios_o" />

              <RecentPostsAside />

              <SidebarCategories />

              <SidebarTags />

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
