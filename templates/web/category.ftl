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
            <#if itemId??>
              <div class="col-md-12">
                <h2 class="mb-4">
                  <#if requestURI == "/category">
                    Category:
                  <#else>
                    Tag:
                  </#if>
                  ${currentItem.value}
                </h2>
              </div>

              <div class="col-md-12 col-lg-8 main-content">
                <div class="row mb-5 mt-5">
                  <div class="col-md-12">
                    <#list postsInfo.paginatedPosts as post>
                      <#assign postItem = siteItemService.getSiteItem(post.localId) />
                      <div class="post-entry-horizontal" <@studio.componentAttr component=postItem ice=true />>
                        <#assign url = postItem.storeUrl
                          ?replace("/site/components", "")
                          ?replace(".xml", "")
                        />
                        <a href="${url}">
                          <div class="image element-animate" data-animate-effect="fadeIn" style="background-image: url(${post.mainImage});"></div>
                          <span class="text">
                            <div class="post-meta">
                              <span class="author mr-2">
                                <#assign bio = post.authorBio.item?is_sequence?then(post.authorBio.item[0].component, post.authorBio.item.component) />
                                <img src="${bio.profilePic_s}" alt=""/>
                                ${bio.name_s}
                              </span> &bullet;
                              <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span> &bullet;
                                <#if post.categories.item?is_sequence>
                                  <#list post.categories.item as category>
                                    <span class="category">${category.value_smv}</span>
                                  </#list>
                                <#else>
                                  <span class="category">${post.categories.item.value_smv}</span>
                                </#if>
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
                    <#assign pagination = postsInfo.pagination/>
                    <#include "/templates/web/fragments/pagination.ftl" />
                  </div>
                </div>
              </div>
            <#else>
              <div class="col-md-12">
                <h2 class="mb-4">
                  <#if requestURI == "/category">
                    Categories:
                  <#else>
                    Tags:
                  </#if>
                </h2>
              </div>

              <div class="col-md-12 col-lg-8">
                <div class="row" <@studio.componentAttr component=taxonomy ice=true />>
                  <#list taxonomy.items.item as item>
                    <div class="col-md-6 mb-4">
                      <a class="blog-entry category-card" href="<#if requestURI == '/category'>/category<#else>/tag</#if>?id=${item.key}">
                        <#if item.image_s??>
                          <img class="background" src="${item.image_s!''}" alt="${item.value}">
                        </#if>
                        <h2 class="title">${item.value}</h2>
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
    <@studio.toolSupport/>
  </body>
</html>
