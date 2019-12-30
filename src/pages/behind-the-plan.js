import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';

const BehindThePlan = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className="container-large">
          <h1>{text.behindThePlan}</h1>
        </div>
      </div>
      <section className="container-small">
        <ReactMarkdown source={text.behindThePlanText} />
      </section>
    </Layout>
  );
};

export default BehindThePlan;
