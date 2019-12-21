import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { StickyContainer, Sticky } from 'react-sticky';
import Layout from '../components/Layout';
import text from '../i18n/da';
import Card from '../components/Card';
import styles from './index.module.css';
import Slider from '../components/Slider';

const Index = () => {
  const [activeSection, setActiveSection] = useState('box');

  const TOCLink = ({ to, title }) => (
    <Link
      key={to}
      className={styles.TOCLink}
      activeClass={styles.TOCLinkActive}
      spy
      to={to}
      smooth={true}
      // onSetActive={setActiveSection} TODO: Move slider ball to active section
    >
      {title}
    </Link>
  );

  return (
    <Layout>
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <div style={style}>
              <div className={styles.TOC}>
                <Slider size={10} pos={-1} />
                <div>
                  <TOCLink to="box" title="Kort fortalt" />
                  <TOCLink to="intro" title="Ikke-så-kort fortalt" />
                  <div className={styles.TOCIndent}>
                    {text.intro.map(({ title }) => (
                      <TOCLink key={title} title={title} to={title} />
                    ))}
                  </div>
                  <TOCLink to="FAQ" title="FAQ" />
                </div>
              </div>
            </div>
          )}
        </Sticky>
        <Element name="box">
          <Card backgroundColor="rgba(134, 207, 234, 0.8)">
            <h1>Kort fortalt</h1>
            <p>Faktaboks</p>
          </Card>
        </Element>
        <Element name="intro">
          <h1>Ikke-så-kort fortalt</h1>
          {text.intro.map(({ title, text }) => (
            <Element key={title} name={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </Element>
          ))}
        </Element>
        <Element name="FAQ">
          <Card backgroundColor="rgba(134, 207, 234, 0.8)">
            <h1>FAQ</h1>
            {text.faq.map(([question, answer], i) => (
              <div key={i}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </Card>
        </Element>
      </StickyContainer>
    </Layout>
  );
};

export default Index;
