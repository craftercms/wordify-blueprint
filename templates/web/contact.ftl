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

      <section class="site-section">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-6">
              <@crafter.h1 $model=contentModel $field="headline_s">
                ${contentModel.headline_s!""}
              </@crafter.h1>

              <@crafter.p $model=contentModel $field="message_t">
                ${contentModel.message_t!""}
              </@crafter.p>
            </div>
          </div>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">

              <form action="#" id="contactForm" method="post">
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control ">
                  </div>
                  <div class="col-md-12 form-group">
                    <label for="phone">Phone</label>
                    <input type="number" name="phone" class="form-control ">
                  </div>
                  <div class="col-md-12 form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" class="form-control ">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label for="message">Write Message</label>
                    <textarea name="message" name="message" class="form-control " cols="30" rows="8"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="submit" value="Send Message" class="btn btn-primary">
                  </div>
                </div>
              </form>


            </div>

            <!-- END main-content -->

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
            <!-- END sidebar -->

          </div>
        </div>
      </section>

      <!-- Footer -->
      <@renderComponent component=contentModel.footer_o.item additionalModel={ 'parentModel': contentModel } />
      <!-- /Footer -->
    </div>
    <!-- loader -->
    <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#f4b214"/></svg></div>

    <#include "/templates/web/fragments/bottom_include.ftl"/>

    <@crafter.body_bottom/>
  </body>
</html>