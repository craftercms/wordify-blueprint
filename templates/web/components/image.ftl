<#import "/templates/system/common/ice.ftl" as studio />

<@studio.img
  $model=contentModel
  $field="image_s"
  src=contentModel.image_s
  alt=contentModel.alternativeText_s
  class="img-fluid"
/>