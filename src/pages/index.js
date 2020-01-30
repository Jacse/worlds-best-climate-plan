import React from 'react';
import {
  FaCashRegister,
  FaExclamation,
  FaBullhorn,
  FaUsers,
} from 'react-icons/fa';
import Layout from '../components/Layout';
import Form from '../components/Form';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO title="Verdens Bedste klimaplan" description="" />
      <section
        className="bg-gray-200 pt-8 lg:pt-20"
        style={{
          background: 'url(../../background.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto p-4">
          <h1 className="text-center text-3xl md:text-6xl font-bold leading-none text-white mt-6">
            Støt en ny dansk klimaskat
          </h1>
          <p className="text-center my-12 text-white">
            Danmark skal have en afgift på varer der ødelægger klimaet.
            Forureneren betaler og pengene gives tilbage til borgerne
          </p>
          <button
            onClick={() =>
              document
                .getElementById('sign')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="hover-translate block mx-auto mt-12 mb-6 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-3 px-6"
          >
            Skriv under
          </button>
        </div>
        <svg
          className="w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            d="M0,224L120,208C240,192,480,160,720,165.3C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="py-8 lg:py-20">
        <div className="container mx-auto lg:max-w-5xl">
          <div className="md:flex md:-mx-6">
            <div className="md:w-1/2 px-6">
              <p className="py-4">
                Klimaforandringer har store konsekvenser for mennesker i hele
                verden i de næste årtier. I Danmark og i EU mærker vi allerede
                begyndende vejrforandringer og flygtningestrømme som er skabt af
                klimaændringerne.
              </p>
              <p className="py-4">
                Det betyder at vores verden bliver mere usikker, og der er
                risiko for at det går ud over de svageste i samfundet. Derfor
                vil vi have en retfærdig klimaafgift som lader forureneren
                betale og giver pengene tilbage til dem, der bliver mest udsat i
                vores samfund.
              </p>
            </div>
            <div className="md:w-1/2 px-6">
              <p className="py-4">
                Klimaafgiften hjælper os også med at omstille det danske samfund
                til at forurene mindre. Vi skal reducere vores CO2-udledning med
                70 procent inden 2030, og for at vi kan nå det mål er der brug
                for gennemgribende tiltag.
              </p>
              <p className="py-4">
                En bred klimaafgift vil gøre, at vi danskere gennem vores
                forbrug vil udlede mindre CO2. Det er en effektiv måde at skabe
                forandring.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto p-8 bg-gray-200">
          <div className="lg:max-w-5xl mx-auto">
            <h2 className="text-center text-2xl mb-8 text-gray-800 tracking-wide uppercase">
              Sådan virker det
            </h2>
            <div className="flex-row-reverse md:flex md:-mx-6">
              <div className="md:w-1/2 px-6">
                <div className="rounded-lg bg-white shadow-xl">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fdengroennestudenterbevaegelse%2Fvideos%2F384774242163130%2F&show_text=0&width=488"
                    className="overflow-hidden w-full h-min-48"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="md:w-1/2 px-6 text-gray-800">
                <div className="flex my-8">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center mr-3">
                      1
                    </div>
                  </div>
                  <p>
                    Varer, der udleder CO2 pålægges en ekstra afgift. Når en
                    vare bliver dyrere, køber vi mindre af den. På den måde
                    reducerer vi vores udledning og belaster klimaet mindre.
                  </p>
                </div>
                <div className="flex my-8">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center mr-3">
                      2
                    </div>
                  </div>
                  <p>
                    En mere klimavenlig vare er billigere, så måske køber vi den
                    i stedet. Virksomheden vælger at udvikle mere klimavenlige
                    produkter, fordi det bedre kan betale sig.
                  </p>
                </div>
                <div className="flex my-8">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center mr-3">
                      3
                    </div>
                  </div>
                  <p>
                    Indtægt fra klimaafgifter betales tilbage til borgerne som
                    klimadividende. Alle får det samme. Hvis du er god til at
                    fravælge de klimabelastende varer, får du altså flere penge
                    til rådighed end før klimaafgiften.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 lg:py-12">
        <div className="container mx-auto lg:max-w-5xl">
          <div className="flex-row-reverse md:flex md:-mx-6 items-center">
            <div className="md:w-1/2 p-6">
              <h3 className="text-xl">
                Støttet af forskere, virksomheder, organisationer m.v.
              </h3>
              <p className="py-4 text-gray-700">
                Det er ikke os, der har fundet på ideen med klimabidrag og
                dividende. Idéen er gennemænkt og støttet af forskere og
                økonomer verden over. Og i Danmark støtter over 100 forskere,
                virksomheder og organisationer ideen.
              </p>
            </div>
            <div className="md:w-1/2 p-6">
              <div className="rounded-lg bg-white p-8 shadow-xl">
                <p className="mb-4 text-center uppercase tracking-widest text-gray-700 font-bold">
                  Støttet af
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href="https://kefm.dk/klima-og-vejr/ungeklimaraadet/"
                    target="blank"
                  >
                    <img
                      className="h-8 m-2 opacity-50"
                      src="/supporters/ungeklimaraadet.png"
                    />
                  </a>
                  <a href="https://www.klimabevaegelsen.dk/" target="blank">
                    <img
                      className="h-8 m-2 opacity-50"
                      src="/supporters/350.svg"
                    />
                  </a>
                  <a href="https://www.dgsb.dk/" target="blank">
                    <img
                      className="h-10 m-2 opacity-50"
                      src="/supporters/dgs.png"
                    />
                  </a>
                  <a href="https://citizensclimatelobby.org/" target="blank">
                    <img
                      className="h-8 m-2 opacity-50"
                      src="/supporters/ccl.png"
                    />
                  </a>
                </div>
                <p className="m-4 text-center uppercase tracking-widest text-gray-700 font-bold">
                  Nævnt i
                </p>
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
                    target="blank"
                  >
                    <img
                      className="h-5 m-2 -mt-1 opacity-50"
                      src="/media/information.svg"
                    />
                  </a>
                  <a
                    href="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
                    target="blank"
                  >
                    <img
                      className="h-5 m-2 opacity-50"
                      src="/media/berlingske.svg"
                    />
                  </a>
                  <a
                    href="https://www.zetland.dk/historie/sekd5yZD-aOMNamWw-a2949"
                    target="blank"
                  >
                    <img
                      className="h-5 m-2 opacity-50"
                      src="/media/zetland.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12" id="sign">
        <div className="container mx-auto p-8 bg-gray-200">
          <div className="lg:max-w-5xl mx-auto">
            <h2 className="text-center text-2xl mb-4 text-gray-800 tracking-wide uppercase">
              Støt en ny dansk klimaskat
            </h2>
            <p className="text-center opacity-75">
              Ved at skrive under støtter du, at vi skal have en klimaskat i
              Danmark. Når vores borgerforslag er klar, sender vi dig en mail
              med et link til at skrive under på forslaget.
            </p>
            <div className="flex flex-wrap -mx-2 my-8">
              <div className="w-1/2 md:w-1/4 p-2 sm:flex leading-tight text-gray-700 text-center sm:text-left">
                <div className="inline-block w-8 h-8 rounded-full bg-gray-500 p-2 text-gray-200 sm:mr-4">
                  <FaCashRegister />
                </div>
                <p>Vi skal tænke nyt og forbruge mindre</p>
              </div>
              <div className="w-1/2 md:w-1/4 p-2 sm:flex leading-tight text-gray-700 text-center sm:text-left">
                <div className="inline-block w-8 h-8 rounded-full bg-gray-500 p-2 text-gray-200 sm:mr-4">
                  <FaExclamation />
                </div>
                <p>Vi skal råbe op til verdens politikere om handling NU</p>
              </div>
              <div className="w-1/2 md:w-1/4 p-2 sm:flex leading-tight text-gray-700 text-center sm:text-left">
                <div className="inline-block w-8 h-8 rounded-full bg-gray-500 p-2 text-gray-200 sm:mr-4">
                  <FaBullhorn />
                </div>
                <p>Vi skal hjælpe eksperterne med at få budskabet ud</p>
              </div>
              <div className="w-1/2 md:w-1/4 p-2 sm:flex leading-tight text-gray-700 text-center sm:text-left">
                <div className="inline-block w-8 h-8 rounded-full bg-gray-500 p-2 text-gray-200 sm:mr-4">
                  <FaUsers />
                </div>
                <p>Vi skal stille et borgerforslag</p>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
