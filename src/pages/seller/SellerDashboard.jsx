// src/pages/seller/SellerDashboard.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';
import StatCard from '../../components/dashboard/StatCard';

const SellerDashboard = () => {
  const stats = [
    { title: 'Total Listings', value: '12', trend: '+2%' },
    { title: 'Monthly Views', value: '1.2k', trend: '+15%' },
    { title: 'Inquiries', value: '34', trend: '-5%' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Seller Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['seller', 'agent']}>
    <SellerDashboard />
  </ProtectedRoute>
);