// src/pages/auth/ResetPassword.jsx
import React from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const ResetPassword = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
      <form className="space-y-4">
        <Input label="New Password" name="password" type="password" />
        <Input label="Confirm Password" name="confirmPassword" type="password" />
        <Button type="submit">Update Password</Button>
      </form>
    </div>
  );
};

export default ResetPassword;