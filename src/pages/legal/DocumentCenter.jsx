// src/pages/legal/DocumentCenter.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';

const DocumentCenter = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Document Center</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Document</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4">Purchase Agreement</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4">2024-03-01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
    <DocumentCenter />
  </ProtectedRoute>
);