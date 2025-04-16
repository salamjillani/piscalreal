import React from 'react';
import { ChevronRight, Search, Download, ArrowRight, Bell, Bookmark } from 'lucide-react';

export default function RealEstateBlog() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section - Glass Morphism Style */}
      <div className="relative w-full h-96 mb-12 overflow-hidden">
        <img 
          src="/api/placeholder/1200/600" 
          alt="Luxury real estate" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center">Real Estate Insights</h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl text-center font-light">
            Expert advice to navigate your real estate journey with confidence
          </p>
          
          {/* Search component with glass effect */}
          <div className="w-full max-w-xl mt-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for articles" 
                className="w-full p-4 pl-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-white/70"
              />
              <Search size={20} className="absolute left-4 top-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mb-12">
        {/* Category Pills with active state */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-2 no-scrollbar">
          <div className="px-5 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md flex items-center whitespace-nowrap">
            All topics <span className="ml-2 bg-white text-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">24</span>
          </div>
          <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:bg-gray-50 transition whitespace-nowrap">Buying</div>
          <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:bg-gray-50 transition whitespace-nowrap">Selling</div>
          <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:bg-gray-50 transition whitespace-nowrap">Market News</div>
          <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:bg-gray-50 transition whitespace-nowrap">Home Design</div>
          <div className="px-5 py-3 bg-white text-gray-700 rounded-full font-medium shadow-md hover:bg-gray-50 transition whitespace-nowrap">Investment</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Featured Article - Card with hover effect */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 hover:shadow-2xl transition duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src="/blg.webp" 
                    alt="Modern condo building" 
                    className="w-full h-64 md:h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <Bell size={14} className="text-blue-600" />
                      </div>
                      <span className="text-blue-600 text-sm font-semibold">New this week</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition">Buying a condo: key points to consider before you commit</h2>
                    <p className="text-gray-600 mb-4">
                      Thinking about purchasing a condo? Our comprehensive guide walks you through the essential steps, critical assessments, and expert insights to ensure you make the right decision.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <img 
                        src="/" 
                        alt="Author" 
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Michael Carter</p>
                        <p className="text-xs text-gray-500">April 12, 2025</p>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex items-center">
                      Read <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Grid - Modern cards with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="City skyline" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Market News
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">Housing bubble: origins and impacts</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    When the real estate market becomes exceptionally strong very quickly, observers may become concerned that a bubble is forming. Learn what this means for buyers and sellers.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 15, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="Family discussing with agent" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Buying
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">6 points to negotiate when buying a home</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover valuable tips to negotiate buying a home. Learn some strategies to get the best price and seal a deal that works for you.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 10, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="House exterior" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Buying
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">House viewing checklist: 9 practical tips</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    The house visit is a key step in the home buying process. Use our practical checklist to ensure you don't miss any important details.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 8, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="Home interior" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Home Design
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">2025 colour trends and styles that will be everywhere!</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Feeling like updating your entire home or just adding a touch of life? Explore the hottest color trends for 2025.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 5, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="Modern bathroom" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Home Design
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">6 bathroom trends to inspire your renovations in 2025</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Whether you want to do some upgrades at home or get it ready to sell, these 2025 bathroom trends will elevate your space.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 3, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src="/blogwallpaper.png" 
                    alt="Modern kitchen" 
                    className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Home Design
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/50 transition">
                    <Bookmark size={16} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">6 kitchen trends to inspire your renovations in 2025</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Whether you plan to spend a lot of time in your kitchen or want to attract higher offers when selling, these trends will transform your space.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">April 1, 2025</span>
                    <span className="text-blue-600 flex items-center font-medium text-sm">
                      Read article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button - Improved Style */}
            <div className="flex justify-center mt-10">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full hover:from-blue-700 hover:to-blue-900 transition duration-300 shadow-lg font-medium">
                Load more articles
              </button>
            </div>
          </div>

          {/* Sidebar - Updated design */}
          <div className="w-full lg:w-1/3">
            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl overflow-hidden p-8 text-white mb-8">
              <h3 className="font-bold text-2xl mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter for the latest market trends, tips, and exclusive content.
              </p>
              <input 
                type="email"
                placeholder="Your email address" 
                className="w-full p-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white placeholder-white/70 mb-4 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl hover:bg-blue-50 transition duration-300 font-bold">
                Subscribe
              </button>
            </div>
            
            {/* Categories Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="font-bold text-xl mb-6 text-gray-800">Browse Categories</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between hover:bg-blue-50 p-3 rounded-xl transition duration-200 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ChevronRight size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">All about selling</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">28</span>
                </li>
                <li className="flex items-center justify-between hover:bg-blue-50 p-3 rounded-xl transition duration-200 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ChevronRight size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">All about buying</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">42</span>
                </li>
                <li className="flex items-center justify-between hover:bg-blue-50 p-3 rounded-xl transition duration-200 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ChevronRight size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Real estate news</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">16</span>
                </li>
                <li className="flex items-center justify-between hover:bg-blue-50 p-3 rounded-xl transition duration-200 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ChevronRight size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Home is where the heart is</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">31</span>
                </li>
                <li className="flex items-center justify-between hover:bg-blue-50 p-3 rounded-xl transition duration-200 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <ChevronRight size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Choosing your city</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">24</span>
                </li>
              </ul>
            </div>

            {/* Featured Article */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 group hover:shadow-xl transition">
              <div className="relative overflow-hidden">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="House for sale" 
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition">The new rule for flipping properties in Canada</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about the latest regulations affecting property flipping and how they might impact your investment strategy.
                </p>
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 flex items-center justify-center font-medium">
                  Read full article <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Real Estate Minute */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-700 rounded-2xl shadow-lg overflow-hidden mb-8 text-white p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <Bell size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-xl">The Quick Real Estate Minute</h3>
              </div>
              <p className="text-green-50 mb-4">
                Get the latest real estate stats for the Province of Quebec:
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-green-100 text-sm">Median Price</p>
                  <p className="text-white font-bold text-xl">$485,000</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-green-100 text-sm">Avg. Selling Time</p>
                  <p className="text-white font-bold text-xl">45 days</p>
                </div>
              </div>
            </div>

            {/* App Promotion */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="/api/placeholder/400/180" 
                  alt="Piscal+ app" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="font-bold text-2xl text-white mb-2">THE Piscal+ APP</h3>
                    <p className="text-white/80 text-sm">Find your perfect property on the go</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Search, save, and get notified about properties that match your criteria in real-time.
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition duration-300 flex items-center justify-center font-medium shadow-md">
                  <Download size={18} className="mr-2" />
                  Download now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}