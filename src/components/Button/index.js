import React from 'react';
import styles from './index.module.css';

const Button = ({ children, className, stroke = false, large = false }) => {
  return (
    <button
      className={[
        styles.button,
        className,
        large ? styles.buttonLarge : '',
        stroke ? styles.buttonStroke : '',
      ].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
