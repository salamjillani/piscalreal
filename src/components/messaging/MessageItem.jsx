// src/components/messaging/MessageItem.jsx
import React from 'react';

const MessageItem = ({ message }) => {
  return (
    <div className={`p-4 rounded-lg ${message.sent ? 'bg-blue-100 ml-auto' : 'bg-gray-100'}`}>
      <p className="text-sm">{message.text}</p>
      <span className="text-xs text-gray-500 mt-1 block">{new Date(message.timestamp).toLocaleTimeString()}</span>
    </div>
  );
};

export default MessageItem;