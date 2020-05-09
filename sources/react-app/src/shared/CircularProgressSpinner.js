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

export default function CircularProgressSpinner(props) {
  const { message, screenHeight = true } = props;
  return (
    <div className={`circular-progress-spinner ${screenHeight ? 'circular-progress-spinner__screen-height' : ''}`}>
      <div className="circular-progress-spinner--graphic-container">
        <svg className="circular-progress-spinner--graphic">
          <circle className="circular-progress-spinner--path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
      {
        message &&
        <p className="circular-progress-spinner--message">{message}</p>
      }
    </div>
  );
}
