// src/pages/Settings.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ProfileForm from '../components/user/ProfileForm';

const Settings = () => {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      <ProfileForm user={currentUser} />
    </div>
  );
};

export default Settings;