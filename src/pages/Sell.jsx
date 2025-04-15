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
    <div className="font-sans text-gray-900 antialiased">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 px-4 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0"></div>
          <img 
            src="/businessbg.png" 
            alt="Modern home interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl text-black font-bold mb-6 leading-tight">
                Selling without commission:<br/>
                <span className="text-black">trusting yourself pays off</span>
              </h1>
              
              <p className="text-xl text-black mb-8 max-w-2xl">
                Selling a property agent-free is friendlier, more gratifying and simpler than
                you might think. And best of all, it's more profitable!
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-white text-gray-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-lg transform transition-all hover:scale-105 duration-300">
              <h2 className="text-2xl font-bold mb-6 text-blue-900">Save big by keeping the commission</h2>
              <p className="mb-4">See how much you could save:</p>
              
              <div className="mb-8">
                <label className="block mb-4 font-medium">Price of your property</label>
                <input 
                  type="range" 
                  min="100000" 
                  max="1000000" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>$100k</span>
                  <span>$1M</span>
                </div>
                <div className="text-center my-4 text-xl font-semibold">
                  ${Number(price).toLocaleString()}
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-4 text-center">
                What would you do with ${commission.toLocaleString()}*?
              </div>
              <p className="text-sm text-gray-600 text-center">
                *Compared to an average commission of 5%, including applicable taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Selling a property yourself<br/>
            <span className="text-blue-600">doesn't mean doing it alone</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-600 text-3xl font-bold mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.content}</p>
                <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center">
                  {step.link} 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Schedule a call
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-blue-600">5 services</span> that make the difference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Day-to-day guide</h3>
              </div>
              <p className="text-gray-600">Personal advisor available 7 days a week for support</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">State-of-the-art app</h3>
              </div>
              <p className="text-gray-600">Instant notifications for buyers</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Premium Signage</h3>
              </div>
              <p className="text-gray-600">High-quality visible sign included</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">3D Virtual Tours</h3>
              </div>
              <p className="text-gray-600">Professional virtual home tours</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Email Alerts</h3>
              </div>
              <p className="text-gray-600">Instant alerts to interested buyers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We have a package to <span className="text-blue-600">meet your needs</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Bronze Package</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$1,149</div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic listing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  For sale sign
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Documentation guide
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Choose Bronze
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-blue-600 shadow-xl transform scale-105 md:scale-110 z-10 hover:shadow-2xl transition-all duration-300">
              <div className="bg-blue-600 text-white text-sm uppercase font-bold py-1 px-4 rounded-full inline-block mb-4">Most Popular</div>
              <h3 className="text-2xl font-bold mb-4">Silver Package</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$1,549</div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Bronze
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Enhanced listing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Professional photos
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Choose Silver
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Gold Package</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$1,949</div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Silver
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3D Virtual Tour
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority placement
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Choose Gold
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 md:py-24 px-4 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Happy homeowners" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <svg className="w-16 h-16 text-blue-300 opacity-30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl mb-8 leading-relaxed font-light">
            "We got great support and we sold at our asking price in only two weeks! I'm always going to use Piscal+ to sell."
          </blockquote>
          <div className="font-bold text-xl mb-8">Michelle and Maxence saved $16,000</div>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Discover our packages
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Are you ready to <span className="text-blue-600">trust yourself</span>?
          </h2>
          <p className="text-xl mb-8">We're ready to be there for you.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Schedule a call
          </button>
          <div className="mt-8">
            <p className="text-gray-600">or call us at <span className="font-semibold">819-555-5555</span></p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Sell;