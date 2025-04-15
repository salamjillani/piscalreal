// src/pages/auth/Register.jsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
    role: 'buyer'
  }, async () => {
    await register(values);
    navigate('/login');
  });

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Name" name="name" value={values.name} onChange={handleChange} />
        <Input label="Email" name="email" type="email" value={values.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={values.password} onChange={handleChange} />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
    </div>
  );
};

export default Register;