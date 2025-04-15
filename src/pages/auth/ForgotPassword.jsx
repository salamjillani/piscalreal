// src/pages/auth/ForgotPassword.jsx
import React from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const ForgotPassword = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Forgot Password</h1>
      <form className="space-y-4">
        <Input label="Email" name="email" type="email" />
        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ForgotPassword;