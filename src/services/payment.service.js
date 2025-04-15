// src/services/payment.service.js
export const PaymentService = {
    processPayment: async (paymentData) => {
      return new Promise(resolve => setTimeout(() => resolve({
        success: true,
        transactionId: `TX${Date.now()}`
      }), 1000));
    },
    
    getPaymentMethods: async () => {
      return new Promise(resolve => setTimeout(() => resolve([
        { id: 1, type: 'credit_card', last4: '1234' },
        { id: 2, type: 'mobile_money', provider: 'MTN' }
      ]), 500));
    }
  };