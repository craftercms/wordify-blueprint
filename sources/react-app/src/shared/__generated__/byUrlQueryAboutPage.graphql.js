/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryBioFragment$ref = any;
type byUrlQueryImage$ref = any;
type byUrlQueryResponsiveColumns$ref = any;
type byUrlQueryRichText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryAboutPage$ref: FragmentReference;
declare export opaque type byUrlQueryAboutPage$fragmentType: byUrlQueryAboutPage$ref;
export type byUrlQueryAboutPage = {|
  +pageTitle_s: ?string,
  +pageDescription_s: ?string,
  +headline_s: ?string,
  +bios_o: ?{|
    +item: ?$ReadOnlyArray<{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryBioFragment$ref
      |},
    |}>
  |},
  +content_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryRichText$ref & byUrlQueryImage$ref & byUrlQueryResponsiveColumns$ref
      |},
    |}>
  |},
  +$refType: byUrlQueryAboutPage$ref,
|};
export type byUrlQueryAboutPage$data = byUrlQueryAboutPage;
export type byUrlQueryAboutPage$key = {
  +$data?: byUrlQueryAboutPage$data,
  +$fragmentRefs: byUrlQueryAboutPage$ref,
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
};
return {
  "kind": "Fragment",
  "name": "byUrlQueryAboutPage",
  "type": "page_about",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "headline_s",
      "args": null,
      "storageKey": null
    },
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9e248a521c329b957c7e20a2c61b68e';

module.exports = node;
