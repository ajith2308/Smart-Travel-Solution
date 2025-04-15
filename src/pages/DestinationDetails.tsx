
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CalendarRange, Star, MapPin, DollarSign, Clock, Utensils, Home, Car, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { destinations } from '@/data/destinations';
import { useUser } from '@/context/UserContext';
import { useToast } from '@/hooks/use-toast';

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();
  
  const destination = destinations.find(d => d.id === id);
  
  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Destination not found</h2>
        <p className="mb-8">Sorry, the destination you're looking for does not exist.</p>
        <Button onClick={() => navigate('/destinations')}>
          Back to Destinations
        </Button>
      </div>
    );
  }
  
  const handlePlanTrip = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please log in to plan a trip",
        variant: "destructive"
      });
      navigate('/login');
      return;
    }
    
    // In a real app, this would navigate to a trip planning page or add to itinerary
    toast({
      title: "Success",
      description: `${destination.name} has been added to your trip planner`
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Hero Section with Image */}
      <div className="relative h-[50vh] mb-10 rounded-xl overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
          <div className="flex items-center text-white mb-3">
            <MapPin className="mr-2" size={20} />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-india-orange text-white px-3 py-1 text-sm">
              {destination.category}
            </Badge>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="text-india-gold mr-1 fill-current" size={18} />
              <span className="text-white font-medium">{destination.rating}</span>
              <span className="text-white/80 ml-1">({destination.reviews} reviews)</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <DollarSign className="text-white mr-1" size={18} />
              <span className="text-white">₹{destination.price}/day</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">About {destination.name}</h2>
            <p className="text-gray-700 mb-6">
              {destination.description}
              {/* Additional description for demonstration */}
              <br /><br />
              This iconic destination offers visitors a chance to experience the rich cultural heritage and natural beauty of India. 
              Whether you're a history enthusiast, nature lover, or simply seeking a memorable travel experience, 
              {destination.name} has something to offer for everyone.
              <br /><br />
              The area is well-connected by roads and public transportation, making it accessible for all types of travelers. 
              Local guides are available to provide insightful tours and share fascinating stories about the region's history and significance.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {destination.bestTimeToVisit.map(month => (
                <Badge key={month} variant="outline" className="px-3 py-1">
                  <CalendarRange className="mr-1" size={16} />
                  {month}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-3">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {destination.amenities.map(amenity => (
                <div key={amenity} className="flex items-center">
                  <Compass className="text-india-blue mr-2" size={18} />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Local Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <Utensils className="text-india-orange mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Local Cuisine</h3>
                      <p className="text-gray-600 text-sm">
                        Explore the flavors of regional dishes and specialties unique to the area.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <Home className="text-india-orange mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Accommodation</h3>
                      <p className="text-gray-600 text-sm">
                        Options range from luxury hotels to budget-friendly hostels and homestays.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <Car className="text-india-orange mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Transportation</h3>
                      <p className="text-gray-600 text-sm">
                        Local transportation options include taxis, auto-rickshaws, and public buses.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start">
                    <Clock className="text-india-orange mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Best Times</h3>
                      <p className="text-gray-600 text-sm">
                        Ideal visiting hours and seasonal considerations for the best experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Plan Your Trip</h2>
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Price</h3>
              <div className="text-2xl font-bold text-india-blue mb-1">
                ₹{destination.price}
                <span className="text-sm font-normal text-gray-500">/person/day</span>
              </div>
              <p className="text-sm text-gray-500">Includes basic transportation and activities</p>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Recommended Stay</h3>
              <p className="text-sm text-gray-700">
                We recommend spending at least 2-3 days to fully experience {destination.name} and the surrounding areas.
              </p>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Weather</h3>
              <p className="text-sm text-gray-700">
                Best months to visit: {destination.bestTimeToVisit.join(', ')}
              </p>
            </div>
            
            <Button onClick={handlePlanTrip} className="w-full bg-india-orange hover:bg-india-orange/90">
              Add to My Trip
            </Button>
            
            <div className="mt-4 text-xs text-center text-gray-500">
              {user ? 'Your trip will be saved to your profile' : 'Login to save this destination to your trip'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
