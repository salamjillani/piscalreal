// src/components/property/PropertyGallery.jsx
import React from 'react';

const PropertyGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, index) => (
        <img key={index} src={img} alt="" className="h-32 w-full object-cover rounded-lg" />
      ))}
    </div>
  );
};

export default PropertyGallery;