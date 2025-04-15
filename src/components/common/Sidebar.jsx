// src/components/common/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ items }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block p-2 mb-2 rounded hover:bg-gray-200"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;