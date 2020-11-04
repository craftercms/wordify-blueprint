/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryBioFragment$ref = any;
type byUrlQueryContentItemFields$ref = any;
type byUrlQueryImage$ref = any;
type byUrlQueryResponsiveColumns$ref = any;
type byUrlQueryRichText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryPostPage$ref: FragmentReference;
declare export opaque type byUrlQueryPostPage$fragmentType: byUrlQueryPostPage$ref;
export type byUrlQueryPostPage = {|
  +slug: ?string,
  +pageTitle_s: ?string,
  +pageDescription_s: ?string,
  +blurb_t: ?string,
  +headline_s: ?string,
  +mainImage_s: ?string,
  +content_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryRichText$ref & byUrlQueryImage$ref & byUrlQueryResponsiveColumns$ref
      |},
    |}>
  |},
  +authorBio_o: ?{|
    +item: ?$ReadOnlyArray<{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryBioFragment$ref
      |},
    |}>
  |},
  +categories_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +key: ?string,
      +value_smv: ?string,
    |}>
  |},
  +tags_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +value_smv: ?string,
      +key: ?string,
    |}>
  |},
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  +$refType: byUrlQueryPostPage$ref,
|};
export type byUrlQueryPostPage$data = byUrlQueryPostPage;
export type byUrlQueryPostPage$key = {
  +$data?: byUrlQueryPostPage$data,
  +$fragmentRefs: byUrlQueryPostPage$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "key",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value_smv",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "byUrlQueryPostPage",
  "type": "page_post",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "categoriesFilter",
      "type": "[TextFilters!]"
    },
    {
      "kind": "RootArgument",
      "name": "tagsFilter",
      "type": "[TextFilters!]"
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "slug",
      "name": "localId",
      "args": [
        {
          "kind": "Literal",
          "name": "transform",
          "value": "storeUrlToRenderUrl"
        }
      ],
      "storageKey": "localId(transform:\"storeUrlToRenderUrl\")"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pageTitle_s",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "pageDescription_s",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "blurb_t",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "headline_s",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mainImage_s",
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
            (v0/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "component",
              "storageKey": null,
              "args": null,
              "concreteType": null,
              "plural": false,
              "selections": [
                {
                  "kind": "InlineFragment",
                  "type": "component_rich_text",
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "byUrlQueryRichText",
                      "args": null
                    }
                  ]
                },
                {
                  "kind": "InlineFragment",
                  "type": "component_image",
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "byUrlQueryImage",
                      "args": null
                    }
                  ]
                },
                {
                  "kind": "InlineFragment",
                  "type": "component_responsive_columns",
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "byUrlQueryResponsiveColumns",
                      "args": null
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
          "selections": [
            (v0/*: any*/),
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "component",
              "storageKey": null,
              "args": null,
              "concreteType": "component_bio",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "byUrlQueryBioFragment",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
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
            (v1/*: any*/)
          ]
        }
      ]
    },
    {
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
            (v1/*: any*/),
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
    },
    {
      "kind": "FragmentSpread",
      "name": "byUrlQueryContentItemFields",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3bfa0d0ac9ddafa16f2cd336dc1433c';

module.exports = node;
