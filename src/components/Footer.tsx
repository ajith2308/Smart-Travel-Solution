
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-india-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Smart Travel Solution</h2>
            <p className="mb-4 text-gray-300">
              Your one-stop solution for personalized trip planning in India. Discover the incredible diversity and beauty of the Indian subcontinent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-india-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-india-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-india-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-india-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-india-orange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-india-orange transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-india-orange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-india-orange transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-india-orange transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-india-orange transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/1" className="text-gray-300 hover:text-india-orange transition-colors">Taj Mahal, Agra</Link>
              </li>
              <li>
                <Link to="/destinations/5" className="text-gray-300 hover:text-india-orange transition-colors">Beaches of Goa</Link>
              </li>
              <li>
                <Link to="/destinations/4" className="text-gray-300 hover:text-india-orange transition-colors">Kerala Backwaters</Link>
              </li>
              <li>
                <Link to="/destinations/7" className="text-gray-300 hover:text-india-orange transition-colors">Ladakh</Link>
              </li>
              <li>
                <Link to="/destinations/3" className="text-gray-300 hover:text-india-orange transition-colors">Jaipur</Link>
              </li>
              <li>
                <Link to="/destinations/2" className="text-gray-300 hover:text-india-orange transition-colors">Varanasi</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 flex-shrink-0" />
                <span>Greater NOida(UP),201308, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+91 98XXXXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>info@smarttravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
