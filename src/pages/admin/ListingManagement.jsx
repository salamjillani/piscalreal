// src/pages/admin/ListingManagement.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';

const ListingManagement = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Listing Management</h1>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Property</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4">Sample Listing</td>
              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4">
                <button className="text-blue-600 mr-4">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['admin']}>
    <ListingManagement />
  </ProtectedRoute>
);