/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type byUrlQueryContentItemFields$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryImage$ref: FragmentReference;
declare export opaque type byUrlQueryImage$fragmentType: byUrlQueryImage$ref;
export type byUrlQueryImage = {|
  +image_s: ?string,
  +alternativeText_s: ?string,
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  +$refType: byUrlQueryImage$ref,
|};
export type byUrlQueryImage$data = byUrlQueryImage;
export type byUrlQueryImage$key = {
  +$data?: byUrlQueryImage$data,
  +$fragmentRefs: byUrlQueryImage$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryImage",
  "type": "component_image",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    },
    {
      "kind": "FragmentSpread",
      "name": "byUrlQueryContentItemFields",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '038ce95c21e5cfeedf270ebe1afa4c01';

module.exports = node;
