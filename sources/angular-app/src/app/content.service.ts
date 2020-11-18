import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map } from 'rxjs/operators';
import Utils from './utils';
import { Observable } from 'rxjs';
import { NavItem } from './header/header.component';
import byUrlQuery, { postsQuery } from './queries.graphql';
import { Footer } from './footer/footer.component';
import { createQuery, search } from '@craftercms/search';
import { parseDescriptor } from '@craftercms/content';
import { SDKService } from '@craftercms/classes';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public graphqlServer;
  constructor(private httpClient: HttpClient) {
    this.graphqlServer = environment.graphqlServer;
    if (!this.graphqlServer.includes(Utils.siteName())) {
      this.graphqlServer += `?crafterSite=${Utils.siteName()}`;
    }
  }

  fetchQuery(operation, variables?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    return this.httpClient.post(
      this.graphqlServer,
      JSON.stringify({
        query: operation.text,
        variables
      }),
      options
    );
  }

  getNav(): Observable<NavItem[]> {
    return this.fetchQuery({
      text: `
          query Nav {
            pages {
              total
              items {
                navLabel
                contentTypeId: content__type
                url: localId(transform: "storeUrlToRenderUrl")
                placeInNav(filter: { equals: true }) @skip(if: true)
                orderDefault_f
              }
            }
          }
        `
    }).pipe(map((response: any) => response.data.pages.items));
  }

  getPageData(url: string, options?): Observable<any> {
    return this.fetchQuery(
      { text: byUrlQuery },
      {
        url: `.*${url === '/' ? 'website/index' : url}.*`,
        ...options
      }
    );
  }

  getFooter(): Observable<Footer> {
    return this.fetchQuery({
      text: `query Footer {
        component_footer {
          items {
            guid: objectId
            path: localId
            contentTypeId: content__type
            dateCreated: createdDate_dt
            dateModified: lastModifiedDate_dt
            label: internal__name
            aboutTitle_s
            about_t
            aboutImage_s
            quickLinksTitle_s
            socialLinksTitle_s
            file__name(filter: {matches: "site-footer.xml"})
            internal__name
            localId
            quickLinks_o {
              item {
                label_s
                url_s
              }
            }
            copyright_html_raw
          }
        }
      }`
    }).pipe(map((response: any) => parseDescriptor(response.data.component_footer.items)[0]));
  }

  getPosts(categories?, tags?, exclude?, paginationData?): Observable<any> {
    const categoriesFilter = categories
      ? Array.isArray(categories)
        ? categories.map(category => ({ matches: category.key }))
        : [{ matches: categories.key }]
      : [];
    const tagsFilter = tags
      ? Array.isArray(tags)
        ? tags.map(tag => ({ matches: tag.key }))
        : [{ matches: tags.key }]
      : [];
    const queryVariables = {
      categoriesFilter,
      tagsFilter,
      exclude: exclude ?? '',
      ...(
        paginationData ? {
          limit: paginationData.itemsPerPage,
          offset: (paginationData.currentPage * paginationData.itemsPerPage)
        } : {}
      )
    };

    return this.fetchQuery(
      { text: postsQuery },
      queryVariables
    ).pipe(map((response: any) => ({
      items: parseDescriptor(response.data.posts.items),
      total: response.data.posts.total,
      ...(paginationData ? {
        pageCount: Math.ceil(response.data.posts.total / paginationData.itemsPerPage)
      } : {})
    })));
  }

  getTaxonomies(): Observable<any> {
    return this.fetchQuery({
      text: `query Taxonomies {
        taxonomy {
          total
          items {
            guid: objectId
            path: localId
            contentTypeId: content__type
            dateCreated: createdDate_dt
            dateModified: lastModifiedDate_dt
            label: internal__name
            items {
              item {
                key
                value
                image_s
              }
            }
          }
        }
      }`
    }).pipe(map((response: any) => parseDescriptor(response.data.taxonomy.items)));
  }

  searchPosts(query: string, size: number = 1, from: number = 0): any {
    const contentTypes = ['/component/post'];

    return search(
      createQuery('elasticsearch', {
        query: {
          'bool': {
            'filter': [
              { 'bool': { 'should': contentTypes.map(id => ({ 'match': { 'content-type': id } })) } },
              { 'multi_match': { 'query': query, 'type': 'phrase_prefix' } }
            ]
          }
        },
        size,
        from
      }),
      Utils.crafterConfig()
    )
  }

  getLevelDescriptor(): Observable<any> {
    return this.fetchQuery({
      text: `query LevelDescriptor {
        component_level__descriptor {
          items {
            siteTitle_s
            file__name
            websiteShortname_s
            socialLinks_o {
              item {
                socialNetwork_s
                label_s
                url_s
              }
            }
          }
        }
      }`
    }).pipe(
      map((response: any) =>
        parseDescriptor(response.data.component_level__descriptor.items[0])
      )
    );
  }

  submitContactData(data): Observable<any> {
    return SDKService.httpPost(
      '/api/contactus.json',
      data
    ).pipe(
      catchError(error => [error])
    )
  }
}
