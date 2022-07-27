<#import "/templates/system/common/crafter.ftl" as crafter />

<#--
~ Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
~
~ This program is free software: you can redistribute it and/or modify
~ it under the terms of the GNU General Public License version 3 as published by
~ the Free Software Foundation.
~
~ This program is distributed in the hope that it will be useful,
~ but WITHOUT ANY WARRANTY; without even the implied warranty of
~ MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
~ GNU General Public License for more details.
~
~ You should have received a copy of the GNU General Public License
~ along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

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

      <section class="site-section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="mb-4">Search Results</h2>
            </div>
          </div>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
              <div class="row">
                <p>${pagination.totalResults} result<#if pagination.totalResults gt 1>s</#if> found</p>

                <#list searchResults as post>
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
                            </@crafter.span>&bullet;
                          <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span> &bullet;
                          <#if post.categories.item?is_sequence>
                            <#list post.categories.item as category>
                              <span class="mr-2">${category.value_smv}</span>
                            </#list>
                          <#else>
                            <span class="mr-2">${post.categories.item.value_smv}</span>
                          </#if>
                        </div>
                        <@crafter.h2 $model=postItem $field="headline_s">
                          ${post.headline}
                        </@crafter.h2>
                      </span>
                    </a>
                  </@crafter.div>
                </#list>
              </div>

              <#include "/templates/web/fragments/pagination.ftl" />
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