<#import "/templates/system/common/cstudio-support.ftl" as studio />

<#if contentModel.taxonomy_s=="categories">
  <#assign taxonomy=categories/>
  <#assign url="/category"/>
<#else>
  <#assign taxonomy=tags/>
  <#assign url="/tag"/>
</#if>

<div>
  <h3 class="heading">${contentModel.title_s}</h3>
  <ul class="${contentModel.taxonomy_s}" <@studio.iceAttr component=taxonomy />>
      <#list taxonomy.items.item as item>
        <li><a href="${url}?id=${item.key}">${item.value}</a></li>
      </#list>
  </ul>
</div>