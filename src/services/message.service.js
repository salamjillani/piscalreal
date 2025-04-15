// src/services/message.service.js
export const MessageService = {
    getMessages: async () => {
      return new Promise(resolve => setTimeout(() => resolve([]), 500));
    },
    sendMessage: async (message) => {
      return new Promise(resolve => setTimeout(() => resolve({ success: true }), 500));
    }
  };