// src/pages/buyer/Favorites.jsx
import React from 'react';
import PropertyList from '../../components/property/PropertyList';

const Favorites = () => {
  const mockFavorites = [
    {
      id: 1,
      title: "Luxury Penthouse",
      price: 1200000,
      bedrooms: 3,
      bathrooms: 3.5,
      location: "Beverly Hills, Los Angeles",
      isFavorite: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Favorite Properties</h1>
      <PropertyList properties={mockFavorites} />
    </div>
  );
};

export default Favorites;