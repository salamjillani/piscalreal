import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, Search, User, Bell, Heart, X, ChevronRight, Globe } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const { isAuthenticated, currentUser, userRole, logout } = useAuth();

  const navItems = [
    { 
      name: "Search", 
      path: "/search", 
      hasDropdown: true,
      items: [
        { text: "List View", path: "/search", anchor: "#list-view" },
        { text: "Map View", path: "/search", anchor: "#map-view" },
        { text: "Advanced Search", path: "/search", anchor: "#advanced" },
      ]
    },
    { 
      name: "Buy", 
      path: "/buy", 
      hasDropdown: true,
      items: [
        { text: "Home Buying Process", path: "/buy", anchor: "#how-it-works" },
        { text: "Piscal+ Advantage", path: "/buy", anchor: "#why-with-us" },
        { text: "Notifications", path: "/buy", anchor: "#create-alert" },
        { text: "Legal Documents", path: "/buy", anchor: "#legal-docs" },
      ]
    },
    { 
      name: "Sell", 
      path: "/sell", 
      hasDropdown: true,
      items: [
        { text: "Our Selling Process", path: "/sell", anchor: "#how-it-works" },
        { text: "Video Tutorials", path: "/sell", anchor: "#videos" },
        { text: "Free Evaluation", path: "/sell", anchor: "#consultation" },
      ]
    },
    { name: "Blog", path: "/blog", hasDropdown: false },
    { name: "Business", path: "/business", hasDropdown: false },
    { name: "Pricing", path: "/pricing", hasDropdown: false },
  ];

  const userMenuItems = [
    { text: "Profile", path: "/profile", icon: User },
    { text: "Favorites", path: "/favorites", icon: Heart },
    { text: "Messages", path: "/messages", icon: Bell },
    { text: "Settings", path: "/settings", icon: "settings" },
  ];

  // Add role-specific links
  if (userRole === 'seller') {
    userMenuItems.push({ text: "Seller Dashboard", path: "/seller/dashboard", icon: "dashboard" });
  } else if (userRole === 'agent') {
    userMenuItems.push({ text: "Agent Dashboard", path: "/agent/dashboard", icon: "dashboard" });
  } else if (userRole === 'admin') {
    userMenuItems.push({ text: "Admin Dashboard", path: "/admin/dashboard", icon: "dashboard" });
  } else if (userRole === 'lawyer' || userRole === 'notary') {
    userMenuItems.push({ text: "Legal Dashboard", path: "/legal/dashboard", icon: "scale" });
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      
      // Close search bar when clicking outside
      if (searchVisible && searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [searchVisible]);

  useEffect(() => {
    // Close mobile menu when screen size changes
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    // Focus search input when search becomes visible
    if (searchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchVisible]);

  const handleDropdownToggle = (dropdownName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleMouseEnter = (dropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSearchVisible(false);
    }
  };

  const handleLogout = (e) => {
    e?.preventDefault();
    logout();
    navigate('/login');
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const navigateToSection = (path, anchor) => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    navigate(`${path}${anchor}`);
    
    // Force scroll after navigation
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-gray-50 py-1.5 px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center max-w-7xl mx-auto text-xs md:text-sm">
          <div className="flex items-center space-x-4">
            <Link to="/app" className="text-gray-600 hover:text-teal-600 transition font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download App
            </Link>
            <Link to="/contact" className="hidden sm:block text-gray-600 hover:text-teal-600 transition font-medium">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="tel:1-866-387-7677" className="text-gray-700 font-medium flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
              </svg>
              1-866-387-7677
            </a>
            <button className="flex items-center text-gray-600 hover:text-teal-600 transition">
              <Globe className="w-4 h-4 mr-1" />
              <span className="hidden md:inline">EN</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/Logo.png" alt="Piscal+" className="h-8 md:h-10 w-auto" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)} 
                    onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                  >
                    <Link 
                      to={item.path} 
                      className={`text-gray-700 hover:text-teal-600 font-medium text-sm flex items-center transition duration-150 py-5 border-b-2 ${location.pathname === item.path ? 'border-teal-500 text-teal-600' : 'border-transparent'}`}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                    </Link>
                    
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-100 z-50 overflow-hidden">
                        <div className="py-2">
                          {item.items.map((subItem, idx) => (
                            <div
                              key={idx}
                              onClick={() => navigateToSection(subItem.path, subItem.anchor)}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 text-sm cursor-pointer transition duration-150"
                            >
                              <span className="mr-2 w-1.5 h-1.5 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100"></span>
                              {subItem.text}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            
            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search toggle */}
              <button 
                onClick={() => setSearchVisible(!searchVisible)}
                className="p-2 text-gray-600 hover:text-teal-600 focus:outline-none transition"
              >
                <Search className="h-5 w-5" />
              </button>
              
              {/* Authentication */}
              {isAuthenticated ? (
                <div 
                  className="relative" 
                  onMouseEnter={() => handleMouseEnter('user')} 
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition">
                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
                      {currentUser?.name?.charAt(0) || 'U'}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-700">{currentUser?.name?.split(' ')[0] || 'User'}</span>
                    <ChevronDown className="hidden md:block h-4 w-4 text-gray-500" />
                  </button>
                  
                  {activeDropdown === 'user' && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{currentUser?.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{currentUser?.email}</p>
                      </div>
                      <div className="py-2">
                        {userMenuItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-center px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-teal-600 text-sm transition"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.icon === "settings" ? (
                              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            ) : item.icon === "dashboard" ? (
                              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                            ) : item.icon === "scale" ? (
                              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                              </svg>
                            ) : typeof item.icon === 'function' ? (
                              <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                            ) : null}
                            {item.text}
                          </Link>
                        ))}
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2.5 text-left text-gray-700 hover:bg-gray-50 hover:text-teal-600 text-sm transition"
                        >
                          <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link 
                    to="/login" 
                    className="hidden md:flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition"
                  >
                    Sign in
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-full transition"
                  >
                    Register
                  </Link>
                </div>
              )}
              
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-teal-600 focus:outline-none transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Overlay */}
      {searchVisible && (
        <div className="absolute top-0 left-0 w-full z-50 bg-white shadow-md" ref={searchInputRef}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <form onSubmit={handleSearch} className="flex items-center py-4">
              <Search className="text-gray-400 h-5 w-5 mr-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search properties, areas, or articles..."
                className="flex-1 text-gray-800 focus:outline-none text-lg"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setSearchVisible(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl fixed inset-y-0 right-0 w-full sm:w-80 z-50 overflow-y-auto">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/Logo.png" alt="Piscal+" className="h-8 w-auto" />
            </Link>
            <button
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile search */}
          <div className="p-4 border-b border-gray-100">
            <form onSubmit={handleSearch} className="flex items-center bg-gray-50 rounded-full px-4 py-2">
              <Search className="text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search properties..."
                className="ml-2 flex-1 bg-transparent focus:outline-none text-gray-800"
              />
            </form>
          </div>
          
          {/* Mobile menu items */}
          <nav className="px-2 pt-2 pb-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => item.hasDropdown && handleDropdownToggle(`${item.name}-mobile`)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronRight className={`h-5 w-5 transition-transform ${activeDropdown === `${item.name}-mobile` ? 'rotate-90' : ''}`} />
                  )}
                </button>
                
                {item.hasDropdown && activeDropdown === `${item.name}-mobile` && (
                  <div className="mt-1 pl-4">
                    {item.items.map((subItem, idx) => (
                      <div
                        key={idx}
                        onClick={() => navigateToSection(subItem.path, subItem.anchor)}
                        className="flex items-center px-3 py-2 text-gray-600 hover:text-teal-600 rounded-lg text-sm cursor-pointer"
                      >
                        <div className="h-1 w-1 rounded-full bg-teal-500 mr-2"></div>
                        {subItem.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <a 
              href="#"
              className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              We're hiring
            </a>
          </nav>
          
          {/* Authentication in mobile menu */}
          <div className="border-t border-gray-100 p-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium text-lg">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-medium">{currentUser?.name || 'User'}</p>
                    <p className="text-xs text-gray-500">{currentUser?.email}</p>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {userMenuItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="flex items-center px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-3 py-2.5 text-left text-gray-700 hover:bg-gray-50 rounded-lg text-sm"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <Link 
                  to="/login" 
                  className="block w-full px-4 py-2.5 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link 
                  to="/register" 
                  className="block w-full px-4 py-2.5 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
        )}
      
        {/* Progress color bar */}
        <div className="h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-blue-500"></div>
        
        {/* Optional banner - can be conditionally rendered */}
        {location.pathname === '/' && (
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-2">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-teal-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-2 text-sm font-medium text-gray-700">
                    New listings available in your area. <span className="hidden sm:inline">Check them out today!</span>
                  </p>
                </div>
                <button className="text-xs font-medium text-teal-600 hover:text-teal-800 transition">
                  View now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }