import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import Bio from '../components/Bio';
import ContentType from '../shared/ContentType';
import PopularPostsAside from '../shared/PopularPostsAside';
import PostCard, { IMAGE_BACKGROUND } from '../shared/PostCard';

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
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search" />
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>

              <div className="sidebar-box">
                {
                  model.authorBio_o?.map(bio =>
                    <div className="sidebar-box" key={bio.craftercms.id}>
                      <Bio model={bio} />
                    </div>
                  )
                }
              </div>

              <PopularPostsAside posts={posts} />

              <div className="sidebar-box">
                <h3 className="heading">Categories</h3>
                <ul className="categories">
                  <li><a href="/">Food <span>(12)</span></a></li>
                  <li><a href="/">Travel <span>(22)</span></a></li>
                  <li><a href="/">Lifestyle <span>(37)</span></a></li>
                  <li><a href="/">Business <span>(42)</span></a></li>
                  <li><a href="/">Adventure <span>(14)</span></a></li>
                </ul>
              </div>


              <div className="sidebar-box">
                <h3 className="heading">Tags</h3>
                <ul className="tags">
                  <li><a href="/">Travel</a></li>
                  <li><a href="/">Adventure</a></li>
                  <li><a href="/">Food</a></li>
                  <li><a href="/">Lifestyle</a></li>
                  <li><a href="/">Business</a></li>
                  <li><a href="/">Freelancing</a></li>
                  <li><a href="/">Travel</a></li>
                  <li><a href="/">Adventure</a></li>
                  <li><a href="/">Food</a></li>
                  <li><a href="/">Lifestyle</a></li>
                  <li><a href="/">Business</a></li>
                  <li><a href="/">Freelancing</a></li>
                </ul>
              </div>
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
