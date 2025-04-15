// src/pages/buyer/ViewProperty.jsx
import React from 'react';
import PropertyDetails from '../../components/property/PropertyDetails';

const ViewProperty = () => {
  const property = {
    id: 1,
    title: "Modern Luxury Villa",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    description: "Stunning modern villa with panoramic views..."
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PropertyDetails property={property} />
    </div>
  );
};

export default ViewProperty;