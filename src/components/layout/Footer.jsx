// Footer.jsx
import React from "react";
import {

  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  
} from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 text-gray-700">
      <div className="container mx-auto px-4 md:px-8 mb-8">
        <div className="bg-gray-100 p-4 md:p-6 rounded">
          <ol className="list-decimal pl-4 md:pl-5 space-y-3 md:space-y-4 text-sm md:text-base">
            <li>
              Total amount saved by sellers who sold on Piscal+.com since we
              started, based on an average commission of 5%, including
              applicable taxes. Amount as of November 21, 2022.
            </li>
            <li>
              According to a web survey of 521 respondents about the selling
              experience, carried out by Ad Hoc Research.
            </li>
            <li>
              Service most liked by clients (8.6 out of 10 overall rating)
              among all banners, according to Protégez-Vous in 2023, based on
              a survey of 820 respondents.
            </li>
          </ol>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo - Full width on mobile, part of grid on larger screens */}
          <div className="h-20 md:h-24 w-auto flex items-center justify-center sm:justify-start col-span-1 sm:col-span-2 lg:col-span-1">
            <img
              src="Logo.png"
              alt="Logo"
              className="h-32 sm:h-40 md:h-48 w-auto object-contain"
            />
          </div>
          
          {/* Selling, Buying, Rent sections */}
          <div className="col-span-1">
            <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">
              SELLING A PROPERTY
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  How does it work?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Payment Options
                </a>
              </li>
            </ul>
            <h3 className="font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4 text-sm md:text-base">
              BUYING A PROPERTY
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Why buy a home with Piscal+?
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  House-hunting tools
                </a>
              </li>
            </ul>
            <h3 className="font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4 text-sm md:text-base">
              RENT A PROPERTY
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Advertise for free
                </a>
              </li>
            </ul>
          </div>
          
          {/* Blog, About, Partners sections */}
          <div className="col-span-1">
            <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">BLOG</h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  All about selling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  All about buying
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Real estate news
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Home is where the heart is
                </a>
              </li>
            </ul>
            <h3 className="font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4 text-sm md:text-base">ABOUT</h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Advertise on Piscal+.com
                </a>
              </li>
            </ul>
            <h3 className="font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4 text-sm md:text-base">PARTNERS</h3>
            <ul className="space-y-2 md:space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Home insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Car insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Mortgages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  Renovation
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social Media section */}
          <div className="col-span-1">
            <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">CONTACT US</h3>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:1-866-387-7677"
                className="flex items-center text-gray-600 hover:text-green-600 text-sm"
              >
                <FiPhone className="mr-2" />
                <span>1-866-387-7677</span>
              </a>
              <a
                href="mailto:info@Piscal+.com"
                className="flex items-center justify-center md:justify-start text-white bg-green-600 hover:bg-green-700 py-2 px-4 md:px-6 rounded-full text-sm"
              >
                <FiMail className="mr-2" />
                <span>Email</span>
              </a>
            </div>
            <h3 className="font-bold text-gray-800 mt-6 md:mt-8 mb-3 md:mb-4 text-sm md:text-base">FOLLOW US</h3>
            
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <a
                href="#"
                className="border border-gray-300 rounded-full p-2 md:p-3 flex items-center justify-center hover:border-green-600 hover:text-green-600"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full p-2 md:p-3 flex items-center justify-center hover:border-green-600 hover:text-green-600"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="border border-gray-300 rounded-full p-2 md:p-3 flex items-center justify-center hover:border-green-600 hover:text-green-600"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          
          {/* App Download section */}
          <div className="col-span-1">
            <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">DOWNLOAD THE APP</h3>
            <div className="flex flex-col space-y-3 md:space-y-4">
              <a href="#">
                <img src="/googleplay.png" alt="App Store" className="h-10 md:h-12" />
              </a>
              <a href="#">
                <img src="/appstore.png" alt="Google Play" className="h-10 md:h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright and legal links */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-600 text-center md:text-left">
              Copyright © 2025 Piscal+. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 text-xs md:text-sm">
              <a href="#" className="text-gray-600 hover:text-green-600">
                Website Terms of Use
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trademark information */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8 text-xs md:text-sm text-gray-500">
        <p className="mb-3 md:mb-4">
          The Piscal+ trademarks are owned by 4523024 Canada Inc., doing
          business as Piscal+.
        </p>
        <p>
          The small house logo is a registered trademark of the Fédération des
          caisses Desjardins du Québec, used under licence.
        </p>
      </div>
    </footer>
  );
}