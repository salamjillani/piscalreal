// src/pages/Messages.jsx
import React from 'react';
import ChatBox from '../components/messaging/ChatBox';

const Messages = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>
      <ChatBox />
    </div>
  );
};

export default Messages;