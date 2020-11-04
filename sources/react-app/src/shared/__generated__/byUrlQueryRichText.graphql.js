/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryContentItemFields$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryRichText$ref: FragmentReference;
declare export opaque type byUrlQueryRichText$fragmentType: byUrlQueryRichText$ref;
export type byUrlQueryRichText = {|
  +content_html_raw: ?string,
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  +$refType: byUrlQueryRichText$ref,
|};
export type byUrlQueryRichText$data = byUrlQueryRichText;
export type byUrlQueryRichText$key = {
  +$data?: byUrlQueryRichText$data,
  +$fragmentRefs: byUrlQueryRichText$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryRichText",
  "type": "component_rich_text",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "content_html_raw",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "byUrlQueryContentItemFields",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3845ad57d4dbb960b97781ef87dae16d';

module.exports = node;
