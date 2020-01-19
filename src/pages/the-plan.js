import React from 'react';
import ReactMarkdown from 'react-markdown';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import Layout from '../components/Layout';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';
import SEO from '../components/SEO';
import Button from '../components/Button';
import { ModalContext } from '../components/SupportModal';

const ThePlan = () => {
  return (
    <Layout>
      <SEO title="Mere om planen" description="" />
      <section className={[styles.top, 'green', 'separator-bottom'].join(' ')}>
        <div className="container-large">
          <h1>{text.moreAboutThePlan}</h1>
        </div>
        <div className={`container-large ${styles.brief}`}>
          <h2 style={{ marginBottom: 20 }}>
            {text.frontpage.explainedBriefly}
          </h2>
          <div className={styles.carousel}>
            <div className="col">
              <img src="/illustrations/brief1.svg" height="80" />
              <h4>{text.frontpage.brief1Title}</h4>
              <p>{text.frontpage.brief1Text}</p>
            </div>
            <div className="col">
              <img src="/illustrations/brief2.svg" height="80" />
              <h4>{text.frontpage.brief2Title}</h4>
              <p>{text.frontpage.brief2Text}</p>
            </div>
            <div className="col">
              <img src="/illustrations/brief3.svg" height="80" />
              <h4>{text.frontpage.brief3Title}</h4>
              <p>{text.frontpage.brief3Text}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Separator variant={1} />
        <div className="container-small">
          <ReactMarkdown source={text.plan} />
          <div style={{ textAlign: 'center' }}>
            <ModalContext.Consumer>
              {openModal => (
                <div className={styles.ctas}>
                  <Button onClick={openModal} large className="btn-green">
                    {text.supportAsPerson}
                  </Button>
                </div>
              )}
            </ModalContext.Consumer>
          </div>
        </div>
      </section>
      <section>
        <div className="container-medium">
          <h2>{text.faqTitle}</h2>
          <Collapse accordion className={styles.faq}>
            {text.faq.map(([question, answer]) => (
              <Panel key={question} header={question}>
                {answer.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
