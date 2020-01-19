import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';
import SEO from '../components/SEO';

const EconomistsStatement = () => {
  return (
    <Layout>
      <SEO title="Økonomernes udsagn" description="" />
      <section className={[styles.top, 'green', 'separator-bottom'].join(' ')}>
        <div className="container-large">
          <h1>{text.economistsStatementHeader}</h1>
        </div>
      </section>
      <section>
        <Separator variant={1} />
        <div className="container-small">
          <ReactMarkdown source={text.economistsStatementText} />
          <div style={{ textAlign: 'center' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-wtAyJBnTpPggT2-OSzW64FFnhG20ajBHAFQZwAEjJGC-HA/viewform?embedded=true" width="640" height="1187" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EconomistsStatement;
