/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryBioFragment$ref = any;
type byUrlQueryContentItemFields$ref = any;
type byUrlQuerySlider$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryHomepage$ref: FragmentReference;
declare export opaque type byUrlQueryHomepage$fragmentType: byUrlQueryHomepage$ref;
export type byUrlQueryHomepage = {|
  +pageTitle_s: ?string,
  +pageDescription_s: ?string,
  +bios_o: ?{|
    +item: ?$ReadOnlyArray<{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryBioFragment$ref
      |},
    |}>
  |},
  +slider_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +key: string,
      +component: ?{|
        +$fragmentRefs: byUrlQueryContentItemFields$ref & byUrlQuerySlider$ref
      |},
    |}>
  |},
  +$refType: byUrlQueryHomepage$ref,
|};
export type byUrlQueryHomepage$data = byUrlQueryHomepage;
export type byUrlQueryHomepage$key = {
  +$data?: byUrlQueryHomepage$data,
  +$fragmentRefs: byUrlQueryHomepage$ref,
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
  "name": "byUrlQueryHomepage",
  "type": "page_entry",
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
                  "kind": "FragmentSpread",
                  "name": "byUrlQueryContentItemFields",
                  "args": null
                },
                {
                  "kind": "InlineFragment",
                  "type": "component_slider",
                  "selections": [
                    {
                      "kind": "FragmentSpread",
                      "name": "byUrlQuerySlider",
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
(node/*: any*/).hash = '39530bd208a04576473e0a3b70e35c3f';

module.exports = node;
