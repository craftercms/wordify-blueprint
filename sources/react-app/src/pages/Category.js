import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import PopularPostsAside from '../shared/PopularPostsAside';
import PostCard, { LANDSCAPE } from '../shared/PostCard';

export default function (props) {
  const { posts } = props;
  return (
    <BaseLayout>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2 className="mb-4">Category: Food</h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row mb-5 mt-5">
                <div className="col-md-12">
                  {
                    posts?.map((post) =>
                      <li key={post.craftercms.id}>
                        <PostCard model={post} format={LANDSCAPE} />
                      </li>
                    )
                  }
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active"><a className="page-link" href="/">&lt;</a></li>
                      <li className="page-item"><a className="page-link" href="/">1</a></li>
                      <li className="page-item"><a className="page-link" href="/">2</a></li>
                      <li className="page-item"><a className="page-link" href="/">3</a></li>
                      <li className="page-item"><a className="page-link" href="/">4</a></li>
                      <li className="page-item"><a className="page-link" href="/">5</a></li>
                      <li className="page-item"><a className="page-link" href="/">&gt;</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"/>
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                  </div>
                </form>
              </div>
              
              <div className="sidebar-box">
                <div className="bio text-center">
                  <img src="/static-assets/images/person_2.jpg" alt="" className="img-fluid"/>
                    <div className="bio-body">
                      <h2>Craig David</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt
                        repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias
                        minus.</p>
                      <p><a href="/" className="btn btn-primary btn-sm rounded">Read my bio</a></p>
                      <p className="social">
                        <a href="/" className="p-2"><span className="fa fa-facebook"/></a>
                        <a href="/" className="p-2"><span className="fa fa-twitter"/></a>
                        <a href="/" className="p-2"><span className="fa fa-instagram"/></a>
                        <a href="/" className="p-2"><span className="fa fa-youtube-play"/></a>
                      </p>
                    </div>
                </div>
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
    </BaseLayout>
  );
}
