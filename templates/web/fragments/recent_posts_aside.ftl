<#import "/templates/system/common/ice.ftl" as studio />

<h3 class="heading">Recent Posts</h3>
<div class="post-entry-sidebar">
  <ul>
      <#list postsInfo.recentPosts as post>
        <#assign postItem = siteItemService.getSiteItem(post.localId) />
        <li>
          <@studio.a $model=postItem href="${post.url}">
            <@studio.img
              $model=postItem
              $field="mainImage_s"
              src=postItem.mainImage_s
              alt=""
              class="mr-4"
            />

            <div class="text">
              <@studio.h4 $model=postItem $field="headline_s">
                ${post.headline}
              </@studio.h4>
              <div class="post-meta">
                <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span>
              </div>
            </div>
          </@studio.a>
        </li>
      </#list>
  </ul>