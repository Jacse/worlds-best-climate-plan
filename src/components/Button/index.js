import React from 'react';
import styles from './index.module.css';

const Button = ({
  children,
  className,
  stroke = false,
  large = false,
  ...other
}) => {
  return (
    <button
      className={[
        styles.button,
        className,
        large ? styles.buttonLarge : '',
        stroke ? styles.buttonStroke : '',
      ].join(' ')}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
