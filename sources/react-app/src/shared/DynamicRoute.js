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
import { fetchQuery } from '../fetchQuery';
import byUrlQuery from './queries.graphql';
import ContentType from './ContentType';
import { parseDescriptor } from '@craftercms/content';
import { reportNavigation } from '@craftercms/ice';
import { parse } from 'query-string';

const limit = 8;

export default function DynamicRoute(props) {
  const { match, location } = props;
  const [state, setState] = useState(null);
  let url = match.path.includes(':')
    ? match.path.substring(0, match.path.indexOf(':') -1)
    : match.url;

  useEffect(() => {
    let destroyed = false;
    let page = parseInt(parse(location.search).page ?? 1) - 1;
    const pagination = { limit, offset: page ? (page * limit) : 0 };
    reportNavigation(url);
    fetchQuery(
      // { text: byUrlQuery.params.text.replace(/__typename/g, '') },
      { text: byUrlQuery },
      {
        url: `.*${url === '/' ? 'website/index' : url}.*`,
        includePosts: true,
        postsLimit: pagination.limit,
        postsOffset: pagination.offset
      }
    ).then(({ data }) => {
      if (!destroyed) {
        const model = parseDescriptor(data.content.items?.[0]);
        const levelDescriptor = data.levelDescriptors.items
          .filter(levelDescriptor => levelDescriptor.file__name === 'crafter-level-descriptor.level.xml')
          .map(levelDescriptor => levelDescriptor)[0];

        setState({
          model,
          meta: {
            siteTitle: levelDescriptor.siteTitle_s,
            socialLinks: levelDescriptor.socialLinks_o.item,
            disqus: {
              websiteShortname: levelDescriptor.websiteShortname_s
            },
            posts: {
              total: data.posts.total,
              ...pagination
            }
          }
        });
        if (model) {
          document.title = model.pageTitle_s ?? 'Wordify Crafter CMS';
          if (model.pageDescription_s) {
            const description = document.head.querySelector('meta[name="description"]');
            description && description.setAttribute('content', model.pageDescription_s ?? '');
          }
        }
      }
    });
    return () => {
      destroyed = true;
    };
  }, [url, location.search]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [url])

  if (state === null) {
    return <CircularProgressSpinner />;
  } else {
    return <ContentType {...state} {...props} />;
  }

}

