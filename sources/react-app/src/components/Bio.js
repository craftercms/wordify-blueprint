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
import { Field, RenderField } from '@craftercms/studio-guest';

function Bio(props) {
  const {
    model,
    model: {
      linkButtonText_s,
      showLinkButton_b,
      facebookLink_s,
      twitterLink_s,
      instagramLink_s,
      youTubeLink_s
    }
  } = props;
  return (
    <Field className="bio text-center" model={model}>
      <RenderField
        component="img"
        renderTarget="src"
        model={model}
        fieldId="profilePic_s"
        className="img-fluid"
        alt=""
      />
      <div className="bio-body">
        <RenderField component="h2" model={model} fieldId="name_s" />
        {
          showLinkButton_b &&
          linkButtonText_s &&
          <p>
            <RenderField
              component="a"
              model={model}
              fieldId="linkButtonText_s,linkButtonUrl_s"
              renderTarget="children,href"
              className="btn btn-primary btn-sm rounded bio-link"
            />
          </p>
        }
        <RenderField component="p" model={model} fieldId="bio_t" />
        <p className="social">
          {
            facebookLink_s &&
            <a href={facebookLink_s} className="p-2" target="_blank" rel="noreferrer noopener">
              <span className="fa fa-facebook" />
            </a>
          }
          {
            twitterLink_s &&
            <a href={twitterLink_s} className="p-2" target="_blank" rel="noreferrer noopener">
              <span className="fa fa-twitter" />
            </a>
          }
          {
            instagramLink_s &&
            <a href={instagramLink_s} className="p-2" target="_blank" rel="noreferrer noopener">
              <span className="fa fa-instagram" />
            </a>
          }
          {
            youTubeLink_s &&
            <a href={youTubeLink_s} className="p-2" target="_blank" rel="noreferrer noopener">
              <span className="fa fa-youtube-play" />
            </a>
          }
        </p>
      </div>
    </Field>
  );
}

export default Bio;
