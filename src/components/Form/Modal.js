import React, { useState, createContext } from 'react';
import Form from './Form';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <ModalContext.Provider value={openModal}>
      {children}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <Form
            modal
            closeModal={() => setIsModalOpen(false)}
            className="relative z-30 flex-1"
          />
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-green-900 opacity-50 cursor-pointer"
          ></div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
