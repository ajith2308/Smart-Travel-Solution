
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { heroBg } from '@/assets';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroBg}
          alt="India landscape" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover the Magic of <span className="text-india-orange">India</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Explore India's rich cultural heritage, breathtaking landscapes, and unforgettable experiences with our personalized trip planning service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/destinations">
            <Button size="lg" className="px-8 bg-india-orange hover:bg-india-orange/90">
              Explore Destinations
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="lg" variant="outline" className="px-8 bg-transparent text-white border-white hover:bg-white/10">
              Create Your Trip
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
