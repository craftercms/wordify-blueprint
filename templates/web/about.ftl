<#import "/templates/system/common/crafter.ftl" as crafter />

<!doctype html>
<html lang="en">
<head>
  <#include "/templates/web/fragments/head_include.ftl"/>
  <@crafter.head/>
</head>
  <body>
    <@crafter.body_top/>

    <div class="wrap">
      <#include "/templates/web/fragments/header.ftl"/>

      <section class="site-section pt-5">
        <div class="container">

          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">

              <div class="row">
                <div class="col-md-12">
                  <@crafter.h2 $model=contentModel $field="headline_s" class="mb-4">
                    ${contentModel.headline_s}
                  </@crafter.h2>
                  <@crafter.renderComponentCollection $field="content_o"/>
                </div>
              </div>

              <div class="row mb-5 mt-5">
                <div class="col-md-12 mb-5">
                  <h2>My Latest Posts</h2>
                </div>
                <div class="col-md-12">
                    <#list postsInfo.paginatedPosts as post>
                      <#assign postItem = siteItemService.getSiteItem(post.localId) />
                      <@crafter.div $model=postItem class="post-entry-horizontal">
                        <#assign url = postItem.storeUrl
                          ?replace("/site/components", "")
                          ?replace(".xml", "")
                        />
                        <a href="${url}">
                          <@crafter.img
                            $model=postItem
                            $field="mainImage_s"
                            src="${postItem.mainImage_s}"
                            $attributes={
                            'class': 'image element-animate',
                            'data-animate-effect': 'fadeIn'
                            }
                          ></@crafter.img>
                          <span class="text">
                            <div class="post-meta">
                              <span class="author mr-2">
                                <@crafter.img
                                  $model=post.authorBio.item[0].component
                                  $field="profilePic_s"
                                  src="${post.authorBio.item[0].component.profilePic_s}"
                                  alt=""
                                ></@crafter.img>
                                <@crafter.span
                                  $model=post.authorBio.item[0].component
                                  $field="name_s"
                                >
                                  ${post.authorBio.item[0].component.name_s}
                                </@crafter.span>
                              </span>&bullet;
                              <span class="mr-2">${post.lastModifiedDate?datetime.iso?date} </span>
                            </div>
                            <@crafter.h2 $model=postItem $field="headline_s">
                              ${post.headline}
                            </@crafter.h2>
                          </span>
                        </a>
                      </@crafter.div>
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

              <@crafter.renderComponentCollection $field="bios_o" />

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
      <@renderComponent component=contentModel.footer_o.item additionalModel={ 'parentModel': contentModel } />
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
    <@crafter.body_bottom/>
  </body>
</html>
