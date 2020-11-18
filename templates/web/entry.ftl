<#import "/templates/system/common/ice.ftl" as studio />

<!doctype html>
<html lang="en">
  <head>
    <#include "/templates/web/fragments/head_include.ftl"/>
  </head>
  <body>

    <div class="wrap">
      <#include "/templates/web/fragments/header.ftl"/>

      <section class="site-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <#if contentModel.slider_o?? && contentModel.slider_o.item??>
                <#list contentModel.slider_o.item as slider>
                  <@renderComponent component=slider />
                </#list>
              </#if>
            </div>
          </div>
        </div>
      </section>

      <section class="site-section py-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="mb-4">Latest Posts</h2>
            </div>
          </div>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
              <div class="row">
                <#list postsInfo.paginatedPosts as post>
                  <#assign postItem = siteItemService.getSiteItem(post.localId) />
                  <#assign url = postItem.storeUrl
                    ?replace("/site/components", "")
                    ?replace(".xml", "")
                  />
                  <@studio.tag $model=postItem class="col-md-6">
                    <a href="${url}"
                       class="blog-entry element-animate" data-animate-effect="fadeIn">
                      <div class="img-container">
                        <@studio.img
                          $model=postItem
                          $field="mainImage_s"
                          src=postItem.mainImage_s
                          alt=""
                        />
                      </div>
                      <div class="blog-content-body">
                        <div class="post-meta">
                          <span class="author mr-2"><img src="${post.authorBio.item[0].component.profilePic_s}" alt="Colorlib">
                              ${post.authorBio.item[0].component.name_s}</span>&bullet;
                          <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span>
                        </div>
                        <@studio.h2 $model=postItem $field="headline_s">
                          ${post.headline}
                        </@studio.h2>
                      </div>
                    </a>
                  </@studio.tag>
                </#list>
              </div>

              <div class="row mt-5">
                <div class="col-md-12 text-center">
                  <#assign pagination = postsInfo.pagination/>
                  <#include "/templates/web/fragments/pagination.ftl" />
                </div>
              </div>

            </div>

            <!-- END main-content -->

            <div class="col-md-12 col-lg-4 sidebar">
              <div class="sidebar-box search-form-wrap">
                <#include "/templates/web/fragments/sidebar_search.ftl" />
              </div>

              <@studio.tag $model=contentModel $field="bios_o">
                <#if contentModel.bios_o?? && contentModel.bios_o.item??>
                  <#list contentModel.bios_o.item as component>
                    <div class="sidebar-box">
                      <@renderComponent component=component />
                    </div>
                  </#list>
                </#if>
              </@studio.tag>

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
            <!-- END sidebar -->

          </div>
        </div>
      </section>

      <!-- Footer -->
      <@renderComponent component=contentModel.footer_o.item additionalModel={ 'socialLinks': contentModel.socialLinks_o } />
      <!-- /Footer -->

    </div>

    <!-- loader -->
    <div id="loader" class="show fullscreen">
      <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214" />
      </svg>
    </div>

    <#include "/templates/web/fragments/bottom_include.ftl"/>

    <@studio.initPageBuilder/>
  </body>
</html>