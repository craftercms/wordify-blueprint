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

export default function (props) {
  const { model, posts } = props;
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
              <a className="category mb-5" href="/">Food</a> <a className="category mb-5" href="/">Travel</a>

              <div className="post-content-body">
                {
                  model.content_o?.map(component =>
                    <ContentType
                      model={component}
                      parentModelId={model.craftercms.path}
                      key={component.craftercms.id}
                    />
                  )
                }
              </div>


              <div className="pt-5">
                <p>Categories: <a href="/">Food</a>, <a href="/">Travel</a> Tags: <a href="/">#manila</a>, <a
                  href="/">#asia</a></p>
              </div>


              <div className="pt-5">
                <h3 className="mb-5">6 Comments</h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard">
                      <img src="/static-assets/images/person_1.jpg" alt="" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                        necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure!
                        Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="/" className="reply rounded">Reply</a></p>
                    </div>
                  </li>

                  <li className="comment">
                    <div className="vcard">
                      <img src="/static-assets/images/person_1.jpg" alt="" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                        necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure!
                        Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="/" className="reply rounded">Reply</a></p>
                    </div>

                    <ul className="children">
                      <li className="comment">
                        <div className="vcard">
                          <img src="/static-assets/images/person_1.jpg" alt="" />
                        </div>
                        <div className="comment-body">
                          <h3>Jean Doe</h3>
                          <div className="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                            necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste
                            iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="/" className="reply rounded">Reply</a></p>
                        </div>


                        <ul className="children">
                          <li className="comment">
                            <div className="vcard">
                              <img src="/static-assets/images/person_1.jpg" alt="" />
                            </div>
                            <div className="comment-body">
                              <h3>Jean Doe</h3>
                              <div className="meta">January 9, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste
                                iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="/" className="reply rounded">Reply</a></p>
                            </div>

                            <ul className="children">
                              <li className="comment">
                                <div className="vcard">
                                  <img src="/static-assets/images/person_1.jpg" alt="" />
                                </div>
                                <div className="comment-body">
                                  <h3>Jean Doe</h3>
                                  <div className="meta">January 9, 2018 at 2:21pm</div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                                    necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente
                                    iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                  <p><a href="/" className="reply rounded">Reply</a></p>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="comment">
                    <div className="vcard">
                      <img src="/static-assets/images/person_1.jpg" alt="" />
                    </div>
                    <div className="comment-body">
                      <h3>Jean Doe</h3>
                      <div className="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
                        necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure!
                        Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="/" className="reply rounded">Reply</a></p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5">Leave a comment</h3>
                  <form action="#" className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Post Comment" className="btn btn-primary" />
                    </div>

                  </form>
                </div>
              </div>

            </div>

            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch/>

              <SidebarBios bios={model.authorBio_o}/>

              <PopularPostsAside posts={posts} />

              <SidebarCategories/>

              <SidebarTags/>

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
