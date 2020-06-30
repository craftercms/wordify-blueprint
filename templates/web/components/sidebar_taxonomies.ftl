<#if contentModel.taxonomy_s=="categories">
  <#assign taxonomy=categories/>
  <#assign url="/category"/>
<#else>
  <#assign taxonomy=tags/>
  <#assign url="/tag"/>
</#if>

<h3 class="heading">${contentModel.title_s}</h3>
<ul class="${contentModel.taxonomy_s}">
    <#list taxonomy as item>
      <li><a href="${url}/${item.key}">${item.value}</a></li>
    </#list>
</ul>