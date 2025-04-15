import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import PropertySearch from './buyer/PropertySearch';

const Home = () => {
  const [activeTab, setActiveTab] = useState("FOR SALE");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section - Improved responsiveness */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden max-w-8xl mx-auto">
          <div className="absolute w-full h-full">
            <img 
              src="/herobackground.jpeg" 
              alt="Real estate property" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4 md:px-0">
              <div className="max-w-2xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                  Find Your Dream Home
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-8">
                  Search thousands of properties across the country
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition duration-300 text-sm sm:text-base">
                  Discover our services
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box - Better mobile experience */}
        <div className="container mx-auto px-4 relative -mt-10 sm:-mt-16 z-20 max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {/* Tabs - More responsive tabs */}
            <div className="flex flex-wrap border-b">
              {["FOR SALE", "FOR RENT", "SOLD"].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium ${
                    activeTab === tab
                      ? "border-b-2 border-green-500 text-black"
                      : "text-gray-600"
                  } transition duration-200`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Search Area - Improved for all device sizes */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Search Input */}
                <div className="relative w-full md:flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Region, city, street, phone"
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 text-sm sm:text-base"
                  />
                </div>
                
                {/* Filter Buttons - Responsive grid layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex flex-wrap gap-2 w-full md:w-auto mt-3 md:mt-0">
                  <button className="px-3 sm:px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium hover:bg-green-200 transition duration-200">
                    All properties
                  </button>
                  <button className="px-3 sm:px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium hover:bg-green-200 transition duration-200">
                    New builds
                  </button>
                  <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-50 transition duration-200">
                    Price <span className="font-bold">$</span>
                  </button>
                  <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-50 transition duration-200">
                    Types <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </button>
                  <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 hover:bg-gray-50 transition duration-200">
                    Filters <Filter className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </button>
                  <button className="col-span-2 sm:col-span-1 px-4 sm:px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium flex items-center justify-center gap-1 hover:bg-gray-800 transition duration-200">
                    Search <Search className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Types Section - Better responsive grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-6xl">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
          What type of home are you looking for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: "Single-family house", icon: "🏠" },
            { name: "Condo", icon: "🏢" },
            { name: "Cottage", icon: "🏡" },
            { name: "Multiplex", icon: "🏘️" },
          ].map((type, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl">{type.icon}</span>
                <span className="font-medium text-sm sm:text-base">{type.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section - Improved mobile responsiveness */}
      <div className="bg-white py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-gray-50">
            <div className="w-full md:w-1/2 p-6 md:p-0">
              <img
                src="/mobile3.png"
                alt="Feature"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                It pays to sell your property agent-free, with the support of
                our team!
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our commission-free real estate service helps
                people sell their homes. Our service makes selling
                easy with expert advice, photography, marketing,
                online visibility, and help with paperwork.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Thousands of customers sell their property each year with
                our support.
              </p>
              <button className="bg-black text-white rounded-full hover:bg-green-700 font-medium px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-md transition duration-300 transform hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - More responsive grid and sizing */}
      <div className="bg-green-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="p-4 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                27
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">
                years at your service
              </span>
            </div>
            <div className="p-4 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                3.7 billion
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">
                in commission saved
              </span>
            </div>
            <div className="p-4 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                92%
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">
                successful sales
              </span>
            </div>
            <div className="p-4 sm:p-8 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                8.6/10
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-600">
                customer satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Incorporating the PropertySearch component */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Find Properties
          </h2>
          <PropertySearch />
        </div>
      </div>
      
      {/* Video Section - Better mobile layout */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-0">
              <img
                src="/video.png"
                alt="Video"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                Free informative videos
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Subscribe to our YouTube to get our informative guides that help
                real estate owners learn more about selling their property.
              </p>
              <button className="bg-black text-white rounded-full hover:bg-green-700 font-medium px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - Improved grid for different screens */}
      <div className="bg-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Our blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                category: "All About Selling",
                title:
                  "Green homes: Tips and advice for eco-friendly renovations",
              },
              {
                category: "All About Buying",
                title: "What are the expenses involved in buying a home?",
              },
              {
                category: "All About Selling",
                title: "The 7 documents to have on hand when selling your home",
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src="/blog.jpeg"
                  alt="Blog"
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-2 sm:mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-black font-medium mb-4 sm:mb-6 text-sm sm:text-base">
              Check out Piscal+'s real estate guides and advice
            </p>
            <button className="bg-white border border-black text-black rounded-full px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium hover:bg-gray-50 transition duration-200">
              All the articles
            </button>
          </div>
        </div>
      </div>

      {/* Partners Section - Improved for mobile */}
      <div className="bg-gray-50 py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Attentive partners who are at your service
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-700 mb-8 sm:mb-16 max-w-3xl mx-auto">
            From renovations to buying or selling a home, we're at your side
            from start to finish to make your real estate dreams and projects a
            reality.
          </p>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <img src="/partner.png" alt="Partner" className="h-12 sm:h-16" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Need to renovate?
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  From quick jobs to major work, be it residential or
                  commercial, RenoAssistance is there to help. You can trust our
                  Verified Contractors and our experienced team to carry out
                  your renovations successfully.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline flex items-center text-sm sm:text-base"
                >
                  Find out more <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center">
                <img src="/partner.png" alt="Partner" className="h-12 sm:h-16" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Our real estate ecosystem
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  EspaceProprio is a Desjardins initiative bringing together a
                  group of companies that offer home support services, ranging
                  from buying and selling real estate, to renovating, building
                  and maintaining your living space.
                </p>
                <a
                  href="#"
                  className="text-green-600 font-medium hover:underline flex items-center text-sm sm:text-base"
                >
                  Find out more <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border-t-4 border-green-500">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <img src="/partner.png" alt="Insurance" className="h-12 sm:h-16" />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-base sm:text-lg text-gray-800">
                  We're not new to insurance and{" "}
                  <span className="font-semibold">that's reassuring</span>.
                  Switch to Desjardins and{" "}
                  <span className="font-semibold">save up to $550</span> when
                  you bundle your home and car insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu toggle - Optional addition to improve navigation on small screens */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg"
        >
          {isMobileMenuOpen ? (
            <ChevronDown className="h-6 w-6" />
          ) : (
            <Search className="h-6 w-6" />
          )}
        </button>
        
        {isMobileMenuOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
            <div className="flex flex-col gap-3">
              <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Search properties
              </button>
              <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Contact agent
              </button>
              <button className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Latest listings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;