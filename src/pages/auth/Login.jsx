// src/pages/auth/Login.jsx
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: ''
  }, async () => {
    await login(values.email, values.password);
    navigate('/');
  });

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Email" name="email" type="email" value={values.email} onChange={handleChange} />
        <Input label="Password" name="password" type="password" value={values.password} onChange={handleChange} />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </div>
  );
};

export default Login;