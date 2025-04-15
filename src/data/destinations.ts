
import { Destination } from '@/types';
import { 
  tajMahal, 
  varanasi, 
  jaipur, 
  kerala, 
  goa, 
  darjeeling, 
  ladakh, 
  mumbai 
} from '@/assets';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    description: 'The iconic ivory-white marble mausoleum on the south bank of the Yamuna river, one of the most recognized symbols of India.',
    image: tajMahal,
    price: 1500, // per person per day in INR
    rating: 4.8,
    reviews: 4872,
    category: 'historical',
    amenities: ['Guided Tours', 'Photography', 'Cultural Experience'],
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  },
  {
    id: '2',
    name: 'Varanasi Ghats',
    location: 'Varanasi, Uttar Pradesh',
    description: 'Experience the spiritual heart of India with ancient rituals, temples, and the sacred Ganges River.',
    image: varanasi,
    price: 1200,
    rating: 4.6,
    reviews: 3241,
    category: 'pilgrimage',
    amenities: ['Boat Rides', 'Temple Visits', 'Evening Aarti', 'Yoga Classes'],
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  },
  {
    id: '3',
    name: 'Pink City',
    location: 'Jaipur, Rajasthan',
    description: 'Explore the majestic "Pink City" with its magnificent palaces, forts, and vibrant bazaars showcasing Rajasthani culture.',
    image: jaipur,
    price: 1800,
    rating: 4.7,
    reviews: 3729,
    category: 'historical',
    amenities: ['Palace Tours', 'Elephant Rides', 'Shopping', 'Cultural Shows'],
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  },
  {
    id: '4',
    name: 'Kerala Backwaters',
    location: 'Alleppey, Kerala',
    description: 'Cruise through the serene backwaters of Kerala on traditional houseboats, surrounded by lush greenery and village life.',
    image: kerala,
    price: 2500,
    rating: 4.9,
    reviews: 4102,
    category: 'nature',
    amenities: ['Houseboat Stay', 'Ayurvedic Treatments', 'Local Cuisine', 'Cultural Performances'],
    bestTimeToVisit: ['September', 'October', 'November', 'February', 'March']
  },
  {
    id: '5',
    name: 'Goa Beaches',
    location: 'Goa',
    description: 'Relax on pristine beaches, enjoy water sports, and experience the unique blend of Indian and Portuguese cultures.',
    image: goa,
    price: 2000,
    rating: 4.5,
    reviews: 5213,
    category: 'beach',
    amenities: ['Water Sports', 'Beach Parties', 'Portuguese Architecture', 'Seafood'],
    bestTimeToVisit: ['November', 'December', 'January', 'February']
  },
  {
    id: '6',
    name: 'Darjeeling',
    location: 'Darjeeling, West Bengal',
    description: 'Visit tea plantations, ride the Darjeeling Himalayan Railway, and enjoy breathtaking views of the Himalayas.',
    image: darjeeling,
    price: 1700,
    rating: 4.6,
    reviews: 2867,
    category: 'mountain',
    amenities: ['Tea Estate Tours', 'Toy Train Rides', 'Trekking', 'Mountain Views'],
    bestTimeToVisit: ['March', 'April', 'May', 'October', 'November']
  },
  {
    id: '7',
    name: 'Ladakh',
    location: 'Ladakh, Jammu & Kashmir',
    description: 'Discover the high-altitude desert landscapes, ancient monasteries, and unique culture of this Himalayan region.',
    image: ladakh,
    price: 2800,
    rating: 4.8,
    reviews: 3198,
    category: 'mountain',
    amenities: ['Monastery Visits', 'Mountain Biking', 'Camping', 'Star Gazing'],
    bestTimeToVisit: ['June', 'July', 'August', 'September']
  },
  {
    id: '8',
    name: 'Mumbai City',
    location: 'Mumbai, Maharashtra',
    description: 'Experience the bustling metropolis with its colonial architecture, Bollywood influence, and vibrant street life.',
    image: mumbai,
    price: 2200,
    rating: 4.3,
    reviews: 4512,
    category: 'city',
    amenities: ['City Tours', 'Bollywood Experiences', 'Street Food', 'Nightlife'],
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  }
];
