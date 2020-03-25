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
import CircularProgressSpinner from './CircularProgressSpinner';
import environment from '../relayEnvironment';
import { QueryRenderer } from 'react-relay';
import byUrlQuery from './byUrlQuery';

export default function ({ error, props, retry, render }) {
  if (error) {
    return <h1>Oops an error occurred.</h1>;
  } else if (!props) {
    return <CircularProgressSpinner />;
  } else {
    return render(props);
  }
}

export const createRenderProp = (render) => (
  ({ error, props, retry }) => {
    if (error) {
      return <h1>Oops an error occurred.</h1>;
    } else if (!props) {
      return <CircularProgressSpinner />;
    } else {
      return render(props);
    }
  }
);

export const ByUrlQuery = ({ render, url }) => (
  <QueryRenderer
    variables={{ url: `.*${url === '/' ? 'website/index' : url}.*` }}
    render={createRenderProp(render)}
    environment={environment}
    query={byUrlQuery}
  />
);
