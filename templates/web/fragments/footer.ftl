<#import "/templates/system/common/cstudio-support.ftl" as studio />

<footer class="site-footer" <@studio.componentAttr component=contentModel ice=true />>
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-4">
        <h3>${contentModel.aboutTitle_s}</h3>
        <p class="mb-4">
          <img src="${contentModel.aboutImage_s}" class="img-fluid">
        </p>

        <p>${contentModel.about_t}</p>
      </div>
      <div class="col-md-6 ml-auto">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-5">
              <h3>${contentModel.quickLinksTitle_s!""}</h3>
              <div class="list-unstyled">
                <#list contentModel.quickLinks_o.item as link>
                  <li>
                    <a href="${link.url_s}"> ${link.label_s} </a>
                  </li>
                </#list>
              </div>
            </div>

          </div>
          <div class="col-md-1"></div>

          <div class="col-md-5">
            <div class="mb-5">
              <h3>${contentModel.socialLinksTitle_s!""}</h3>

              <ul class="list-unstyled footer-social">
                <#list socialLinks.item as socialLink>
                  <li>
                    <a href="${socialLink.url_s}">
                      <span class="fa fa-${socialLink.socialNetwork_s}"></span>
                        ${socialLink.label_s}
                    </a>
                  </li>
                </#list>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        ${contentModel.copyright_html!""}
      </div>
    </div>
  </div>
</footer>
