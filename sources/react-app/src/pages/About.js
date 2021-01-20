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
import { WrappedContentType } from '../shared/ContentType';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import { FormattedMessage } from 'react-intl';
import RecentPostsAside from '../shared/RecentPostsAside';
import DropZone from '../shared/DropZone';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { usePosts } from '../shared/hooks';
import Paginate from '../shared/Paginate';

function About(props) {
  const {
    model,
    model: {
      headline_s,
      content_o
    },
    meta: {
      siteTitle,
      socialLinks
    }
  } = props;
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  const posts = usePosts(paginationData);

  const modelPath = model.craftercms.path;
  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">

              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-4">{headline_s}</h2>
                  <DropZone component="div" model={model} fieldId="content_o">
                    {
                      content_o?.map(component =>
                        <WrappedContentType
                          model={component}
                          parentModelId={modelPath}
                          key={component.craftercms.id}
                          wrapper={{
                            component: 'div',
                            className: 'mb-5'
                          }}
                        />
                      )
                    }
                  </DropZone>
                </div>
              </div>

              <div className="row mb-5 mt-5">
                <div className="col-md-12 mb-5">
                  <h2>
                    <FormattedMessage
                      id="common.latestPostSectionTitle"
                      defaultMessage="Latest Posts"
                    />
                  </h2>
                </div>
                <div className="col-md-12">
                  {
                    posts?.items.map((post) =>
                      <PostCard model={post} format={LANDSCAPE} key={post.craftercms.id} />
                    )
                  }
                </div>
              </div>

              {
                posts?.pageCount > 1 &&
                <nav aria-label="Posts navigation" className="text-center">
                  <Paginate
                    pageCount={posts.pageCount}
                    onPageChange={(index) => setPaginationData(
                      {
                        ...paginationData,
                        currentPage: index * paginationData.itemsPerPage
                      })
                    }
                  />
                </nav>
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

export default About;

