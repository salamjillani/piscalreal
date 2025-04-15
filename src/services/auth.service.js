// src/services/auth.service.js
const testUsers = {
    admin: {
      email: 'admin@test.com',
      password: 'password',
      name: 'Admin User',
      role: 'admin'
    },
    agent: {
      email: 'agent@test.com',
      password: 'password',
      name: 'Agent User',
      role: 'agent'
    },
    seller: {
      email: 'seller@test.com',
      password: 'password',
      name: 'Seller User',
      role: 'seller'
    }
  };
  
  export const authService = {
    login: async (email, password) => {
      // Check if this is a test user
      const testUser = Object.values(testUsers).find(
        user => user.email === email && user.password === password
      );
      
      if (testUser) {
        // For test users, return a mock token and user
        return {
          user: {
            id: `test-${testUser.role}`,
            email: testUser.email,
            name: testUser.name,
            role: testUser.role
          },
          token: `test-token-${testUser.role}`
        };
      }
      
      // If not a test user, proceed with your regular API login
      try {
        // Your existing login API call
        // const response = await fetch...
        
        // For now, throw an error for non-test users
        throw new Error('Only test users are available in demo mode');
      } catch (error) {
        throw error;
      }
    },
    
    // Other methods...
    getCurrentUser: async () => {
      const token = localStorage.getItem('token');
      
      // Check if this is a test token
      if (token && token.startsWith('test-token-')) {
        const role = token.replace('test-token-', '');
        const user = testUsers[role];
        
        if (user) {
          return {
            id: `test-${role}`,
            email: user.email,
            name: user.name,
            role: role
          };
        }
      }
      
      // Regular API call for real users
      // const response = await fetch...
      
      throw new Error('Session expired');
    },
    
    // Rest of your auth methods
  };