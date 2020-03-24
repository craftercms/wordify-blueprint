import NotFound, { NotDeveloped } from '../pages/NotFound';
import contentTypeMap from './contentTypeMap';
import React from 'react';
import { usePencil } from './hooks';

export default function (props) {
  const { model } = props;
  const Component = (model === null) ? NotFound : (contentTypeMap[model.craftercms.contentTypeId] || NotDeveloped);
  const ice = usePencil(props);
  return <Component ice={ice} {...props} />;
}
