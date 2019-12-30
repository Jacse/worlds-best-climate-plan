import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import text from '../i18n/da';
import styles from './index.module.css';

const ThePlan = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className={styles.container}>
          <h1>Mere om planen</h1>
        </div>
      </div>

      <section className={styles.container}>
        <p>Støttet af</p>
        <div className={styles.carousel}></div>
        <p>Nævnt i</p>
        <div className={styles.carousel}></div>
      </section>
      <section className={styles.greenBox}>
        <div className={styles.container}>
          <h2>Kort om verdens bedste klimaplan</h2>
          <p>Lorem ipsum</p>
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
