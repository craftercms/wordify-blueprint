/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryContentItemFields$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQuerySlider$ref: FragmentReference;
declare export opaque type byUrlQuerySlider$fragmentType: byUrlQuerySlider$ref;
export type byUrlQuerySlider = {|
  +posts_o: ?{|
    +item: ?$ReadOnlyArray<{|
      +key: string,
      +component: ?{|
        +slug: ?string,
        +pageTitle_s: ?string,
        +pageDescription_s: ?string,
        +blurb_t: ?string,
        +headline_s: ?string,
        +mainImage_s: ?string,
        +$fragmentRefs: byUrlQueryContentItemFields$ref,
      |},
    |}>
  |},
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  +$refType: byUrlQuerySlider$ref,
|};
export type byUrlQuerySlider$data = byUrlQuerySlider;
export type byUrlQuerySlider$key = {
  +$data?: byUrlQuerySlider$data,
  +$fragmentRefs: byUrlQuerySlider$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "FragmentSpread",
  "name": "byUrlQueryContentItemFields",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "byUrlQuerySlider",
  "type": "component_slider",
  "metadata": null,
  "argumentDefinitions": [],
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "key",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "component",
              "storageKey": null,
              "args": null,
              "concreteType": "component_post",
              "plural": false,
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
                (v0/*: any*/)
              ]
            }
          ]
        }
      ]
    },
    (v0/*: any*/)
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1f247867b53df53f1f4aa2ed0df9164';

module.exports = node;
