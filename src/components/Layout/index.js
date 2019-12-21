import React from 'react';
import Divider from '../Divider';
import Button from '../Button';
import Carousels from '../Carousel';
import styles from './index.module.css';

const Layout = ({ children }) => (
  <div>
    <div className={styles.logo}>
      <h1>Den Bedste</h1>
      <img className={styles.earth} src="/earth.svg" />
      <h1>Klimaplan</h1>
    </div>
    <div className={styles.container}>
      <h2>UNDERTITEL</h2>
    </div>
    <div className={styles.ctas}>
      <Button>Støt som organisation</Button>
      <Button>Støt som borger</Button>
    </div>
    <Carousels />
    <div className={styles.container}>{children}</div>
    <div className={styles.footer}>
      <Divider />
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
