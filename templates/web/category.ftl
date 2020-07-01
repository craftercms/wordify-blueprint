<#import "/templates/system/common/cstudio-support.ftl" as studio />

<!doctype html>
<html lang="en">
  <head>
    <#include "/templates/web/fragments/head_include.ftl"/>
  </head>
  <body>
    <div class="wrap">
      <#include "/templates/web/fragments/header.ftl"/>

      <section class="site-section pt-5">
        <div class="container">
          <div class="row blog-entries">
            <#if categoryId??>
              <div class="col-md-12">
                <h2 class="mb-4">Category: ${currentCategory.value}</h2>
              </div>

              <div class="col-md-12 col-lg-8 main-content">
                <div class="row mb-5 mt-5">
                  <div class="col-md-12">
                    <#list categoryPosts as post>
                      <div class="post-entry-horizontal">
                        <a href="${post.url}">
                          <div class="image element-animate" data-animate-effect="fadeIn" style="background-image: url(${post.mainImage});"></div>
                          <span class="text">
                            <div class="post-meta">
                              <span class="author mr-2">
                                <img src="${post.authorBio.item.component.profilePic_s}" alt="${post.authorBio.item.component.name_s}">
                                ${post.authorBio.item.component.name_s}</span>&bullet;
                              <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span> &bullet;
                              <#list post.categories.item as category>
                                <span class="mr-2">${category.value_smv}</span>
                              </#list>
                            </div>
                            <h2>${post.headline}</h2>
                          </span>
                        </a>
                      </div>
                    </#list>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-md-12 text-center">
                    <nav aria-label="Page navigation" class="text-center">
                      <ul class="pagination">
                        <li class="page-item  active"><a class="page-link" href="#">&lt;</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                        <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            <#else>
              <div class="col-md-12">
                <h2 class="mb-4">Categories:</h2>
              </div>

              <div class="col-md-12 col-lg-8">
                <div class="row">
                  <#list categories as category>
                    <div class="col-md-6 mb-4">
                      <a class="blog-entry category-card" href="/category?id=${category.key}">
                        <img class="background" src="${category.image_s}" alt="Food">
                        <h2 class="title">${category.value}</h2>
                      </a>
                    </div>
                  </#list>
                </div>
              </div>
            </#if>

            <div class="col-md-12 col-lg-4 sidebar">
              <div class="sidebar-box search-form-wrap">
                <form action="#" class="search-form">
                  <div class="form-group">
                    <span class="icon fa fa-search"></span>
                    <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter">
                  </div>
                </form>
              </div>
              <!-- END sidebar-box -->
              <div class="sidebar-box">
                <div class="bio text-center">
                  <img src="/static-assets/images/person_2.jpg" alt="Image Placeholder" class="img-fluid">
                  <div class="bio-body">
                    <h2>Craig David</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                    <p><a href="#" class="btn btn-primary btn-sm rounded">Read my bio</a></p>
                    <p class="social">
                      <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
                      <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
                      <a href="#" class="p-2"><span class="fa fa-instagram"></span></a>
                      <a href="#" class="p-2"><span class="fa fa-youtube-play"></span></a>
                    </p>
                  </div>
                </div>
              </div>
              <!-- END sidebar-box -->
              <div class="sidebar-box">
                <#include "/templates/web/fragments/recent_posts_aside.ftl"/>
              </div>
              <!-- END sidebar-box -->

              <div class="sidebar-box">
                <@renderComponent component=contentModel.sidebarCategories_o.item />
              </div>
              <!-- END sidebar-box -->

              <div class="sidebar-box">
                <@renderComponent component=contentModel.sidebarTags_o.item />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <@renderComponent component=contentModel.footer_o.item additionalModel={ 'socialLinks': contentModel.socialLinks_o } />
      <!-- /Footer -->

    </div>

    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

    <#include "/templates/web/fragments/bottom_include.ftl"/>
  </body>
</html>
