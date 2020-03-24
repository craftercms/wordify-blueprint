<#assign cardFormat = "portrait">
<#-- cardFormat = "portrait" | "landscape" | "landscapeCompressed" | "imageBackground" -->

<#assign imgUrl = "/static-assets/images/img_5.jpg">
<#assign imgAlt = "">
<#assign linkUrl = "/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals">
<#assign title = "How to Find the Video Games of Your Youth">
<#assign blurb = "">
<#assign date = "March 15, 2018">
<#assign authorName = "Megan Smith">
<#assign authorAvatarUrl = "/static-assets/images/person_1.jpg">
<#assign tags = "Food">
<#assign postCardWrapperClasses = "">
<#assign numOfComments = 3>

<#switch cardFormat>
    <#case "portrait">
      <a href="${linkUrl}" class="blog-entry ${postCardWrapperClasses}" data-animate-effect="fadeIn">
        <img src="${imgUrl}" alt="${imgAlt}">
        <div class="blog-content-body">
          <div class="post-meta">
            <span class="author mr-2">
              <img src="${authorAvatarUrl}" alt="">
                ${authorName}
            </span>
            &bullet; <span class="mr-2">${date}</span>
            &bullet; <span class="ml-2"><span class="fa fa-comments"></span> ${numOfComments}</span>
          </div>
          <h2>${title}</h2>
        </div>
      </a>
        <#break>
    <#case "landscape">
      <a href="${linkUrl}" class="${postCardWrapperClasses}">
        <div class="image" style="background-image: url(${imgUrl});"></div>
        <span class="text">
          <div class="post-meta">
            <span class="author mr-2">
              <img src="${authorAvatarUrl}" alt=""> ${authorName}
            </span>
            • <span class="mr-2">${date}</span>
            • <span class="ml-2"><span class="fa fa-comments"></span> ${numOfComments}</span>
          </div>
          <h2>${title}</h2>
        </span>
      </a>
        <#break>
    <#case "landscapeCompressed">
      <a href="${linkUrl}" class="${postCardWrapperClasses}">
        <img src="${imgUrl}" alt="${imgAlt}" class="mr-4">
        <div class="text">
          <h4>${title}</h4>
          <div class="post-meta">
            <span class="mr-2">${date}</span>
          </div>
        </div>
      </a>
        <#break>
    <#case "imageBackground">
      <a href="${linkUrl}" class="${postCardWrapperClasses} a-block sm d-flex align-items-center height-md"
         style="background-image: url(${imgUrl});">
        <div class="text">
          <div class="post-meta">
            <span class="category">${tags}</span>
            <span class="mr-2">${date}</span>
            • <span class="ml-2"><span class="fa fa-comments"></span> ${numOfComments}</span>
          </div>
          <h3>${title}</h3>
        </div>
      </a>
        <#break>
    <#default>
      <h2>Unknown Card Format for "${title}"</h2>
</#switch>
