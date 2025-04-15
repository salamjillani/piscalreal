import React, { useState } from 'react';

export default function DuProprioContactPage() {
  const [serviceType, setServiceType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <div className="flex flex-row">
        <div className="bg-green-100 p-8 w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Contact our team</h1>
          <p className="text-gray-700">
            We'll be happy to help you with your property selling project
            and answer any questions you may have.
          </p>
        </div>
        <div className="w-1/2">
          <img src="/contactimg.jpg" alt="Woman working on laptop with coffee" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Client Section */}
      <div className="py-12 px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Already a DuProprio client?</h2>
        <p className="mb-2">
          When you sell with DuProprio, you can contact our customer service team 7 days a week at 1-866-387-7677.
        </p>
        <p className="mb-6">
          You can also make an appointment with a real estate coach, a notary¹ or an appraiser¹, or refer to the Help
          Centre to get answers to your questions.
        </p>
        <div className="flex justify-center gap-4">
          <button className="border border-gray-800 rounded-full px-6 py-2 font-medium">
            Appointment Centre
          </button>
          <button className="border border-gray-800 rounded-full px-6 py-2 font-medium">
            Help Center
          </button>
        </div>
      </div>

      {/* Real Estate Needs Section */}
      <div className="py-12 px-8 text-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">We're here for your real estate needs</h2>
        <p className="mb-8">Directly contact the team that can help you.</p>
        
        <div className="flex flex-row gap-4 mx-auto max-w-6xl">
          {/* Property Sale */}
          <div className="bg-green-50 p-6 rounded-lg flex-1 text-left">
            <div className="flex justify-center mb-4">
              <div className="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Property sale</h3>
            <p className="text-sm mb-4">
              Want to sell your property? Our advisors are here to support you.
            </p>
            
            <div className="text-sm">
              <div className="mb-2">
                <p className="font-bold">By phone</p>
                <p>1-866-387-7677</p>
              </div>
              <div className="mb-2">
                <p className="font-bold">By email</p>
                <p>info@duproprio.com</p>
              </div>
              <div>
                <p>Monday to Thursday: 8:30 a.m. to 7:00 p.m.</p>
                <p>Friday: 8:30 a.m. to 5:00 p.m.</p>
                <p>Saturday and Sunday: 10:00 a.m. to 3:00 p.m.</p>
              </div>
            </div>
          </div>
          
          {/* Property Rental */}
          <div className="bg-green-50 p-6 rounded-lg flex-1 text-left">
            <div className="flex justify-center mb-4">
              <div className="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Property rental</h3>
            <p className="text-sm mb-4">
              Are you renting your property? Ask our team of professionals your questions.
            </p>
            
            <div className="text-sm">
              <div className="mb-2">
                <p className="font-bold">By phone</p>
                <p>1-855-438-2082</p>
              </div>
              <div className="mb-2">
                <p className="font-bold">By email</p>
                <p>locations@duproprio.com</p>
              </div>
              <div>
                <p>Monday to Thursday: 8:30 a.m. to 7:00 p.m.</p>
                <p>Friday: 8:30 a.m. to 5:00 p.m.</p>
                <p>Saturday and Sunday: 10:00 a.m. to 3:00 p.m.</p>
              </div>
            </div>
          </div>
          
          {/* Business Services */}
          <div className="bg-green-50 p-6 rounded-lg flex-1 text-left">
            <div className="flex justify-center mb-4">
              <div className="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Business services</h3>
            <p className="text-sm mb-4">
              Are you a real estate company that owns properties for sale or rent? Contact our team dedicated to businesses.
            </p>
            
            <div className="text-sm">
              <div className="mb-2">
                <p className="font-bold">By phone</p>
                <p>1-855-932-2202</p>
              </div>
              <div className="mb-2">
                <p className="font-bold">By email</p>
                <p>serviceauxentreprises@duproprio.com</p>
              </div>
              <div>
                <p>Monday to Friday: 8:30 a.m. to 7:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Head Office Section */}
      <div className="py-12 px-8 flex flex-row gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="w-7/12">
          <h2 className="text-xl font-bold mb-4">Contact us by e-mail</h2>
          <p className="mb-4">
            Please provide your contact details and the reason for your request,
            and we will get back to you as soon as possible.
          </p>
          
          <form className="mt-6">
            <p className="text-xs mb-4">*Required fields</p>
            
            {/* Service Type */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">*Service type</label>
              <div className="relative">
                <button 
                  type="button" 
                  className="w-full p-2 border border-gray-300 rounded text-left flex justify-between items-center"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>{serviceType || "Select a service type"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {showDropdown && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg">
                    {["Property sale", "Property rental", "Business services"].map((service) => (
                      <div
                        key={service}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
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

            {/* First Name */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">First name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Last name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">*Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="e.g. 819-555-5555"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">*Your message</label>
              <p className="text-xs mb-1">
                To ensure the protection of your personal information, do not enter
                confidential or sensitive information.
              </p>
              <textarea
                className="w-full p-2 border border-gray-300 rounded h-32"
                required
              ></textarea>
            </div>

            {/* Newsletter Opt-in */}
            <div className="mb-6">
              <p className="font-bold text-sm mb-2">Stay up-to-date!</p>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="mt-1 mr-2"
                />
                <label htmlFor="newsletter" className="text-xs">
                  Yes! I agree to receive commercial electronic messages, such as
                  newsletters, promotions, invitations, important updates and real estate
                  content, from DuProprio and entities belonging to the same
                  group of companies. I understand that I can withdraw my consent at
                  any time.
                </label>
              </div>
            </div>

            <p className="text-xs mb-4">
              By clicking "Submit", you consent to your information being collected and used for
              purposes related to your request. For more information on how we manage personal
              information, please see our Privacy Policy.
            </p>

            <button
              type="submit"
              className="bg-black text-white py-3 px-8 rounded w-full font-medium"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Head Office */}
        <div className="w-5/12">
          <h2 className="text-xl font-bold mb-4">Head office</h2>
          <p className="mb-1">Our offices are not open to the public.</p>
          <p className="mb-4">Please contact us by mail or fax.</p>
          
          <address className="not-italic mb-6">
            <p>8389 Avenue Sous-le-Vent</p>
            <p>Lévis, Quebec</p>
            <p>G6X 3L9</p>
          </address>

          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>1-866-832-2066</span>
          </div>
        </div>
      </div>
    </div>
  );
}