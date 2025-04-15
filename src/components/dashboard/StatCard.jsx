// src/components/dashboard/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <span className={`text-sm ${trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
        {trend}
      </span>
    </div>
  );
};

export default StatCard;