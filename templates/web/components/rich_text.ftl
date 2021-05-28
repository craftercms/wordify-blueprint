<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.tag $model=contentModel $field="content_html">
  ${contentModel.content_html!""}
</@crafter.tag>