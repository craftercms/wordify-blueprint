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

export default function (props) {
  const {
    category
  } = props;

  const backgroundImage = category.image_s ?? "/static-assets/images/photography.png";

  return(
    <Link to={`/category/${category.key}`} className={`blog-entry category-card`}>
      <img className="background" src={backgroundImage} />
      <h2 className="title">{category.value}</h2>
    </Link>
  )
}
