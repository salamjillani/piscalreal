// src/components/layout/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/search" className="text-gray-700 hover:text-blue-600">Properties</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
    </nav>
  );
};

export default Navigation;