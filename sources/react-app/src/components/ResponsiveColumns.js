import React from 'react';
import ContentType from '../shared/ContentType';

export default function (props) {
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
          <div className={`col-md-${columnSize_s} mb-4`} key={`${modelId}_${columnSize_s}_${index}`}>
            {
              content_o?.map?.(component =>
                <ContentType
                  key={component.craftercms.id}
                  model={component}
                  parentModelId={parentModelId}
                />
              )
            }
          </div>
        )
      }
    </div>
  );
}
