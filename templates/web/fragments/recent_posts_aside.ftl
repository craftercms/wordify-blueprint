<h3 class="heading">Recent Posts</h3>
<div class="post-entry-sidebar">
  <ul>
      <#list recentPosts as post>
        <li>
          <a href="">
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