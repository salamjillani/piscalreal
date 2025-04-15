import React from 'react';


const Business = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using placeholder since we can't use external images */}
          <div className="absolute inset-0  z-10"></div>
          <img 
            src="/businessbg.png" 
            alt="Business growth" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
            Visibility Solutions That Scale To Your Business
          </h1>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Custom-designed visibility solutions to help you attract satisfied clients. Give your project the attention it deserves!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium  transition-colors shadow-lg">
              Schedule a call
            </button>
            <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              1-800-555-0000
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Outstanding Visibility on Established Platforms</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A proven network of high-traffic websites that build trust and target your ideal visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" x="2" y="3" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 17v4M16 17v4M2 9h20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Detailed & Experience-Driven Listing</h3>
              <p className="text-gray-600">Comprehensive details about your project, company, products, and services displayed elegantly on a dedicated page.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" x="2" y="3" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Clickable Company Logo</h3>
              <p className="text-gray-600">Your vibrant company logo prominently displayed and linked directly to your website for seamless navigation.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Company Showcase</h3>
              <p className="text-gray-600">Drive more visits with interactive elements. Every click counts as people begin to recognize and trust your brand.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 9h1M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Corporate Profile Page</h3>
              <p className="text-gray-600">Expanded information on your history, services, products, and competitive advantages presented beautifully.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8h.01M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Professional HDR Photography</h3>
              <p className="text-gray-600">Our local photographers capture stunning, high-quality images of your materials and spaces.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 16v2a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Immersive 3D Virtual Tours</h3>
              <p className="text-gray-600">Stand out from competitors with cutting-edge virtual tours that showcase your spaces to potential clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support That Matches Your Ambitions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We handle even the most complex projects with care, professionalism, and dedicated attention to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support Item 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-64">
                <img src="/api/placeholder/600/400" alt="Dedicated team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-bold text-xl text-white">Dedicated Team</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">Every client receives a specialized team that aligns your specific needs with our visibility solutions for maximum impact.</p>
              </div>
            </div>

            {/* Support Item 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-64">
                <img src="/api/placeholder/600/400" alt="Pre-marketing setup" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-bold text-xl text-white">Pre-Marketing Setup</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">Boost your marketing with our comprehensive analytics and complete preliminary setup tailored to your project's goals.</p>
              </div>
            </div>

            {/* Support Item 3 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative h-64">
                <img src="/api/placeholder/600/400" alt="Contact center" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 font-bold text-xl text-white">Responsive Contact Center</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">Reach our team through multiple channels including phone, email, social media, and messaging applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 bg-[#D5ECA5] text-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white p-6 rounded-full shadow-lg mb-10">
            <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" stroke="currentColor" strokeWidth="2" />
              <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" stroke="currentColor" strokeWidth="2" />
              <path d="M10 14h4M12 12v4" stroke="currentColor" strokeWidth="2" />
              <path d="M10 3v4M14 3v4" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Attract New Clients?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Get started with our trusted visibility solutions and see the positive impact on your business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Contact our team
            </button>
            <button className="bg-transparent border-2 border-black px-8 py-3 rounded-full font-medium text-lg hover:bg-white/10 transition-colors">
              1-800-555-0000
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Listing is good.</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">Showcasing is better.</h2>
            <p className="text-gray-600 text-lg mb-10">Enhance your visibility with our world-class promotional opportunities.</p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Advertising Solutions</button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Marketing Media</button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Social Channels</button>
              <button className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Blog</button>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all">Extra Visibility</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="bg-green-50 p-8 rounded-xl shadow-lg max-w-lg">
              <h3 className="font-bold text-2xl mb-6 text-gray-800">Attractive and Varied Formats</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Maximize your listings' attraction potential with feature ads designed to capture attention.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Precise targeting by area and property type to reach your ideal audience.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Strategic positioning in premium locations throughout the site for maximum visibility.</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Effective reach and frequency calibrated to maximize engagement with your target audience.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img src="/api/placeholder/400/300" alt="Dashboard preview" className="rounded-xl shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-green-100 p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 18v-2M12 18v-6M8 18v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 20.4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5.4a2 2 0 0 0-1.4.6l-1 1z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Trusted by Hundreds of Businesses</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Client logos with modern styling */}
            {[...Array(8)].map((_, i) => (
              <div key={`logo-row-1-${i}`} className="flex items-center justify-center">
                <div className="h-20 w-40 bg-white border border-gray-100 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-500 font-medium">LOGO {i+1}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* More client logos */}
            {[...Array(8)].map((_, i) => (
              <div key={`logo-row-2-${i}`} className="flex items-center justify-center">
                <div className="h-20 w-40 bg-white border border-gray-100 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-500 font-medium">LOGO {i+9}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/api/placeholder/600/800" alt="Businessman on phone" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Ready to boost your visibility?</h3>
                  <p className="text-white/80">Our team of experts is waiting to help you stand out.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-10 rounded-2xl shadow-xl">
              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h2 className="text-2xl font-bold mb-3">Reach Your Target Audience Today</h2>
                <p className="text-gray-700">
                  Take the first step towards enhanced visibility and connect with clients who are looking for exactly what you offer.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company address</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                </div>
                <div className="flex gap-6">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">City and ZIP code</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <input type="url" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your specific needs</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <div>
                  <div className="flex items-start mb-6">
                    <input type="checkbox" className="mt-1 mr-3" />
                    <p className="text-sm text-gray-600">
                      I agree to process my personal information for communications, advising, information, marketing and
                      research activities in connection with the products and services as described in the privacy statement.
                    </p>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
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