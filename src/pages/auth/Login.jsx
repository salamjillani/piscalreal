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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input 
              label="Email Address" 
              name="email" 
              type="email" 
              value={values.email} 
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Input 
              label="Password" 
              name="password" 
              type="password" 
              value={values.password} 
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </Button>
        </form>
        
        <div className="text-center text-sm mt-4">
          <span className="text-gray-600">Don't have an account?</span>{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;