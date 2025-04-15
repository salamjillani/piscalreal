// src/pages/seller/CreateListing.jsx
import React from 'react';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/common/Input';

const CreateListing = () => {
  const { values, handleChange } = useForm({
    title: '',
    price: '',
    bedrooms: '',
    description: ''
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Listing</h1>
      <form className="space-y-4">
        <Input label="Title" name="title" value={values.title} onChange={handleChange} />
        <Input label="Price" name="price" type="number" value={values.price} onChange={handleChange} />
        <Input label="Bedrooms" name="bedrooms" type="number" value={values.bedrooms} onChange={handleChange} />
        <Input label="Description" name="description" textarea value={values.description} onChange={handleChange} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;