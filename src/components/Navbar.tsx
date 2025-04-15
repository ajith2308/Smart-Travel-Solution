
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const { user, logout } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-india-orange">Smart Travel Solution</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-india-orange transition-colors">Home</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-india-orange transition-colors">Destinations</Link>
            <Link to="/about" className="text-gray-700 hover:text-india-orange transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-india-orange transition-colors">Contact</Link>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.profilePic} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-medium">
                    {user.name}
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">My Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-trips">My Trips</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/destinations" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>Destinations</Link>
              <Link to="/about" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>Contact</Link>
              
              {user ? (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>My Profile</Link>
                  <Link to="/my-trips" className="text-gray-700 hover:text-india-orange transition-colors" onClick={toggleMenu}>My Trips</Link>
                  <Button variant="ghost" className="justify-start px-0" onClick={() => { logout(); toggleMenu(); }}>
                    Log Out
                  </Button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="ghost" className="w-full">Log In</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
