// src/pages/agent/AgentListings.jsx ★
import React from 'react';
import { ProtectedRoute } from '../../App';

const AgentListings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Listings</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">Property</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Price</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4">Sample Listing</td>
              <td className="px-6 py-4">Active</td>
              <td className="px-6 py-4">$500,000</td>
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
  <ProtectedRoute allowedRoles={['agent']}>
    <AgentListings />
  </ProtectedRoute>
);