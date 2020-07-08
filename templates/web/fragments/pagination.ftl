<#if pagination.pages gt 1>
  <nav aria-label="Page navigation" class="text-center">
    <ul class="pagination">
      <li class="page-item <#if pagination.currentPage == 1>disabled</#if>">
        <a class="page-link" href="javascript:appendParam('page', '${pagination.currentPage - 1}')">&lt;</a>
      </li>
        <#list 1..pagination.pages as i>
          <li class="page-item <#if pagination.currentPage == i>active</#if>">
            <a class="page-link" href="javascript:appendParam('page', '${i}');">${i}</a>
          </li>
        </#list>
      <li class="page-item <#if pagination.currentPage == pagination.pages>disabled</#if>">
        <a class="page-link" href="javascript:appendParam('page', '${pagination.currentPage + 1}')">&gt;</a>
      </li>
    </ul>
  </nav>
</#if>