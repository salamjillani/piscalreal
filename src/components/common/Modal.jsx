// src/components/common/Modal.jsx ★
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <button onClick={onClose} className="float-right mb-4">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;