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

import React, { Suspense, useState } from 'react';
import BaseLayout from '../shared/BaseLayout';
import { FormattedMessage } from 'react-intl';
import SidebarSearch from '../shared/SidebarSearch';
import RecentPostsAside from '../shared/RecentPostsAside';
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import { useSearchQuery, useUrlSearchQueryFetchResource } from '../shared/hooks';
import CircularProgressSpinner from '../shared/CircularProgressSpinner';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import { useHistory } from 'react-router-dom';
import Paginate from '../shared/Paginate';
import SidebarBios from '../shared/SidebarBios';

function SearchResults({ resource, paginationData, onPageChange }) {
  const { hits, total } = resource.read();

  const totalResults = typeof total === 'object' ? total.value : total;
  const pageCount = Math.ceil(totalResults/paginationData.itemsPerPage);
  return (
    <>
      <p>{totalResults} result{totalResults === 0 || totalResults > 1 ? 's' : ''} found.</p>
      {
        hits.map((post) =>
          <PostCard key={post.craftercms.id} model={post} format={LANDSCAPE} />
        )
      }

      {
        pageCount > 1 &&
        <div className="col-md-12 text-center mt-5">
          <Paginate
            pageCount={pageCount}
            onPageChange={(index) => onPageChange(index * paginationData.itemsPerPage)}
          />
        </div>
      }
    </>
  );
}

function Search(props) {
  const {
    model,
    meta: {
      siteTitle,
      socialLinks
    }
  } = props;
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });
  let resource = useUrlSearchQueryFetchResource(paginationData.itemsPerPage);

  const history = useHistory();
  const [query] = useSearchQuery();

  const onPageChange = (page) => {
    setPaginationData({ ...paginationData, currentPage: page})
    history.push({
      pathname: '/search',
      search: `?q=${query}&p=${page}`
    });
  }

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section pt-5 py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4">
                <FormattedMessage
                  id="common.latestPostSectionTitle"
                  defaultMessage="Search Results"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                <Suspense fallback={<CircularProgressSpinner screenHeight={false} />}>
                  <SearchResults
                    resource={resource}
                    paginationData={paginationData}
                    onPageChange={onPageChange}
                  />
                </Suspense>
              </div>
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

export default Search;
