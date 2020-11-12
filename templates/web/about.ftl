<#import "/templates/system/common/ice.ftl" as studio />

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
            <div class="col-md-12 col-lg-8 main-content">

              <div class="row">
                <div class="col-md-12">
                  <@studio.h2 $model=contentModel $field="headline_s" class="mb-4">
                    ${contentModel.headline_s}
                  </@studio.h2>
                  <#if contentModel.content_o?? && contentModel.content_o.item??>
                    <#list contentModel.content_o.item as component>
                      <div class="mb-5">
                          <@renderComponent component=component />
                      </div>
                    </#list>
                  </#if>
                </div>
              </div>

              <div class="row mb-5 mt-5">
                <div class="col-md-12 mb-5">
                  <h2>My Latest Posts</h2>
                </div>
                <div class="col-md-12">
                    <#list postsInfo.paginatedPosts as post>
                      <#assign postItem = siteItemService.getSiteItem(post.localId) />
                      <@studio.tag $model=postItem class="post-entry-horizontal">
                        <#assign url = postItem.storeUrl
                          ?replace("/site/components", "")
                          ?replace(".xml", "")
                        />
                        <a href="${url}">
                          <div class="image" style="background-image: url(${post.mainImage});"></div>
                          <span class="text">
                            <div class="post-meta">
                              <span class="author mr-2"><img src="${post.authorBio.item[0].component.profilePic_s}" alt="Colorlib">
                                  ${post.authorBio.item[0].component.name_s}
                              </span>&bullet;
                              <span class="mr-2">${post.lastModifiedDate?datetime.iso?date} </span>
                            </div>
                            <@studio.h2 $model=postItem $field="headline_s">
                              ${post.headline}
                            </@studio.h2>
                          </span>
                        </a>
                      </@studio.tag>
                    </#list>
                </div>
              </div>

              <div class="row">
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
