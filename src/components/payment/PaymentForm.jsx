import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const PaymentForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto">
      <Input label="Card Number" name="cardNumber" placeholder="4242 4242 4242 4242" />
      <div className="grid grid-cols-2 gap-4">
        <Input label="Expiration Date" name="expDate" placeholder="MM/YY" />
        <Input label="CVC" name="cvc" placeholder="123" />
      </div>
      <Input label="Cardholder Name" name="name" placeholder="John Doe" />
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Mobile Money</h3>
        <div className="space-y-2">
          <Button variant="outline" fullWidth>
            MTN Mobile Money
          </Button>
          <Button variant="outline" fullWidth>
            Orange Money
          </Button>
        </div>
      </div>

      <Button type="submit" fullWidth className="mt-6">
        Complete Payment
      </Button>
    </form>
  );
};

export default PaymentForm;