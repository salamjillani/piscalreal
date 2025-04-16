import React from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-700">
      {/* Notes Section - Styled as elegant cards */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full h-8 w-8 flex items-center justify-center text-green-600 font-bold">
                  {item}
                </div>
                <div className="h-px bg-gray-200 flex-grow ml-4"></div>
              </div>
              {item === 1 && (
                <p className="text-sm leading-relaxed">
                  Total amount saved by sellers who sold on Piscal+.com since we
                  started, based on an average commission of 5%, including
                  applicable taxes. Amount as of November 21, 2022.
                </p>
              )}
              {item === 2 && (
                <p className="text-sm leading-relaxed">
                  According to a web survey of 521 respondents about the selling
                  experience, carried out by Ad Hoc Research.
                </p>
              )}
              {item === 3 && (
                <p className="text-sm leading-relaxed">
                  Service most liked by clients (8.6 out of 10 overall rating)
                  among all banners, according to Protégez-Vous in 2023, based on
                  a survey of 820 respondents.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-100"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Logo and Intro */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <img
              src="Logo.png"
              alt="Logo"
              className="h-20 w-auto object-contain mb-6"
            />
            <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
              Your trusted partner in real estate. Finding your dream home made simple.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="#"
                className="bg-white shadow-sm rounded-full p-2 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-white shadow-sm rounded-full p-2 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="bg-white shadow-sm rounded-full p-2 flex items-center justify-center hover:bg-green-50 hover:text-green-600 transition-all duration-300"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          
          {/* Navigation Links - Using a cleaner layout */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1: Selling & Buying */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    How selling works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Why buy with Piscal+
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    House-hunting tools
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Advertise rentals free
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 2: Blog & About */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Selling guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Buying guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Real estate news
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Partners */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                Partners
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Home insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Car insurance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Mortgages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                    Renovation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact & App Download */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            
            {/* Contact options */}
            <div className="mb-8">
              <a
                href="tel:1-866-387-7677"
                className="flex items-center text-gray-600 hover:text-green-600 mb-4 group"
              >
                <div className="bg-gray-100 rounded-full p-2 mr-3 group-hover:bg-green-50 transition-colors duration-300">
                  <FiPhone className="text-gray-500 group-hover:text-green-600" />
                </div>
                <span className="text-sm">1-866-387-7677</span>
              </a>
              
              <a
                href="mailto:info@Piscal+.com"
                className="flex items-center justify-center text-white bg-green-600 hover:bg-green-700 py-3 px-4 rounded-lg text-sm transition-colors duration-300"
              >
                <FiMail className="mr-2" />
                <span>Email Us</span>
              </a>
            </div>
            
            {/* App download */}
            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
              Mobile App
            </h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="transition-transform duration-300 hover:scale-105">
                <img src="/appstore.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="transition-transform duration-300 hover:scale-105">
                <img src="/googleplay.png" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright and Legal Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">
              Copyright © 2025 Piscal+. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors duration-300">
                Terms of Use
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Trademark information */}
          <div className="mt-6 text-xs text-gray-400">
            <p className="mb-2">
              The Piscal+ trademarks are owned by 4523024 Canada Inc., doing
              business as Piscal+.
            </p>
            <p>
              The small house logo is a registered trademark of the Fédération des
              caisses Desjardins du Québec, used under licence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}