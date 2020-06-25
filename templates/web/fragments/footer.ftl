<#import "/templates/web/macros.ftl" as studio>

<footer class="site-footer">
  <div class="container">
    <div class="row mb-5">
      <div class="col-md-4">
        <h3>${contentModel.aboutTitle_s}</h3>
        <p class="mb-4">
          <img src="${contentModel.aboutImage_s}" alt="Image placeholder" class="img-fluid">
        </p>

        <p>${contentModel.about_t}</p>
      </div>
      <div class="col-md-6 ml-auto">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-5">
              <h3>${contentModel.quickLinksTitle_s!""}</h3>
              <@studio.renderRepeatCollection
                $field="quickLinks_o"
                $containerAttributes={'class': 'list-unstyled'};
                <#-- Nested content values passed down by the macro: -->
                item, index
              >
                <@studio.a
                  href="${item.url_s}"
                  class=""
                  $field=""
                  $index=index
                >
                  ${item.label_s}
                </@studio.a>
              </@studio.renderRepeatCollection>
            </div>

          </div>
          <div class="col-md-1"></div>

          <div class="col-md-5">
            <div class="mb-5">
              <h3>${contentModel.socialLinksTitle_s!""}</h3>

              <ul class="list-unstyled footer-social">
                <#-- TODO: renderRepeatCollection gets field from model -->
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
