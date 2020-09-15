<#import "/templates/system/common/ice.ftl" as studio />

<@studio.tag $model=contentModel class="bio text-center">
  <img src="${contentModel.profilePic_s}" alt="" class="img-fluid">
  <div class="bio-body">
    <@studio.h2 $model=contentModel $field="name_s">
      ${contentModel.name_s}
    </@studio.h2>
    <@studio.p $model=contentModel $field="bio_t">
      ${contentModel.bio_t}
    </@studio.p>
    <#if contentModel.showLinkButton_b>
    <p><a href="contentModel.linkButtonUrl_s" class="btn btn-primary btn-sm rounded">${contentModel.linkButtonText_s}</a></p>
    </#if>
    <p class="social">
      <a href="#" class="p-2"><span class="fa fa-facebook"></span></a>
      <a href="#" class="p-2"><span class="fa fa-twitter"></span></a>
      <a href="#" class="p-2"><span class="fa fa-instagram"></span></a>
      <a href="#" class="p-2"><span class="fa fa-youtube-play"></span></a>
    </p>
  </div>
</@studio.tag>