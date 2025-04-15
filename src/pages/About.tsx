
import React from 'react';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-india-blue mb-4">About India Trip Tales</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted partner for exploring the incredible diversity and beauty of India
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-india-blue mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            At India Trip Tales, we're passionate about showcasing the rich cultural heritage, 
            breathtaking landscapes, and diverse experiences that India has to offer. 
            Our mission is to make travel planning accessible, personalized, and exciting 
            for travelers from all walks of life.
          </p>
          <p className="text-gray-700">
            We believe that travel should be transformative, educational, and memorable. 
            That's why we focus on providing detailed information, authentic experiences, 
            and budget-friendly options to help you create the perfect Indian adventure.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-india-blue mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023 by a group of travel enthusiasts and experts, India Trip Tales 
            was born out of a shared love for India's incredible diversity and a desire to 
            make it more accessible to travelers worldwide.
          </p>
          <p className="text-gray-700">
            Having experienced the challenges of planning trips across this vast country, 
            our team set out to create a comprehensive resource that combines local knowledge, 
            practical information, and personalized recommendations to make your journey through 
            India seamless and unforgettable.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-india-blue text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-india-orange/10 p-4 rounded-full mb-4">
              <Globe className="text-india-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-600">
              Our team has extensive knowledge of Indian destinations, culture, and customs
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-india-orange/10 p-4 rounded-full mb-4">
              <Users className="text-india-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="text-gray-600">
              We tailor recommendations based on your interests, budget, and travel style
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-india-orange/10 p-4 rounded-full mb-4">
              <Award className="text-india-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We personally vet accommodations, activities, and services we recommend
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-india-orange/10 p-4 rounded-full mb-4">
              <Clock className="text-india-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Time-Saving</h3>
            <p className="text-gray-600">
              Our platform streamlines the planning process so you can focus on enjoying your trip
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-india-blue mb-4">Our Team</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          India Trip Tales is powered by a diverse team of travel experts, local guides, content creators, 
          and technology enthusiasts who share a common passion for India and travel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Team Member cards would go here in a real implementation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Rahul Sharma</h3>
            <p className="text-india-orange mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              Travel enthusiast with over 15 years of experience exploring India's hidden gems
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Priya Patel</h3>
            <p className="text-india-orange mb-2">Head of Content</p>
            <p className="text-gray-600 text-sm">
              Former travel journalist with a passion for storytelling and cultural experiences
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Amit Verma</h3>
            <p className="text-india-orange mb-2">Lead Developer</p>
            <p className="text-gray-600 text-sm">
              Tech enthusiast focused on creating seamless digital travel experiences
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-india-blue mb-4">Join Our Journey</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          We're constantly growing and improving our platform to better serve travelers like you. 
          Follow our journey, share your experiences, and become part of our community of India enthusiasts!
        </p>
      </div>
    </div>
  );
};

export default About;
