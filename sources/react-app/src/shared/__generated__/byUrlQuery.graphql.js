/**
 * @flow
 * @relayHash 46153f0f3c5383b714541de29fbd6645
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type byUrlQueryAboutPage$ref = any;
type byUrlQueryCategoryPage$ref = any;
type byUrlQueryContactPage$ref = any;
type byUrlQueryContentItemFields$ref = any;
type byUrlQueryHomepage$ref = any;
type byUrlQueryPostPage$ref = any;
export type TextFilters = {|
  and?: ?$ReadOnlyArray<TextFilters>,
  exists?: ?boolean,
  matches?: ?string,
  not?: ?$ReadOnlyArray<TextFilters>,
  or?: ?$ReadOnlyArray<TextFilters>,
  regex?: ?string,
|};
export type byUrlQueryVariables = {|
  url?: ?string,
  skipContentType?: ?boolean,
  includePosts?: ?boolean,
  postsLimit?: ?number,
  postsOffset?: ?number,
  exclude?: ?string,
  categoriesFilter?: ?$ReadOnlyArray<TextFilters>,
  tagsFilter?: ?$ReadOnlyArray<TextFilters>,
|};
export type byUrlQueryResponse = {|
  +content: {|
    +total: number,
    +items: ?$ReadOnlyArray<{|
      +url: ?string,
      +content__type?: string,
      +$fragmentRefs: byUrlQueryContentItemFields$ref & byUrlQueryHomepage$ref & byUrlQueryAboutPage$ref & byUrlQueryContactPage$ref & byUrlQueryCategoryPage$ref & byUrlQueryPostPage$ref,
    |}>,
  |},
  +levelDescriptors: {|
    +items: ?$ReadOnlyArray<{|
      +siteTitle_s: ?string,
      +file__name: ?string,
      +websiteShortname_s: ?string,
      +socialLinks_o: ?{|
        +item: ?$ReadOnlyArray<?{|
          +socialNetwork_s: ?string,
          +label_s: ?string,
          +url_s: ?string,
        |}>
      |},
    |}>
  |},
  +posts?: {|
    +total: number,
    +items: ?$ReadOnlyArray<{|
      +$fragmentRefs: byUrlQueryPostPage$ref
    |}>,
  |},
|};
export type byUrlQuery = {|
  variables: byUrlQueryVariables,
  response: byUrlQueryResponse,
|};
*/


/*
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
      __typename
      ...byUrlQueryContentItemFields
      url: localId(transform: "storeUrlToRenderUrl", filter: {regex: $url})
      content__type(filter: {regex: ".*(bio|post|entry|category|tag|contact|about|search).*"}) @skip(if: $skipContentType)
      ... on page_entry {
        ...byUrlQueryHomepage
      }
      ... on page_about {
        ...byUrlQueryAboutPage
      }
      ... on page_contact {
        ...byUrlQueryContactPage
      }
      ... on page_category {
        ...byUrlQueryCategoryPage
      }
      ... on page_post {
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
  posts: page_post(limit: $postsLimit, offset: $postsOffset, sortOrder: DESC, sortBy: "lastModifiedDate_dt") @include(if: $includePosts) {
    total
    items {
      ...byUrlQueryPostPage
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
        __typename
        ... on component_rich_text {
          ...byUrlQueryRichText
        }
        ... on component_image {
          ...byUrlQueryImage
        }
        ... on component_responsive_columns {
          ...byUrlQueryResponsiveColumns
        }
      }
    }
  }
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
}

fragment byUrlQueryCategoryPage on page_category {
  pageTitle_s
  pageDescription_s
}

fragment byUrlQueryContactPage on page_contact {
  pageTitle_s
  pageDescription_s
}

fragment byUrlQueryContentItemFields on ContentItem {
  guid: objectId
  path: localId(filter: {not: [{equals: $exclude}]})
  contentTypeId: content__type
  dateCreated: createdDate_dt
  dateModified: lastModifiedDate_dt
  label: internal__name
}

fragment byUrlQueryHomepage on page_entry {
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
        __typename
        ...byUrlQueryContentItemFields
        ... on component_slider {
          ...byUrlQuerySlider
        }
      }
    }
  }
}

fragment byUrlQueryImage on component_image {
  ...byUrlQueryContentItemFields
  image_s
  alternativeText_s
}

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
        __typename
        ... on component_rich_text {
          ...byUrlQueryRichText
        }
        ... on component_image {
          ...byUrlQueryImage
        }
        ... on component_responsive_columns {
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

fragment byUrlQueryResponsiveColumns on component_responsive_columns {
  ...byUrlQueryContentItemFields
  columns_o {
    item {
      columnSize_s
      content_o {
        item {
          key
          component {
            __typename
            ... on component_rich_text {
              ...byUrlQueryRichText
            }
            ... on component_image {
              ...byUrlQueryImage
            }
          }
        }
      }
    }
  }
}

fragment byUrlQueryRichText on component_rich_text {
  ...byUrlQueryContentItemFields
  content_html_raw
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
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "url",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "skipContentType",
    "type": "Boolean",
    "defaultValue": true
  },
  {
    "kind": "LocalArgument",
    "name": "includePosts",
    "type": "Boolean",
    "defaultValue": true
  },
  {
    "kind": "LocalArgument",
    "name": "postsLimit",
    "type": "Int",
    "defaultValue": 8
  },
  {
    "kind": "LocalArgument",
    "name": "postsOffset",
    "type": "Int",
    "defaultValue": 0
  },
  {
    "kind": "LocalArgument",
    "name": "exclude",
    "type": "String",
    "defaultValue": ""
  },
  {
    "kind": "LocalArgument",
    "name": "categoriesFilter",
    "type": "[TextFilters!]",
    "defaultValue": ([]/*: any*/)
  },
  {
    "kind": "LocalArgument",
    "name": "tagsFilter",
    "type": "[TextFilters!]",
    "defaultValue": ([]/*: any*/)
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "total",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "transform",
  "value": "storeUrlToRenderUrl"
},
v3 = {
  "kind": "ScalarField",
  "alias": "url",
  "name": "localId",
  "args": [
    {
      "kind": "ObjectValue",
      "name": "filter",
      "fields": [
        {
          "kind": "Variable",
          "name": "regex",
          "variableName": "url"
        }
      ]
    },
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "kind": "Condition",
  "passingValue": false,
  "condition": "skipContentType",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content__type",
      "args": [
        {
          "kind": "Literal",
          "name": "filter",
          "value": {
            "regex": ".*(bio|post|entry|category|tag|contact|about|search).*"
          }
        }
      ],
      "storageKey": "content__type(filter:{\"regex\":\".*(bio|post|entry|category|tag|contact|about|search).*\"})"
    }
  ]
},
v5 = [
  {
    "kind": "FragmentSpread",
    "name": "byUrlQueryPostPage",
    "args": null
  }
],
v6 = {
  "kind": "LinkedField",
  "alias": "levelDescriptors",
  "name": "component_level__descriptor",
  "storageKey": null,
  "args": null,
  "concreteType": "component_level__descriptor_query",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "items",
      "storageKey": null,
      "args": null,
      "concreteType": "component_level__descriptor",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "siteTitle_s",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "file__name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "websiteShortname_s",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "socialLinks_o",
          "storageKey": null,
          "args": null,
          "concreteType": "component_level__descriptor_socialLinks_o_items",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "item",
              "storageKey": null,
              "args": null,
              "concreteType": "component_level__descriptor_socialLinks_o_item",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "socialNetwork_s",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "label_s",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url_s",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
v7 = [
  {
    "kind": "Variable",
    "name": "limit",
    "variableName": "postsLimit"
  },
  {
    "kind": "Variable",
    "name": "offset",
    "variableName": "postsOffset"
  },
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "lastModifiedDate_dt"
  },
  {
    "kind": "Literal",
    "name": "sortOrder",
    "value": "DESC"
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": "guid",
  "name": "objectId",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": "path",
  "name": "localId",
  "args": [
    {
      "kind": "ObjectValue",
      "name": "filter",
      "fields": [
        {
          "kind": "ListValue",
          "name": "not",
          "items": [
            {
              "kind": "ObjectValue",
              "name": "not.0",
              "fields": [
                {
                  "kind": "Variable",
                  "name": "equals",
                  "variableName": "exclude"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": "contentTypeId",
  "name": "content__type",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": "dateCreated",
  "name": "createdDate_dt",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": "dateModified",
  "name": "lastModifiedDate_dt",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": "label",
  "name": "internal__name",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pageTitle_s",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pageDescription_s",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "key",
  "args": null,
  "storageKey": null
},
v18 = [
  (v17/*: any*/),
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "component",
    "storageKey": null,
    "args": null,
    "concreteType": "component_bio",
    "plural": false,
    "selections": [
      (v9/*: any*/),
      (v11/*: any*/),
      (v14/*: any*/),
      {
        "kind": "ScalarField",
        "alias": "path",
        "name": "localId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "bio_t",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name_s",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "profilePic_s",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "linkButtonText_s",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "linkButtonUrl_s",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "showLinkButton_b",
        "args": null,
        "storageKey": null
      }
    ]
  }
],
v19 = {
  "kind": "ScalarField",
  "alias": "slug",
  "name": "localId",
  "args": [
    (v2/*: any*/)
  ],
  "storageKey": "localId(transform:\"storeUrlToRenderUrl\")"
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "blurb_t",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "headline_s",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "mainImage_s",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "InlineFragment",
  "type": "component_rich_text",
  "selections": [
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/),
    (v14/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content_html_raw",
      "args": null,
      "storageKey": null
    }
  ]
},
v24 = {
  "kind": "InlineFragment",
  "type": "component_image",
  "selections": [
    (v9/*: any*/),
    (v10/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/),
    (v14/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image_s",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "alternativeText_s",
      "args": null,
      "storageKey": null
    }
  ]
},
v25 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "content_o",
  "storageKey": null,
  "args": null,
  "concreteType": "ContentIncludeWrapper",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "item",
      "storageKey": null,
      "args": null,
      "concreteType": "ContentInclude",
      "plural": true,
      "selections": [
        (v17/*: any*/),
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "component",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            (v8/*: any*/),
            (v23/*: any*/),
            (v24/*: any*/),
            {
              "kind": "InlineFragment",
              "type": "component_responsive_columns",
              "selections": [
                (v9/*: any*/),
                (v10/*: any*/),
                (v11/*: any*/),
                (v12/*: any*/),
                (v13/*: any*/),
                (v14/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "columns_o",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "component_responsive_columns_columns_o_items",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "item",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "component_responsive_columns_columns_o_item",
                      "plural": true,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "columnSize_s",
                          "args": null,
                          "storageKey": null
                        },
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "content_o",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "ContentIncludeWrapper",
                          "plural": false,
                          "selections": [
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "item",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "ContentInclude",
                              "plural": true,
                              "selections": [
                                (v17/*: any*/),
                                {
                                  "kind": "LinkedField",
                                  "alias": null,
                                  "name": "component",
                                  "storageKey": null,
                                  "args": null,
                                  "concreteType": null,
                                  "plural": false,
                                  "selections": [
                                    (v8/*: any*/),
                                    (v23/*: any*/),
                                    (v24/*: any*/)
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
},
v26 = [
  (v15/*: any*/),
  (v16/*: any*/)
],
v27 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "authorBio_o",
  "storageKey": null,
  "args": null,
  "concreteType": "page_post_authorBio_o_items",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "item",
      "storageKey": null,
      "args": null,
      "concreteType": "page_post_authorBio_o_flattened_item",
      "plural": true,
      "selections": (v18/*: any*/)
    }
  ]
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value_smv",
  "args": null,
  "storageKey": null
},
v29 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "categories_o",
  "storageKey": null,
  "args": null,
  "concreteType": "page_post_categories_o_items",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "item",
      "storageKey": null,
      "args": null,
      "concreteType": "page_post_categories_o_item",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "key",
          "args": [
            {
              "kind": "ObjectValue",
              "name": "filter",
              "fields": [
                {
                  "kind": "Variable",
                  "name": "or",
                  "variableName": "categoriesFilter"
                }
              ]
            }
          ],
          "storageKey": null
        },
        (v28/*: any*/)
      ]
    }
  ]
},
v30 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "tags_o",
  "storageKey": null,
  "args": null,
  "concreteType": "page_post_tags_o_items",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "item",
      "storageKey": null,
      "args": null,
      "concreteType": "page_post_tags_o_item",
      "plural": true,
      "selections": [
        (v28/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "key",
          "args": [
            {
              "kind": "ObjectValue",
              "name": "filter",
              "fields": [
                {
                  "kind": "Variable",
                  "name": "or",
                  "variableName": "tagsFilter"
                }
              ]
            }
          ],
          "storageKey": null
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "byUrlQuery",
    "type": "craftercms_site",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "content",
        "name": "contentItems",
        "storageKey": null,
        "args": null,
        "concreteType": "contentItems_query",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "byUrlQueryContentItemFields",
                "args": null
              },
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "page_entry",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "byUrlQueryHomepage",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_about",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "byUrlQueryAboutPage",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_contact",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "byUrlQueryContactPage",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_category",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "byUrlQueryCategoryPage",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_post",
                "selections": (v5/*: any*/)
              }
            ]
          }
        ]
      },
      (v6/*: any*/),
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "includePosts",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "posts",
            "name": "page_post",
            "storageKey": null,
            "args": (v7/*: any*/),
            "concreteType": "page_post_query",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "items",
                "storageKey": null,
                "args": null,
                "concreteType": "page_post",
                "plural": true,
                "selections": (v5/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "byUrlQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "content",
        "name": "contentItems",
        "storageKey": null,
        "args": null,
        "concreteType": "contentItems_query",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "items",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "page_entry",
                "selections": [
                  (v15/*: any*/),
                  (v16/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "bios_o",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "page_entry_bios_o_items",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "item",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "page_entry_bios_o_flattened_item",
                        "plural": true,
                        "selections": (v18/*: any*/)
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "slider_o",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ContentIncludeWrapper",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "item",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ContentInclude",
                        "plural": true,
                        "selections": [
                          (v17/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "component",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v10/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/),
                              (v13/*: any*/),
                              (v14/*: any*/),
                              {
                                "kind": "InlineFragment",
                                "type": "component_slider",
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "posts_o",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "component_slider_posts_o_items",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "item",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "component_slider_posts_o_flattened_item",
                                        "plural": true,
                                        "selections": [
                                          (v17/*: any*/),
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "component",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "component_post",
                                            "plural": false,
                                            "selections": [
                                              (v9/*: any*/),
                                              (v10/*: any*/),
                                              (v11/*: any*/),
                                              (v12/*: any*/),
                                              (v13/*: any*/),
                                              (v14/*: any*/),
                                              (v19/*: any*/),
                                              (v15/*: any*/),
                                              (v16/*: any*/),
                                              (v20/*: any*/),
                                              (v21/*: any*/),
                                              (v22/*: any*/)
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_about",
                "selections": [
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v21/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "bios_o",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "page_about_bios_o_items",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "item",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "page_about_bios_o_flattened_item",
                        "plural": true,
                        "selections": (v18/*: any*/)
                      }
                    ]
                  },
                  (v25/*: any*/)
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "page_contact",
                "selections": (v26/*: any*/)
              },
              {
                "kind": "InlineFragment",
                "type": "page_category",
                "selections": (v26/*: any*/)
              },
              {
                "kind": "InlineFragment",
                "type": "page_post",
                "selections": [
                  (v19/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v25/*: any*/),
                  (v27/*: any*/),
                  (v29/*: any*/),
                  (v30/*: any*/)
                ]
              }
            ]
          }
        ]
      },
      (v6/*: any*/),
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "includePosts",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": "posts",
            "name": "page_post",
            "storageKey": null,
            "args": (v7/*: any*/),
            "concreteType": "page_post_query",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "items",
                "storageKey": null,
                "args": null,
                "concreteType": "page_post",
                "plural": true,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v19/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v20/*: any*/),
                  (v21/*: any*/),
                  (v22/*: any*/),
                  (v25/*: any*/),
                  (v27/*: any*/),
                  (v29/*: any*/),
                  (v30/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "byUrlQuery",
    "id": null,
    "text": "query byUrlQuery(\n  $url: String\n  $skipContentType: Boolean = true\n  $includePosts: Boolean = true\n  $postsLimit: Int = 8\n  $postsOffset: Int = 0\n  $exclude: String = \"\"\n  $categoriesFilter: [TextFilters!] = []\n  $tagsFilter: [TextFilters!] = []\n) {\n  content: contentItems {\n    total\n    items {\n      __typename\n      ...byUrlQueryContentItemFields\n      url: localId(transform: \"storeUrlToRenderUrl\", filter: {regex: $url})\n      content__type(filter: {regex: \".*(bio|post|entry|category|tag|contact|about|search).*\"}) @skip(if: $skipContentType)\n      ... on page_entry {\n        ...byUrlQueryHomepage\n      }\n      ... on page_about {\n        ...byUrlQueryAboutPage\n      }\n      ... on page_contact {\n        ...byUrlQueryContactPage\n      }\n      ... on page_category {\n        ...byUrlQueryCategoryPage\n      }\n      ... on page_post {\n        ...byUrlQueryPostPage\n      }\n    }\n  }\n  levelDescriptors: component_level__descriptor {\n    items {\n      siteTitle_s\n      file__name\n      websiteShortname_s\n      socialLinks_o {\n        item {\n          socialNetwork_s\n          label_s\n          url_s\n        }\n      }\n    }\n  }\n  posts: page_post(limit: $postsLimit, offset: $postsOffset, sortOrder: DESC, sortBy: \"lastModifiedDate_dt\") @include(if: $includePosts) {\n    total\n    items {\n      ...byUrlQueryPostPage\n    }\n  }\n}\n\nfragment byUrlQueryAboutPage on page_about {\n  pageTitle_s\n  pageDescription_s\n  headline_s\n  bios_o {\n    item {\n      key\n      component {\n        ...byUrlQueryBioFragment\n      }\n    }\n  }\n  content_o {\n    item {\n      key\n      component {\n        __typename\n        ... on component_rich_text {\n          ...byUrlQueryRichText\n        }\n        ... on component_image {\n          ...byUrlQueryImage\n        }\n        ... on component_responsive_columns {\n          ...byUrlQueryResponsiveColumns\n        }\n      }\n    }\n  }\n}\n\nfragment byUrlQueryBioFragment on component_bio {\n  guid: objectId\n  contentTypeId: content__type\n  label: internal__name\n  path: localId\n  bio_t\n  name_s\n  profilePic_s\n  linkButtonText_s\n  linkButtonUrl_s\n  showLinkButton_b\n}\n\nfragment byUrlQueryCategoryPage on page_category {\n  pageTitle_s\n  pageDescription_s\n}\n\nfragment byUrlQueryContactPage on page_contact {\n  pageTitle_s\n  pageDescription_s\n}\n\nfragment byUrlQueryContentItemFields on ContentItem {\n  guid: objectId\n  path: localId(filter: {not: [{equals: $exclude}]})\n  contentTypeId: content__type\n  dateCreated: createdDate_dt\n  dateModified: lastModifiedDate_dt\n  label: internal__name\n}\n\nfragment byUrlQueryHomepage on page_entry {\n  pageTitle_s\n  pageDescription_s\n  bios_o {\n    item {\n      key\n      component {\n        ...byUrlQueryBioFragment\n      }\n    }\n  }\n  slider_o {\n    item {\n      key\n      component {\n        __typename\n        ...byUrlQueryContentItemFields\n        ... on component_slider {\n          ...byUrlQuerySlider\n        }\n      }\n    }\n  }\n}\n\nfragment byUrlQueryImage on component_image {\n  ...byUrlQueryContentItemFields\n  image_s\n  alternativeText_s\n}\n\nfragment byUrlQueryPostPage on page_post {\n  ...byUrlQueryContentItemFields\n  slug: localId(transform: \"storeUrlToRenderUrl\")\n  pageTitle_s\n  pageDescription_s\n  blurb_t\n  headline_s\n  mainImage_s\n  content_o {\n    item {\n      key\n      component {\n        __typename\n        ... on component_rich_text {\n          ...byUrlQueryRichText\n        }\n        ... on component_image {\n          ...byUrlQueryImage\n        }\n        ... on component_responsive_columns {\n          ...byUrlQueryResponsiveColumns\n        }\n      }\n    }\n  }\n  authorBio_o {\n    item {\n      key\n      component {\n        ...byUrlQueryBioFragment\n      }\n    }\n  }\n  categories_o {\n    item {\n      key(filter: {or: $categoriesFilter})\n      value_smv\n    }\n  }\n  tags_o {\n    item {\n      value_smv\n      key(filter: {or: $tagsFilter})\n    }\n  }\n}\n\nfragment byUrlQueryResponsiveColumns on component_responsive_columns {\n  ...byUrlQueryContentItemFields\n  columns_o {\n    item {\n      columnSize_s\n      content_o {\n        item {\n          key\n          component {\n            __typename\n            ... on component_rich_text {\n              ...byUrlQueryRichText\n            }\n            ... on component_image {\n              ...byUrlQueryImage\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment byUrlQueryRichText on component_rich_text {\n  ...byUrlQueryContentItemFields\n  content_html_raw\n}\n\nfragment byUrlQuerySlider on component_slider {\n  ...byUrlQueryContentItemFields\n  posts_o {\n    item {\n      key\n      component {\n        ...byUrlQueryContentItemFields\n        slug: localId(transform: \"storeUrlToRenderUrl\")\n        pageTitle_s\n        pageDescription_s\n        blurb_t\n        headline_s\n        mainImage_s\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '14dc54f0c4cb7a0493aa114db39c3a26';

module.exports = node;
