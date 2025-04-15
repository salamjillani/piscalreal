// src/pages/agent/AgentDashboard.jsx
import React from 'react';
// Remove the import of ProtectedRoute from App.jsx
import StatCard from '../../components/dashboard/StatCard';

const AgentDashboard = () => {
  const stats = [
    { title: 'Active Listings', value: '8', trend: '+1%' },
    { title: 'Scheduled Viewings', value: '15', trend: '+30%' },
    { title: 'Closed Deals', value: '3', trend: '0%' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Agent Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

// Export the component directly without wrapping it in ProtectedRoute
export default AgentDashboard;