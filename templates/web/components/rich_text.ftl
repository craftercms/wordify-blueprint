<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.div $model=contentModel $field="content_html">
  ${contentModel.content_html!""}
</@crafter.div>