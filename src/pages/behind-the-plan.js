import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';

const BehindThePlan = () => {
  return (
    <Layout>
      <section className={[styles.top, 'green', 'separator-bottom'].join(' ')}>
        <div className="container-large">
          <h1>{text.behindThePlan}</h1>
        </div>
      </section>
      <section>
        <Separator variant={1} />
        <div className="container-small">
          <ReactMarkdown source={text.behindThePlanText} />
        </div>
      </section>
    </Layout>
  );
};

export default BehindThePlan;
