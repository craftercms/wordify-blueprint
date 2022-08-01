<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.footer $model=contentModel class="site-footer">
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

              <@crafter.renderRepeatGroup
                $field="quickLinks_o"
                $containerTag="ul"
                $containerAttributes={'class': 'list-unstyled'}
                $itemTag="li";
                link, index
              >
                <@crafter.a $field="quickLinks_o.label_s" $index=index href="${link.url_s}">
                  ${link.label_s}
                </@crafter.a>
              </@crafter.renderRepeatGroup>
            </div>

          </div>
          <div class="col-md-1"></div>

          <div class="col-md-5">
            <div class="mb-5">
              <@crafter.h3 $model=contentModel $field="socialLinksTitle_s">
                ${contentModel.socialLinksTitle_s!""}
              </@crafter.h3>

              <#assign levelDescriptor = siteItemService.getSiteItem(parentModel['/*/socialLinks_o/@crafter-source']) />

              <@crafter.renderRepeatGroup
                $model=levelDescriptor
                $field="socialLinks_o"
                $containerTag="ul"
                $containerAttributes={'class': 'list-unstyled footer-social'}
                $itemTag="li";
                socialLink, index
              >
                <a href="${socialLink.url_s}">
                  <span class="fa fa-${socialLink.socialNetwork_s}"></span>
                  <@crafter.span $model=levelDescriptor $field="socialLinks_o.label_s" $index=index>${socialLink.label_s}</@crafter.span>
                </a>
              </@crafter.renderRepeatGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <@crafter.div $model=contentModel $field="copyright_html" class="col-md-12 text-center">
        ${contentModel.copyright_html!""}
      </@crafter.div>
    </div>
  </div>
</@crafter.footer>