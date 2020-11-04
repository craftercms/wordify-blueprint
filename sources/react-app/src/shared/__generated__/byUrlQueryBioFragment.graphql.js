/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryBioFragment$ref: FragmentReference;
declare export opaque type byUrlQueryBioFragment$fragmentType: byUrlQueryBioFragment$ref;
export type byUrlQueryBioFragment = {|
  +guid: string,
  +contentTypeId: string,
  +label: ?string,
  +path: ?string,
  +bio_t: ?string,
  +name_s: ?string,
  +profilePic_s: ?string,
  +linkButtonText_s: ?string,
  +linkButtonUrl_s: ?string,
  +showLinkButton_b: ?boolean,
  +$refType: byUrlQueryBioFragment$ref,
|};
export type byUrlQueryBioFragment$data = byUrlQueryBioFragment;
export type byUrlQueryBioFragment$key = {
  +$data?: byUrlQueryBioFragment$data,
  +$fragmentRefs: byUrlQueryBioFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryBioFragment",
  "type": "component_bio",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "guid",
      "name": "objectId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "contentTypeId",
      "name": "content__type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "label",
      "name": "internal__name",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = '76948f3ca7927dde2933ce7d1194aac7';

module.exports = node;
