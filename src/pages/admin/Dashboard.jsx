import React from 'react';
import { ProtectedRoute } from '../../App';
import DashboardCard from '../../components/dashboard/DashboardCard';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', trend: '+12%' },
    { title: 'Active Listings', value: '589', trend: '-3%' },
    { title: 'Monthly Revenue', value: '$45,678', trend: '+24%' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['admin']}>
    <AdminDashboard />
  </ProtectedRoute>
);