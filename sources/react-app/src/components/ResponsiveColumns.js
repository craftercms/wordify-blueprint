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
import { ContentType, Field, RenderField } from '@craftercms/studio-guest';
import contentTypeMap from '../shared/contentTypeMap';

function ResponsiveColumns(props) {
  const { model } = props;
  return (
    <Field model={model}>
      <RenderField
        model={model}
        fieldId="columns_o"
        className="row mb-5"
        format={(columns_o) => columns_o?.map(({ columnSize_s, content_o }, index) =>
          <Field
            key={`${model.craftercms.id}_columns_o_${index}`}
            model={model}
            fieldId="columns_o"
            index={index}
            className={`col-md-${columnSize_s} mb-4`}
          >
            <Field model={model} fieldId="columns_o.content_o" index={index}>
              {
                content_o?.map((component, subIndex) =>
                  <Field
                    key={`${component.craftercms.id}_${subIndex}`}
                    model={model}
                    fieldId="columns_o.content_o"
                    index={`${index}.${subIndex}`}
                  >
                    <ContentType
                      model={component}
                      contentTypeMap={contentTypeMap}
                    />
                  </Field>
                )
              }
            </Field>
          </Field>
        )}
      />
    </Field>
  );
}

export default ResponsiveColumns;