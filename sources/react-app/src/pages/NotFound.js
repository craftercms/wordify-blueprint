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
import BaseLayout from '../shared/BaseLayout';

export default function NotFound() {
  return (
    <BaseLayout>
      <section style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1>Not Found</h1>
        <p>The page you're looking for does not exist.</p>
      </section>
    </BaseLayout>
  );
}

export function NotDeveloped() {
  return (
    <section>
      The page you've selected needs to be created by the site developers.
    </section>
  );
}
