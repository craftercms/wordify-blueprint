/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryContentItemFields$ref = any;
type byUrlQueryImage$ref = any;
type byUrlQueryRichText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryResponsiveColumns$ref: FragmentReference;
declare export opaque type byUrlQueryResponsiveColumns$fragmentType: byUrlQueryResponsiveColumns$ref;
export type byUrlQueryResponsiveColumns = {|
  +columns_o: ?{|
    +item: ?$ReadOnlyArray<?{|
      +columnSize_s: ?string,
      +content_o: ?{|
        +item: ?$ReadOnlyArray<?{|
          +key: string,
          +component: ?{|
            +$fragmentRefs: byUrlQueryRichText$ref & byUrlQueryImage$ref
          |},
        |}>
      |},
    |}>
  |},
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  +$refType: byUrlQueryResponsiveColumns$ref,
|};
export type byUrlQueryResponsiveColumns$data = byUrlQueryResponsiveColumns;
export type byUrlQueryResponsiveColumns$key = {
  +$data?: byUrlQueryResponsiveColumns$data,
  +$fragmentRefs: byUrlQueryResponsiveColumns$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryResponsiveColumns",
  "type": "component_responsive_columns",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "kind": "FragmentSpread",
      "name": "byUrlQueryContentItemFields",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '05c28c2671e503b3398e070313f7c512';

module.exports = node;
