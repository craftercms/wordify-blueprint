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

import { lazy } from 'react';

const map = {
  '/page/entry': lazy(() => import('../pages/Home')),
  '/page/about': lazy(() => import('../pages/About')),
  '/page/contact': lazy(() => import('../pages/Contact')),
  '/page/category': lazy(() => import('../pages/Category')),
  '/page/search': lazy(() => import('../pages/Search')),
  '/component/header': lazy(() => import('../components/Header')),
  '/component/footer': lazy(() => import('../components/Footer')),
  '/component/bio': lazy(() => import('../components/Bio')),
  '/component/image': lazy(() => import('../components/Image')),
  '/component/responsive_columns': lazy(() => import('../components/ResponsiveColumns')),
  '/component/rich_text': lazy(() => import('../components/RichText')),
  '/component/slider': lazy(() => import('../components/Slider')),
  '/component/post': lazy(() => import('../pages/Post'))
};

export default map;
