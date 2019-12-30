import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';

const ThePlan = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className={styles.container}>
          <h1>{text.aboutThePlan}</h1>
        </div>
      </div>
      <section className={styles.container}>
        <ReactMarkdown source={text.plan} />
      </section>
    </Layout>
  );
};

export default ThePlan;
