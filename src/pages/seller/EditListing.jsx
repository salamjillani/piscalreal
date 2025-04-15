// src/pages/seller/EditListing.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Input from '../../components/common/Input';

const EditListing = () => {
  const { id } = useParams(); // TODO: Use 'id' for fetching or updating the listing data
  const { values, handleChange } = useForm({
    title: 'Sample Listing',
    price: '500000',
    bedrooms: '3',
    description: 'Modern property with great amenities'
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Listing</h1>
      <form className="space-y-4">
        <Input label="Title" name="title" value={values.title} onChange={handleChange} />
        <Input label="Price" name="price" type="number" value={values.price} onChange={handleChange} />
        <Input label="Bedrooms" name="bedrooms" type="number" value={values.bedrooms} onChange={handleChange} />
        <Input label="Description" name="description" textarea value={values.description} onChange={handleChange} />
        <Button type="submit">Update Listing</Button>
      </form>
    </div>
  );
};

export default EditListing;