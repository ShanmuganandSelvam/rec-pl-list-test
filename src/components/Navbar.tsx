import React from 'react';
import { Search, ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button className="md:hidden mr-4">
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold text-indigo-600">ShopHub</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-gray-900">
                <Search size={24} />
              </button>
            </div>
            
            {isAuthenticated ? (
              <>
                <div className="hidden md:flex items-center">
                  <span className="text-sm text-gray-700 mr-2">Hello, {user?.name}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900 hidden md:flex items-center"
                >
                  <LogOut size={20} className="mr-1" />
                  <span className="text-sm">Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900 hidden md:block">
                <User size={24} />
              </Link>
            )}
            
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </nav>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
