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

export default function (props) {
  const {
    ice,
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
      showLinkButton_b
    }
  } = props;
  return (
    <>
      <div className="bio text-center" {...ice}>
        <img src={profilePic_s} alt="" className="img-fluid"/>
        <div className="bio-body">
          <h2>{name_s}</h2>
          <p>{bio_t}</p>
          {
            showLinkButton_b &&
            <p>
              <a href={linkButtonUrl_s} className="btn btn-primary btn-sm rounded">
                {linkButtonText_s}
              </a>
            </p>
          }
          <p className="social">
            <a href="/" className="p-2"><span className="fa fa-facebook"/></a>
            <a href="/" className="p-2"><span className="fa fa-twitter"/></a>
            <a href="/" className="p-2"><span className="fa fa-instagram"/></a>
            <a href="/" className="p-2"><span className="fa fa-youtube-play"/></a>
          </p>
        </div>
      </div>
    </>
  );
}
