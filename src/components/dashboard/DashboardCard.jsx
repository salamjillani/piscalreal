// src/components/dashboard/DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, value, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
      <div className="flex items-baseline">
        <p className="text-2xl font-bold mr-2">{value}</p>
        <span className={`text-sm ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;