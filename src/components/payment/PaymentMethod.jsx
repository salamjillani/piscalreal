// src/components/payment/PaymentMethod.jsx
import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="space-y-4">
      <div className="border rounded p-4">
        <h3 className="font-semibold mb-2">Credit Card</h3>
        <p>**** **** **** 1234</p>
      </div>
      <div className="border rounded p-4">
        <h3 className="font-semibold mb-2">Mobile Money</h3>
        <p>MTN •••• 5678</p>
      </div>
    </div>
  );
};

export default PaymentMethod;