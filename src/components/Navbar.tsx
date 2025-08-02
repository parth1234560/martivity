import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, MoreVertical, User, Store, BookOpen, LogOut } from 'lucide-react';
import { useAuth } from './AuthProvider';
import { logout } from '../firebaseAuth';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMode, setLoginMode] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate();
  const { user, userProfile, loading } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buy?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const openLoginModal = (mode: 'login' | 'signup') => {
    setLoginMode(mode);
    setShowLoginModal(true);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-clay-brown to-handloom-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-clay-brown">Martovity</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-clay-brown transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link to="/buy" className="text-gray-700 hover:text-clay-brown transition-colors duration-200 font-medium">
                Buy
              </Link>
            </div>
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search handmade treasures..."
                  className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Right Section - Authentication & Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-clay-brown"></div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-clay-brown rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {userProfile?.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="text-sm text-gray-700">
                    {userProfile?.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-clay-brown transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openLoginModal('login')}
                  className="px-4 py-2 text-gray-700 hover:text-clay-brown transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => openLoginModal('signup')}
                  className="px-4 py-2 bg-clay-brown text-white rounded-lg hover:bg-clay-brown/90 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            )}
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-clay-brown transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
              >
                <MoreVertical className="h-5 w-5" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/admin"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Admin Panel</span>
                  </Link>
                  <Link
                    to="/seller"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Store className="h-4 w-4" />
                    <span>Seller Dashboard</span>
                  </Link>
                  <Link
                    to="/seller-registration"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <Store className="h-4 w-4" />
                    <span>Become a Seller</span>
                  </Link>
                  <Link
                    to="/our-story"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Our Story</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-clay-brown transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <form onSubmit={handleSearch} className="px-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search handmade treasures..."
                    className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  />
                  <Search className="absolute left-5 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/buy"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buy
                </Link>
                {user ? (
                  <>
                    <div className="px-4 py-2 border-t border-gray-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-clay-brown rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {userProfile?.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                          </span>
                        </div>
                        <span className="text-sm text-gray-700">
                          {userProfile?.displayName || user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-2 text-gray-700 hover:text-clay-brown transition-colors duration-200"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-2 border-t border-gray-200 space-y-2">
                    <button
                      onClick={() => {
                        openLoginModal('login');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        openLoginModal('signup');
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 bg-clay-brown text-white rounded-lg hover:bg-clay-brown/90 transition-colors duration-200"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin Panel
                </Link>
                <Link
                  to="/seller"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Seller Dashboard
                </Link>
                <Link
                  to="/seller-registration"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Seller
                </Link>
                <Link
                  to="/our-story"
                  className="block px-4 py-2 text-gray-700 hover:text-clay-brown hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        mode={loginMode}
      />
    </nav>
  );
};

export default Navbar;