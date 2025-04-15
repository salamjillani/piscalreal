// src/pages/agent/ClientManagement.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';

const ClientManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Client Management</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Client</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Last Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">2024-03-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['agent']}>
    <ClientManagement />
  </ProtectedRoute>
);