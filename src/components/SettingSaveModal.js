import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-xl font-bold"
        >
          &times;
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
