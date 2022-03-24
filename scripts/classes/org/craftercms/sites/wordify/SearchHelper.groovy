/*
 * Copyright (C) 2007-2022 Crafter Software Corporation. All Rights Reserved.
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

import co.elastic.clients.elasticsearch._types.query_dsl.BoolQuery
import co.elastic.clients.elasticsearch._types.query_dsl.Query
import co.elastic.clients.elasticsearch._types.query_dsl.TextQueryType
import org.apache.commons.lang3.StringUtils
import org.craftercms.engine.service.UrlTransformationService
import org.craftercms.search.elasticsearch.client.ElasticsearchClientWrapper

class SearchHelper {

  static final String POST_CONTENT_TYPE = "/component/post"
  static final List<String> POST_SEARCH_FIELDS = [
    'headline_t^1.5',
    'content_o.item.component.content_html^1.0'
  ]
  static final int DEFAULT_START = 0
  static final int DEFAULT_ROWS = 10

  ElasticsearchClientWrapper elasticsearchClient
  UrlTransformationService urlTransformationService

  SearchHelper(ElasticsearchClientWrapper elasticsearchClient, UrlTransformationService urlTransformationService) {
    this.elasticsearchClient = elasticsearchClient
    this.urlTransformationService = urlTransformationService
  }

  def search(userTerm, start = DEFAULT_START, rows = DEFAULT_ROWS) {
    def query = new BoolQuery.Builder()

    // Filter by content-type
    query.filter(q -> q
      .match(m -> m
        .field("content-type")
        .query(v -> v
            .stringValue(POST_CONTENT_TYPE)
        )
      )
    )

    if (userTerm) {
      // Check if the user is requesting an exact match with quotes
      def matcher = userTerm =~ /.*("([^"]+)").*/
      if (matcher.matches()) {
        // Using must excludes any doc that doesn't match with the input from the user
        query.must(q -> q
          .multiMatch(m -> m
            .query(matcher.group(2))
            .fields(POST_SEARCH_FIELDS)
            .fuzzyTranspositions(false)
            .autoGenerateSynonymsPhraseQuery(false)
          )
        )

        // Remove the exact match to continue processing the user input
        userTerm = StringUtils.remove(userTerm, matcher.group(1))
      } else {
        // Exclude docs that do not have any optional matches
        query.minimumShouldMatch('1')
      }

      if (userTerm) {
        // Using should makes it optional and each additional match will increase the score of the doc
        query
        // Search for phrase matches including a wildcard at the end and increase the score for this match
        .should(q -> q
          .multiMatch(m -> m
            .query(userTerm)
            .fields(POST_SEARCH_FIELDS)
            .type(TextQueryType.PhrasePrefix)
            .boost(1.5f)
          )
        )
        // Search for matches on individual terms
        .should(q -> q
          .multiMatch(m -> m
            .query(userTerm)
            .fields(POST_SEARCH_FIELDS)
          )
        )
        // Search for matches on additional _s fields (not supported by multi_match)
        .should(q -> q
          .match(m -> m
            .field('pageDescription_s')
            .query(v -> v
              .stringValue(userTerm)
            )
          )
        )
        .should(q -> q
          .match(m -> m
            .field('categories_o.item.value_smv')
            .query(v -> v
              .stringValue(userTerm)
            )
          )
        )
      }
    }

    def searchResult = elasticsearchClient.search(r -> r
      .query(query.build()._toQuery())
      .from(start)
      .size(rows)
    , Map.class)

    def result = [:]
    result.total = searchResult.hits().total().value()

    if (searchResult) {
      result.hits = processPostListingResults(searchResult)
    } else {
      result.hits = []
    }

    return result
  }

  def searchPosts(categories = null, start = DEFAULT_START, rows = DEFAULT_ROWS, exclude = null, tags = null) {
    def query = new BoolQuery.Builder()

    query.filter(q -> q
      .match(m -> m
        .field('content-type')
        .query(v -> v
          .stringValue(POST_CONTENT_TYPE)
        )
      )
    )

    if (categories) {
      query.filter(getFieldQueryWithMultipleValues("categories_o.item.key", categories))
    }
    if (tags) {
      query.filter(getFieldQueryWithMultipleValues("tags_o.item.key", tags))
    }
    if (exclude) {
      query.mustNot(q -> q
        .match(m -> m
          .field('objectId')
          .query(v -> v
            .stringValue(exclude)
          )
        )
      )
    }

    def searchResult = elasticsearchClient.search(r -> r
      .query(query.build()._toQuery())
      .from(start)
      .size(rows)
      .sort(s -> s
        .field(f -> f
          .field('lastModifiedDate_dt')
          .order(co.elastic.clients.elasticsearch._types.SortOrder.Desc)
        )
      )
    , Map.class)

    def result = [:]
    result.total = searchResult.hits().total().value()

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

      pagination.totalPosts = posts.total instanceof String ? posts.total : posts.total.value.toDouble()
      pagination.pages = Math.ceil(pagination.totalPosts/postsPerPage)
      pagination.currentPage = page + 1

      postsInfo.paginatedPosts = posts.hits
      postsInfo.pagination = pagination
    }

    postsInfo.recentPosts = recentPosts.hits

    return postsInfo
  }

  private def processPostListingResults(result) {
    def posts = []
    def documents = result.hits().hits()*.source()

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
      values = StringUtils.join((Iterable)values, " ") as String
    } else {
      values = values as String
    }

    return Query.of(q -> q
      .match(m -> m
        .field(field)
        .query(v -> v
          .stringValue(values)
        )
      )
    )
  }

}
