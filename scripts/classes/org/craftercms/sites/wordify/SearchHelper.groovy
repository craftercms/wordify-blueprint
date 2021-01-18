/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.craftercms.sites.wordify

import org.apache.commons.lang3.StringUtils
import org.craftercms.engine.service.UrlTransformationService
import org.elasticsearch.action.search.SearchRequest
import org.elasticsearch.index.query.QueryBuilders
import org.elasticsearch.search.builder.SearchSourceBuilder
import org.elasticsearch.search.sort.FieldSortBuilder
import org.elasticsearch.search.sort.SortOrder

class SearchHelper {
  static final String POST_CONTENT_TYPE_QUERY = "content-type:\"/component/post\""
  static final String[] HIGHLIGHT_FIELDS = ["pageTitle_s", "pageDescription_s", "authorBio_o"]
  static final int DEFAULT_START = 0
  static final int DEFAULT_ROWS = 10

  def elasticsearch
  UrlTransformationService urlTransformationService

  SearchHelper(elasticsearch, UrlTransformationService urlTransformationService) {
    this.elasticsearch = elasticsearch
    this.urlTransformationService = urlTransformationService
  }

  def search(userTerm, start = DEFAULT_START, rows = DEFAULT_ROWS) {
    def q = "${POST_CONTENT_TYPE_QUERY}"

    if (userTerm) {
      if(!userTerm.contains(" ")) {
        userTerm = "${userTerm}~1 OR *${userTerm}"
      }
      def userTermQuery = "(headline_t:(${userTerm}) OR pageDescription_s:(${userTerm}) OR content_o.item.component.content_html:(${userTerm}) OR categories_o.item.value_smv:(${userTerm}))"

      q = "${q} AND ${userTermQuery}"
    }

    def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)

    def searchResult = elasticsearch.search(new SearchRequest().source(builder))

    def result = [:]
    result.total = searchResult.hits.getTotalHits()

    if (searchResult) {
      result.hits = processPostListingResults(searchResult)
    } else {
      result.hits = []
    }

    return result
  }

  def searchPosts(categories = null, start = DEFAULT_START, rows = DEFAULT_ROWS, exclude = null, tags = null) {
    def q = "${POST_CONTENT_TYPE_QUERY}"

    if (categories) {
      def categoriesQuery = getFieldQueryWithMultipleValues("categories_o.item.key", categories)
      q = "${q} AND ${categoriesQuery}"
    }

    if(tags) {
      def tagsQuery = getFieldQueryWithMultipleValues("tags_o.item.key", tags)
      q = "${q} AND ${tagsQuery}"
    }

    if(exclude) {
      q = "${q} AND NOT objectId:\"${exclude}\""
    }

    def builder = new SearchSourceBuilder()
      .query(QueryBuilders.queryStringQuery(q))
      .from(start)
      .size(rows)
      .sort(new FieldSortBuilder("lastModifiedDate_dt").order(SortOrder.DESC))

    def searchResult = elasticsearch.search(new SearchRequest().source(builder))

    def result = [:]
    result.total = searchResult.hits.getTotalHits()

    if (searchResult) {
      result.hits = processPostListingResults(searchResult)
    } else {
      result.hits = []
    }

    return result
  }

  def getPostsInfo(page = null, postsPerPage = null, categories = null, tags = null, exclude = null) {
    def postsInfo = [:]
    def recentPosts = searchPosts(null, 0, 5)

    if (page != null) {
      def pagination = [:]
      def posts = searchPosts(categories, page * postsPerPage, postsPerPage, exclude, tags)

      pagination.totalPosts = posts.total instanceof String ? posts.total : posts.total.value
      pagination.pages = Math.ceil(pagination.totalPosts/postsPerPage)
      pagination.currentPage = page + 1

      postsInfo.paginatedPosts = posts.hits
      postsInfo.pagination = pagination
    }

    postsInfo.recentPosts = recentPosts.hits

    return postsInfo
  }

  private def processUserSearchResults(result) {
    def posts = []
    def hits = result.hits.hits

    if (hits) {
      hits.each {hit ->
        def doc = hit.getSourceAsMap()
        def post = [:]
        post.title = doc.title_s
        post.localId = doc.localId
        post.url = urlTransformationService.transform("storeUrlToRenderUrl", doc.localId)
        post.headline = doc.headline_s
        post.mainImage = doc.mainImage_s
        post.blurb = doc.blurb_t
        post.content = doc.content_o
        post.authorBio = doc.authorBio_o
        post.categories = doc.categories_o
        post.tags = doc.tags_o
        post.lastModifiedDate = doc.lastModifiedDate_dt

        posts << post
      }
    }

    return posts
  }

  private def processPostListingResults(result) {
    def posts = []
    def documents = result.hits.hits*.getSourceAsMap()

    if (documents) {
      documents.each {doc ->
        def post = [:]
        post.headline = doc.headline_s
        post.mainImage = doc.mainImage_s
        post.blurb = doc.blurb_t
        post.content = doc.content_o
        post.authorBio = doc.authorBio_o
        post.categories = doc.categories_o
        post.tags = doc.tags_o
        post.localId = doc.localId
        post.url = urlTransformationService.transform("storeUrlToRenderUrl", doc.localId)
        post.lastModifiedDate = doc.lastModifiedDate

        posts << post
      }
    }

    return posts
  }

  private def getFieldQueryWithMultipleValues(field, values) {
    if (values.class.isArray()) {
      values = values as List
    }

    if (values instanceof Iterable) {
      values = "(" + StringUtils.join((Iterable)values, " OR ") + ")"
    } else {
      values = "\"${values}\""
    }

    return "${field}:${values}"
  }

}
