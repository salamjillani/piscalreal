// src/components/property/PropertyDetails.jsx ★
import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-xl font-semibold">${property.price}</p>
          <p>{property.description}</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Bedrooms</p>
              <p>{property.bedrooms}</p>
            </div>
            <div>
              <p className="font-medium">Bathrooms</p>
              <p>{property.bathrooms}</p>
            </div>
            <div>
              <p className="font-medium">Area</p>
              <p>{property.area} sqft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;