import React, { useEffect, useState } from 'react';

import CircularProgressSpinner from './CircularProgressSpinner';
import { fetchQuery } from '../relayEnvironment';
import byUrlQuery from './byUrlQuery';
import ContentType from './ContentType';
import { parseDescriptor } from '@craftercms/content';

export default function DynamicRoute(props) {

  const { match } = props;
  const url = match.url;
  const [state, setState] = useState(null);

  useEffect(() => {
    let destroyed = false;
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

