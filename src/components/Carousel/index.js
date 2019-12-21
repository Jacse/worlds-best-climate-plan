import React from 'react';
import text from '../../i18n/da';
import Card from '../Card';
import styles from './index.module.css';

const Carousels = () => {
  return (
    <Card className={styles.card} backgroundColor="rgba(207, 220, 126, 0.8)">
      <h1>{text.supportedBy}</h1>
      <div className={styles.carousel}>
        <img src="/supporters/350.svg" width="300" height="150" />
        <img src="/supporters/dgs.png" width="150" height="80" />
        <img src="/supporters/ccl.png" width="401" height="59" />
      </div>
      <h1>{text.mentionedIn}</h1>
    </Card>
  );
};

export default Carousels;
