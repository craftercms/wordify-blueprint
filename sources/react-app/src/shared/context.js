import React, { createContext, useContext, useMemo } from 'react';
import { isAuthoring } from './utils';
import { useSpreadState } from './hooks';

export const GlobalContext = createContext();

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`useGlobalContext must be used within a GlobalContextProvider`);
  }
  return context;
}

function GlobalContextProvider(props) {
  const [state, setState] = useSpreadState({
    isAuthoring: isAuthoring(),
    locale: 'en',
    pages: null,
    pagesLoading: false,
    theme: 'light'
  });
  const value = useMemo(() => [state, setState], [state, setState]);
  return <GlobalContext.Provider value={value} {...props} />;
}

export { GlobalContextProvider, useGlobalContext };
