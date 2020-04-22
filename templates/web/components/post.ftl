<div class="col-md-12 col-lg-8 main-content">

  <img src="${contentModel.mainImage_s}" alt="" class="img-fluid mb-5">
  <div class="post-meta">
    <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib" class="mr-2"> Colorlib</span>&bullet;
    <span class="mr-2">${contentModel.createdDate_dt?date}</span> &bullet;
    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
  </div>
  <h1 class="mb-4">${contentModel.headline_s}</h1>
  <a class="category mb-5" href="#">Food</a> <a class="category mb-5" href="#">Travel</a>

  <div class="post-content-body">
      <#if contentModel.content_o?? && contentModel.content_o.item??>
          <#list contentModel.content_o.item as component>
              <@renderComponent component=component />
          </#list>
      </#if>
  </div>

  <div class="pt-5">
    <p>
      Categories:
      <a href="#">Food</a>,
      <a href="#">Travel</a>
      Tags:
      <a href="#">#manila</a>,
      <a href="#">#asia</a>
    </p>
  </div>

</div>
