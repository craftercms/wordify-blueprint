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
  }
`;

// ContentItemFields
graphql`
  fragment byUrlQueryContentItemFields on ContentItem {
    guid: objectId
    path: localId
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
      }
    }
  }
`;

const byUrlQuery = graphql`
  query byUrlQuery(
    $url: String, $skipContentType: Boolean = true
    $includePosts: Boolean = true
    $postsLimit: Int = 8
    $postsOffset: Int = 0
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
            regex: ".*(bio|post|entry|category|contact|about).*"
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
    posts: page_post(limit: $postsLimit, offset: $postsOffset) @include(if: $includePosts) {
      total
      items {
        ...byUrlQueryPostPage
      }
    }
  }
`;

export default byUrlQuery;
