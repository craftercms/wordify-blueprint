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
import RecentPostsAside from '../shared/RecentPostsAside';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import SidebarSearch from '../shared/SidebarSearch';
import { SidebarBiosWithICE } from '../shared/SidebarBios';
import { ContentType, Field, RenderField } from '@craftercms/studio-guest';
import contentTypeMap from '../shared/contentTypeMap';
import { useIntl } from 'react-intl';
import Comments, { CommentsCount } from '../shared/Comments';
import Paginate from '../shared/Paginate';
import { usePosts } from '../shared/hooks';

function Post(props) {
  const {
    model,
    meta: {
      levelDescriptor,
      disqus: {
        websiteShortname
      }
    }
  } = props;
  const { formatDate } = useIntl();
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  const related = usePosts(paginationData, model.categories_o, model.tags_o, model.craftercms.path);

  return (
    <BaseLayout model={levelDescriptor}>
      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate-disabled">

            <div className="col-md-12 col-lg-8 main-content">
              <RenderField
                component="img"
                model={model}
                fieldId="mainImage_s"
                renderTarget="src"
                alt=""
                className="img-fluid mb-5"
              />
              <div className="post-meta">
                <span className="author mr-2">
                  <img src={model.authorBio_o[0].profilePic_s} alt="" className="mr-2" /> {model.authorBio_o[0].name_s}
                </span>
                {' • '}<span className="mr-2">{formatDate(model.craftercms.dateCreated)}</span>
                {' • '}<span className="ml-2">
                <span className="fa fa-comments mr-2"/></span>

                <CommentsCount id={model.craftercms.id} websiteShortname={websiteShortname} />
              </div>
              <RenderField
                component="h1"
                model={model}
                fieldId="headline_s"
                className="mb-4"
              />
              {
                model.categories_o?.map(category =>
                  <a className="category mb-5" href={`/category/${category.key}`} key={category.key}>{category.value_smv}</a>
                )
              }

              <RenderField
                model={model}
                component="div"
                fieldId="content_o"
                className="post-content-body"
                format={(content_o) => content_o?.map((component, index) =>
                  <Field
                    key={`${component.craftercms.id}_${index}`}
                    model={model}
                    index={index}
                    fieldId="content_o"
                  >
                    <ContentType
                      model={component}
                      contentTypeMap={contentTypeMap}
                    />
                  </Field>
                )}
              />

              <div className="pt-5">
                {
                  model.categories_o?.length > 0 &&
                  <div>
                    Categories:
                    {
                      model.categories_o?.map((category, i) =>
                        <a href={`/category/${category.key}`} key={category.key}>{category.value_smv}{model.categories_o.length === i+1 ? '' : ','}</a>
                      )
                    }
                  </div>
                }
                {
                  model.tags_o?.length > 0 &&
                  <div>
                    Tags:
                    {
                      model.tags_o?.map((tag, i) =>
                        <a
                          href={`/tag/${tag.key}`} key={tag.key}
                        >#{tag.value_smv}{model.tags_o.length === i + 1 ? '' : ','}</a>
                      )
                    }
                  </div>
                }
              </div>

              {
                websiteShortname &&
                <Comments id={model.craftercms.id} websiteShortname={websiteShortname}/>
              }

            </div>

            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBiosWithICE model={model} fieldId="authorBio_o" />

              <RecentPostsAside />

              <SidebarCategories />

              <SidebarTags />

            </div>

          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          {
            related &&
            <>
              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-3">Related Posts</h2>
                </div>
              </div>
              <div className="row">
                {
                  related?.items.map((post) =>
                    <div key={post.craftercms.id} className="col-md-6 col-lg-4">
                      <PostCard model={post} format={IMAGE_BACKGROUND} classes={{ root: 'sm height-md' }} />
                    </div>
                  )
                }
              </div>
              {
                related?.pageCount > 1 &&
                <nav aria-label="Posts navigation" className="text-center">
                  <Paginate
                    pageCount={related.pageCount}
                    onPageChange={(index) => setPaginationData(
                      {
                        ...paginationData,
                        currentPage: index * paginationData.itemsPerPage
                      })
                    }
                  />
                </nav>
              }
            </>
          }
        </div>
      </section>
    </BaseLayout>
  );
}

export default Post;
