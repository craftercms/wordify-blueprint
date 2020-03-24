import React from 'react';
import { FormattedMessage } from 'react-intl';
import PostCard, { LANDSCAPE_COMPRESSED } from './PostCard';

export default function ({ posts }) {
  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="common.popularPostsTitle"
          defaultMessage="Popular Posts"
        />
      </h3>
      <div className="post-entry-sidebar">
        <ul>
          {
            posts?.map((post) =>
              <li key={post.craftercms.id}>
                <PostCard model={post} format={LANDSCAPE_COMPRESSED} />
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
