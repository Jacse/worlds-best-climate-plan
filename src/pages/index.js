import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import Layout from '../components/Layout';
import Button from '../components/Button';
import text from '../i18n/da';
import styles from './index.module.css';
import 'rc-collapse/assets/index.css';
import { Link } from 'gatsby';
import Separator from '../components/Separator';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO title="Verdens Bedste klimaplan" description="" />
      <section className={[styles.top, 'green', 'separator-bottom'].join(' ')}>
        <div className="container-large">
          <h1 className={styles.title}>{text.title}</h1>
          <h2 className={styles.subTitle}>{text.subtitle}</h2>
          <div className={styles.ctas}>
            <Button large>{text.supportAsPerson}</Button>
            <Button large stroke>
              {text.supportAsOrg}
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.carousels}>
        <Separator variant={1} />
        <div className="container-large">
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
              href="https://www.berlingske.dk/kommentarer/saadan-faar-danmark-mest-klima-for-pengene"
              target="blank"
            >
              <img src="/media/berlingske.svg" height="30" />
            </a>
            <a
              href="https://www.zetland.dk/historie/sekd5yZD-aOMNamWw-a2949"
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
        </div>
      </section>
      <section className="green separator-bottom">
        <Separator reverse />
        <div className={`container-large ${styles.brief} separator-top`}>
          <h2>{text.frontpage.explainedBriefly}</h2>
          <div className="container-medium">
            <p>{text.frontpage.explainedBrieflyText}</p>
          </div>
          <div className="cols">
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
          <Link to="/the-plan" className={styles.readMore}>
            <Button large stroke>
              {text.moreAboutThePlan}
            </Button>
          </Link>
        </div>
      </section>
      <section className="separator-bottom">
        <Separator />
        <div className="container-medium">
          <h2>FAQ</h2>
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

export default Index;
