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

import NotFound, { NotDeveloped } from '../pages/NotFound';
import contentTypeMap from './contentTypeMap';
import React from 'react';
import { usePencil } from './hooks';

function ContentTypeWithPencil(props) {
  const ice = usePencil(props);
  return <ContentType ice={ice} {...props} />;
}

export function ContentType(props) {
  const { model } = props;
  const Component = (model === null) ? NotFound : (contentTypeMap[model.craftercms.contentTypeId] || NotDeveloped);
  return <Component {...props} />;
}

export function WrappedContentType(props) {

  const {
    wrapper,
    wrapper: {
      component: Wrapper = 'div'
    } = {
      component: 'div'
    }
  } = props;

  const ice = usePencil(props);

  // Props that get passed down to the wrapper element
  // these could be things like className or any other
  // HTML attributes or props
  const cleanWrapperProps = { ...wrapper };
  delete cleanWrapperProps.component;

  // Props that get passed down to the ContentType
  const cleanPassDownProps = { ...props };
  delete cleanPassDownProps.wrapper;

  return (
    <Wrapper {...ice} {...cleanWrapperProps}>
      <ContentType {...cleanPassDownProps} />
    </Wrapper>
  );
}

export default ContentTypeWithPencil;
