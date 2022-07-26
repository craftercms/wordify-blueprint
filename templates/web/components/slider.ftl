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

        <@crafter.div $model=contentModel>
          <a href="${url}" class="a-block d-flex align-items-center height-lg">
            <@crafter.img $model=post $field="mainImage_s" src=post.mainImage_s!""></@crafter.img>
            <@crafter.div $model=post class="text half-to-full">
              <#list post.categories_o.item as category>
                <span class="category mb-5">${category.value_smv}</span>
              </#list>
              <div class="post-meta">
                <span class="author mr-2">
                  <@crafter.img $model=bio $field="profilePic_s" src="${bio.profilePic_s}" alt="${bio.name_s}"/>
                  <@crafter.span $model=bio $field="name_s">${bio.name_s}</@crafter.span>
                </span>&bullet;
                <span class="mr-2">${post.createdDate_dt?date}</span>
              </div>
              <@crafter.h3 $model=post $field="headline_s">${post.headline_s!""}</@crafter.h3>
              <@crafter.p $model=post $field="blurb_t">${post.blurb_t!""}</@crafter.p>
            </@crafter.div>
          </a>
        </@crafter.div>
      </#list>
    </#if>
</div>