// src/components/property/PropertyForm.jsx
import React from 'react';
import Input from '../common/Input';
import useForm from '../hooks/useForm'; // Adjust the path based on your project structure

const PropertyForm = ({ initialValues, onSubmit }) => {
  const { values, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Title" name="title" value={values.title} onChange={handleChange} />
      <Input label="Price" name="price" type="number" value={values.price} onChange={handleChange} />
      <Input label="Bedrooms" name="bedrooms" type="number" value={values.bedrooms} onChange={handleChange} />
      <Input label="Bathrooms" name="bathrooms" type="number" value={values.bathrooms} onChange={handleChange} />
      <Input label="Description" name="description" textarea value={values.description} onChange={handleChange} />
      <Button type="submit">Save Property</Button>
    </form>
  );
};

export default PropertyForm;