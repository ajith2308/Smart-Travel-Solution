
export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  category: DestinationCategory;
  amenities: string[];
  bestTimeToVisit: string[];
}

export type DestinationCategory = 
  | 'beach' 
  | 'mountain' 
  | 'city' 
  | 'historical' 
  | 'pilgrimage' 
  | 'nature';

export interface User {
  id: string;
  name: string;
  email: string;
  profilePic: string;
}

export interface TripPlan {
  id: string;
  name: string;
  destinations: Destination[];
  startDate: Date;
  endDate: Date;
  budget: number;
  userId: string;
}

export interface Review {
  id: string;
  destinationId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}
