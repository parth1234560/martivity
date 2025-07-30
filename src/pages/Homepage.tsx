import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WhyMartovitySection from '../components/WhyMartovitySection';
import ProductRangeSection from '../components/ProductRangeSection';
import VideoSection from '../components/VideoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhyMartovitySection />
      <ProductRangeSection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Homepage;