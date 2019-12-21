import React from 'react';
import Card from '../Card';
import styles from './index.module.css';

const Button = ({ children }) => {
  return (
    <button className={styles.button}>
      <Card>{children}</Card>
    </button>
  );
};

export default Button;
