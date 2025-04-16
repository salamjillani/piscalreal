import React, { useState } from "react";
import { Search, Filter, ChevronRight, ChevronDown, Menu, X, MapPin, Heart, Home as HomeIcon, Building, Camera } from "lucide-react";


const Home = () => {
  const [activeTab, setActiveTab] = useState("FOR SALE");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    

      <div className="relative">
        {/* Hero Section - Modern gradient overlay and improved layout */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
          <div className="absolute w-full h-full">
            <img 
              src="/herobackground.jpeg" 
              alt="Real estate property" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-indigo-800/70 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Discover Your <span className="text-indigo-300">Perfect Home</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-lg">
                  Find your dream property with our extensive listings and expert guidance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition duration-300 text-base flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    Explore Properties
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition duration-300 text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box - Glass morphism effect and modern layout */}
        <div className="container mx-auto px-4 lg:px-8 relative -mt-24 z-20 max-w-6xl">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Tabs - Pill style tabs */}
            <div className="flex justify-center p-4 sm:p-6 border-b border-gray-100">
              <div className="inline-flex rounded-full bg-gray-100 p-1">
                {["FOR SALE", "FOR RENT", "SOLD"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-2 text-sm font-medium rounded-full transition duration-200 ${
                      activeTab === tab
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-700 hover:text-indigo-600"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search Area - Modern card-based design */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-5">
                {/* Location Input */}
                <div className="relative w-full md:flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <MapPin className="h-5 w-5 text-indigo-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="City, neighborhood, or address"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-200 text-base"
                  />
                </div>
                
                {/* Filter Buttons - Updated style */}
                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition duration-200 flex items-center justify-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Price
                  </button>
                  <button className="flex-1 md:flex-none px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition duration-200 flex items-center justify-center">
                    <Building className="h-4 w-4 mr-2" />
                    Property Type
                  </button>
                  <button className="flex-1 md:flex-none px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition duration-200 flex items-center justify-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Preferences
                  </button>
                  <button className="flex-1 md:flex-none px-6 py-3 bg-indigo-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-200 flex items-center justify-center">
                    <Search className="h-4 w-4 mr-2" />
                    Search Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Types Section - Card-based modern design */}
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-3">
          Explore Property Types
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find the perfect property that fits your lifestyle and preferences
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Single-family House", icon: "🏠", count: "2,345 listings" },
            { name: "Apartment", icon: "🏢", count: "1,726 listings" },
            { name: "Vacation Home", icon: "🏡", count: "843 listings" },
            { name: "Commercial", icon: "🏘️", count: "567 listings" },
          ].map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <div className="h-24 bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                <span className="text-4xl">{type.icon}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 mb-1">{type.name}</h3>
                <p className="text-sm text-gray-500">{type.count}</p>
                <div className="mt-4 flex justify-end">
                  <ChevronRight className="h-5 w-5 text-indigo-500 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section - Modern asymmetrical design */}
      <div className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center rounded-3xl overflow-hidden bg-white shadow-xl">
            <div className="w-full md:w-5/12 relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-indigo-100 opacity-70 hidden md:block"></div>
              <div className="absolute -right-6 top-1/4 -translate-y-1/2 w-12 h-12 rounded-full bg-indigo-200 opacity-70 hidden md:block"></div>
              <img
                src="/mobile3.png"
                alt="Feature"
                className="w-full h-auto relative z-10"
              />
            </div>
            <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium mb-4">COMMISSION-FREE</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Sell Your Property Agent-Free With Expert Support
              </h2>
              <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commission-free real estate service helps
                people sell their homes with expert advice, professional photography, 
                targeted marketing, and assistance with all paperwork.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Thousands of homeowners trust us each year to help them sell their properties
                with maximum value and minimum hassle.
              </p>
              <button className="bg-indigo-600 text-white rounded-full hover:bg-indigo-700 font-medium px-8 py-3 text-base shadow-md transition duration-300 flex items-center">
                Learn More
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Modern cards with accent colors */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-indigo-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  27
                </span>
                <span className="text-sm text-gray-600 text-center">
                  years of trusted service
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  $3.7B
                </span>
                <span className="text-sm text-gray-600 text-center">
                  in commission saved
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  92%
                </span>
                <span className="text-sm text-gray-600 text-center">
                  successful sales rate
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  8.6/10
                </span>
                <span className="text-sm text-gray-600 text-center">
                  customer satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Video Section - Modern asymmetrical design */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="w-full md:w-1/2 p-8 md:p-12 order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-4">KNOWLEDGE CENTER</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Free Real Estate Video Guides
              </h2>
              <div className="w-16 h-1 bg-white/60 mb-6"></div>
              <p className="text-white/80 mb-8">
                Subscribe to our YouTube channel for informative guides that help
                property owners navigate the complexities of real estate transactions.
              </p>
              <button className="bg-white text-indigo-700 rounded-full hover:bg-gray-100 font-medium px-6 py-3 flex items-center">
                <Camera className="h-5 w-5 mr-2" />
                Watch Our Videos
              </button>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-0 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/video.png"
                  alt="Video"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors duration-300">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - Modern card design */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">INSIGHTS</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Latest Articles & Advice
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert insights to help you make informed real estate decisions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                category: "Eco-Friendly Living",
                title: "Green Homes: Essential Tips for Sustainable Renovations",
                date: "April 10, 2025"
              },
              {
                category: "Buying Guide",
                title: "Hidden Costs of Home Ownership You Need to Know About",
                date: "April 8, 2025"
              },
              {
                category: "Selling Tips",
                title: "7 Must-Have Documents When Selling Your Property",
                date: "April 2, 2025"
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
              >
                <div className="relative">
                  <img
                    src="/blog.jpeg"
                    alt="Blog"
                    className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-indigo-600 transition duration-300">{post.title}</h3>
                  <a href="#" className="inline-flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800">
                    Read more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-white border border-indigo-600 text-indigo-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-indigo-50 transition duration-300">
              View All Articles
              <ChevronRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Partners Section - Modern card layout */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-3">PARTNERS</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted Partners at Your Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry leaders to provide you with comprehensive real estate solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-indigo-200 transition duration-300">
              <div className="flex flex-col h-full">
                <div className="p-6 bg-indigo-50">
                  <img src="/partner.png" alt="Partner" className="h-12" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Renovation Assistance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    From quick touch-ups to major renovations, our verified contractors and expert team
                    are ready to help with all your residential and commercial renovation needs.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-indigo-200 transition duration-300">
              <div className="flex flex-col h-full">
                <div className="p-6 bg-indigo-50">
                  <img src="/partner.png" alt="Partner" className="h-12" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    Real Estate Ecosystem
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our initiative brings together a comprehensive group of companies offering services
                    from buying and selling to renovating, building and maintaining your perfect space.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl overflow-hidden shadow-xl col-span-1 md:col-span-2">
              <div className="flex flex-col md:flex-row items-center p-8">
                <div className="w-full md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <img src="/partner.png" alt="Insurance" className="h-16 invert" />
                </div>
                <div className="w-full md:w-3/4 text-center md:text-left">
                  <p className="text-lg text-white">
                    We're not new to insurance and{" "}
                    <span className="font-semibold">that's reassuring</span>.
                    Switch today and{" "}
                    <span className="font-semibold">save up to $550</span> when
                    you bundle your home and car insurance.
                  </p>
                  <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick action button for mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-full shadow-xl p-4 w-64 border border-gray-100">
            <div className="flex flex-col gap-3">
              <button className="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search properties
              </button>
              <button className="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Find by location
              </button>
              <button className="px-4 py-3 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Saved properties
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;