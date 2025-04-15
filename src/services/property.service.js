export const PropertyService = {
    getProperties: async (filters) => {
      // Mock implementation
      return new Promise(resolve => setTimeout(() => resolve(mockProperties), 1000));
    },
    
    createListing: async (listingData) => {
      // Mock implementation
      return { success: true, listing: { ...listingData, id: Date.now() } };
    }
  };
  
  const mockProperties = [/*...*/];