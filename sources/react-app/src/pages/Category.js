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

import React, { useEffect, useState, Suspense } from 'react';
import BaseLayout from '../shared/BaseLayout';
import RecentPostsAside from '../shared/RecentPostsAside';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { usePencil, useTaxonomiesResource } from '../shared/hooks';
import CategoryCard from '../shared/CategoryCard';
import { fetchQuery } from '../relayEnvironment';
import { parseDescriptor } from '@craftercms/content';
import ReactPaginate from 'react-paginate';
import { createTaxonomyFilter } from '../shared/utils';
import { postsQuery } from '../shared/queries.graphql';
import CircularProgressSpinner from '../shared/CircularProgressSpinner';

function CategoryContent({ resource, isTag, categoryId }) {
  const { data } = resource.read();
  const taxonomies = parseDescriptor(data.taxonomy.items);
  const categories = taxonomies.filter(
    createTaxonomyFilter(isTag ? 'tags.xml' : 'categories.xml')
  )[0];

  let category;
  const ice = usePencil({ model: categories });
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
      fetchQuery(
        { text: postsQuery },
        {
          limit: paginationData.itemsPerPage,
          offset: (paginationData.currentPage * paginationData.itemsPerPage),
          categoriesFilter: [{ matches: category.key }]
        }
      ).then(({ data }) => {
        setTotalPosts(data.posts.total);
        setPosts(parseDescriptor(data.posts.items));
      });
    }
  }, [category, paginationData]);

  useEffect(() => {
    setPageCount(Math.ceil(totalPosts / paginationData.itemsPerPage));
  }, [totalPosts, setPageCount, paginationData.itemsPerPage]);

  return (
    <>
      {
        categoryId
        ?
        <>
          <div className="col-md-12">
            <h2 className="mb-4">{isTag ? 'Tag' : 'Category'}: {category?.value}</h2>
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
                      onPageChange={({ selected: index }) => setPaginationData({
                        ...paginationData,
                        currentPage: index * paginationData.itemsPerPage
                      })}
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
            <h2 className="mb-4">{isTag ? 'Tags' : 'Categories'}:</h2>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="row" {...ice}>
              {
                categories?.items.item.map(category =>
                  <div className="col-md-6 mb-4" key={category.key}>
                    <CategoryCard category={category} isTag={isTag} />
                  </div>
                )
              }
            </div>
          </div>
        </>
      }
    </>
  );
}

export default function (props) {
  const {
    bios_o,
    match,
    meta: {
      siteTitle,
      socialLinks
    }
  } = props;

  const isTag = match.path === '/tag/:id?';
  const categoryId = match.params.id;
  let resource = useTaxonomiesResource();

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            <Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
              <CategoryContent resource={resource} categoryId={categoryId} isTag={isTag} />
            </Suspense>
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
