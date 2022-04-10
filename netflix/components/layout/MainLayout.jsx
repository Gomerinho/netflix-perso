import React from 'react';
import Hero from '../Hero/Hero';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
