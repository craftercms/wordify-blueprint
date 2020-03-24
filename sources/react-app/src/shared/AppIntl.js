import React from 'react';
import { IntlProvider } from 'react-intl';
import { useGlobalContext } from './context';
import en from '../assets/locales/en';
import es from '../assets/locales/es';

const Locales = {
  en,
  es
};

export default (props) => {
  const [{ locale }] = useGlobalContext();
  return <IntlProvider {...props} locale={locale} messages={Locales[locale]}/>;
};
