// src/components/user/UserAvatar.jsx
import React from 'react';

const UserAvatar = ({ user, size = 8 }) => {
  return (
    <div className={`h-${size} w-${size} rounded-full bg-blue-100 flex items-center justify-center`}>
      <span className="text-blue-600 font-medium">{user.name[0]}</span>
    </div>
  );
};

export default UserAvatar;