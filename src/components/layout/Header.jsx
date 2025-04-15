import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, Search, User, Bell } from "lucide-react";
import { useAuth } from "../../hooks/useAuth"; // Assuming same path structure

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const { isAuthenticated, currentUser, userRole, logout } = useAuth();

  const dropdownContent = {
    search: [
      { text: "List", path: "/search", anchor: "#list-view" },
      { text: "Map", path: "/search", anchor: "#map-view" },
    ],
    buy: [
      { text: "How does home-buying work?", path: "/buy", anchor: "#how-it-works" },
      { text: "Why buy a home with Piscal+?", path: "/buy", anchor: "#why-with-us" },
      { text: "Create an email alert", path: "/buy", anchor: "#create-alert" },
      { text: "Offer to purchase and other legal documents", path: "/buy", anchor: "#legal-docs" },
    ],
    sell: [
      { text: "How does it work?", path: "/sell", anchor: "#how-it-works" },
      { text: "Explanatory videos of our services", path: "/sell", anchor: "#videos" },
      { text: "Free consultation", path: "/sell", anchor: "#consultation" },
    ],
    user: [
      { text: "Your Profile", path: "/profile" },
      { text: "Settings", path: "/settings" },
      { text: "Favorites", path: "/favorites" },
      { text: "Messages", path: "/messages" },
    ]
  };

  // Add user role specific links
  if (userRole === 'seller') {
    dropdownContent.user.push({ text: "Seller Dashboard", path: "/seller/dashboard" });
  } else if (userRole === 'agent') {
    dropdownContent.user.push({ text: "Agent Dashboard", path: "/agent/dashboard" });
  } else if (userRole === 'admin') {
    dropdownContent.user.push({ text: "Admin Dashboard", path: "/admin/dashboard" });
  } else if (userRole === 'lawyer' || userRole === 'notary') {
    dropdownContent.user.push({ text: "Legal Dashboard", path: "/legal/dashboard" });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clear any pending timeouts when component unmounts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when screen size changes
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleMouseEnter = (dropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown to allow clicking on items
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleUserMenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (activeDropdown === 'user') {
      setActiveDropdown(null);
    } else {
      setActiveDropdown('user');
    }
  };

  const navigateToSection = (path, anchor) => {
    setActiveDropdown(null);
    navigate(`${path}${anchor}`);
    
    // Force scroll after navigation
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  };

  const handleLogout = (e) => {
    e?.preventDefault();
    logout();
    navigate('/login');
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <img src="/ads.png" alt="Banner" className="w-full h-auto px-4 sm:px-8 lg:px-14 object-cover" />

      {/* Secondary Navigation */}
      <div className="border-b border-gray-200 py-2 px-4 sm:px-6 flex justify-end items-center text-sm space-x-3 sm:space-x-6 bg-white overflow-x-auto">
        <a href="#" className="text-gray-700 hover:text-green-600 transition whitespace-nowrap">Download the app</a>
        <a href="#" className="text-gray-700 hover:text-green-600 transition whitespace-nowrap">Rentals</a>
        <span className="text-gray-700 font-medium whitespace-nowrap">1-866-387-7677</span>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-3 sm:py-4 px-4 sm:px-6 mx-0 sm:mx-4 lg:mx-8 flex justify-between items-center">
        {/* Left: Logo & Menu */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/Logo.png" alt="Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain" />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex ml-4 lg:ml-8 space-x-3 lg:space-x-6" ref={dropdownRef}>
            {["search", "buy", "sell"].map((type) => (
              <div 
                key={type} 
                className="relative" 
                onMouseEnter={() => handleMouseEnter(type)} 
                onMouseLeave={handleMouseLeave}
              >
                <Link to={`/${type}`} className="text-gray-700 hover:text-green-600 font-medium flex items-center text-sm lg:text-base">
                  {type.charAt(0).toUpperCase() + type.slice(1)} <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {activeDropdown === type && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50 py-2">
                    {dropdownContent[type].map((item, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToSection(item.path, item.anchor);
                        }}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 text-sm cursor-pointer"
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/blog" className="text-gray-700 hover:text-green-600 font-medium text-sm lg:text-base">Blog</Link>
            <Link to="/business" className="text-gray-700 hover:text-green-600 font-medium text-sm lg:text-base">Business</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-600 font-medium text-sm lg:text-base">Pricing</Link>
          </div>
        </div>

        {/* Right: Search, Auth, and Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Contact and Hiring Links */}
          <Link to="/contact" className="hidden md:inline-block text-gray-700 hover:text-green-600 text-xs lg:text-sm">Contact</Link>
          <a href="#" className="hidden md:inline-block text-gray-700 hover:text-green-600 text-xs lg:text-sm">We're hiring</a>

          {/* Authentication UI */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Favorites link */}
              <Link to="/favorites" className="hidden md:flex p-1 rounded-full text-gray-600 hover:text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              {/* Messages */}
              <Link to="/messages" className="hidden md:flex p-1 rounded-full text-gray-600 hover:text-green-600">
                <Bell className="h-5 w-5 lg:h-6 lg:w-6" />
              </Link>

              {/* User Menu */}
              <div 
                className="relative" 
                onMouseEnter={() => handleMouseEnter('user')} 
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  onClick={handleUserMenuToggle}
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-green-600"
                >
                  <User className="h-5 w-5 lg:h-6 lg:w-6" />
                  <span className="hidden md:block font-medium text-xs lg:text-sm">{currentUser?.name || 'User'}</span>
                </button>
                
                {activeDropdown === 'user' && (
                  <div 
                    className="absolute right-0 mt-2 w-48 sm:w-64 bg-white shadow-lg rounded-md border border-gray-200 z-50 py-2"
                  >
                    {dropdownContent.user.map((item, index) => (
                      <div
                        key={index}
                        onClick={(e) => handleLinkClick(e, item.path)}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 text-sm cursor-pointer"
                      >
                        {item.text}
                      </div>
                    ))}
                    <div
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 text-sm cursor-pointer"
                      onClick={handleLogout}
                    >
                      Sign out
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="border border-black rounded-full px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-gray-50"
            >
              Log in
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Color Bar */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-green-400 to-blue-400"></div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {/* Navigation Links */}
            {["search", "buy", "sell"].map((type) => (
              <div key={type} className="relative">
                <Link
                  to={`/${type}`}
                  className="text-gray-700 hover:text-green-600 flex items-center justify-between w-full py-2 font-medium"
                  onClick={() => setActiveDropdown(activeDropdown === `${type}-mobile` ? null : `${type}-mobile`)}
                >
                  <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {activeDropdown === `${type}-mobile` && (
                  <div className="pl-4 pt-2 space-y-2">
                    {dropdownContent[type].map((item, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToSection(item.path, item.anchor);
                        }}
                        className="block py-1 text-gray-600 hover:text-green-600 cursor-pointer"
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/blog" className="text-gray-700 hover:text-green-600 py-2 font-medium">Blog</Link>
            <Link to="/business" className="text-gray-700 hover:text-green-600 py-2 font-medium">Business</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-green-600 py-2 font-medium">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 py-2 font-medium">Contact</Link>
            <a href="#" className="text-gray-700 hover:text-green-600 py-2 font-medium">We're hiring</a>
            <a href="#" className="text-gray-700 hover:text-green-600 py-2 font-medium">FR</a>
            
            {/* Authentication Links for Mobile */}
            {isAuthenticated ? (
              <>
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex items-center px-2 mb-4">
                    <User className="h-8 w-8 text-gray-400" />
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{currentUser?.name || 'User'}</div>
                      <div className="text-sm font-medium text-gray-500">{currentUser?.email}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {dropdownContent.user.map((item, index) => (
                      <div
                        key={index}
                        onClick={(e) => handleLinkClick(e, item.path)}
                        className="block py-2 text-gray-700 hover:text-green-600 cursor-pointer"
                      >
                        {item.text}
                      </div>
                    ))}
                    <div
                      className="block w-full text-left py-2 text-gray-700 hover:text-green-600 font-medium cursor-pointer"
                      onClick={handleLogout}
                    >
                      Sign out
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-green-600 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link 
                  to="/register" 
                  className="bg-green-600 text-white py-2 px-4 rounded-full text-center font-medium hover:bg-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}