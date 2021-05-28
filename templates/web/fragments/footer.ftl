<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.tag $tag="footer" $model=contentModel class="site-footer">
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-4">
        <@crafter.h3 $model=contentModel $field="aboutTitle_s">
          ${contentModel.aboutTitle_s}
        </@crafter.h3>
        <p class="mb-4">
          <@crafter.img
            $model=contentModel
            $field="aboutImage_s"
            src=contentModel.aboutImage_s
            alt=""
            class="img-fluid"
          />
        </p>

        <@crafter.p $model=contentModel $field="about_t">
          ${contentModel.about_t}
        </@crafter.p>
      </div>
      <div class="col-md-6 ml-auto">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-5">
              <@crafter.h3 $model=contentModel $field="quickLinksTitle_s">
                ${contentModel.quickLinksTitle_s!""}
              </@crafter.h3>

              <@crafter.tag $model=contentModel $field="quickLinks_o" class="list-unstyled">
                <#list contentModel.quickLinks_o.item as link>
                  <li>
                    <a href="${link.url_s}"> ${link.label_s} </a>
                  </li>
                </#list>
              </@crafter.tag>
            </div>

          </div>
          <div class="col-md-1"></div>

          <div class="col-md-5">
            <div class="mb-5">
              <@crafter.h3 $model=contentModel $field="socialLinksTitle_s">
                ${contentModel.socialLinksTitle_s!""}
              </@crafter.h3>

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
      <@crafter.tag $model=contentModel $field="copyright_html" class="col-md-12 text-center">
        ${contentModel.copyright_html!""}
      </@crafter.tag>
    </div>
  </div>
</@crafter.tag>