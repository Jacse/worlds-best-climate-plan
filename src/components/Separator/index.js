import React from 'react';
import classNames from 'classnames';
import styles from './index.module.css';

const variants = [
  'M0,224L120,218.7C240,213,480,203,720,181.3C960,160,1200,128,1320,112L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
  'M0,224L120,208C240,192,480,160,720,165.3C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
  'M0,320L120,277.3C240,235,480,149,720,122.7C960,96,1200,128,1320,144L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
];

const Separator = ({ color = 'white', reverse = false, variant = 0 }) => {
  return (
    <svg
      className={classNames(styles.separator, {
        [styles.seperatorReverse]: reverse,
      })}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      <path className={styles.shadow} d={variants[variant]}></path>
      <path d={variants[variant]} fill={color}></path>
    </svg>
  );
};

export default Separator;
