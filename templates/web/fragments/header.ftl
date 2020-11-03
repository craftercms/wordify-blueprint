<#import "/templates/web/navigation2/navigation.ftl" as nav/>
<#assign model = levelDescriptor!contentModel />

<header role="banner">
  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-9 social">
          <#list model.socialLinks_o.item as socialLink>
            <a href="${socialLink.url_s}">
              <span class="fa fa-${socialLink.socialNetwork_s}"></span>
            </a>
          </#list>
        </div>
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
        <h1 class="site-logo"><a href="/">${model.siteTitle_s!""}</a></h1>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-md  navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="navbar-nav mx-auto">
            <@nav.renderNavigation "/site/website" 1 true/>
        </ul>
      </div>
    </div>
  </nav>
</header>
