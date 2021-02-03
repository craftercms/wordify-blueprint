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
import { Field, RenderField } from '@craftercms/studio-guest';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

function PostCard(props) {
  const { formatDate } = useIntl();
  const {
    classes,
    format = PORTRAIT,
    showBlurb = false,
    numOfComments,
    model,
    model: {
      authorBio_o: [{
        name_s: authorName,
        profilePic_s: authorAvatarUrl
      }],
      headline_s,
      mainImage_s,
      mainImageAlt_s = '',
      categories_o,
      craftercms: {
        dateModified
      }
    }
  } = props;
  const slug = computeSlug(model.craftercms.path);
  switch (format) {
    case PORTRAIT:
      return (
        <Field
          component={Link}
          model={model}
          to={slug}
          className={`blog-entry ${classes?.root ?? ''}`}
        >
          <div className="img-container">
            <RenderField
              component="img"
              model={model}
              renderTarget="src"
              fieldId="mainImage_s"
              alt={mainImageAlt_s}
            />
          </div>
          <div className="blog-content-body">
            <div className="post-meta">
              <Field
                component="span"
                model={model}
                fieldId="authorBio_o"
                index={0}
                className="author mr-2"
              >
                <img src={authorAvatarUrl} alt="" /> {authorName}
              </Field>
              {' • '}<span className="mr-2">{formatDate(dateModified)}</span>
              {
                numOfComments &&
                <>
                  {' • '}<span className="ml-2"><span className="fa fa-comments" /> {numOfComments}
                </span>
                </>
              }
            </div>
            <RenderField component="h2" model={model} fieldId="headline_s" />
          </div>
        </Field>
      );
    case LANDSCAPE:
      return (
        <div className="post-entry-horizontal">
          {/* Notice: Adding the ICE to the above element wouldn't stop
              the link from navigating when clicked */}
          <Field component={Link} model={model} to={slug} className={classes?.root}>
            <RenderField
              model={model}
              fieldId="mainImage_s"
              renderTarget="style.backgroundImage"
              format={(src) => `url(${src})`}
              className="image"
            />
            <span className="text">
              <div className="post-meta">
                <Field className="author mr-2" model={model} fieldId="authorBio_o" index={0}>
                  <img src={authorAvatarUrl} alt={mainImageAlt_s} /> {authorName}
                </Field>
                • <span className="mr-2">{formatDate(dateModified)}</span>
                {
                  numOfComments &&
                  <>
                    • <span className="ml-2"><span className="fa fa-comments" /> ${numOfComments}</span>
                  </>
                }
              </div>
              <RenderField component="h2" fieldId="headline_s" model={model} />
            </span>
          </Field>
        </div>
      );
    case LANDSCAPE_COMPRESSED:
      return (
        <Field component={Link} model={model} to={slug} className={classes?.root}>
          <RenderField
            component="img"
            renderTarget="src"
            model={model}
            fieldId="mainImage_s"
            className="mr-4"
            alt=""
          />
          <div className="text">
            <RenderField component="h4" model={model} fieldId="headline_s" />
            <div className="post-meta">
              <span className="mr-2">{formatDate(dateModified)}</span>
            </div>
          </div>
        </Field>
      );
    case IMAGE_BACKGROUND:
      return (
        <Field
          model={model}
          fieldId="mainImage_s"
          className={`a-block d-flex align-items-center ${classes?.root ?? ''}`}
          style={{ backgroundImage: `url(${mainImage_s})` }}
        >
          <Field
            component={Link}
            model={model}
            to={slug}
            className={`text ${classes?.innerWrapper}`}
          >
            <div className="post-meta">
              {
                categories_o &&
                <>
                  {
                    categories_o?.map(category =>
                      <span className="category" key={category.key}>{category.value_smv}</span>
                    )
                  }

                  {' • '}
                </>
              }
              <span className="mr-2">{formatDate(dateModified)}</span>
              {
                numOfComments &&
                <>
                  {' • '}<span className="ml-2"><span className="fa fa-comments" /> {numOfComments}
                </span>
                </>
              }
            </div>
            <RenderField component="h3" model={model} fieldId="headline_s" />
            {
              showBlurb && <RenderField component="p" model={model} fieldId="blurb_t" />
            }
          </Field>
        </Field>
      );
    default:
      console.error(`Unknown PostCard format "${format}" on post "${headline_s}"`);
      return (
        <Field component={Link} model={model} to={slug} className={classes?.root}>
          <h2>{headline_s}</h2>
        </Field>
      );
  }
}

function computeSlug(path) {
  return path
    .replace(/(\/site\/components)|(index\.xml)/g, '')
    .replace(/(\/site\/website)|(index\.xml)/g, '')
    .replace(/(\/\/)/g, '/')
    .replace('.xml', '');
}

export default PostCard;