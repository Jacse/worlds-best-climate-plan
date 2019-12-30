import React from 'react';
import styles from './index.module.css';

const Button = ({ children, stroke = false, className }) => {
  return (
    <button
      className={[
        styles.button,
        className,
        stroke ? styles.buttonStroke : '',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
