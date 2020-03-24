import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import { useGlobalContext } from './context';

export default function BaseLayout({ children }) {
  const [{ theme }] = useGlobalContext();
  return (
    <div className={`wrap theme-${theme}`}>
      <Header />
      <div className="wrap">
        {children}
      </div>
      <Footer />
    </div>
  );
}
