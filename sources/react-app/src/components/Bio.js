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
import { Field } from '@craftercms/studio-guest';

export default function (props) {
  const {
    model,
    model: {
      // craftercms: {
      //   id,
      //   contentTypeId,
      //   label,
      //   path,
      // },
      bio_t,
      name_s,
      profilePic_s,
      linkButtonText_s,
      linkButtonUrl_s,
      showLinkButton_b,
      facebookLink_s,
      twitterLink_s,
      instagramLink_s,
      youTubeLink_s
    }
  } = props;
  return (
    <>
      <Field className="bio text-center" model={model}>
        <Field
          component="img"
          src={profilePic_s}
          alt=""
          className="img-fluid"
          model={model}
          fieldId="profilePic_s"
        />
        <div className="bio-body">
          <Field component="h2" model={model} fieldId="name_s">
            {name_s}
          </Field>
          <Field component="p" model={model} fieldId="bio_t">{bio_t}</Field>
          {
            showLinkButton_b &&
            <p>
              <Field component="a" model={model} fieldId="linkButtonText_s,linkButtonUrl_s" href={linkButtonUrl_s} className="btn btn-primary btn-sm rounded">
                {linkButtonText_s}
              </Field>
            </p>
          }
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
    </>
  );
}
