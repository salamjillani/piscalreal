// src/components/user/ProfileForm.jsx
import React from 'react';
import Input from '../common/Input';

const ProfileForm = ({ user, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-md">
      <Input label="Full Name" name="name" defaultValue={user.name} />
      <Input label="Email" name="email" type="email" defaultValue={user.email} />
      <Input label="Phone" name="phone" defaultValue={user.phone} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Profile</button>
    </form>
  );
};

export default ProfileForm;