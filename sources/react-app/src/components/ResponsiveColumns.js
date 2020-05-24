/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { ContentType, Field } from '@craftercms/studio-guest';
import contentTypeMap from '../shared/contentTypeMap';

export default function (props) {
  const {
    model,
    model: { columns_o }
  } = props;
  const modelId = model.craftercms.id;
  return (
    <Field model={model} className="row mb-5">
      {
        columns_o?.map(({ columnSize_s, content_o }, index) =>
          <Field
            model={model}
            component="div"
            fieldId="columns_o"
            className={`col-md-${columnSize_s} mb-4`}
            key={`${modelId}_${columnSize_s}_${index}`}
          >
            {
              content_o?.map((component, index) =>
                <Field
                  key={component.craftercms.id}
                  model={model}
                  index={index}
                  fieldId="columns_o"
                >
                  <ContentType
                    model={component}
                    contentTypeMap={contentTypeMap}
                  />
                </Field>
              )
            }
          </Field>
        )
      }
    </Field>
  );
}
