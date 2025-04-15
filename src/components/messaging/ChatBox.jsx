// src/components/messaging/ChatBox.jsx
import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="border rounded-lg p-4 h-96 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4"></div>
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Type a message"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;