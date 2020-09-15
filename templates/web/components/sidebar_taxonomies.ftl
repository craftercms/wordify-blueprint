<#import "/templates/system/common/ice.ftl" as studio />

<#if contentModel.taxonomy_s=="categories">
    <#assign taxonomy=categories/>
    <#assign url="/category"/>
<#else>
    <#assign taxonomy=tags/>
    <#assign url="/tag"/>
</#if>

<div>
  <@studio.h3 $model=contentModel $field="title_s" class="heading">
    ${contentModel.title_s}
  </@studio.h3>
  <@studio.ul $model=taxonomy class="${contentModel.taxonomy_s} clearfix">
    <#list taxonomy.items.item as item>
      <li><a href="${url}?id=${item.key}">${item.value}</a></li>
    </#list>
  </@studio.ul>
</div>