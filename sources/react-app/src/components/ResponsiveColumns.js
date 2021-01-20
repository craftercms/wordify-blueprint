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
import ContentType from '../shared/ContentType';
import DropZone from '../shared/DropZone';

function ResponsiveColumns(props) {
  const {
    ice,
    model,
    parentModelId,
    model: { columns_o }
  } = props;
  const modelId = model.craftercms.id;
  return (
    <div {...ice} className="row mb-5">
      {
        columns_o?.map(({ columnSize_s, content_o }, index) =>
          <DropZone
            model={model}
            component="div"
            fieldId="content_o"
            className={`col-md-${columnSize_s} mb-4`}
            key={`${modelId}_${columnSize_s}_${index}`}
          >
            {
              content_o?.map?.(component =>
                <ContentType
                  key={component.craftercms.id}
                  model={component}
                  parentModelId={parentModelId}
                />
              )
            }
          </DropZone>
        )
      }
    </div>
  );
}

export default ResponsiveColumns;
