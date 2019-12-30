import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import Layout from '../components/Layout';
import Button from '../components/Button';
import text from '../i18n/da';
import styles from './index.module.css';
import 'rc-collapse/assets/index.css';

const Index = () => {
  return (
    <Layout>
      <div className={styles.top}>
        <div className="container">
          <img className={styles.logo} src="/earth.svg" />
          <h1>{text.title}</h1>
          <h2 className={styles.subTitle}>{text.subtitle}</h2>
        </div>
        <div className={styles.ctas}>
          <Button large>{text.supportAsPerson}</Button>
          <Button large stroke>
            {text.supportAsOrg}
          </Button>
        </div>
      </div>
      <section className={styles.carousels}>
        <h4>{text.supportedBy}</h4>
        <div className={styles.carousel}>
          {/* All images are #000 black */}
          <a href="https://www.klimabevaegelsen.dk/" target="blank">
            <img src="/supporters/350.svg" height="90" />
          </a>
          <a href="https://www.dgsb.dk/" target="blank">
            <img src="/supporters/dgs.png" width="150" height="80" />
          </a>
          <a href="https://citizensclimatelobby.org/" target="blank">
            <img src="/supporters/ccl.png" width="131" height="100" />
          </a>
        </div>
        <h4>{text.mentionedIn}</h4>
        <div className={styles.carousel}>
          <a
            href="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
            target="blank"
          >
            <img
              style={{ marginTop: 0 /* Fix alignment with logo */ }}
              src="/media/information.svg"
              height="30"
            />
          </a>
          <a
            href="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
            target="blank"
          >
            <img src="/media/berlingske.svg" height="30" />
          </a>
          <a
            href="https://www.zetland.dk/historie/soNVDq4b-ae6XddK5-15a74"
            target="blank"
          >
            <img src="/media/zetland.png" height="30" />
          </a>
          <a
            href="https://jyllands-posten.dk/debat/breve/ECE11492645/S%C3%A5dan-bliver-man-husket-i-historieb%C3%B8gerne-Dan-J%C3%B8rgensen/"
            target="blank"
          >
            <img src="/media/jp.svg" height="30" />
          </a>
        </div>
      </section>
      <section className={styles.brief}>
        <h2>{text.explainedBriefly}</h2>
        <div className={styles.briefItems}>
          <div className={styles.briefItem}>
            <p>Lorem ipsum</p>
          </div>
          <div className={styles.briefItem}>
            <p>Lorem ipsum</p>
          </div>
          <div className={styles.briefItem}>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>
      <section className="container">
        <h2>FAQ</h2>
        <Collapse accordion className={styles.faq}>
          {text.faq.map(([question, answer]) => (
            <Panel key={question} header={question}>
              {answer}
            </Panel>
          ))}
        </Collapse>
      </section>
    </Layout>
  );
};

export default Index;
