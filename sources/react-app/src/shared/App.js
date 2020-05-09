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

import React, { Suspense, useEffect } from 'react';
import Router from './Router';
import CircularProgressSpinner from './CircularProgressSpinner';
import { GlobalContextProvider } from './context';
import AppIntl from './AppIntl';
import { isAuthoring } from './utils';
import { addAuthoringSupport } from '@craftercms/ice/esm2015/ice';

export default function App(props) {
  useEffect(() => {
    if (isAuthoring()) {
      addAuthoringSupport();
    }
  }, []);
  return (
    <GlobalContextProvider jQuery={props.jQuery}>
      <AppIntl>
        <Suspense
          fallback={
            <CircularProgressSpinner />
          }
        >
          <Router />
        </Suspense>
      </AppIntl>
    </GlobalContextProvider>
  );
}
