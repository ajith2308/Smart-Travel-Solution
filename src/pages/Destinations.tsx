
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { Destination, DestinationCategory } from '@/types';

const DestinationsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') as DestinationCategory | null;

  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 3000]);
  const [selectedCategories, setSelectedCategories] = useState<DestinationCategory[]>(
    initialCategory ? [initialCategory] : []
  );
  const [minRating, setMinRating] = useState(0);

  const categories: { value: DestinationCategory; label: string }[] = [
    { value: 'beach', label: 'Beach' },
    { value: 'mountain', label: 'Mountain' },
    { value: 'city', label: 'City' },
    { value: 'historical', label: 'Historical' },
    { value: 'pilgrimage', label: 'Pilgrimage' },
    { value: 'nature', label: 'Nature' }
  ];

  const handleRatingChange = (value: number[]) => {
    setMinRating(value[0]);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleCategoryChange = (category: DestinationCategory, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setPriceRange([1000, 3000]);
    setSelectedCategories([]);
    setMinRating(0);
  };

  useEffect(() => {
    let result = destinations;

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (dest) =>
          dest.name.toLowerCase().includes(search) ||
          dest.location.toLowerCase().includes(search) ||
          dest.description.toLowerCase().includes(search)
      );
    }

    // Filter by price range
    result = result.filter(
      (dest) => dest.price >= priceRange[0] && dest.price <= priceRange[1]
    );

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter((dest) => selectedCategories.includes(dest.category));
    }

    // Filter by rating
    result = result.filter((dest) => dest.rating >= minRating);

    setFilteredDestinations(result);
  }, [searchTerm, priceRange, selectedCategories, minRating]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-india-blue mb-2">Discover India</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find your perfect destination across the diverse landscapes and cultures of India
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Search</h3>
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Price Range (₹/day)</h3>
            <div className="mt-6 px-2">
              <Slider
                defaultValue={[1000, 3000]}
                min={1000}
                max={3000}
                step={100}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Minimum Rating</h3>
            <div className="mt-6 px-2">
              <Slider
                defaultValue={[0]}
                min={0}
                max={5}
                step={0.5}
                value={[minRating]}
                onValueChange={handleRatingChange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>0</span>
                <span>{minRating}</span>
                <span>5</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.value}`}
                    checked={selectedCategories.includes(category.value)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category.value, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`category-${category.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>

        {/* Results Grid */}
        <div className="lg:w-3/4">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No destinations found matching your criteria.</p>
              <Button variant="link" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
