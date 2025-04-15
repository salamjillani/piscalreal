// src/components/map/MapMarker.jsx ★
import React from 'react';

const MapMarker = ({ price }) => {
  return (
    <div className="bg-white px-2 py-1 rounded border border-gray-300 shadow-sm">
      ${price}
    </div>
  );
};

export default MapMarker;