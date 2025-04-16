import React from 'react';

const Business = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="px-4 py-1 bg-white bg-opacity-30 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-800 mb-5 inline-block">Business Growth Solutions</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Visibility Solutions 
                <span className="block text-indigo-700">That Elevate Your Business</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-md">
                Custom-designed visibility solutions to help you attract satisfied clients. Give your project the attention it deserves!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-indigo-200 hover:shadow-xl">
                  Schedule a call
                </button>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all border border-indigo-100 shadow-md">
                  1-800-555-0000
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <img 
                  src="/video.png" 
                  alt="Business growth" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-5">OUR FEATURES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Outstanding Visibility on Established Platforms</h2>
            <div className="w-24 h-1 bg-indigo-600 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A proven network of high-traffic websites that build trust and target your ideal visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" x="2" y="3" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 17v4M16 17v4M2 9h20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Detailed & Experience-Driven Listing</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Comprehensive details about your project, company, products, and services displayed elegantly on a dedicated page.</p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" x="2" y="3" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Clickable Company Logo</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Your vibrant company logo prominently displayed and linked directly to your website for seamless navigation.</p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Company Showcase</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Drive more visits with interactive elements. Every click counts as people begin to recognize and trust your brand.</p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 9h1M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Corporate Profile Page</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Expanded information on your history, services, products, and competitive advantages presented beautifully.</p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8h.01M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Professional HDR Photography</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Our local photographers capture stunning, high-quality images of your materials and spaces.</p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-white rounded-xl p-8 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 16v2a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-all duration-300">Immersive 3D Virtual Tours</h3>
              <p className="text-gray-600 group-hover:text-indigo-100 transition-all duration-300">Stand out from competitors with cutting-edge virtual tours that showcase your spaces to potential clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section with Timeline Style */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-5">SUPPORT SYSTEM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support That Matches Your Ambitions</h2>
            <div className="w-24 h-1 bg-indigo-600 mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We handle even the most complex projects with care, professionalism, and dedicated attention to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Item 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/contactimg.png" alt="Dedicated team" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Dedicated Team</h3>
                  <p className="text-gray-600">Every client receives a specialized team that aligns your specific needs with our visibility solutions for maximum impact.</p>
                </div>
              </div>
            </div>

            {/* Support Item 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/contactimage.png" alt="Pre-marketing setup" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Pre-Marketing Setup</h3>
                  <p className="text-gray-600">Boost your marketing with our comprehensive analytics and complete preliminary setup tailored to your project's goals.</p>
                </div>
              </div>
            </div>

            {/* Support Item 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src="/contactimage.png" alt="Contact center" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Responsive Contact Center</h3>
                  <p className="text-gray-600">Reach our team through multiple channels including phone, email, social media, and messaging applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section with Wave */}
      <section className="py-20 px-6 bg-indigo-900 text-white relative overflow-hidden">
        {/* Wave Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
          <svg className="absolute bottom-0 w-full transform rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-indigo-800 p-6 rounded-full shadow-lg mb-10 border border-indigo-700">
            <svg className="w-16 h-16 text-indigo-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" stroke="currentColor" strokeWidth="2" />
              <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" stroke="currentColor" strokeWidth="2" />
              <path d="M10 14h4M12 12v4" stroke="currentColor" strokeWidth="2" />
              <path d="M10 3v4M14 3v4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Attract New Clients?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Get started with our trusted visibility solutions and see the positive impact on your business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-medium text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Contact our team
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/10 transition-colors">
              1-800-555-0000
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-5 inline-block">OUR VALUE</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Listing is good.</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600">Showcasing is better.</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg mb-10">Enhance your visibility with our world-class promotional opportunities.</p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">Advertising Solutions</button>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">Marketing Media</button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">Social Channels</button>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">Blog</button>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">Extra Visibility</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-100 rounded-xl -z-10"></div>
                <img src="/Logo.png" alt="Dashboard preview" className="rounded-xl shadow-xl relative z-10" />
                <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-4 rounded-full shadow-lg z-20">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18v-2M12 18v-6M8 18v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M3 20.4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5.4a2 2 0 0 0-1.4.6l-1 1z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="font-bold text-2xl mb-6 text-gray-800">Attractive and Varied Formats</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Maximize your listings' attraction potential with feature ads designed to capture attention.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Precise targeting by area and property type to reach your ideal audience.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Strategic positioning in premium locations throughout the site for maximum visibility.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Effective reach and frequency calibrated to maximize engagement with your target audience.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section with Logos */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-5">OUR CLIENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Hundreds of Businesses</h2>
            <div className="w-24 h-1 bg-indigo-600 mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Client logos with modern styling */}
            {[...Array(10)].map((_, i) => (
              <div key={`logo-${i}`} className="flex items-center justify-center group">
                <div className="h-20 w-40 bg-white border border-gray-100 flex items-center justify-center rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group-hover:border-indigo-200">
                  <span className="text-gray-400 group-hover:text-indigo-600 font-medium transition-all duration-300">LOGO {i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section with Glass Effect */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src="/pricingcontact.jpg" alt="Businessman on phone" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-3xl font-bold mb-2">Ready to boost your visibility?</h3>
                  <p className="text-indigo-100 text-lg">Our team of experts is waiting to help you stand out.</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white backdrop-blur-lg bg-opacity-70 p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">GET STARTED</span>
                <h2 className="text-3xl font-bold mb-3">Reach Your Target Audience Today</h2>
                <p className="text-gray-600">
                  Take the first step towards enhanced visibility and connect with clients who are looking for exactly what you offer.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company name</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company address</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input type="url" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your specific needs</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                
                <div>
                  <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300" />
                    </div>
                    <label className="ml-2 text-sm text-gray-600">
                      I agree to process my personal information for communications, advising, information, marketing and
                      research activities in connection with the products and services.
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Submit Your Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default Business;