<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.div class="sidebar-box">
  <div class="bio text-center">
    <@crafter.img
      $field="profilePic_s"
      src=contentModel.profilePic_s
      alt=""
      class="img-fluid"
    />
    <div class="bio-body">
      <@crafter.h2 $model=contentModel $field="name_s">
        ${contentModel.name_s}
      </@crafter.h2>
      <@crafter.p $model=contentModel $field="bio_t">
        ${contentModel.bio_t}
      </@crafter.p>
      <#if contentModel.showLinkButton_b>
      <p>
        <a href="contentModel.linkButtonUrl_s" class="btn btn-primary btn-sm rounded bio-link">
          <@crafter.span $field="linkButtonText_s">
            ${contentModel.linkButtonText_s}
          </@crafter.span>
        </a>
      </p>
      </#if>
      <p class="social">
        <#if contentModel.facebookLink_s?hasContent>
          <a href="${contentModel.facebookLink_s}" class="p-2"><span class="fa fa-facebook"></span></a>
        </#if>
        <#if contentModel.twitterLink_s?hasContent>
          <a href="${contentModel.twitterLink_s}" class="p-2"><span class="fa fa-twitter"></span></a>
        </#if>
        <#if contentModel.instagramLink_s?hasContent>
          <a href="${contentModel.instagramLink_s}" class="p-2"><span class="fa fa-instagram"></span></a>
        </#if>
        <#if contentModel.youTubeLink_s?hasContent>
          <a href="${contentModel.youTubeLink_s}" class="p-2"><span class="fa fa-youtube-play"></span></a>
        </#if>
      </p>
    </div>
  </div>
</@crafter.div>