
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '@/data/destinations';
import DestinationCard from './DestinationCard';

const FeaturedDestinations: React.FC = () => {
  // Get 4 featured destinations
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-india-blue mb-2">Popular Destinations</h2>
            <p className="text-gray-600">Discover India's most loved travel destinations</p>
          </div>
          
          <Link to="/destinations" className="flex items-center text-india-orange hover:underline">
            <span className="mr-2">View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
