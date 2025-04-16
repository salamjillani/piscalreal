import React, { useState } from 'react';

const Sell = () => {
  const [price, setPrice] = useState(500000);
  const commission = price * 0.05;
  
  const steps = [
    {
      title: "Prepare to sell",
      content: "Make your home look its best, take photos, create 3D tour, gather documents",
      link: "How to show your property at its best"
    },
    {
      title: "Set the right price",
      content: "Analyze similar properties, determine market value, create strategy",
      link: "How to determine the market value"
    },
    {
      title: "Attract buyers",
      content: "List on popular sites, place sign, manage calls and visits",
      link: "How to manage visits"
    },
    {
      title: "Negotiate and finalize",
      content: "Handle offers, negotiate terms, work with notary, close sale",
      link: "For a stress-free transaction"
    }
  ];

  return (
    <div className="font-sans text-gray-900 antialiased bg-white">
      {/* Hero Section with Glass Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Modern home interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-blue-900/30 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Selling without commission
                </span>
              </h1>
              <p className="text-2xl mb-8 font-light text-blue-100">
                Selling your property agent-free is more profitable, 
                more gratifying, and simpler than you think.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="bg-white text-indigo-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-xl hover:shadow-blue-500/20">
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
              <div className="bg-white/95 p-8 rounded-xl shadow-inner">
                <h2 className="text-2xl font-bold mb-6 text-indigo-900">Save by keeping the commission</h2>
                <p className="mb-6 text-gray-700">See how much you could save:</p>
                
                <div className="mb-8">
                  <label className="block mb-2 font-medium text-gray-700">Property price</label>
                  <input 
                    type="range" 
                    min="100000" 
                    max="1000000" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
                  <div className="flex justify-between text-sm mt-2 text-gray-500">
                    <span>$100k</span>
                    <span>$1M</span>
                  </div>
                  <div className="text-center my-6 text-2xl font-semibold text-indigo-900">
                    ${Number(price).toLocaleString()}
                  </div>
                </div>

                <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-full">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">
                    ${commission.toLocaleString()}
                  </div>
                  <p className="text-lg text-indigo-900">Your potential savings</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Compared to an average commission of 5%, including taxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                Selling a property yourself
              </span>
              <span className="block mt-2">doesn't mean doing it alone</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-indigo-100 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{step.content}</p>
                  <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center transition-colors">
                    {step.link} 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
              <span>Schedule a call</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">5 services</span> 
              <span className="block mt-2">that make the difference</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Day-to-day guide</h3>
              <p className="text-gray-600">Personal advisor available 7 days a week for support</p>
            </div>
            
            <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">State-of-the-art app</h3>
              <p className="text-gray-600">Instant notifications for buyers</p>
            </div>

            <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Premium Signage</h3>
              <p className="text-gray-600">High-quality visible sign included</p>
            </div>

            <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">3D Virtual Tours</h3>
              <p className="text-gray-600">Professional virtual home tours</p>
            </div>

            <div className="bg-white backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Email Alerts</h3>
              <p className="text-gray-600">Instant alerts to interested buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              We have a package to 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"> meet your needs</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Bronze Package</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$1,149</div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic listing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    For sale sign
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Documentation guide
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30">
                  Choose Bronze
                </button>
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-indigo-600 to-blue-700 rounded-2xl overflow-hidden transition-all duration-500 group hover:-translate-y-2 shadow-xl hover:shadow-2xl">
              <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs uppercase font-bold py-2 px-4 rounded-bl-lg">Most Popular</div>
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Silver Package</h3>
                <div className="text-4xl font-bold mb-6">$1,549</div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Everything in Bronze
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Enhanced listing
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Professional photos
                  </li>
                </ul>
                <button className="w-full bg-white text-indigo-600 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                  Choose Silver
                </button>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 group hover:-translate-y-2 shadow-lg hover:shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white z-0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Gold Package</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$1,949</div>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Everything in Silver
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    3D Virtual Tour
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority placement
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30">
                  Choose Gold
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-blue-900 z-0"></div>
        <div className="absolute inset-0 opacity-20 z-0">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <rect width="9" height="9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600/30 rounded-full mb-8">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-3xl font-light mb-8 leading-relaxed text-white">
            "We got great support and we sold at our asking price in only two weeks! I'm always going to use Piscal+ to sell."
          </blockquote>
          <div className="font-bold text-2xl mb-8 text-white">Michelle and Maxence saved $16,000</div>
          <button className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20">
            <span>Discover our packages</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Are you ready to 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500"> trust yourself</span>?
          </h2>
          <p className="text-xl mb-10 text-gray-600">We're ready to be there for you every step of the way.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1">
              Schedule a call
            </button>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span className="text-gray-900 font-medium">or call us at <span className="font-bold">819-555-5555</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sell;