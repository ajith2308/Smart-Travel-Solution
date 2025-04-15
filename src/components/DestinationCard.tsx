
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Destination } from '@/types';
import { Badge } from '@/components/ui/badge';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link to={`/destinations/${destination.id}`} className="destination-card block">
      <div className="rounded-lg overflow-hidden shadow-md h-full bg-white">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute top-0 right-0 m-2">
            <Badge className="bg-india-orange hover:bg-india-orange/90">
              ₹{destination.price.toLocaleString()}/day
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1 text-india-blue">{destination.name}</h3>
          
          <div className="flex items-center text-gray-500 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star size={16} className="text-india-gold mr-1 fill-current" />
              <span className="font-medium">{destination.rating}</span>
            </div>
            <span className="text-gray-500 text-sm ml-2">
              ({destination.reviews} reviews)
            </span>
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {destination.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">
              {destination.category}
            </Badge>
            {destination.bestTimeToVisit.slice(0, 2).map((month) => (
              <Badge key={month} variant="secondary" className="text-xs">
                {month}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
