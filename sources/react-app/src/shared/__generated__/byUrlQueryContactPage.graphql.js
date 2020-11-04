/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryContactPage$ref: FragmentReference;
declare export opaque type byUrlQueryContactPage$fragmentType: byUrlQueryContactPage$ref;
export type byUrlQueryContactPage = {|
  +pageTitle_s: ?string,
  +pageDescription_s: ?string,
  +$refType: byUrlQueryContactPage$ref,
|};
export type byUrlQueryContactPage$data = byUrlQueryContactPage;
export type byUrlQueryContactPage$key = {
  +$data?: byUrlQueryContactPage$data,
  +$fragmentRefs: byUrlQueryContactPage$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryContactPage",
  "type": "page_contact",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '450b179df63160105fad8ec094d9e3fa';

module.exports = node;
