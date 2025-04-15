// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Blog from './pages/Blog';
import Business from './pages/Business';
import Price from './pages/Price';
import Sell from './pages/Sell';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Buyer Pages
import PropertySearch from './pages/buyer/PropertySearch';
import ViewProperty from './pages/buyer/ViewProperty';
import Favorites from './pages/buyer/Favorites';

// Seller Pages
import CreateListing from './pages/seller/CreateListing';
import EditListing from './pages/seller/EditListing';
import SellerDashboard from './pages/seller/SellerDashboard';

// Agent Pages
import AgentDashboard from './pages/agent/AgentDashboard';
import AgentListings from './pages/agent/AgentListings';
import ClientManagement from './pages/agent/ClientManagement';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import ListingManagement from './pages/admin/ListingManagement';
import UserManagement from './pages/admin/UserManagement';
import Reports from './pages/admin/Reports';

// Legal Pages
import LegalDashboard from './pages/legal/LegalDashboard';
import DocumentCenter from './pages/legal/DocumentCenter';
import TransactionReview from './pages/legal/TransactionReview';

// Protected route component
export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }
  
  return children;
};

function App() {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<ViewProperty />} />
        <Route path="/search" element={<PropertySearch />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/business" element={<Business />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/sell" element={<Sell />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected Routes - All Authenticated Users */}
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />
        <Route path="/messages" element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        } />
        <Route path="/favorites" element={
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        } />
        
        {/* Seller Routes */}
        <Route path="/seller/dashboard" element={
          <ProtectedRoute allowedRoles={['seller', 'agent']}>
            <SellerDashboard />
          </ProtectedRoute>
        } />
        <Route path="/seller/create-listing" element={
          <ProtectedRoute allowedRoles={['seller', 'agent']}>
            <CreateListing />
          </ProtectedRoute>
        } />
        <Route path="/seller/edit-listing/:id" element={
          <ProtectedRoute allowedRoles={['seller', 'agent']}>
            <EditListing />
          </ProtectedRoute>
        } />
        
        {/* Agent Routes */}
        <Route path="/agent/dashboard" element={
          <ProtectedRoute allowedRoles={['agent']}>
            <AgentDashboard />
          </ProtectedRoute>
        } />
        <Route path="/agent/listings" element={
          <ProtectedRoute allowedRoles={['agent']}>
            <AgentListings />
          </ProtectedRoute>
        } />
        <Route path="/agent/clients" element={
          <ProtectedRoute allowedRoles={['agent']}>
            <ClientManagement />
          </ProtectedRoute>
        } />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/admin/listings" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <ListingManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="/admin/reports" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <Reports />
          </ProtectedRoute>
        } />
        
        {/* Legal Routes */}
        <Route path="/legal/dashboard" element={
          <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
            <LegalDashboard />
          </ProtectedRoute>
        } />
        <Route path="/legal/documents" element={
          <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
            <DocumentCenter />
          </ProtectedRoute>
        } />
        <Route path="/legal/transactions" element={
          <ProtectedRoute allowedRoles={['lawyer', 'notary']}>
            <TransactionReview />
          </ProtectedRoute>
        } />
        
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;