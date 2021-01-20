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

// language=GraphQL
const commonFragments = `
  fragment byUrlQueryPost on component_post {
    ...byUrlQueryContentItemFields
    slug: localId(transform: "storeUrlToRenderUrl")
    pageTitle_s
    pageDescription_s
    blurb_t
    headline_s
    mainImage_s
    content_o {
      item {
        key
        component {
          ...on component_rich_text {
            ...byUrlQueryRichText
          }
          ...on component_image {
            ...byUrlQueryImage
          }
          ...on component_responsive_columns {
            ...byUrlQueryResponsiveColumns
          }
        }
      }
    }
    authorBio_o {
      item {
        key
        component {
          ...byUrlQueryBioFragment
        }
      }
    }
    categories_o {
      item {
        key(filter: {or: $categoriesFilter})
        value_smv
      }
    }
    tags_o {
      item {
        value_smv
        key(filter: {or: $tagsFilter})
      }
    }
  }

  fragment byUrlQueryContentItemFields on ContentItem {
    guid: objectId
    path: localId(filter: {not: [{equals: $exclude}]})
    contentTypeId: content__type
    dateCreated: createdDate_dt
    dateModified: lastModifiedDate_dt
    label: internal__name
  }

  fragment byUrlQueryBioFragment on component_bio {
    guid: objectId
    contentTypeId: content__type
    label: internal__name
    path: localId
    bio_t
    name_s
    profilePic_s
    linkButtonText_s
    linkButtonUrl_s
    showLinkButton_b
    facebookLink_s
    twitterLink_s
    instagramLink_s
    youTubeLink_s
  }

  fragment byUrlQueryRichText on component_rich_text {
    ...byUrlQueryContentItemFields
    content_html: content_html_raw
  }

  fragment byUrlQueryImage on component_image {
    ...byUrlQueryContentItemFields
    image_s
    alternativeText_s
  }

  fragment byUrlQueryResponsiveColumns on component_responsive_columns {
    ...byUrlQueryContentItemFields
    columns_o {
      item {
        columnSize_s
        content_o {
          item {
            key
            component {
              ...on component_rich_text {
                ...byUrlQueryRichText
              }
              ...on component_image {
                ...byUrlQueryImage
              }
            }
          }
        }
      }
    }
  }
`

// language=GraphQL
const main = `
  ${commonFragments}

  fragment byUrlQueryHomepage on page_entry  {
    pageTitle_s
    pageDescription_s
    bios_o {
      item {
        key
        component {
          ...byUrlQueryBioFragment
        }
      }
    }
    slider_o {
      item {
        key
        component {
          ...byUrlQueryContentItemFields
          ...on component_slider {
            ...byUrlQuerySlider
          }
        }
      }
    }
  }

  fragment byUrlQueryAboutPage on page_about {
    pageTitle_s
    pageDescription_s
    headline_s
    bios_o {
      item {
        key
        component {
          ...byUrlQueryBioFragment
        }
      }
    }
    content_o {
      item {
        key
        component {
          ...on component_rich_text {
            ...byUrlQueryRichText
          }
          ...on component_image {
            ...byUrlQueryImage
          }
          ...on component_responsive_columns {
            ...byUrlQueryResponsiveColumns
          }
        }
      }
    }
  }

  fragment byUrlQueryContactPage on page_contact {
    pageTitle_s
    pageDescription_s
    message_t
    headline_s
  }

  fragment byUrlQueryCategoryPage on page_category {
    pageTitle_s
    pageDescription_s
  }

  fragment byUrlQuerySlider on component_slider {
    ...byUrlQueryContentItemFields
    posts_o {
      item {
        key
        component {
          ...byUrlQueryContentItemFields
          slug: localId(transform: "storeUrlToRenderUrl")
          pageTitle_s
          pageDescription_s
          blurb_t
          headline_s
          mainImage_s
          authorBio_o {
            item {
              key,
              component {
                ...byUrlQueryBioFragment
              }
            }
          }
        }
      }
    }
  }

  query byUrlQuery(
    $url: String
    $skipContentType: Boolean = true
    $includePosts: Boolean = true
    $postsLimit: Int = 8
    $postsOffset: Int = 0
    $exclude: String = ""
    $categoriesFilter: [TextFilters!] = []
    $tagsFilter: [TextFilters!] = []
  ) {
    content: contentItems {
      total
      items {
        ...byUrlQueryContentItemFields
        url: localId(
          transform: "storeUrlToRenderUrl",
          filter:{ regex: $url }
        )
        content__type(
          filter:{
            regex: ".*(bio|post|entry|category|contact|about|search).*"
          }
        ) @skip (if: $skipContentType)
        ...on page_entry {
          ...byUrlQueryHomepage
        }
        ...on page_about {
          ...byUrlQueryAboutPage
        }
        ...on page_contact {
          ...byUrlQueryContactPage
        }
        ...on page_category {
          ...byUrlQueryCategoryPage
        }
        ...on component_post {
          ...byUrlQueryPost
        }
      }
    }
    levelDescriptors: component_level__descriptor {
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
    posts: component_post(
      limit: $postsLimit,
      offset: $postsOffset,
      sortOrder: DESC,
      sortBy: "lastModifiedDate_dt"
    ) @include(if: $includePosts) {
      total
      items {
        ...byUrlQueryPost
      }
    }
  }
`;

//language=GraphQL
export const postsQuery = `
  ${commonFragments}

  query postsQuery(
    $postsLimit: Int = 8
    $postsOffset: Int = 0
    $exclude: String = ""
    $categoriesFilter: [TextFilters!] = []
    $tagsFilter: [TextFilters!] = []
  ) {
    posts: component_post(
      limit: $postsLimit,
      offset: $postsOffset,
      sortOrder: DESC,
      sortBy: "lastModifiedDate_dt"
    ) {
      total
      items {
        ...byUrlQueryPost
      }
    }
  }
`;

export default main;
