import React from 'react';

const Image = ({ link, source }) => (
  <a
    href={link}
    target="blank"
    className={`block sm:flex-1 p-2 sm:p-0 opacity-50 hover:opacity-100 transition ease-in-out duration-200`}
  >
    <img src={source} />
  </a>
);

const MentionedIn = () => (
  <React.Fragment>
    <h2 className="text-2xl text-center font-bold mb-4 mx-auto">
      Find modellen i medierne
    </h2>
    <p className="text-lg text-center mx-auto mb-8">
      Retfærdige klimaafgifter er beskrevet utallige gange i medierne.
    </p>
    <div className="flex-none max-w-15 sm:max-w-none mx-auto sm:flex items-center justify-around mb-24">
      <Image
        link="https://www.information.dk/debat/2019/09/saet-afgifter-paa-former-klimabelastning-giv-pengene-tilbage-befolkningen"
        source="/media/information.svg"
      />
      <Image
        link="https://www.berlingske.dk/videnskab/derfor-er-en-klimaskat-verdens-bedste-klimaloesning-og-noget-naer-umulig"
        source="/media/berlingske.svg"
      />
      <Image
        link="https://www.zetland.dk/historie/sekd5yZD-aOMNamWw-a2949"
        source="/media/zetland.png"
      />
      <Image
        link="https://politiken.dk/klima/art7458992/S%C3%A5dan-bliver-markedsmekanismerne-og-den-frie-konkurrence-medspillere-i-klimakampen"
        source="/media/politiken.svg"
      />
    </div>
  </React.Fragment>
);

export default MentionedIn;
