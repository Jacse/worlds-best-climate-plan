import React, { useState, createContext } from 'react';
import Form from './Form';
import styles from './index.module.css';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <ModalContext.Provider value={openModal}>
      {children}
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <div className={[styles.modal, 'container-small'].join(' ')}>
            <Form />
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className={styles.overlay}
          ></div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
