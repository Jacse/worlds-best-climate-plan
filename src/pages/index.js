import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import classNames from 'classnames';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ModalContext } from '../components/SupportModal';
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
      <section
        className={classNames(
          styles.top,
          styles.topBackgroundImage,
          'green',
          'separator-bottom'
        )}
      >
        <div className={styles.topBackgroundImageOverlay} />
        <div className="container-large">
          <h1 className={styles.title}>{text.title}</h1>
          <h2 className={styles.subtitle}>{text.subtitle}</h2>
          <ModalContext.Consumer>
            {openModal => (
              <div className={styles.ctas}>
                <Button onClick={openModal} large>
                  {text.supportAsPerson}
                </Button>
              </div>
            )}
          </ModalContext.Consumer>
          <p
            style={{
              fontSize: 12,
              marginTop: 10,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <em>{text.supporterExperts}</em>
          </p>
        </div>
      </section>
      <section className={styles.carousels}>
        <Separator variant={1} />
        <div className="container-large">
          <div>
            <h4>{text.supportedBy}</h4>
            <div className={styles.carousel}>
              {/* All images are #000 black */}
              <a href="https://www.klimabevaegelsen.dk/" target="blank">
                <img src="/supporters/350.svg" height="90" />
              </a>
              <a href="https://www.dgsb.dk/" target="blank">
                <img src="/supporters/dgs.png" height="80" />
              </a>
              <a href="https://citizensclimatelobby.org/" target="blank">
                <img src="/supporters/ccl.png" height="100" />
              </a>
              <a href="https://www.taenk-frej.dk/" target="blank">
                <img src="/supporters/frej.png" height="100" />
              </a>
              <a href="https://kefm.dk/klima-og-vejr/ungeklimaraadet/" target="blank">
                <img src="/supporters/ungeklimaraadet.png" height="100" />
              </a>
            </div>
            {/* <div className="cols">
              <div className="col">
                <div className={styles.box}>
                  <h3>27</h3>
                  <p>Nobelprismodtagere</p>
                </div>
              </div>
              <div className="col">
                <div className={styles.box}>
                  <h3>3.500+</h3>
                  <p>Økonomer</p>
                </div>
              </div>
              <div className="col">
                <div className={styles.box}>
                  <h3>100.000+</h3>
                  <p>Borgere</p>
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <h4>{text.mentionedIn}</h4>
            <div className={styles.carousel}>
              <a
                href="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
                target="blank"
              >
                <img
                  style={{ marginTop: 0 /* Fix alignment with logo */ }}
                  src="/media/information.svg"
                  height="24"
                />
              </a>
              <a
                href="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
                target="blank"
              >
                <img src="/media/berlingske.svg" height="24" />
              </a>
              <a
                href="https://www.zetland.dk/historie/sekd5yZD-aOMNamWw-a2949"
                target="blank"
              >
                <img src="/media/zetland.png" height="24" />
              </a>
              {/* <a
                href="https://jyllands-posten.dk/debat/breve/ECE11492645/S%C3%A5dan-bliver-man-husket-i-historieb%C3%B8gerne-Dan-J%C3%B8rgensen/"
                target="blank"
              >
                <img src="/media/jp.svg" height="24" />
              </a> */}
              <a
                href="https://politiken.dk/klima/art7458992/S%C3%A5dan-bliver-markedsmekanismerne-og-den-frie-konkurrence-medspillere-i-klimakampen"
                target="blank"
              >
                <img src="/media/politiken.svg" height="18" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="green separator-bottom">
        <Separator variant={0} reverse />
        <div className={`container-large ${styles.brief} separator-top`}>
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
          <Link to="/the-plan" className={styles.readMore}>
            <Button large>{text.moreAboutThePlan}</Button>
          </Link>
        </div>
      </section>
      <section className="separator-bottom">
        <Separator />
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

export default Index;
