import React, { useState } from 'react';

export default function PiscalContactPage() {
  const [serviceType, setServiceType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white font-sans text-gray-800">
      {/* Hero Section - Redesigned with overlapping elements and shadows */}
      <div className="relative overflow-hidden rounded-b-3xl shadow-xl mb-8 md:mb-16">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 md:p-12 w-full md:w-1/2 flex flex-col justify-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">Contact our team</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We'll be happy to help you with your property selling project
              and answer any questions you may have.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-10"></div>
            <img src="/video.png" alt="Woman working on laptop with coffee" className="w-full h-64 md:h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Client Section - Redesigned with card-like appearance */}
      <div className="py-8 md:py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Already a Piscal+ client?</h2>
          <p className="mb-3 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            When you sell with Piscal+, you can contact our customer service team 7 days a week at 1-866-387-7677.
          </p>
          <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            You can also make an appointment with a real estate coach, a notary¹ or an appraiser¹, or refer to the Help
            Centre to get answers to your questions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-50 border-2 border-gray-800 rounded-full px-6 md:px-8 py-2 md:py-3 font-medium transition-all text-sm md:text-base">
              Appointment Centre
            </button>
            <button className="bg-white hover:bg-gray-50 border-2 border-gray-800 rounded-full px-6 md:px-8 py-2 md:py-3 font-medium transition-all text-sm md:text-base">
              Help Center
            </button>
          </div>
        </div>
      </div>

      {/* Real Estate Needs Section - Redesigned with floating cards */}
      <div className="py-8 md:py-16 px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">We're here for your real estate needs</h2>
          <p className="text-gray-600 text-base md:text-lg">Directly contact the team that can help you.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mx-auto max-w-6xl">
          {/* Property Sale */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex-1 text-left transform hover:translate-y-1 transition-all border-t-4 border-green-500 mb-6 md:mb-0">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="text-green-500 bg-green-50 p-3 md:p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Property sale</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Want to sell your property? Our advisors are here to support you.
            </p>
            
            <div className="text-gray-700 space-y-3 md:space-y-4 text-sm md:text-base">
              <div>
                <p className="font-bold text-gray-800">By phone</p>
                <p className="text-green-600 font-medium">1-866-387-7677</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">By email</p>
                <p className="text-green-600 font-medium">info@Piscal+.com</p>
              </div>
              <div className="text-xs md:text-sm pt-2 border-t border-gray-100">
                <p>Monday to Thursday: 8:30 a.m. to 7:00 p.m.</p>
                <p>Friday: 8:30 a.m. to 5:00 p.m.</p>
                <p>Saturday and Sunday: 10:00 a.m. to 3:00 p.m.</p>
              </div>
            </div>
          </div>
          
          {/* Property Rental */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex-1 text-left transform hover:translate-y-1 transition-all border-t-4 border-blue-500 mb-6 md:mb-0">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="text-blue-500 bg-blue-50 p-3 md:p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Property rental</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Are you renting your property? Ask our team of professionals your questions.
            </p>
            
            <div className="text-gray-700 space-y-3 md:space-y-4 text-sm md:text-base">
              <div>
                <p className="font-bold text-gray-800">By phone</p>
                <p className="text-blue-600 font-medium">1-855-438-2082</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">By email</p>
                <p className="text-blue-600 font-medium">locations@Piscal+.com</p>
              </div>
              <div className="text-xs md:text-sm pt-2 border-t border-gray-100">
                <p>Monday to Thursday: 8:30 a.m. to 7:00 p.m.</p>
                <p>Friday: 8:30 a.m. to 5:00 p.m.</p>
                <p>Saturday and Sunday: 10:00 a.m. to 3:00 p.m.</p>
              </div>
            </div>
          </div>
          
          {/* Business Services */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg flex-1 text-left transform hover:translate-y-1 transition-all border-t-4 border-purple-500">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="text-purple-500 bg-purple-50 p-3 md:p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Business services</h3>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              Are you a real estate company that owns properties for sale or rent? Contact our team dedicated to businesses.
            </p>
            
            <div className="text-gray-700 space-y-3 md:space-y-4 text-sm md:text-base">
              <div>
                <p className="font-bold text-gray-800">By phone</p>
                <p className="text-purple-600 font-medium">1-855-932-2202</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">By email</p>
                <p className="text-purple-600 font-medium">serviceauxentreprises@Piscal+.com</p>
              </div>
              <div className="text-xs md:text-sm pt-2 border-t border-gray-100">
                <p>Monday to Friday: 8:30 a.m. to 7:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Head Office Section - Redesigned with modern layout */}
      <div className="py-8 md:py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Contact Form */}
          <div className="w-full lg:w-7/12 p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Contact us by e-mail</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Please provide your contact details and the reason for your request,
              and we will get back to you as soon as possible.
            </p>
            
            <form className="mt-4 md:mt-6">
              <p className="text-xs text-gray-500 mb-4 md:mb-6">*Required fields</p>
              
              {/* Service Type */}
              <div className="mb-4 md:mb-5">
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">*Service type</label>
                <div className="relative">
                  <button 
                    type="button" 
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg text-left flex justify-between items-center bg-white hover:border-gray-400 transition-colors text-sm md:text-base"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <span>{serviceType || "Select a service type"}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {showDropdown && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg">
                      {["Property sale", "Property rental", "Business services"].map((service) => (
                        <div
                          key={service}
                          className="p-2 md:p-3 hover:bg-gray-100 cursor-pointer text-sm md:text-base"
                          onClick={() => {
                            setServiceType(service);
                            setShowDropdown(false);
                          }}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Form Layout - 2 columns on larger screens, 1 column on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                {/* First Name */}
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">First name</label>
                  <input
                    type="text"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm md:text-base"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Last name</label>
                  <input
                    type="text"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4 md:mb-5">
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">*Email</label>
                <input
                  type="email"
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm md:text-base"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-4 md:mb-5">
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm md:text-base"
                  placeholder="e.g. 819-555-5555"
                />
              </div>

              {/* Message */}
              <div className="mb-4 md:mb-5">
                <label className="block text-xs md:text-sm font-medium mb-1 md:mb-2 text-gray-700">*Your message</label>
                <p className="text-xs text-gray-500 mb-1 md:mb-2">
                  To ensure the protection of your personal information, do not enter
                  confidential or sensitive information.
                </p>
                <textarea
                  className="w-full p-2 md:p-3 border border-gray-300 rounded-lg h-24 md:h-32 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm md:text-base"
                  required
                ></textarea>
              </div>

              {/* Newsletter Opt-in */}
              <div className="mb-4 md:mb-6 bg-gray-50 p-3 md:p-4 rounded-lg">
                <p className="font-medium text-xs md:text-sm mb-2">Stay up-to-date!</p>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="newsletter" className="text-xs text-gray-600">
                    Yes! I agree to receive commercial electronic messages, such as
                    newsletters, promotions, invitations, important updates and real estate
                    content, from Piscal+ and entities belonging to the same
                    group of companies. I understand that I can withdraw my consent at
                    any time.
                  </label>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4 md:mb-6">
                By clicking "Submit", you consent to your information being collected and used for
                purposes related to your request. For more information on how we manage personal
                information, please see our Privacy Policy.
              </p>

              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg w-full font-medium hover:from-green-700 hover:to-green-600 transition-all shadow-md text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Head Office */}
          <div className="w-full lg:w-5/12 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Head office</h2>
            <p className="mb-1 text-gray-300 text-sm md:text-base">Our offices are not open to the public.</p>
            <p className="mb-6 md:mb-8 text-gray-300 text-sm md:text-base">Please contact us by mail or fax.</p>
            
            <div className="bg-gray-700 bg-opacity-40 p-4 md:p-6 rounded-xl mb-6 md:mb-8">
              <address className="not-italic mb-0 text-gray-200 text-sm md:text-base">
                <p>8389 Avenue Sous-le-Vent</p>
                <p>Lévis, Quebec</p>
                <p>G6X 3L9</p>
              </address>
            </div>

            <div className="flex items-center text-green-300">
              <div className="bg-gray-700 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-5 md:h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span className="text-lg md:text-xl">1-866-832-2066</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}