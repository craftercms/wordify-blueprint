<#import "/templates/system/common/cstudio-support.ftl" as studio />

<#assign model = postModel!contentModel />
<img
  <@studio.componentAttr component=model ice=true />
  src="${contentModel.image_s!""}"
  alt="${contentModel.alternativeText_s!""}"
  class="img-fluid"
/>
