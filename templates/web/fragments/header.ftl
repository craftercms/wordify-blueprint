<#import "/templates/system/common/crafter.ftl" as crafter/>

<#assign levelDescriptor = siteItemService.getSiteItem(contentModel['/*/siteTitle_s/@crafter-source']) />

<header role="banner">
  <div class="top-bar">
    <div class="container">
      <div class="row">
        <@crafter.renderRepeatGroup
          $model=levelDescriptor
          $field="socialLinks_o"
          $containerTag="div"
          $containerAttributes={'class': 'col-9 social'}
          $itemTag="span";
          socialLink, index
        >
          <a href="${socialLink.url_s}">
            <span class="fa fa-${socialLink.socialNetwork_s}"></span>
          </a>
        </@crafter.renderRepeatGroup>
        <div class="col-3 search-top">
          <form action="/search" class="search-top-form search-form">
            <span class="icon fa fa-search"></span>
            <input type="text" name="q" placeholder="Type keyword to search..." value="${searchTerm!''}">
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container logo-wrap">
    <div class="row pt-5">
      <div class="col-12 text-center">
        <a class="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span class="burger-lines"></span></a>
        <h1 class="site-logo">
          <a href="/">
            <@crafter.span $model=levelDescriptor $field="siteTitle_s">${levelDescriptor.siteTitle_s!""}</@crafter.span>
          </a>
        </h1>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-md  navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarMenu">
        <@crafter.navigation containerElementClass="navbar-nav mx-auto" showNavElement=false />
      </div>
    </div>
  </nav>
</header>