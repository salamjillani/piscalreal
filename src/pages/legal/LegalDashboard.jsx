// src/pages/legal/LegalDashboard.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';

const LegalDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Legal Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Pending Documents</div>
        <div className="bg-white p-6 rounded shadow">Active Cases</div>
        <div className="bg-white p-6 rounded shadow">Completed Transactions</div>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
    <LegalDashboard />
  </ProtectedRoute>
);