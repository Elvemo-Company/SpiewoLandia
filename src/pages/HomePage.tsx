import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TrustIndicators from '../components/TrustIndicators';
import Testimonials from '../components/Testimonials';
import ServicesOverview from '../components/ServicesOverview';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="hidden md:block">
        <Features />
      </div>
      <TrustIndicators />
      <Testimonials />
      <ServicesOverview />
    </>
  );
};

export default HomePage;