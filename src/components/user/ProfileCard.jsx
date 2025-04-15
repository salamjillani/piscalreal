// src/components/user/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          {user.name[0]}
        </div>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Role</p>
          <p className="font-medium">{user.role}</p>
        </div>
        <div>
          <p className="text-gray-600">Phone</p>
          <p className="font-medium">{user.phone || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;