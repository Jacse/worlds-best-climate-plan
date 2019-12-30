import React from 'react';
import text from '../../i18n/da';
import Menu from '../Menu';
import styles from './index.module.css';

const Layout = ({ children }) => (
  <div>
    <Menu />
    {children}
    <div className={styles.footer}>
      <p>
        Background vector created by{' '}
        <a href="https://www.freepik.com/free-photos-vectors/background">
          freepik
        </a>
      </p>
    </div>
  </div>
);

export default Layout;
