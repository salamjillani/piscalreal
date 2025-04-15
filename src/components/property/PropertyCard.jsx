// src/components/property/PropertyCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../../hooks/useAuth';

const PropertyCard = ({ property, onFavoriteToggle }) => {
  const { isAuthenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      return;
    }
    
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(property.id, !isFavorite);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative">
          <img 
            src={property.mainImage || "/api/placeholder/400/300"} 
            alt={property.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-0 right-0 p-2">
            <button 
              onClick={handleFavoriteClick}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              {isFavorite ? (
                <HeartSolidIcon className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-2 bg-blue-600 text-white font-semibold">
            {property.type}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
          <p className="text-gray-500 text-sm mb-2">
            <span className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.location}
            </span>
          </p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-blue-600 font-bold text-lg">
              {formatPrice(property.price)}
              {property.isRental && <span className="text-sm font-normal">/month</span>}
            </div>
            
            <div className="flex space-x-2 text-gray-600 text-sm">
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                {property.bedrooms} bd
              </span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {property.bathrooms} ba
              </span>
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                {property.area} sqft
              </span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold mr-2">
              {property.status}
            </span>
            {property.isNew && (
              <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-semibold">
                New
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;