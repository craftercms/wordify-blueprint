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
import { SidebarCategories, SidebarTags } from '../shared/SidebarTaxonomies';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarBios from '../shared/SidebarBios';
import DropZone from '../shared/DropZone';
import { fetchQuery } from '../relayEnvironment';
import { parseDescriptor } from '@craftercms/content';
import Comments, { CommentsCount } from '../shared/Comments';
import { postsQuery } from '../shared/queries.graphql';
import { useIntl } from 'react-intl';
import Paginate from '../shared/Paginate';

export default function (props) {
  const {
    model,
    posts,
    meta: {
      siteTitle,
      socialLinks,
      disqus: {
        websiteShortname
      }
    }
  } = props;
  const { formatDate } = useIntl();
  const modelPath = model.craftercms.path;
  const [related, setRelated] = useState();
  const [totalRelatedPosts, setTotalRelatedPosts] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [paginationData, setPaginationData] = useState({
    itemsPerPage: 10,
    currentPage: 0
  });

  useEffect(() => {
    const categoriesFilter = model.categories_o?.map(category => {
      return { matches: category.key }
    });
    const tagsFilter = model.tags_o?.map(tag => {
      return { matches: tag.key }
    });

    fetchQuery(
      { text: postsQuery },
      {
        limit: paginationData.itemsPerPage,
        offset: (paginationData.currentPage * paginationData.itemsPerPage),
        exclude: model.craftercms.path,
        categoriesFilter,
        tagsFilter
      }
    ).then(({ data }) => {
      setTotalRelatedPosts(data.posts.total);
      setRelated(parseDescriptor(data.posts.items));
    });
  }, [model, paginationData]);

  useEffect(() => {
    setPageCount(Math.ceil(totalRelatedPosts/paginationData.itemsPerPage))
  }, [totalRelatedPosts, setPageCount, paginationData.itemsPerPage]);

  return (
    <BaseLayout siteTitle={siteTitle} socialLinks={socialLinks}>
      <section className="site-section py-lg">
        <div className="container">
          <div className="row blog-entries element-animate-disabled">

            <div className="col-md-12 col-lg-8 main-content">
              <img src={model.mainImage_s} alt="" className="img-fluid mb-5" />
              <div className="post-meta">
                <span className="author mr-2">
                  <img src={model.authorBio_o[0].profilePic_s} alt="" className="mr-2" /> {model.authorBio_o[0].name_s}
                </span>
                {' • '}<span className="mr-2">{formatDate(model.craftercms.dateCreated)}</span>
                {' • '}<span className="ml-2">
                <span className="fa fa-comments mr-2"/></span>

                <CommentsCount id={model.craftercms.id} websiteShortname={websiteShortname} />
              </div>
              <h1 className="mb-4">{model.headline_s}</h1>
              {
                model.categories_o?.map(category =>
                  <a className="category mb-5" href={`/category/${category.key}`} key={category.key}>{category.value_smv}</a>
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
                      <a href={`/category/${category.key}`} key={category.key}>{category.value_smv}{model.categories_o.length === i+1 ? '' : ','}</a>
                    )
                  }
                </div>
                <div>
                  Tags:
                  {
                    model.tags_o?.map((tag, i) =>
                      <a href={`/tag/${tag.key}`} key={tag.key}>#{tag.value_smv}{model.tags_o.length === i+1 ? '' : ','}</a>
                    )
                  }
                </div>
              </div>

              <Comments id={model.craftercms.id} websiteShortname={websiteShortname}/>

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
                  <Paginate
                    pageCount={pageCount}
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
