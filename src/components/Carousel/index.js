import React from 'react';
import Card from '../Card';
import styles from './index.module.css';

const Carousels = () => {
  return (
    <Card className={styles.card} backgroundColor="rgba(207, 220, 126, 0.8)">
      <h1>Støttet af</h1>
      <div className={styles.carousel}>
        <img src="/supporters/350.svg" width="300" height="150" />
        <img src="/supporters/dgs.png" width="150" height="80" />
        <img src="/supporters/ccl.png" width="401" height="59" />
      </div>
      <h1>Nævnt i</h1>
    </Card>
  );
};

export default Carousels;
