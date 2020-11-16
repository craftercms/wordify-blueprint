<#import "/templates/system/common/cstudio-support.ftl" as studio />

<h3 class="heading">Latest Posts</h3>
<div class="post-entry-sidebar">
  <ul>
      <#list postsInfo.recentPosts as post>
        <#assign postItem = siteItemService.getSiteItem(post.localId) />
        <li <@studio.componentAttr component=postItem ice=true />>
          <#assign url = postItem.storeUrl
            ?replace("/site/components", "")
            ?replace(".xml", "")
          />
          <a href="${url}">
            <img src="${post.mainImage}" alt="Image placeholder" class="mr-4">
            <div class="text">
              <h4>${post.headline}</h4>
              <div class="post-meta">
                <span class="mr-2">${post.lastModifiedDate?datetime.iso?date}</span>
              </div>
            </div>
          </a>
        </li>
      </#list>
  </ul>