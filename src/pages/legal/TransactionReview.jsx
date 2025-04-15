// src/pages/legal/TransactionReview.jsx
import React from 'react';
import { ProtectedRoute } from '../../App';

const TransactionReview = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Transaction Review</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Buyer Information</h3>
            <p>John Doe</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Property Details</h3>
            <p>Modern Luxury Villa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => (
  <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
    <TransactionReview />
  </ProtectedRoute>
);