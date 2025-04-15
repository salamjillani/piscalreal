// src/pages/admin/Reports.jsx ★
import React from 'react';
import { ProtectedRoute } from '../../App';

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Monthly Sales</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">User Growth</h3>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['admin']}>
    <Reports />
  </ProtectedRoute>
);