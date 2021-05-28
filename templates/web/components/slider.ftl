<#import "/templates/system/common/crafter.ftl" as crafter />

<div class="owl-carousel owl-theme home-slider">
    <#if contentModel.posts_o?? && contentModel.posts_o.item??>
      <#list contentModel.posts_o.item as slide>
        <#assign post = siteItemService.getSiteItem(slide.key) />
        <#assign url = urlTransformationService.transform('storeUrlToRenderUrl', slide.key)
          ?replace("/site/components", "")
          ?replace(".html", "")
        />
        <#assign bio = siteItemService.getSiteItem(post.authorBio_o.item.key) />

        <@crafter.tag $model=contentModel>
          <a href="${url}"
             class="a-block d-flex align-items-center height-lg"
             style="background-image: url('${post.mainImage_s!""}'); ">
            <@crafter.tag $model=post class="text half-to-full">
              <#list post.categories_o.item as category>
                <span class="category mb-5">${category.value_smv}</span>
              </#list>
              <div class="post-meta">
                <span class="author mr-2">
                  <img src="${bio.profilePic_s}" alt="${bio.name_s}"/> ${bio.name_s}
                </span>&bullet;
                <span class="mr-2">${post.createdDate_dt?date}</span>
              </div>
              <h3>${post.headline_s!""}</h3>
              <p>${post.blurb_t!""}</p>
            </@crafter.tag>
          </a>
        </@crafter.tag>
      </#list>
    </#if>
</div>