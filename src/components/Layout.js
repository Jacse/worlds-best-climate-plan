import React from 'react';
import { Link } from 'gatsby';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div>
    <div className={styles.logo}>
      <h1>Den Bedste</h1>
      <img className={styles.earth} src="/earth.svg" />
      <h1>Klimaplan</h1>
    </div>
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <Link
          className={styles.navItem}
          activeClassName={styles.navItemActive}
          to="/"
        >
          Intro
        </Link>
        <Link
          className={styles.navItem}
          activeClassName={styles.navItemActive}
          to="/faq"
        >
          FAQ
        </Link>
      </div>
    </div>
    <div className={styles.container}>{children}</div>
    <div className={styles.footer}>
      <svg viewBox="0 0 512 6">
        <path
          stroke="black"
          strokeWidth={0.7}
          fill="transparent"
          d="M 1.0243898211251126 4.367905417494185 C 157.27167420416367 -0.4804272314939042, 317.99119633877604 0.2068861612326529, 510.1797434699972 4.15460583466809 M 0.715970987963068 2.9809306154090236 C 158.7218943692491 1.117717301548665, 317.70774896023863 -0.531343750737246, 511.44561086858204 2.7633091919087853"
        ></path>
      </svg>
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
