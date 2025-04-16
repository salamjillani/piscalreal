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
    <div className="w-full bg-slate-50 font-sans">
      {/* Hero Section with Gradient Background */}
      <div className="w-full bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
              Sell with complete confidence with a Piscal+ package
            </h1>
            <p className="text-xl mb-10 text-indigo-100 font-light">
              Select a package or let us help you determine what you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center px-8 py-4 rounded-full text-sm font-medium bg-white text-indigo-900 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                <PhoneCall className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                Contact an advisor
              </button>
              <button className="group inline-flex items-center px-8 py-4 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-400 to-green-500 text-white hover:shadow-lg transition-all shadow-md hover:shadow-emerald-200/50">
                Choose a package
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer Banner */}
      <div className="bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                <Info className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Discover our service offering for builders, developers, agencies and landlords.
              </p>
            </div>
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <ChevronRight className="h-4 w-4 text-slate-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Package Selection Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Choose your package</h2>
        <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto">Select the perfect package to meet your property selling needs</p>
        
        {/* Property Type Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full shadow-sm bg-white p-1.5 border border-slate-200">
            {['Residential', 'Multiples', 'Commercial', 'Lot / Land'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                  selectedTab === tab 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100'
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
          <div className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="p-8">
              <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                <span className="text-amber-700 font-bold">B</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Bronze Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-slate-800">$1,149<span className="text-sm font-medium text-slate-500">.95</span></p>
                <p className="text-slate-500 mt-2">Basic selling support</p>
              </div>
              <ul className="mb-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">4 months listing duration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">8 HDR photos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">In-home appointment</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-slate-300 rounded-full py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors group-hover:border-amber-300">
                Choose this package
              </button>
            </div>
          </div>

          {/* Silver Package */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="p-8">
              <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                <span className="text-slate-700 font-bold">S</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Silver Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-slate-800">$1,549<span className="text-sm font-medium text-slate-500">.95</span></p>
                <p className="text-slate-500 mt-2">Enhanced selling experience</p>
              </div>
              <ul className="mb-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">8 months listing duration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">15 HDR photos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">Featured for 2 weeks</span>
                </li>
              </ul>
              <button className="w-full bg-white border border-slate-300 rounded-full py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors group-hover:border-slate-400">
                Choose this package
              </button>
            </div>
          </div>

          {/* Gold Package */}
          <div className="bg-white border-2 border-emerald-500 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 group relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              Most popular
            </div>
            <div className="p-8 pt-10">
              <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <span className="text-emerald-700 font-bold">G</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Gold Package</h2>
              <div className="mb-8">
                <p className="text-4xl font-bold text-slate-800">$1,949<span className="text-sm font-medium text-slate-500">.95</span></p>
                <p className="text-slate-500 mt-2">Premium selling experience</p>
              </div>
              <ul className="mb-8 space-y-4 text-sm">
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">Unlimited duration (until sold)</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">Unlimited HDR photos</span>
                </li>
                <li className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">Featured for 6 weeks</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 border border-transparent rounded-full py-3.5 text-sm font-semibold text-white hover:shadow-lg transition-all shadow-md">
                Choose this package
              </button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24 bg-white rounded-3xl shadow-lg p-8 overflow-hidden">
          <h3 className="text-2xl font-bold text-slate-800 mb-10">Compare all features</h3>
          
          {/* Table Header */}
          <div className="grid grid-cols-4 mb-6 border-b pb-4">
            <div className="col-span-1 text-sm font-semibold text-slate-500">FEATURES</div>
            <div className="col-span-1 text-center text-sm font-semibold text-slate-500">BRONZE</div>
            <div className="col-span-1 text-center text-sm font-semibold text-slate-500">SILVER</div>
            <div className="col-span-1 text-center text-sm font-semibold text-slate-500">GOLD</div>
          </div>

          {/* Included in every package */}
          <div className="border-b pb-2">
            <div className="text-sm font-bold text-slate-800 py-4">Included in every package</div>
          </div>
          
          {[
            {name: "In-home appointment", tooltip: true},
            {name: "Customer service 7/7", tooltip: true},
            {name: "Coaches", tooltip: false},
            {name: "Legal documents (Offer to Purchase, etc.)", tooltip: true},
            {name: "For Sale sign", tooltip: true},
          ].map((feature, idx) => (
            <div key={idx} className="grid grid-cols-4 py-4 border-b">
              <div className="col-span-1 text-sm text-slate-700 flex items-center">
                {feature.name}
                {feature.tooltip && (
                  <Info className="h-4 w-4 ml-1 text-slate-400" />
                )}
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}

          {/* Exposure tools */}
          <div className="border-b pb-2 mt-8">
            <div className="text-sm font-bold text-slate-800 py-4">Exposure tools</div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
            <div className="col-span-1 text-sm text-slate-700 flex items-center">
              Online listing on Piscal+.com
              <Info className="h-4 w-4 ml-1 text-slate-400" />
            </div>
            <div className="col-span-1 text-center text-sm">4 months</div>
            <div className="col-span-1 text-center text-sm">8 months</div>
            <div className="col-span-1 text-center text-sm font-medium">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Until you sell</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
            <div className="col-span-1 text-sm text-slate-700 flex items-center">
              HDR photos
              <Info className="h-4 w-4 ml-1 text-slate-400" />
            </div>
            <div className="col-span-1 text-center text-sm">8</div>
            <div className="col-span-1 text-center text-sm">15</div>
            <div className="col-span-1 text-center text-sm font-medium">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">Unlimited</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
            <div className="col-span-1 text-sm text-slate-700 flex items-center">
              Featured Homes section
              <Info className="h-4 w-4 ml-1 text-slate-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">2 weeks</div>
            <div className="col-span-1 text-center text-sm font-medium">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">6 weeks</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
            <div className="col-span-1 text-sm text-slate-700 flex items-center">
              Additional signs
              <Info className="h-4 w-4 ml-1 text-slate-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm font-medium">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">3</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
            <div className="col-span-1 text-sm text-slate-700 flex items-center">
              Listing repositioning
              <Info className="h-4 w-4 ml-1 text-slate-400" />
            </div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 text-center text-sm">—</div>
            <div className="col-span-1 flex justify-center">
              <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
              </div>
            </div>
          </div>
          
          {/* Support section */}
          <div className="border-b pb-2 mt-8">
            <div className="text-sm font-bold text-slate-800 py-4">Support</div>
          </div>
          
          {[
            {name: "Access to notaries", tooltip: true},
            {name: "Appraisers' document and consulting", tooltip: true},
            {name: "In your area", tooltip: true},
          ].map((feature, idx) => (
            <div key={idx} className="grid grid-cols-4 py-4 border-b hover:bg-slate-50">
              <div className="col-span-1 text-sm text-slate-700 flex items-center">
                {feature.name}
                {feature.tooltip && (
                  <Info className="h-4 w-4 ml-1 text-slate-400" />
                )}
              </div>
              <div className="col-span-1 text-center text-sm">—</div>
              <div className="col-span-1 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA buttons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <button className="w-full px-8 py-4 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-slate-700 to-slate-900 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Choose Bronze Package
            </button>
          </div>
          <div className="col-span-1">
            <button className="w-full px-8 py-4 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-slate-700 to-slate-900 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              Choose Silver Package
            </button>
          </div>
          <div className="col-span-1">
            <button className="w-full px-8 py-4 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-emerald-500 to-green-500 hover:shadow-lg transition-all transform hover:-translate-y-0.5 hover:shadow-emerald-200/50">
              Choose Gold Package
            </button>
          </div>
        </div>
      </div>

      {/* Financing Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-3xl p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 -mt-12 -mr-12 bg-indigo-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-0 left-0 h-40 w-40 -mb-12 -ml-12 bg-sky-100 rounded-full opacity-70"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 flex-shrink-0">
                <div className="bg-white p-4 rounded-2xl shadow-md mb-4 mx-auto md:mx-0" style={{width: "fit-content"}}>
                  <img src="/financial.png" alt="Financing icon" className="h-24 w-auto" />
                </div>
              </div>
              
              <div className="md:mx-8 text-center md:text-left flex-grow">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Flexible financing options available</h2>
                <p className="text-slate-600 mb-6 max-w-lg">
                  Choose from a variety of payment plans that suit your budget and preferences.
                </p>
              </div>
              
              <button className="flex items-center px-8 py-4 border border-indigo-200 shadow-sm text-sm font-medium rounded-full text-indigo-700 bg-white hover:bg-indigo-50 transition-all transform hover:-translate-y-0.5">
                See financing options
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-xl">
                <img 
                  className="h-full w-full object-cover" 
                  src="/pricingcontact.jpg" 
                  alt="Person on phone" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/80"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Need advice?</h3>
                  <p className="text-indigo-100">Our experts are ready to help you find the right solution.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 bg-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">It costs nothing to ask!</h2>
              <p className="text-slate-600 mb-8">Enter your information so we can call you, or call us at <span className="font-semibold">1-866-387-7677</span></p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-indigo-700 mb-1">*First name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="block w-full border-slate-200 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-indigo-700 mb-1">*Last name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="block w-full border-slate-200 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-indigo-700 mb-1">*Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. 819-555-5555"
                    className="block w-full border-slate-200 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12"
                  />
                </div>
                <div>
                  <label htmlFor="contactTime" className="block text-sm font-medium text-indigo-700 mb-1">*Best time to contact you?</label>
                  <select
                    id="contactTime"
                    className="block w-full pl-4 pr-10 py-3 text-base border-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-xl shadow-sm h-12"
                  >
                    <option>Select</option>
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (12pm - 5pm)</option>
                    <option>Evening (5pm - 9pm)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 border border-transparent rounded-xl shadow-lg py-4 px-6 text-sm font-medium text-white hover:shadow-xl transition-all transform hover:-translate-y-0.5 hover:shadow-indigo-200/50"
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