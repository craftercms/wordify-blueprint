import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import Bio from '../components/Bio';
import ContentType from '../shared/ContentType';
import PostCard, { LANDSCAPE, LANDSCAPE_COMPRESSED } from '../shared/PostCard';
import { FormattedMessage } from 'react-intl';
import PopularPostsAside from '../shared/PopularPostsAside';

export default function (props) {
  const {
    model,
    posts,
    model: {
      headline_s,
      // pageTitle_s,
      // pageDescription_s,
      bios_o,
      content_o
    }
  } = props;
  const modelPath = model.craftercms.path;
  return (
    <BaseLayout>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">

              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-4">{headline_s}</h2>
                  {
                    content_o?.map(component =>
                      <div className="mb-5" key={component.craftercms.id}>
                        <ContentType
                          model={component}
                          parentModelId={modelPath}
                        />
                      </div>
                    )
                  }
                </div>
              </div>

              <div className="row mb-5 mt-5">
                <div className="col-md-12 mb-5">
                  <h2>
                    <FormattedMessage
                      id="common.latestPostSectionTitle"
                      defaultMessage="Latest Posts"
                    />
                  </h2>
                </div>
                <div className="col-md-12">
                  {
                    posts?.map((post) =>
                      <PostCard model={post} format={LANDSCAPE} key={post.craftercms.id} />
                    )
                  }
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item active"><a className="page-link" href="/">&lt;</a></li>
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
                    <span className="icon fa fa-search" />
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>

              {
                bios_o?.map(bio =>
                  <div className="sidebar-box" key={bio.craftercms.id}>
                    <Bio model={bio} />
                  </div>
                )
              }

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

