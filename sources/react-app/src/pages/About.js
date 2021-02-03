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
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import { FormattedMessage } from 'react-intl';
import RecentPostsAside from '../shared/RecentPostsAside';
import { SidebarBiosWithICE } from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import { ContentType, Field, RenderField } from '@craftercms/studio-guest';
import contentTypeMap from '../shared/contentTypeMap';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import Paginate from '../shared/Paginate';
import { usePosts } from '../shared/hooks';

function About(props) {
  const {
    model,
    meta: {
      levelDescriptor
    }
  } = props;
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });
  const posts = usePosts(paginationData);
  return (
    <BaseLayout model={levelDescriptor}>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">

              <div className="row">
                <div className="col-md-12">
                  <RenderField component="h2" model={model} fieldId="headline_s" className="mb-4" />
                  {/* Using render field here allows react to pick up updates but there are open
                      issues when deleting and sometimes inserting. */}
                  <RenderField
                    model={model}
                    fieldId="content_o"
                    format={(content_o) => content_o?.map((component, index) =>
                      /* Note: Please use index in conjunction with the model id */
                      <Field
                        key={`${component.craftercms.id}_${index}`}
                        className="mb-5"
                        model={model}
                        fieldId="content_o"
                        index={index}
                      >
                        <ContentType
                          model={component}
                          contentTypeMap={contentTypeMap}
                        />
                      </Field>
                    )}
                  />
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

              <SidebarBiosWithICE model={model} fieldId="bios_o" />

              <RecentPostsAside />

              <SidebarCategories/>

              <SidebarTags/>

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default About;