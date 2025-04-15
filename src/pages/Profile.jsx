// src/pages/Profile.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import ProfileForm from '../components/user/ProfileForm';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <ProfileForm user={currentUser} />
    </div>
  );
};

export default Profile;