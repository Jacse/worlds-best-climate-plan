import React from 'react';
import text from '../../i18n/da';
import Menu from '../Menu';
import styles from './index.module.css';

const Layout = ({ children }) => (
  <div>
    <Menu />
    {children}
    <div className={styles.footer}>
      <div className="container">
        <p>
          Contact{' '}
          <a href="mailto:kontakt@denbedsteklimaplan.dk">
            kontakt@denbedsteklimaplan.dk
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Layout;
