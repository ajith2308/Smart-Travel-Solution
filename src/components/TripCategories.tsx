
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Palmtree, 
  Mountain, 
  Building2, 
  Landmark, 
  HeartPulse, 
  Trees 
} from 'lucide-react';

const categories = [
  {
    name: 'Beach',
    icon: Palmtree,
    color: 'bg-blue-100 text-blue-700',
    description: 'Relax on beautiful beaches',
    query: 'beach'
  },
  {
    name: 'Mountain',
    icon: Mountain,
    color: 'bg-green-100 text-green-700',
    description: 'Explore majestic mountain ranges',
    query: 'mountain'
  },
  {
    name: 'City',
    icon: Building2,
    color: 'bg-purple-100 text-purple-700',
    description: 'Experience vibrant city life',
    query: 'city'
  },
  {
    name: 'Historical',
    icon: Landmark,
    color: 'bg-amber-100 text-amber-700',
    description: 'Discover ancient heritage sites',
    query: 'historical'
  },
  {
    name: 'Pilgrimage',
    icon: HeartPulse,
    color: 'bg-red-100 text-red-700',
    description: 'Visit sacred spiritual sites',
    query: 'pilgrimage'
  },
  {
    name: 'Nature',
    icon: Trees,
    color: 'bg-emerald-100 text-emerald-700',
    description: 'Connect with natural wonders',
    query: 'nature'
  }
];

const TripCategories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-india-blue mb-2">Explore by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your perfect Indian travel experience based on your interests
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/destinations?category=${category.query}`}
              className="flex flex-col items-center p-6 rounded-lg transition-all hover:shadow-lg border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                <category.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripCategories;
