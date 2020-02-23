import React from 'react';
import classNames from 'classnames';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ModalContext } from '../components/SupportModal';
import text from '../i18n/da';
import styles from './index.module.css';
import Separator from '../components/Separator';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO title="Verdens Bedste klimaplan" description="" />
      <section
        className={classNames(
          styles.top,
          styles.frontpageTop,
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
          <p>
            <em>{text.supporterExperts}</em>
          </p>
        </div>
      </section>
      <section>
        <Separator variant={1} />
        <div className={`container-large ${styles.carousels}`}>
          <div>
            <h4>{text.supportedBy}</h4>
            <div className={styles.carousel}>
              {/* All images are #000 black */}
              <a href="https://www.klimabevaegelsen.dk/" target="blank">
                <img src="/supporters/350.svg" height="46" />
              </a>
              <a href="https://www.dgsb.dk/" target="blank">
                <img src="/supporters/dgs.png" height="48" />
              </a>
              <a href="https://citizensclimatelobby.org/" target="blank">
                <img src="/supporters/ccl.png" height="36" />
              </a>
              {/*<a href="https://www.taenk-frej.dk/" target="blank">
                <img src="/supporters/frej-2.png" height="36" />
              </a>*/}
              <a
                href="https://kefm.dk/klima-og-vejr/ungeklimaraadet/"
                target="blank"
              >
                <img src="/supporters/ungeklimaraadet.png" height="42" />
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
      <section className="green">
        <Separator variant={0} green />
        <div className="container-small separator-bottom">
          <h2>Klimabidrag og dividende-modellen</h2>
          <p>
            Forestil dig en lov, der gør de mest klimavenlige varer til de
            billigste, og gør de borgere, der tjener mindst, rigere. Det lyder
            måske for godt til at være sandt eller alt for bøvlet at
            administrere i praksis – men det er det ikke.
          </p>
          <p>
            Modellen kaldes Klimabidrag og Dividende, og den kan blive til lov
            meget hurtigt, hvis ellers politikerne vil.
          </p>
          <p>I store træk ser Klimabidrag og Dividende-modellen således ud:</p>
          <p>
            1: Der lægges en afgift på de råmaterialer, der sviner når de bruges
            til at producere varer, f.eks. i form af udledning af CO2. Jo flere
            af den slags råmaterialer, en vareproducent bruger, jo højere bliver
            afgiften. Og jo højere bliver prisen på varerne i butikken. Så dem,
            der køber flest af de klimafarlige varer, ender med at betale prisen
            for det høje forbrug af klimafarlige råmaterialer. Det kender du
            måske som princippet om, at ’forureneren betaler’.
          </p>
          <p>
            2: De penge, der kommer ind til staten via afgiften, bruges ikke til
            at dække statens udgifter, men sendes direkte tilbage til borgerne,
            f.eks. i form af en check eller et skattefradrag. Alle borgere får
            lige meget, krone til krone.
          </p>
          <p>
            Færdigt arbejde. Super simpelt, super effektivt – og super
            retfærdigt.
          </p>
        </div>
      </section>
      <section>
        <Separator variant={0} />
        <div className="container-small">
          <h2>Hvorfor er det effektivt?</h2>
          <p>
            Når vi lægger en afgift på råmaterialer, der har høj CO2-udledning,
            bliver de klimavenlige varer billigere i butikkerne end dem, der
            ikke er klimavenlige. Derfor bliver det nemmere for dem, der
            producerer klimavenlige varer, at sælge deres ting, og sværere for
            dem, der producerer varer på en klimafarlig måde, at sælge deres
            ting.
          </p>
          <p>
            I løbet af meget kort tid vil producenterne derfor helt af sig selv
            begynde at udvikle varer, der sviner mindre, for så bliver de
            billigere og derfor nemmere at sælge. Og det vil blive meget
            billigere for dig at vælge de klimavenlige varer i butikkerne.
          </p>
        </div>
      </section>
      <section className="green">
        <Separator variant={1} green />
        <div className="container-small separator-bottom">
          <h2>Hvorfor er det retfærdigt?</h2>
          <p>
            Forestil dig to familier – én med høj indkomst og én med lav
            indkomst. Familien med høj indkomst køber flere varer og betaler
            derfor mere i klimabidrag, end familien med lav indkomst gør. Men
            begge familier får det samme i dividende. Familien med høj indkomst
            får derfor færre penge i dividende, end de har betalt i klimabidrag,
            mens familien med lav indkomst får flere penge i dividende, end de
            har betalt i klimabidrag.
          </p>
          <p>
            På den måde er det altså familien med den høje indkomst, som har
            belastet klimaet mest og som derfor også ender med at betale mest.
            Familien med den lave indkomst har belastet klimaet mindst og
            betaler derfor mindre i klimabidrag. Ja, de kan faktisk ende med
            direkte at tjene penge – få en højere indkomst – ved at vælge de
            klimavenlige varer.
          </p>
        </div>
      </section>
      <section>
        <Separator variant={0} />
        <div className="container-small">
          <h2>Kan vi få et regne-eksempel?</h2>
          <p>
            Forestil dig, at familien med den høje indkomst har købt så mange
            varer, at de i alt har betalt 5.000 kroner i klimabidrag i løbet af
            et år. De får en dividende på fra staten på 2.000 kroner det år. De
            ender altså med i alt at have betalt 3.000 kroner i klimabidrag.
          </p>
          <p>
            Familien med den lave indkomst har ikke købt nær så mange varer, så
            de har i alt kun betalt 1.500 i klimabidrag i løbet af et år. Men
            den familie får også 2.000 kroner i dividende af staten. Så de ender
            altså med at have 500 kroner til overs til at gøre dagligdagen lidt
            nemmere.
          </p>
        </div>
      </section>
      <section className="green">
        <Separator variant={0} green />
        <div className="container-small separator-bottom">
          <h2>
            Hvis det virkeligt er så simpelt og retfærdigt, hvorfor er den lov
            så ikke vedtaget for længst?
          </h2>
          <p>
            Ja, det er et virkelig godt spørgsmål. Vi ved det ikke, og egentlig
            synes vi ikke, det er så interessant. Bare det sker meget hurtigt.
          </p>
        </div>
      </section>
      <section>
        <Separator variant={0} />
        <div className="container-small">
          <h2>Hvordan kan man være med til at få det til at ske?</h2>
          <p>
            Vi har lavet et borgerforslag. Hvis bare lidt mere end 1 % af den
            danske befolkning skriver under på det, er politikerne tvunget til
            at behandle forslaget i Folketinget. Og de bliver tvunget til at
            forklare os alle sammen, hvorfor i alverden de ikke vil stemme ja
            til noget så simpelt, effektivt og retfærdigt. Du kan skrive under
            ved at klikke her:
          </p>
        </div>
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
      </section>
    </Layout>
  );
};

export default Index;
