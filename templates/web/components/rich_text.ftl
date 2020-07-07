<#import "/templates/system/common/cstudio-support.ftl" as studio />

<div <@studio.componentAttr component=contentModel ice=true />>
    ${contentModel.content_html!""}
</div>
