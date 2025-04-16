import { useState } from 'react';
import { ChevronDown, Heart, Phone, Search } from 'lucide-react';

export default function Homepage() {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
  
      {/* Hero Section with Gradient Background */}
      <div 
        className="relative py-20 rounded-b-3xl overflow-hidden bg-gradient-to-br from-green-600 to-blue-500"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white">Buying with Piscal+.com</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white hover:bg-green-50 transition-colors text-green-700 p-5 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 duration-200">
              <span className="font-medium text-lg">How does it work?</span>
            </div>
            <div className="bg-white hover:bg-green-50 transition-colors text-green-700 p-5 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 duration-200">
              <span className="font-medium text-lg">Why buy on Piscal+.com?</span>
            </div>
            <div className="bg-white hover:bg-green-50 transition-colors text-green-700 p-5 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 duration-200">
              <span className="font-medium text-lg">House-hunting tools</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white rounded-t-3xl"></div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* How does home-buying work section */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-6 mt-6 mx-6 rounded-2xl shadow-lg">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">How does home-buying work?</h2>
            <button className="text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">Need more information?</button>
          </div>
        </section>
        
        {/* Getting Ready to Buy */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-green-50 p-3 rounded-2xl shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white font-bold text-xl">01</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Getting ready to buy a property</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">Buying a home is an adventure! But there needs to be proper planning before taking the plunge. Here's what you should know to ensure the process runs smoothly, from financing your home to visiting properties and more.</p>
                <div className="text-green-600 font-medium mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a href="#" className="block mb-3 hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Getting your pre-approval
                  </a>
                  <a href="#" className="block hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Starting your search with a real estate agent
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div></div>
                  <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Obtaining Financing */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-green-50 p-3 rounded-2xl shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white font-bold text-xl">02</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Obtaining financing</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">Online mortgage preapproval is the first step to help you budget and find out what type of property you can afford. Get advice from mortgage brokers and financial advisors to make a mortgage broker will help you see the range of products that are best suited to your situation.</p>
                <div className="flex justify-between items-center">
                  <div></div>
                  <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Looking for and visiting homes */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-green-50 p-3 rounded-2xl shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white font-bold text-xl">03</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Looking for and visiting homes</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">Finding your dream home is all about property hunting, with the real estate website listings and criteria selection helping you narrow down your search. Visit open houses, booking site viewings, and checking out properties online.</p>
                <div className="text-green-600 font-medium my-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <a href="#" className="block mb-3 hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Save time and money: Use the proven checklist
                  </a>
                  <a href="#" className="block mb-3 hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Questions to ask owners
                  </a>
                  <a href="#" className="block hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> What to look out for when visiting
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div></div>
                  <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Making an Offer */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-green-50 p-3 rounded-2xl shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white font-bold text-xl">04</div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Making an Offer to Purchase and closing the deal</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">Ready to make an offer? Here are some key considerations you need to know:</p>
                <div className="text-green-600 font-medium my-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Understanding property value
                  </a>
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Making an offer to purchase
                  </a>
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Conditions to include
                  </a>
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Purchase price adjustments
                  </a>
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Finalizing the transaction
                  </a>
                  <a href="#" className="hover:text-green-800 transition-colors flex items-center bg-green-50 p-3 rounded-lg hover:bg-green-100">
                    <span className="mr-2 bg-white p-1 rounded-full">→</span> Getting the house inspection
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div></div>
                  <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Documents section */}
        <section className="py-10 px-6 bg-white rounded-2xl shadow-lg mx-6 my-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-green-700">Documents: Offer for purchase and counteroffer</h3>
            <p className="text-center mb-8 text-gray-600">A selection of essential documents to help you buy a property safely.</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-6">
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Offer to Purchase</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Offer to Purchase Condo</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Buying Agreement</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Annex for Inspection</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Counter Offer</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-3 shadow group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-800 group-hover:text-green-600 transition-colors">Supplemental Documentation</span>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
            </div>
          </div>
        </section>
        
        {/* Why buy on Piscal+.com? */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-6 mt-6 mx-6 rounded-2xl shadow-lg">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Why buy on Piscal+.com?</h2>
            <button className="text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">Need more information?</button>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700 leading-relaxed">We can help you find the home of a lifetime! All our home listings are direct from owners - small commission, buy properties at lower prices. Contact owners directly from your search results and neighborhood.</p>
                
                <p className="mb-4 text-gray-700 leading-relaxed">Support every step of the way with professional advice, buying guides, customer support, and more. You'll feel confident buying directly from the homeowner, with experts to turn to when you have questions.</p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 relative">
                  <img src="/api/placeholder/500/300" alt="Piscal+ Customer Support" className="w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
            </div>
          </div>
        </section>
        
        {/* Exclusive Properties */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Exclusive properties</h3>
            <p className="mb-4 text-lg font-medium text-gray-800">Thousands of properties listed without commission!</p>
            <p className="mb-4 text-gray-700 leading-relaxed">Looking for something special of which Piscal+.com is your best source? We've helped thousands of people find their dream home by connecting buyers directly with owners.</p>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
            </div>
          </div>
        </section>
        
        {/* House-hunting tools */}
        <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-8 px-6 mt-6 mx-6 rounded-2xl shadow-lg">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">House-hunting tools</h2>
            <button className="text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors">Need more information?</button>
          </div>
        </section>
        
        {/* Personal saved searches */}
        <section className="py-10 px-6 border-b border-gray-100 hover:bg-white rounded-xl mx-6 my-6 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">Personal saved searches</h3>
            <div className="md:flex gap-8 items-center">
              <div className="md:w-1/2">
                <p className="mb-4 text-gray-700 leading-relaxed">Easily save your favorite properties and search criteria in your Piscal+.com account!</p>
                <p className="mb-6 text-gray-700 leading-relaxed">Get all new and updated matches as soon as properties come available that match your criteria. Set up email alerts to be the first to know about new listings!</p>
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">Start your favourites</button>
              </div>
              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <div className="relative transform hover:scale-110 transition-transform duration-300">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center shadow-lg">
                    <Search className="w-16 h-16 text-green-600" />
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
            </div>
          </div>
        </section>
        
        {/* Favorites */}
        <section className="py-10 px-6 bg-white rounded-2xl shadow-lg mx-6 my-8">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-green-700">Find your favourites in the blink of an eye!</h3>
            <p className="mb-6 text-center text-gray-700 leading-relaxed">Easily store the listings that catch your attention. As you browse the listings, hit 'favourite' on properties that interest you to quickly return to them later!</p>
            <div className="flex justify-center mt-8">
              <div className="relative transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="bg-pink-50 p-6 rounded-full shadow-lg">
                  <Heart className="w-20 h-20 text-red-500" fill="rgb(239 68 68)" />
                </div>
                <Heart className="w-12 h-12 text-red-500 absolute -right-4 -top-2" fill="rgb(239 68 68)" />
                <Heart className="w-8 h-8 text-red-500 absolute -left-4 top-2" fill="rgb(239 68 68)" />
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:translate-y-1">Save your favourites</button>
            </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors">Need more information?</button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Fixed action buttons on right side */}
      <div className="fixed right-6 top-1/4 flex flex-col gap-4 z-50">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-2 mx-auto group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold block text-center">CONTACT</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
          <div className="flex flex-col items-center">
            <Search className="w-8 h-8 mb-2 mx-auto group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold block text-center">HELP</span>
        </div>
      </div>
    </div>
    </div>
  );
}