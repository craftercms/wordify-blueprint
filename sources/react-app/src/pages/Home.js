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
import BaseLayout from '../shared/BaseLayout';
import Slider from '../components/Slider';
import { FormattedMessage } from 'react-intl';
import PostCard from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import RecentPostsAside from '../shared/RecentPostsAside';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import { Link } from 'react-router-dom';
import { parse } from 'query-string';

export default function (props) {
  const {
    model: {
      craftercms: {
        path
      },
      bios_o,
      slider_o
    },
    posts,
    categories,
    tags,
    meta: {
      posts: {
        total,
        limit
      }
    }
  } = props;
  const pageNumber = parseInt(parse(window.location.search).page ?? 1);
  const pageIndex = pageNumber - 1;
  const numOfPages = Math.ceil(total / limit);
  return (
    <BaseLayout>
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
                  posts?.map((post) =>
                    <div className="col-md-6" key={post.craftercms.id}>
                      <PostCard model={post} />
                    </div>
                  )
                }
              </div>
              {
                numOfPages > 1 && (
                  <div className="row mt-5">
                    <div className="col-md-12 text-center">
                      <nav aria-label="Page navigation" className="text-center">
                        <ul className="pagination">
                          <li
                            className="page-item"
                            style={{ visibility: pageNumber > 1 ? '' : 'hidden' }}
                          >
                            <Link
                              onClick={(e) => e.preventDefault()} className="page-link"
                              to={`/?page=${pageNumber - 1}`}
                            >&lt;</Link>
                          </li>
                          {
                            new Array(numOfPages).fill(null).map((naught, index) =>
                              <li
                                className={`page-item ${index === pageIndex ? 'active' : ''}`}
                                key={index}
                              >
                                <Link className="page-link" to={`/?page=${index + 1}`}>
                                  {index + 1}
                                </Link>
                              </li>
                            )
                          }
                          <li
                            className="page-item"
                            style={{ visibility: pageNumber < numOfPages ? '' : 'hidden' }}
                          >
                            <Link className="page-link" to={`/?page=${pageNumber + 1}`}>&gt;</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )
              }
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBios bios={bios_o} />

              <RecentPostsAside posts={posts} />

              <SidebarCategories categories={categories} />

              <SidebarTags tags={tags} />

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
