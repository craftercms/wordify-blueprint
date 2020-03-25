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
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useICE } from '@craftercms/ice/esm2015/react';
import { useGlobalContext } from './context';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

export default function (props) {
  const { formatDate } = useIntl();
  const [{ isAuthoring }] = useGlobalContext();
  const {
    classes,
    parentModelId,
    format = PORTRAIT,
    showBlurb = false,
    tags = '',
    numOfComments = 3,
    model,
    model: {
      slug = model.craftercms.path.replace(/(\/site\/website)|(index\.xml)/g, '').replace(/(\/\/)/g, '/'),
      // pageTitle_s,
      // pageDescription_s,
      // authorBio_o,
      authorBio_o: [{
        name_s: authorName,
        profilePic_s: authorAvatarUrl
      }],
      blurb_t,
      // content_o,
      headline_s,
      mainImage_s,
      mainImageAlt_s = '',
      craftercms: {
        dateModified
      },
    }
  } = props;
  const { props: ice } = useICE({ model, parentModelId, isAuthoring });
  switch (format) {
    case PORTRAIT:
      return (
        <Link to={slug} className={`blog-entry ${classes?.root ?? ''}`} {...ice}>
          <img src={mainImage_s} alt={mainImageAlt_s} />
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={authorAvatarUrl} alt="" /> {authorName}
              </span>
              {' • '}<span className="mr-2">{formatDate(dateModified)}</span>
              {' • '}<span className="ml-2"><span className="fa fa-comments" /> {numOfComments}</span>
            </div>
            <h2>{headline_s}</h2>
          </div>
        </Link>
      );
    case LANDSCAPE:
      return (
        <div className="post-entry-horizontal" {...ice}>
          <Link to={slug} className={classes?.root}>
            <div className="image" style={{ backgroundImage: `url(${mainImage_s})` }} />
            <span className="text">
              <div className="post-meta">
                <span className="author mr-2">
                  <img src={authorAvatarUrl} alt="" /> {authorName}
                </span>
                • <span className="mr-2">{formatDate(dateModified)}</span>
                • <span className="ml-2"><span className="fa fa-comments" /> ${numOfComments}</span>
              </div>
              <h2>{headline_s}</h2>
            </span>
          </Link>
        </div>
      );
    case LANDSCAPE_COMPRESSED:
      return (
        <Link to={slug} className={classes?.root} {...ice}>
          <img src={mainImage_s} alt={mainImageAlt_s} className="mr-4" />
          <div className="text">
            <h4>{headline_s}</h4>
            <div className="post-meta">
              <span className="mr-2">{formatDate(dateModified)}</span>
            </div>
          </div>
        </Link>
      );
    case IMAGE_BACKGROUND:
      return (
        <Link
          to={slug}
          className={`a-block d-flex align-items-center ${classes?.root ?? ''}`}
          style={{ backgroundImage: `url(${mainImage_s})` }}
        >
          <div className={`text ${classes?.innerWrapper}`} {...ice}>
            <div className="post-meta">
              {
                tags &&
                <>
                  <span className="category">{tags}</span>
                  {' • '}
                </>
              }
              <span className="mr-2">{formatDate(dateModified)}</span>
              {' • '}<span className="ml-2"><span className="fa fa-comments"/> {numOfComments}</span>
            </div>
            <h3>{headline_s}</h3>
            {
              showBlurb && <p>{blurb_t}</p>
            }
          </div>
        </Link>
      );
    default:
      console.error(`Unknown PostCard format "${format}" on post "${headline_s}"`);
      return (
        <Link to={slug} className={classes?.root} {...ice}>
          <h2>{headline_s}</h2>
        </Link>
      );
  }
}
