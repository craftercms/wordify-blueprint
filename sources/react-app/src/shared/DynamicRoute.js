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

import React, { useEffect, useState } from 'react';

import CircularProgressSpinner from './CircularProgressSpinner';
import { fetchQuery } from '../relayEnvironment';
import byUrlQuery from './byUrlQuery';
import ContentType from './ContentType';
import { parseDescriptor } from '@craftercms/content';
import { reportNavigation } from '@craftercms/ice';

export default function DynamicRoute(props) {

  const { match } = props;
  const url = match.url;
  const [state, setState] = useState(null);

  useEffect(() => {
    let destroyed = false;
    reportNavigation(url);
    fetchQuery(
      { text: byUrlQuery.params.text.replace(/__typename/g, '') },
      {
        url: `.*${url === '/' ? 'website/index' : url}.*`,
        includePosts: true
      }
    ).then(({ data }) => {
      if (!destroyed) {
        const model = parseDescriptor(data.content.items?.[0]);
        const posts = parseDescriptor(data.posts.items);
        setState({ model, posts });
      }
    });
    return () => {
      destroyed = true;
    };
  }, [url]);

  // return (
  //   <QueryRenderer
  //     variables={{ url: `.*${url === '/' ? 'website/index' : url}.*` }}
  //     render={createRenderProp((props) => {
  //       const content = props.content.items?.[0];
  //       if (!content) {
  //         return <NotFound />;
  //       } else {
  //         // console.log(content, props.content);
  //         return 'ToDo';
  //       }
  //     })}
  //     environment={environment}
  //     query={byUrlQuery}
  //   />
  // );

  if (state === null) {
    return <CircularProgressSpinner />;
  } else {
    return <ContentType {...state} {...props} />;
  }

}

