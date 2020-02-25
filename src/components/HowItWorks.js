import React from 'react';

const Badge = ({ children }) => (
  <div className="rounded-full w-8 h-8 flex items-center justify-center bg-green-500 text-white font-bold mb-4 pt-px mx-auto sm:ml-0">
    {children}
  </div>
);

const HowItWorks = () => (
  <React.Fragment>
    <h2 className="text-2xl text-center font-bold mb-4 mx-auto">
      Sådan virker det
    </h2>
    <p className="text-lg text-center mx-auto mb-16">
      Danmark skal have en afgift på varer der ødelægger klimaet.
      <br />
      Forureneren betaler og pengene gives tilbage til borgerne.
    </p>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>1.</Badge>
        <p>
          Varer, der udleder CO2 pålægges en ekstra afgift. Når en vare bliver
          dyrere, køber vi mindre af den. På den måde reducerer vi vores
          udledning og belaster klimaet mindre.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/coffee.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>2.</Badge>
        <p>
          En mere klimavenlig vare er billigere, så måske køber vi den i stedet.
          Virksomheden vælger at udvikle mere klimavenlige produkter, fordi det
          bedre kan betale sig.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/plant.svg" />
      </div>
    </div>
    <div className="mb-12 sm:flex sm:items-center">
      <div className="sm:w-1/2 sm:mr-20">
        <Badge>3.</Badge>
        <p>
          Indtægt fra klimaafgifter betales tilbage til borgerne som
          klimadividende. Alle får det samme. Hvis du er god til at fravælge de
          klimabelastende varer, får du altså flere penge til rådighed.
        </p>
      </div>
      <div className="hidden sm:w-1/2 sm:block">
        <img src="/how-it-works/loving.svg" />
      </div>
    </div>
  </React.Fragment>
);

export default HowItWorks;
