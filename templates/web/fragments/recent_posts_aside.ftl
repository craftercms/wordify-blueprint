<#import "/templates/system/common/crafter.ftl" as crafter />

<h3 class="heading">Latest Posts</h3>
<div class="post-entry-sidebar">
  <ul>
      <#list postsInfo.recentPosts as post>
        <#assign postItem = siteItemService.getSiteItem(post.localId) />
        <li>
          <#assign url = postItem.storeUrl
            ?replace("/site/components", "")
            ?replace(".xml", "")
          />

          <@crafter.a $model=postItem href="${url}">
            <@crafter.img
              $model=postItem
              $field="mainImage_s"
              src=postItem.mainImage_s
              alt=""
              class="mr-4"
            />

            <div class="text">
              <@crafter.h4 $model=postItem $field="headline_s">
                ${post.headline}
              </@crafter.h4>
              <div class="post-meta">
                <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span>
              </div>
            </div>
          </@crafter.a>
        </li>
      </#list>
  </ul>