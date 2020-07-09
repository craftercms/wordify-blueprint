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

import graphql from 'babel-plugin-relay/macro';

// Homepage
graphql`
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
`;

// AboutPage
graphql`
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
`;

// ContactPage
graphql`
  fragment byUrlQueryContactPage on page_contact {
    pageTitle_s
    pageDescription_s

  }
`;

// CategoryPage
graphql`
  fragment byUrlQueryCategoryPage on page_category {
    pageTitle_s
    pageDescription_s

  }
`;

// PostPage
graphql`
  fragment byUrlQueryPostPage on page_post {
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
`;

// ContentItemFields
graphql`
  fragment byUrlQueryContentItemFields on ContentItem {
    guid: objectId
    path: localId(filter: {not: [{equals: $exclude}]})
    contentTypeId: content__type
    dateCreated: createdDate_dt
    dateModified: lastModifiedDate_dt
    label: internal__name
  }
`;

// BioFragment
graphql`
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
  }
`;

// RichText
graphql`
  fragment byUrlQueryRichText on component_rich_text {
    ...byUrlQueryContentItemFields
    content_html_raw
  }
`;

// Image
graphql`
  fragment byUrlQueryImage on component_image {
    ...byUrlQueryContentItemFields
    image_s
    alternativeText_s
  }
`;

// ResponsiveColumns
graphql`
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
`;

// Slider
graphql`
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
        }
      }
    }
  }
`;

const byUrlQuery = graphql`
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
            regex: ".*(bio|post|entry|category|tag|contact|about|search).*"
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
        ...on page_post {
          ...byUrlQueryPostPage
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
    posts: page_post(
      limit: $postsLimit,
      offset: $postsOffset,
      sortOrder: DESC,
      sortBy: "lastModifiedDate_dt"
    ) @include(if: $includePosts) {
      total
      items {
        ...byUrlQueryPostPage
      }
    }
  }
`;

export default byUrlQuery;
