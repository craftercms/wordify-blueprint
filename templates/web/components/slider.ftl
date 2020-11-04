<#import "/templates/system/common/cstudio-support.ftl" as studio />

<div class="owl-carousel owl-theme home-slider" <@studio.componentAttr component=contentModel ice=true />>
  <#if contentModel.posts_o?? && contentModel.posts_o.item??>
    <#list contentModel.posts_o.item as slide>
      <#assign post = siteItemService.getSiteItem(slide.key) />
      <#assign url = urlTransformationService.transform('storeUrlToRenderUrl', slide.key)
        ?replace("/site/components", "")
        ?replace(".html", "")
      />
      <#assign bio = siteItemService.getSiteItem(post.authorBio_o.item.key) />
      <div>
        <a href="${url}"
           class="a-block d-flex align-items-center height-lg"
           style="background-image: url('${post.mainImage_s!""}'); ">
          <div class="text half-to-full" <@studio.componentAttr component=post ice=true />>
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
          </div>
        </a>
      </div>
    </#list>
  </#if>
</div>
