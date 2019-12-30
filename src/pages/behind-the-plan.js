import React from 'react';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';

const BehindThePlan = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className="container">
          <h1>{text.behindThePlan}</h1>
        </div>
      </div>
      <section className={styles.container}>
        <p>Støttet af</p>
        <div className={styles.carousel}></div>
        <p>Nævnt i</p>
        <div className={styles.carousel}></div>
      </section>
    </Layout>
  );
};

export default BehindThePlan;
