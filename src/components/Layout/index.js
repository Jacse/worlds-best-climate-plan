import React from 'react';
import text from '../../i18n/da';
import Divider from '../Divider';
import Button from '../Button';
import Carousels from '../Carousel';
import styles from './index.module.css';

const Layout = ({ children }) => (
  <div>
    <div className={styles.logo}>
      <h1>{text.topTitle}</h1>
      <img className={styles.earth} src="/earth.svg" />
      <h1>{text.bottomTitle}</h1>
    </div>
    <div className={styles.container}>
      <h2>{text.subtitle}</h2>
    </div>
    <div className={styles.ctas}>
      <Button>{text.supportAsOrg}</Button>
      <Button>{text.supportAsPerson}</Button>
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
