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
import ContentType from '../shared/ContentType';
import PopularPostsAside from '../shared/PopularPostsAside';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarBios from '../shared/SidebarBios';
import DropZone from '../shared/DropZone';

export default function (props) {
  const { model, posts, categories, tags } = props;
  const modelPath = model.craftercms.path;
  return (
    <BaseLayout>
      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate-disabled">

            <div className="col-md-12 col-lg-8 main-content">
              <img src={model.mainImage_s} alt="" className="img-fluid mb-5" />
              <div className="post-meta">
                <span className="author mr-2">
                  <img src="/static-assets/images/person_1.jpg" alt="" className="mr-2" /> Colorlib
                </span>
                {' • '}<span className="mr-2">{model.createdDate_dt}</span>
                {' • '}<span className="ml-2"><span className="fa fa-comments" /> 3</span>
              </div>
              <h1 className="mb-4">{model.headline_s}</h1>
              {
                model.categories_o?.map(category =>
                  <a className="category mb-5" href="/" key={category.key}>{category.value_smv}</a>
                )
              }

              <DropZone
                model={model}
                component="div"
                fieldId="content_o"
                className="post-content-body"
              >
                {
                  model.content_o?.map(component =>
                    <ContentType
                      model={component}
                      key={component.craftercms.id}
                      parentModelId={modelPath}
                    />
                  )
                }
              </DropZone>

              <div className="pt-5">
                <div>
                  Categories:
                  {
                    model.categories_o?.map((category, i) =>
                      <a href="/" key={category.key}>{category.value_smv}{model.categories_o.length === i+1 ? '' : ','}</a>
                    )
                  }
                </div>
                <div>
                  Tags:
                  {
                    model.tags_o?.map((tag, i) =>
                      <a href="/" key={i}>#{tag.value_smv}{model.tags_o.length === i+1 ? '' : ','}</a>
                    )
                  }
                </div>
              </div>

              {/* TODO: Disquss Integration
              <Comments /> */}

            </div>

            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch/>

              <SidebarBios bios={model.authorBio_o}/>

              <PopularPostsAside posts={posts} />

              <SidebarCategories categories={categories} />

              <SidebarTags tags={tags} />

            </div>

          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-3 ">Related Post</h2>
            </div>
          </div>
          <div className="row">
            {
              posts?.map((post) =>
                <div key={post.craftercms.id} className="col-md-6 col-lg-4">
                  <PostCard model={post} format={IMAGE_BACKGROUND} classes={{ root: 'sm height-md' }} />
                </div>
              )
            }
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
