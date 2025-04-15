// src/components/property/PropertyList.jsx
import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties, onFavoriteToggle, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="flex justify-between">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                <div className="flex space-x-2">
                  <div className="h-4 bg-gray-300 rounded w-10"></div>
                  <div className="h-4 bg-gray-300 rounded w-10"></div>
                  <div className="h-4 bg-gray-300 rounded w-10"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 mb-4">
          <svg className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900">No properties found</h3>
        <p className="mt-1 text-gray-500">Try adjusting your search filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onFavoriteToggle={onFavoriteToggle} 
        />
      ))}
    </div>
  );
};

export default PropertyList;