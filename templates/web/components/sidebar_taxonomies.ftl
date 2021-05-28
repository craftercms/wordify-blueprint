<#import "/templates/system/common/crafter.ftl" as crafter />

<#if contentModel.taxonomy_s=="categories">
    <#assign taxonomy=categories/>
    <#assign url="/category"/>
<#else>
    <#assign taxonomy=tags/>
    <#assign url="/tag"/>
</#if>

<#if taxonomy.items.item?has_content>
  <div>
    <@crafter.h3 $model=contentModel $field="title_s" class="heading">
      ${contentModel.title_s}
    </@crafter.h3>
    <@crafter.ul $model=taxonomy class="${contentModel.taxonomy_s} clearfix">
      <#list taxonomy.items.item as item>
        <li><a href="${url}?id=${item.key}">${item.value}</a></li>
      </#list>
    </@crafter.ul>
  </div>
</#if>