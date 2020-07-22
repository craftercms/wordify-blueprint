<#import "/templates/system/common/ice.ftl" as studio />

<@studio.tag $model=contentModel $field="content_html">
  ${contentModel.content_html!""}
</@studio.tag>