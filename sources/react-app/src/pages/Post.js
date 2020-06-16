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

import React, { useEffect, useState } from 'react';
import BaseLayout from '../shared/BaseLayout';
import ContentType from '../shared/ContentType';
import RecentPostsAside from '../shared/RecentPostsAside';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarBios from '../shared/SidebarBios';
import DropZone from '../shared/DropZone';
import { fetchQuery } from '../relayEnvironment';
import { parseDescriptor } from '@craftercms/content';
import ReactPaginate from 'react-paginate';

export default function (props) {
  const {
    model,
    posts,
    meta: {
      siteTitle
    }
  } = props;
  const modelPath = model.craftercms.path;
  const [related, setRelated] = useState();
  const categoriesKeys = model.categories_o?.map(category => `{matches: "${category.key}"}`);
  const tagsKeys = model.tags_o?.map(tag => `{matches: "${tag.key}"}`);
  const [totalRelatedPosts, setTotalRelatedPosts] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  useEffect(() => {
    fetchQuery({
      text: `
          query Posts {
            page_post(limit: ${paginationData.itemsPerPage}, offset: ${(paginationData.currentPage * paginationData.itemsPerPage)}) {
              total
              items {
                guid: objectId
                path: localId(filter: {not: [{equals: "${model.craftercms.path}"}]})
                contentTypeId: content__type
                dateCreated: createdDate_dt
                dateModified: lastModifiedDate_dt
                label: internal__name
                slug: localId(transform: "storeUrlToRenderUrl")
                pageTitle_s
                pageDescription_s
                blurb_t
                headline_s
                mainImage_s
                content_o {
                  item {
                    key
                    component {
                      ... on component_rich_text {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        content_html_raw
                      }
                      ... on component_image {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        alternativeText_s
                        image_s
                      }
                      ... on component_responsive_columns {
                        guid: objectId
                        path: localId
                        contentTypeId: content__type
                        dateCreated: createdDate_dt
                        dateModified: lastModifiedDate_dt
                        label: internal__name
                        columns_o {
                          item {
                            columnSize_s
                            content_o {
                              item {
                                key
                                component {
                                  ... on component_rich_text {
                                    guid: objectId
                                    path: localId
                                    contentTypeId: content__type
                                    dateCreated: createdDate_dt
                                    dateModified: lastModifiedDate_dt
                                    label: internal__name
                                    content_html_raw
                                  }
                                  ... on component_image {
                                    guid: objectId
                                    path: localId
                                    contentTypeId: content__type
                                    dateCreated: createdDate_dt
                                    dateModified: lastModifiedDate_dt
                                    label: internal__name
                                    alternativeText_s
                                    image_s
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                authorBio_o {
                  item {
                    key
                    component {
                      guid: objectId
                      contentTypeId: content__type
                      label: internal__name
                      path: localId
                      bio_t
                      name_s
                      profilePic_s
                      linkButtonText_s
                      linkButtonUrl_s
                      showLinkButton_b
                      facebookLink_s
                      twitterLink_s
                      instagramLink_s
                      youTubeLink_s
                    }
                  }
                }
                categories_o {
                  item {
                    key(filter: {or: [${categoriesKeys.join(',')}]})
                    value_smv
                  }
                }
                tags_o {
                  item {
                    key(filter: {or: [${tagsKeys.join(',')}]})
                    value_smv
                  }
                }
              }
            }
          }
        `
    }).then(({ data }) => {
      setTotalRelatedPosts(data.page_post.total);
      setRelated(parseDescriptor(data.page_post.items))
    });
  }, [model, categoriesKeys, tagsKeys, paginationData]);

  useEffect(() => {
    setPageCount(Math.ceil(totalRelatedPosts/paginationData.itemsPerPage))
  }, [totalRelatedPosts, setPageCount, paginationData.itemsPerPage])

  return (
    <BaseLayout siteTitle={siteTitle}>
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

              <RecentPostsAside posts={posts} />

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
                  <h2 className="mb-3 ">Related Posts</h2>
                </div>
              </div>
              <div className="row">
                {
                  related?.map((post) =>
                    <div key={post.craftercms.id} className="col-md-6 col-lg-4">
                      <PostCard model={post} format={IMAGE_BACKGROUND} classes={{ root: 'sm height-md' }} />
                    </div>
                  )
                }
              </div>
              {
                pageCount > 1 &&
                <nav aria-label="Posts navigation" className="text-center">
                  <ReactPaginate
                    containerClassName="pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={3}
                    activeClassName="active"
                    initialPage={0}
                    pageCount={pageCount}
                    onPageChange={({ selected: index }) => setPaginationData({
                      ...paginationData,
                      currentPage: index * paginationData.itemsPerPage
                    })}
                    disableInitialCallback={true}
                    previousLabel={<span>&lt;</span>}
                    nextLabel={<span>&gt;</span>}
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
