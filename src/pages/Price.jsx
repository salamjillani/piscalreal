import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Plus, ChevronDown, PhoneCall, Info } from 'lucide-react';


const PricingPage = () => {
  const [selectedTab, setSelectedTab] = useState('Residential');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    { question: "How can I sell my property without an agent?" },
    { question: "What happens after I buy online?" },
    { question: "Does the duration given for the Bronze and Silver packages begin as soon as you purchase them?" },
    { question: "How long do I have to post my listing online?" },
    { question: "Can I change packages after buying one?" },
    { question: "If I change my mind, is my purchase refundable?" },
  ];

  return (
    <div className="w-full bg-white font-sans">

      {/* Hero Section with Full Width Background */}
      <div className="w-full bg-cover bg-center py-24" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/pricingbackground.jpg')`,
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold mb-4">
              Sell with complete confidence with a Piscal+ package
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Select a package or let us help you determine what you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-white text-gray-800 hover:bg-gray-100 transition-colors">
                <PhoneCall className="h-5 w-5 mr-2" />
                Contact an advisor
              </button>
              <button className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition-colors">
                Choose a package
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-36">
          <div className="bg-[#BEE276] rounded-lg p-6 flex items-center justify-between">
            <p className="text-sm font-bold text-black">
              Discover our service offering for builders, developers, agencies and landlords.
            </p>
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Package Selection Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose your package</h2>
        
        {/* Property Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded- shadow-sm bg-gray-100 p-1">
            {['Residential', 'Multiples', 'Commercial', 'Lot / Land'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-md transition-all ${
                  selectedTab === tab 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bronze Package */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Bronze Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">$1,149<span className="text-sm font-medium text-gray-500">.95</span></p>
                <p className="text-gray-500 mt-2">Basic selling support</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>4 months listing duration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>8 HDR photos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>In-home appointment</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-gray-300 rounded-full py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Choose this package
              </button>
            </div>
          </div>

          {/* Silver Package */}
          <div className="border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Silver Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">$1,549<span className="text-sm font-medium text-gray-500">.95</span></p>
                <p className="text-gray-500 mt-2">Enhanced selling experience</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>8 months listing duration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>15 HDR photos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Featured for 2 weeks</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-gray-300 rounded-full py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Choose this package
              </button>
            </div>
          </div>

          {/* Gold Package */}
          <div className="border-2 border-green-500 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow relative">
            <div className="bg-green-500 text-white text-sm font-medium px-4 py-2 absolute top-0 right-0 rounded-bl-lg">
              Most popular
            </div>
            <div className="p-8 pt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Gold Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">$1,949<span className="text-sm font-medium text-gray-500">.95</span></p>
                <p className="text-gray-500 mt-2">Premium selling experience</p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Unlimited duration (until sold)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Unlimited HDR photos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  <span>Featured for 6 weeks</span>
                </li>
              </ul>
              <button className="w-full bg-green-500 border border-transparent rounded-full py-3 text-sm font-semibold text-white hover:bg-green-600 transition-colors">
                Choose this package
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-20 overflow-hidden">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Compare all features</h3>
          
          {/* Table Header */}
          <div className="grid grid-cols-4 mb-4 border-b pb-4">
            <div className="col-span-1 text-sm font-semibold text-gray-600">FEATURES</div>
            <div className="col-span-1 text-center text-sm font-semibold text-gray-600">BRONZE</div>
            <div className="col-span-1 text-center text-sm font-semibold text-gray-600">SILVER</div>
            <div className="col-span-1 text-center text-sm font-semibold text-gray-600">GOLD</div>
          </div>

          {/* Included in every package */}
          <div className="border-b pb-2">
            <div className="text-sm font-semibold text-gray-900 py-4">Included in every package</div>
          </div>
          
          {[
            {name: "In-home appointment", tooltip: true},
            {name: "Customer service 7/7", tooltip: true},
            {name: "Coaches", tooltip: false},
            {name: "Legal documents (Offer to Purchase, etc.)", tooltip: true},
            {name: "For Sale sign", tooltip: true},
          ].map((feature, idx) => (
            <div key={idx} className="grid grid-cols-4 py-4 border-b">
              <div className="col-span-1 text-sm text-gray-800 flex items-center">
                {feature.name}
                {feature.tooltip && (
                  <Info className="h-4 w-4 ml-1 text-gray-400" />
                )}
              </div>
              <div className="col-span-1 flex justify-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="col-span-1 flex justify-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="col-span-1 flex justify-center bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}

          {/* Exposure tools */}
          <div className="border-b pb-2 mt-8">
            <div className="text-sm font-semibold text-gray-900 py-4">Exposure tools</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="col-span-1 text-sm text-gray-800 flex items-center">
              Online listing on Piscal+.com
              <Info className="h-4 w-4 ml-1 text-gray-400" />
            </div>
            <div className="col-span-1 text-center text-sm">4 months</div>
            <div className="col-span-1 text-center text-sm">8 months</div>
            <div className="col-span-1 text-center text-sm bg-green-50 rounded-lg font-medium">Until you sell</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="col-span-1 text-sm text-gray-800 flex items-center">
              HDR photos
              <Info className="h-4 w-4 ml-1 text-gray-400" />
            </div>
            <div className="col-span-1 text-center text-sm">8</div>
            <div className="col-span-1 text-center text-sm">15</div>
            <div className="col-span-1 text-center text-sm bg-green-50 rounded-lg font-medium">Unlimited</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="col-span-1 text-sm text-gray-800 flex items-center">
              Featured Homes section
              <Info className="h-4 w-4 ml-1 text-gray-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">2 weeks</div>
            <div className="col-span-1 text-center text-sm bg-green-50 rounded-lg font-medium">6 weeks</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="col-span-1 text-sm text-gray-800 flex items-center">
              Additional signs
              <Info className="h-4 w-4 ml-1 text-gray-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm bg-green-50 rounded-lg font-medium">3</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b">
            <div className="col-span-1 text-sm text-gray-800 flex items-center">
              Listing repositioning
              <Info className="h-4 w-4 ml-1 text-gray-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 flex justify-center bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          </div>
          
          {/* Support section */}
          <div className="border-b pb-2 mt-8">
            <div className="text-sm font-semibold text-gray-900 py-4">Support</div>
          </div>
          
          {[
            {name: "Access to notaries", tooltip: true},
            {name: "Appraisers' document and consulting", tooltip: true},
            {name: "In your area", tooltip: true},
          ].map((feature, idx) => (
            <div key={idx} className="grid grid-cols-4 py-4 border-b">
              <div className="col-span-1 text-sm text-gray-800 flex items-center">
                {feature.name}
                {feature.tooltip && (
                  <Info className="h-4 w-4 ml-1 text-gray-400" />
                )}
              </div>
              <div className="col-span-1 text-center text-sm">—</div>
              <div className="col-span-1 flex justify-center">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <div className="col-span-1 flex justify-center bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA buttons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 flex justify-center">
            <button className="px-8 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700 transition-colors">
              Choose Bronze Package
            </button>
          </div>
          <div className="col-span-1 flex justify-center">
            <button className="px-8 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700 transition-colors">
              Choose Silver Package
            </button>
          </div>
          <div className="col-span-1 flex justify-center">
            <button className="px-8 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors">
              Choose Gold Package
            </button>
          </div>
        </div>
      </div>

      {/* Financing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8  p-6 inline-block ">
            <img src="/financial.png" alt="Financing icon" className="h-24 w-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing options available</h2>
        
          <button className="inline-flex items-center px-8 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
            See financing options
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 lg:h-full">
              <img 
                className="h-full w-full object-cover rounded-xl shadow-lg" 
                src="/pricingcontact.jpg" 
                alt="Person on phone" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-xl font-bold mb-2">Need advice?</h3>
                <p>Our experts are ready to help you find the right solution.</p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">It costs nothing to ask!</h2>
              <p className="text-gray-600 mb-6">Enter your information so we can call you, or call us at 1-866-387-7677</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-blue-700">*First name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-blue-700">*Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-700">*Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. 819-555-5555"
                    className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contactTime" className="block text-sm font-medium text-blue-700">*Best time to contact you?</label>
                  <select
                    id="contactTime"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg shadow-sm"
                  >
                    <option>Select</option>
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (12pm - 5pm)</option>
                    <option>Evening (5pm - 9pm)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black border border-transparent rounded-full shadow-sm py-3 px-4 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                >
                  Call me back!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900">Most frequently asked questions</h2>
              <p className="mt-4 text-gray-600">
                Find answers to common questions about our services and packages.
              </p>
            </div>
            <div className="lg:col-span-2">
              <dl className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <dt className="text-lg">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="text-left w-full flex justify-between items-center text-gray-900 font-medium focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronDown className="h-5 w-5 text-green-600" />
                        ) : (
                          <Plus className="h-5 w-5 text-green-600" />
                        )}
                      </button>
                    </dt>
                    {expandedFaq === index && (
                      <dd className="mt-4 text-base text-gray-600">
                        <p>
                          This is an example answer to the question. Detailed information would be provided here to help potential customers understand our services better.
                        </p>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PricingPage;