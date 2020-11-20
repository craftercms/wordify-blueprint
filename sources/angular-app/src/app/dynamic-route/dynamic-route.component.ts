import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content.service';
import { parseDescriptor } from '@craftercms/content';
import { ContentInstance } from '@craftercms/models';

@Component({
  selector: 'app-dynamic-route',
  templateUrl: './dynamic-route.component.html',
  styleUrls: ['./dynamic-route.component.scss']
})
export class DynamicRouteComponent implements OnInit {
  constructor(private router: Router, private contentService: ContentService, private actRoute: ActivatedRoute) {
    // since router path is `**`, router doesn't load view changes
    // this disables route reuse for the views to load properly
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }
  private url: string = this.getUrlWithoutParams();
  public state;
  public contentTypeId;

  ngOnInit(): void {
    this.contentService.getPageData(this.url, {
      includePosts: true,
      postsLimit: 8,
      postsOffset: 0
    })
      .subscribe(({ data }) => {
        const model = parseDescriptor(data.content.items?.[0]) as ContentInstance;
        const posts = parseDescriptor(data.posts.items);
        const taxonomies = parseDescriptor(data.taxonomies.items);
        const levelDescriptor = data.levelDescriptors.items
          .filter(levelDescriptor => levelDescriptor.file__name === 'crafter-level-descriptor.level.xml')
          .map(levelDescriptor => levelDescriptor)[0];

        this.contentTypeId = model.craftercms.contentTypeId;
        this.state = {
          model,
          posts,
          taxonomies,
          meta: {
            siteTitle: levelDescriptor.siteTitle_s,
            socialLinks: levelDescriptor.socialLinks_o.item,
            disqus: {
              websiteShortname: levelDescriptor.websiteShortname_s
            },
            posts: {
              total: data.posts.total,
              limit: 8,
              offset: 0
            }
          }
        };

        if (model) {
          document.title = model.pageTitle_s ?? 'Wordify Crafter CMS';
          if (model.pageDescription_s) {
            const description = document.head.querySelector('meta[name="description"]');
            description && description.setAttribute('content', model.pageDescription_s ?? '');
          }
        }
      });
  }

  getUrlWithoutParams() {
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {};
    let routePath = this.actRoute.routeConfig.path;
    const url = routePath.includes(':')
      ? routePath.substring(0, routePath.indexOf(':') -1)
      : urlTree.toString();

    return url;
  }

}
