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
import PopularPostsAside from '../shared/PopularPostsAside';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
// import environment from '../relayEnvironment';
// import graphql from 'babel-plugin-relay/macro';
// import { parseDescriptor } from '@craftercms/content';
// import { createRenderProp } from '../shared/QueryRenderProp';

// export default () => (
//   <QueryRenderer
//     environment={environment}
//     query={graphql`
//
//     `}
//     render={createRenderProp((props) => {
//       const content = parseDescriptor(props.main.items[0]);
//       return <HomeComponent model={content}/>;
//     })}
//   />
// );

export default function (props) {
  const {
    model: {
      craftercms: {
        path
      },
      bios_o,
      slider_o
    },
    posts
  } = props;
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
              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active"><a className="page-link" href="/">&lt;</a></li>
                      <li className="page-item"><a className="page-link" href="/">1</a></li>
                      <li className="page-item"><a className="page-link" href="/">2</a></li>
                      <li className="page-item"><a className="page-link" href="/">3</a></li>
                      <li className="page-item"><a className="page-link" href="/">4</a></li>
                      <li className="page-item"><a className="page-link" href="/">5</a></li>
                      <li className="page-item"><a className="page-link" href="/">&gt;</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBios bios={bios_o} />

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
