<#import "/templates/system/common/cstudio-support.ftl" as studio />

<#--
~ Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
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
  </head>
  <body>
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
              <div class="row" id="searchResults"></div>

              <div class="col-md-12 text-center mt-5">
                <ul class="pagination">
                  <li class="page-item disabled"><a
                            class="page-link" tabindex="0" role="button" aria-disabled="true"
                    ><span>&lt;</span></a></li>
                  <li class="page-item active"><a
                            role="button" class="page-link" tabindex="0"
                            aria-label="Page 1 is your current page" aria-current="page"
                    >1</a></li>
                  <li class="page-item"><a
                            role="button" class="page-link" tabindex="0" aria-label="Page 2"
                    >2</a></li>
                  <li class="page-item"><a
                            class="page-link" tabindex="0" role="button" aria-disabled="false"
                    ><span>&gt;</span></a></li>
                </ul>
              </div>
            </div>
            <!-- END main-content -->

            <div class="col-md-12 col-lg-4 sidebar">
              <div class="sidebar-box search-form-wrap">
                <form action="#" class="search-form">
                  <div class="form-group">
                    <span class="icon fa fa-search"></span>
                    <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter">
                  </div>
                </form>
              </div>

                <#if contentModel.bios_o?? && contentModel.bios_o.item??>
                    <#list contentModel.bios_o.item as component>
                      <div class="sidebar-box">
                          <@renderComponent component=component />
                      </div>
                    </#list>
                </#if>

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

    <script id="search-results-template" type="text/x-handlebars-template">
      {{#each results}}
      <div class="post-entry-horizontal">
        <a href="{{url}}">
          <div class="image"  style="background-image: url('{{mainImage}}');"></div>
          <span class="text">
            <div class="post-meta">
              <span class="author mr-2">
                <img src="{{authorImage}}" alt="">
                {{authorName}}
              </span>• <span class="mr-2">{{lastModifiedDate}}</span>
            </div>
            <h2>{{headline}}</h2>
          </span>
        </a>
      </div>
      {{/each}}
    </script>

    <#include "/templates/web/fragments/bottom_include.ftl"/>
    <script src="/static-assets/js/handlebars.min.js"></script>
    <script src="/static-assets/js/search.js"></script>
  </body>
</html>
