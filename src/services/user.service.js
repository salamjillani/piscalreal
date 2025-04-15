// src/services/user.service.js
export const UserService = {
    updateProfile: async (userData) => {
      return new Promise(resolve => setTimeout(() => resolve({
        success: true,
        user: userData
      }), 1000));
    },
    
    changePassword: async (passwords) => {
      return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000));
    }
  };