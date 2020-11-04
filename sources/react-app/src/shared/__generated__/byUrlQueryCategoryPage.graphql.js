/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryCategoryPage$ref: FragmentReference;
declare export opaque type byUrlQueryCategoryPage$fragmentType: byUrlQueryCategoryPage$ref;
export type byUrlQueryCategoryPage = {|
  +pageTitle_s: ?string,
  +pageDescription_s: ?string,
  +$refType: byUrlQueryCategoryPage$ref,
|};
export type byUrlQueryCategoryPage$data = byUrlQueryCategoryPage;
export type byUrlQueryCategoryPage$key = {
  +$data?: byUrlQueryCategoryPage$data,
  +$fragmentRefs: byUrlQueryCategoryPage$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryCategoryPage",
  "type": "page_category",
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
(node/*: any*/).hash = 'd482ec23369bd2f7a78ef89affae89d0';

module.exports = node;
