<div class="owl-carousel owl-theme home-slider">
    <#if contentModel.posts_o?? && contentModel.posts_o.item??>
        <#list contentModel.posts_o.item as slide>
            <#assign post =  siteItemService.getSiteItem(slide.key) />
            <div>
                <a href="${urlTransformationService.transform('storeUrlToRenderUrl', slide.key)}"
                   class="a-block d-flex align-items-center height-lg"
                   style="background-image: url('${post.mainImage_s!""}'); ">
                    <div class="text half-to-full">
                        <span class="category mb-5">Food</span>
                        <div class="post-meta">
                            <span class="author mr-2">
                                <img src="/static-assets/images/person_1.jpg" alt="Colorlib"/> Colorlib
                            </span>&bullet;
                            <span class="mr-2">${post.createdDate_dt?date}</span> &bullet;
                            <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h3>${post.headline_s!""}</h3>
                        <p>${post.blurb_t!""}</p>
                    </div>
                </a>
            </div>
        </#list>
    </#if>
</div>
