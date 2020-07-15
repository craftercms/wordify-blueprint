<#import "/templates/system/common/cstudio-support.ftl" as studio />

<img
        <@studio.componentAttr component=contentModel ice=true />
        src="${contentModel.image_s!""}"
        alt="${contentModel.alternativeText_s!""}"
        class="img-fluid"
/>