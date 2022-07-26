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

    <@crafter.renderRepeatGroup
      $model=taxonomy
      $field="items"
      $containerTag="ul"
      $containerAttributes={'class': '${contentModel.taxonomy_s}', 'clearfix': ''}
      $itemTag="li";
      item, index
    >
      <@crafter.a $model=taxonomy $field="items.value" $index=index href="${url}?id=${item.key}">
        ${item.value}
      </@crafter.a>
    </@crafter.renderRepeatGroup>
  </div>
</#if>