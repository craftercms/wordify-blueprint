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
                    <div class="col-md-12" id="postsList"></div>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-md-12 text-center">
                    <nav aria-label="Page navigation" class="text-center">
                      <div id="postsPagination"></div>
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
                <#include "/templates/web/fragments/sidebar_search.ftl" />
              </div>
              <!-- END sidebar-box -->
              <#if contentModel.bios_o?? && contentModel.bios_o.item??>
                <#list contentModel.bios_o.item as component>
                  <div class="sidebar-box">
                      <@renderComponent component=component />
                  </div>
                </#list>
              </#if>
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

    <script id="post-results-template" type="text/x-handlebars-template">
      {{#each results}}
      <div class="post-entry-horizontal">
        <a href="{{url}}">
          <div class="image" style="background-image: url({{mainImage}});"></div>
          <span class="text">
            <div class="post-meta">
              <span class="author mr-2"><img src="{{authorImage}}" alt="{{authorName}}">
                {{authorName}}
              </span>&bullet;
              <span class="mr-2">{{lastModifiedDate}}</span> &bullet;
            </div>
            <h2>{{headline}}</h2>
          </span>
        </a>
      </div>
      {{/each}}
    </script>

    <#include "/templates/web/fragments/bottom_include.ftl"/>
  </body>
</html>
