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

import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { useGlobalContext } from './context';

export default function BaseLayout({ siteTitle, socialLinks, children }) {
  const [{ theme }] = useGlobalContext();
  return (
    <div className={`wrap theme-${theme}`}>
      <Header siteTitle={siteTitle} socialLinks={socialLinks}/>
      <div className="wrap">
        {children}
      </div>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
