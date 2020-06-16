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
import RecentPostsAside from '../shared/RecentPostsAside';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';
import { useCategories } from '../shared/hooks';
import CategoryCard from '../shared/CategoryCard';
import { fetchQuery } from '../relayEnvironment';
import { parseDescriptor } from '@craftercms/content';
import ReactPaginate from 'react-paginate';

export default function (props) {
  const {
    bios_o,
    match,
    meta: {
      siteTitle
    }

  } = props;
  const categories = useCategories();
  const categoryId = match.params.id;
  let category;
  const [posts, setPosts] = useState();
  const [totalPosts, setTotalPosts] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  if (categoryId) {
    category = categories?.items.item.filter(category => category.key === categoryId)[0];
  }

  useEffect(() => {
    if (category) {
      fetchQuery({
        text: `
          query Posts {
            page_post(limit: ${paginationData.itemsPerPage}, offset: ${(paginationData.currentPage * paginationData.itemsPerPage)}) {
              total
              items {
                guid: objectId
                path: localId
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
                    key(filter: {or: [${`{matches: "${category.key}"}`}]})
                    value_smv
                  }
                }
                tags_o {
                  item {
                    key
                    value_smv
                  }
                }
              }
            }
          }
        `
      }).then(({ data }) => {
        setTotalPosts(data.page_post.total);
        setPosts(parseDescriptor(data.page_post.items))
      });
    }
  }, [category, paginationData]);

  useEffect(() => {
    setPageCount(Math.ceil(totalPosts/paginationData.itemsPerPage))
  }, [totalPosts, setPageCount, paginationData.itemsPerPage])

  return (
    <BaseLayout siteTitle={siteTitle}>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            {
              categoryId
                ?
                <>
                  <div className="col-md-12">
                    <h2 className="mb-4">Category: {category?.value}</h2>
                  </div>
                  <div className="col-md-12 col-lg-8 main-content">
                    <div className="row mb-5 mt-5">
                      <div className="col-md-12">
                        {
                          posts?.map((post) =>
                            <PostCard key={post.craftercms.id} model={post} format={LANDSCAPE} />
                          )
                        }
                      </div>
                    </div>
                    {
                      pageCount > 1 &&
                      <div className="row mt-5">
                        <div className="col-md-12 text-center">
                          <nav aria-label="Categories navigation" className="text-center">
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
                              onPageChange={({ selected: index }) => setPaginationData({ ...paginationData, currentPage: index * paginationData.itemsPerPage})}
                              disableInitialCallback={true}
                              previousLabel={<span>&lt;</span>}
                              nextLabel={<span>&gt;</span>}
                            />
                          </nav>
                        </div>
                      </div>
                    }
                  </div>
                </>
                :
                <>
                  <div className="col-md-12">
                    <h2 className="mb-4">Categories:</h2>
                  </div>
                  <div className="col-md-12 col-lg-8">
                    <div className="row">
                      {
                        categories?.items.item.map(category =>
                          <div className="col-md-6 mb-4" key={category.key}>
                            <CategoryCard category={category} />
                          </div>
                        )
                      }
                    </div>
                  </div>
                </>
            }

            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />
              
              <SidebarBios bios={bios_o} />

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
