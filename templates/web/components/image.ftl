<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.img
  $model=contentModel
  $field="image_s"
  src=contentModel.image_s
  alt=contentModel.alternativeText_s
  class="img-fluid"
/>