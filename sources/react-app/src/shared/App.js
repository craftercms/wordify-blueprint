import React, { Suspense, useEffect } from 'react';
import Router from './Router';
import CircularProgressSpinner from './CircularProgressSpinner';
import { GlobalContextProvider } from './context';
import AppIntl from './AppIntl';
import { isAuthoring } from './utils';
import { addAuthoringSupport } from '@craftercms/ice/esm2015/ice';

export default function App() {
  useEffect(() => {
    if (isAuthoring()) {
      addAuthoringSupport();
    }
  }, []);
  return (
    <GlobalContextProvider>
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
