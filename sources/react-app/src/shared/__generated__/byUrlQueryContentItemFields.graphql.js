/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type byUrlQueryContentItemFields$ref: FragmentReference;
declare export opaque type byUrlQueryContentItemFields$fragmentType: byUrlQueryContentItemFields$ref;
export type byUrlQueryContentItemFields = {|
  +guid: string,
  +path: ?string,
  +contentTypeId: string,
  +dateCreated: any,
  +dateModified: any,
  +label: ?string,
  +$refType: byUrlQueryContentItemFields$ref,
|};
export type byUrlQueryContentItemFields$data = byUrlQueryContentItemFields;
export type byUrlQueryContentItemFields$key = {
  +$data?: byUrlQueryContentItemFields$data,
  +$fragmentRefs: byUrlQueryContentItemFields$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "byUrlQueryContentItemFields",
  "type": "ContentItem",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "exclude",
      "type": "String"
    }
  ],
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
      "alias": "path",
      "name": "localId",
      "args": [
        {
          "kind": "ObjectValue",
          "name": "filter",
          "fields": [
            {
              "kind": "ListValue",
              "name": "not",
              "items": [
                {
                  "kind": "ObjectValue",
                  "name": "not.0",
                  "fields": [
                    {
                      "kind": "Variable",
                      "name": "equals",
                      "variableName": "exclude"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
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
      "alias": "dateCreated",
      "name": "createdDate_dt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "dateModified",
      "name": "lastModifiedDate_dt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "label",
      "name": "internal__name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '27e05fe21b07182bdef2e72a78eba826';

module.exports = node;
