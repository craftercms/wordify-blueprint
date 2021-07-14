<#import "/templates/system/common/crafter.ftl" as crafter />

<@crafter.div $field="columns_o" class="row mb-5">
  <#if contentModel.columns_o?? && contentModel.columns_o.item??>
    <#list contentModel.columns_o.item as column>
      <#assign index = column?index>
      <@crafter.div $field="columns_o" class="col-md-${column.columnSize_s} mb-4" $index=index>
        <@crafter.renderComponentCollection $field="content_o" $model=column/>
      </@crafter.div>
    </#list>
  </#if>
</@crafter.div>
