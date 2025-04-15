

// src/hooks/useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};

// src/hooks/useForm.js
import { useState } from 'react';

export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setValues({
      ...values,
      [name]: fieldValue
    });
    
    if (touched[name]) {
      validateField(name, fieldValue);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched({
      ...touched,
      [name]: true
    });
    
    validateField(name, value);
  };

  const validateField = (name, value) => {
    if (validate) {
      const fieldErrors = validate({ [name]: value }, name);
      setErrors(prev => ({
        ...prev,
        ...fieldErrors
      }));
    }
  };

  const validateForm = () => {
    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    }
    return true;
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    const isValid = validateForm();
    if (isValid) {
      onSubmit(values, {
        setSubmitting: setIsSubmitting,
        resetForm: () => {
          setValues(initialValues);
          setErrors({});
          setTouched({});
        }
      });
    } else {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues
  };
};