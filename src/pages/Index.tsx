
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TripCategories from '@/components/TripCategories';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestinations />
      <TripCategories />
    </div>
  );
};

export default Index;
