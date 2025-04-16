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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Create Account</h1>
          <p className="mt-2 text-sm text-gray-600">Sign up to get started</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input 
              label="Full Name" 
              name="name" 
              value={values.name} 
              onChange={handleChange}
              className="rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            />
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
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="buyer"
                    checked={values.role === 'buyer'}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Buyer</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="seller"
                    checked={values.role === 'seller'}
                    onChange={handleChange}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Seller</span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="text-sm">
            <p className="text-gray-600">
              By registering, you agree to our{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Policy
              </a>
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </Button>
        </form>
        
        <div className="text-center text-sm mt-4">
          <span className="text-gray-600">Already have an account?</span>{' '}
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;