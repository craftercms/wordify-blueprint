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

import React, { useEffect } from 'react'

const Comments = ({ id, websiteShortname }) => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script';
    const sd = document.getElementById(DISQUS_SCRIPT);
    if (!sd) {
      var disqus_config = function() {
        this.page.url = window.location.origin
        this.page.identifier = id
      }

      const d = document;
      const s = d.createElement('script');
      s.src = `https://${websiteShortname??'DISQUS'}.disqus.com/embed.js`;
      s.id = DISQUS_SCRIPT;
      s.async = true;
      s.setAttribute('data-timestamp', + new Date());

      d.body.appendChild(s);
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      });
    }
  }, [id, websiteShortname])
  return (
    <>
      <div id="disqus_recommendations" />   {/* if disqus recommendations are disabled (default) this won't populate */}
      <div id="disqus_thread" className="mt-5" />
    </>
  );
}

export const CommentsCount = ({ id, websiteShortname }) => {
  useEffect(() => {
    const DISQUS_COUNT_SCRIPT = 'dsq-count-scr';
    const disqusCountEl = document.getElementById(DISQUS_COUNT_SCRIPT);

    if (!disqusCountEl){
      const d = document;
      const s = d.createElement('script');
      s.src = `https://${websiteShortname??'DISQUS'}.disqus.com/count.js`;
      s.id = DISQUS_COUNT_SCRIPT;
      s.async = true;

      d.body.appendChild(s);
    }
  }, [id, websiteShortname]);

  return <span className="disqus-comment-count" data-disqus-identifier={id} data-disqus-url={window.location.origin} />
}

export default Comments
