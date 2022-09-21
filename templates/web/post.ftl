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

    <#if postModel??>
        <#assign bio = siteItemService.getSiteItem(postModel.authorBio_o.item.key) />
      <section class="site-section py-lg">
        <div class="container">

          <div class="row blog-entries element-animate">
            <div class="col-md-12 col-lg-8 main-content">
              <@crafter.img
                $model=postModel
                $field="mainImage_s"
                src=postModel.mainImage_s
                alt=""
                class="img-fluid mb-5"
              />
              <div class="post-meta">
                <span class="author mr-2">
                  <img src="${bio.profilePic_s}" alt="${bio.name_s}" class="mr-2">
                    ${bio.name_s}
                </span>&bullet;
                <span class="mr-2">${postModel.createdDate_dt?date}</span> &bullet;
                <span class="ml-2">
                  <span class="fa fa-comments"></span
                </span>
              </div>
                <@crafter.h1 $model=postModel $field="headline_s" class="mb-4">
                  ${postModel.headline_s}
                </@crafter.h1>
                <#list postModel.categories_o.item as category>
                  <a class="category mb-5" href="/category?id=${category.key}">
                      ${category.value_smv}
                  </a>
                </#list>

              <div class="post-content-body">
                <@crafter.renderComponentCollection $field="content_o" $model=postModel/>
              </div>

              <#if postModel.categories_o.item?hasContent>
                <div class="pt-5">
                  <p>
                    Categories:
                    <#list postModel.categories_o.item as category>
                      <a href="/category?id=${category.key}">${category.value_smv}</a>
                    </#list>
                  </p>
                </div>
              </#if>

              <#if postModel.tags_o.item?hasContent>
                <div>
                  Tags:
                  <#list postModel.tags_o.item as tag>
                    <a href="/tag?id=${tag.key}">${tag.value_smv}<#if tag_has_next>,</#if></a>
                  </#list>
                </div>
              </#if>

              <div id="disqus_thread" class="mt-5"></div>
            </div>

            <!-- END main-content -->

            <div class="col-md-12 col-lg-4 sidebar">
              <div class="sidebar-box search-form-wrap">
                  <#include "/templates/web/fragments/sidebar_search.ftl" />
              </div>
              <!-- END sidebar-box -->

              <@crafter.renderComponentCollection $field="authorBio_o" $model=postModel />

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
            <!-- END sidebar -->

          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="mb-3 ">Related Posts</h2>
            </div>
          </div>
          <div class="row">
            <#list postsInfo.paginatedPosts as post>
              <#assign postItem = siteItemService.getSiteItem(post.localId) />
              <@crafter.div $model=postItem class="col-md-6 col-lg-4">
                <#assign url = postItem.storeUrl
                  ?replace("/site/components", "")
                  ?replace(".xml", "")
                />
                <a href="${url}" class="a-block sm d-flex align-items-center height-md" style="background-image: url('${post.mainImage}'); ">
                  <div class="text">
                    <div class="post-meta">
                      <#if post.categories.item?isSequence>
                        <#list post.categories.item as category>
                          <span class="category">${category.value_smv}</span>
                        </#list>
                      <#else>
                        <span class="category">${post.categories.item.value_smv}</span>
                      </#if>
                      <span class="mr-2">${post.lastModifiedDate?datetime.iso?date} </span>
                    </div>
                    <h3>${post.headline}</h3>
                  </div>
                </a>
              </@crafter.div>
            </#list>
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
                <#assign pagination = postsInfo.pagination/>
                <#include "/templates/web/fragments/pagination.ftl" />
            </div>
          </div>
        </div>

      </section>
      <!-- END section -->
    </#if>

  <!-- Footer -->
  <@renderComponent component=contentModel.footer_o.item additionalModel={ 'parentModel': contentModel } />
  <!-- /Footer -->
</div>

<!-- loader -->
<div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

<#include "/templates/web/fragments/bottom_include.ftl"/>

<#if (contentModel.websiteShortname_s?hasContent) >
  <script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    var disqus_config = function () {
      this.page.url = window.location.origin;
      this.page.identifier = '${contentModel.objectId}';
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://${contentModel.websiteShortname_s!"DISQUS"}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
  <script id="dsq-count-scr" src="//${contentModel.websiteShortname_s}.disqus.com/count.js" async></script>

  <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</#if>

<@crafter.body_bottom/>
</body>
</html>