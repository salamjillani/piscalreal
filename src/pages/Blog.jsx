import React from 'react';
import { ChevronRight, Search, Download } from 'lucide-react';


export default function RealEstateBlog() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero Banner with Background Image */}
      <div className="relative w-full h-64 mb-8">
        <img 
          src="/blogbg.jpg" 
          alt="Luxury real estate" 
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-tight">Real Estate Insights</h1>
        </div>
       
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mb-12">
        {/* Search and intro section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Discover Our Real Estate Resources</h2>
            <p className="text-gray-600 text-lg">
              Expert advice on buying, selling, and market trends to help you navigate your real estate journey with confidence.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for articles" 
                className="w-full p-4 pl-12 bg-white rounded-full shadow-md border-0 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <Search size={20} className="absolute left-4 top-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Featured Article */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="Modern condo building" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold mb-1">Featured</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Buying a condo: key points to consider before you commit</h2>
                  <p className="text-gray-600 mb-4">
                    Thinking about purchasing a condo? Our comprehensive guide walks you through the essential steps, critical assessments, and expert insights to ensure you make the right decision.
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
                    Read article <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">All topics</div>
              <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">Buying</div>
              <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">Selling</div>
              <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">Market News</div>
              <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium">Home Design</div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Article 1 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="City skyline" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Market News
                  </div>
                  <h3 className="font-bold text-xl mb-3">Housing bubble: origins and impacts</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    When the real estate market becomes exceptionally strong very quickly, observers may become concerned that a bubble is forming. Learn what this means for buyers and sellers.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Family discussing with agent" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Buying
                  </div>
                  <h3 className="font-bold text-xl mb-3">6 points to negotiate when buying a home</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover valuable tips to negotiate buying a home. Learn some strategies to get the best price and seal a deal that works for you.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="House exterior" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Buying
                  </div>
                  <h3 className="font-bold text-xl mb-3">House viewing checklist: 9 practical tips</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    The house visit is a key step in the home buying process. Use our practical checklist to ensure you don't miss any important details.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 4 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Home interior" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Home Design
                  </div>
                  <h3 className="font-bold text-xl mb-3">2025 colour trends and styles that will be everywhere!</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Feeling like updating your entire home or just adding a touch of life? Explore the hottest color trends for 2025.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 5 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Modern bathroom" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Home Design
                  </div>
                  <h3 className="font-bold text-xl mb-3">6 bathroom trends to inspire your renovations in 2025</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Whether you want to do some upgrades at home or get it ready to sell, these 2025 bathroom trends will elevate your space.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Article 6 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300">
                <img 
                  src="/api/placeholder/400/200" 
                  alt="Modern kitchen" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full inline-block mb-3">
                    Home Design
                  </div>
                  <h3 className="font-bold text-xl mb-3">6 kitchen trends to inspire your renovations in 2025</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Whether you plan to spend a lot of time in your kitchen or want to attract higher offers when selling, these trends will transform your space.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-500 flex items-center font-medium">
                      Continue reading <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
                Load more articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            {/* Categories Card */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="font-bold text-xl mb-4 text-gray-800">Categories</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  <ChevronRight size={16} className="mr-2 text-blue-500" /> 
                  <span>All about selling</span>
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  <ChevronRight size={16} className="mr-2 text-blue-500" /> 
                  <span>All about buying</span>
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  <ChevronRight size={16} className="mr-2 text-blue-500" /> 
                  <span>Real estate news</span>
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  <ChevronRight size={16} className="mr-2 text-blue-500" /> 
                  <span>Home is where the heart is</span>
                </li>
                <li className="flex items-center text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer">
                  <ChevronRight size={16} className="mr-2 text-blue-500" /> 
                  <span>Choosing your city</span>
                </li>
              </ul>
            </div>

            {/* Featured Article */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <div className="relative">
                <img 
                  src="/api/placeholder/400/250" 
                  alt="House for sale" 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">The new rule for flipping properties in Canada</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about the latest regulations affecting property flipping and how they might impact your investment strategy.
                </p>
                <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                  Read full article <ChevronRight size={16} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Real Estate Minute */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-md overflow-hidden mb-6 text-white">
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">The Quick Real Estate Minute</h3>
                <p className="text-green-50 mb-4">
                  Get the latest real estate stats for the Province of Quebec: median selling price, average selling time, and current inventory levels.
                </p>
               
              </div>
            </div>

            {/* App Promotion */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <img 
                src="/api/placeholder/400/150" 
                alt="Piscal+ app" 
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-center">THE Piscal+ APP IS HERE</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Find your perfect property with our app designed to make searching easier and more intuitive.
                </p>
                <button className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition duration-300 flex items-center justify-center font-medium">
                  <Download size={18} className="mr-2" />
                  Download now
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 text-white">
              <h3 className="font-bold text-xl mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest market trends, tips, and exclusive content.
              </p>
              <input 
                type="email"
                placeholder="Your email address" 
                className="w-full p-3 bg-gray-700 rounded-md border-0 text-white placeholder-gray-400 mb-3"
              />
              <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}