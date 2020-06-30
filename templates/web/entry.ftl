<#import "/templates/system/common/cstudio-support.ftl" as studio />

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
            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_5.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_6.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>

            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_7.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_8.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>

            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_9.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_10.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>

            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_11.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                 class="blog-entry element-animate" data-animate-effect="fadeIn">
                <img src="/static-assets/images/img_12.jpg" alt="Image placeholder">
                <div class="blog-content-body">
                  <div class="post-meta">
                    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib">
                      Colorlib</span>&bullet;
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h2>How to Find the Video Games of Your Youth</h2>
                </div>
              </a>
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
            <h3 class="heading">Popular Posts</h3>
            <div class="post-entry-sidebar">
              <ul>
                <li>
                  <a href="">
                    <img src="/static-assets/images/img_2.jpg" alt="Image placeholder" class="mr-4">
                    <div class="text">
                      <h4>How to Find the Video Games of Your Youth</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static-assets/images/img_4.jpg" alt="Image placeholder" class="mr-4">
                    <div class="text">
                      <h4>How to Find the Video Games of Your Youth</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/static-assets/images/img_12.jpg" alt="Image placeholder" class="mr-4">
                    <div class="text">
                      <h4>How to Find the Video Games of Your Youth</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
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
  <@studio.renderComponentCollection $field="footer_o" arguments={ 'socialLinks': contentModel.socialLinks_o }/>
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
</body>
</html>
