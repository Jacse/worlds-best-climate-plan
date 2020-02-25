import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Letter = () => (
  <div className="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl">
    <h2 className="text-xl sm:text-2xl font-bold mb-4">
      Der er brug for handling nu
    </h2>
    <p className="my-4">
      Klimaforandringer har store konsekvenser for mennesker i hele verden i de
      næste årtier. I Danmark og i EU mærker vi allerede begyndende
      vejrforandringer og flygtningestrømme som er skabt af klimaændringerne.
    </p>
    <p className="my-4">
      Det betyder at vores verden bliver mere usikker, og der er risiko for at
      det går ud over de svageste i samfundet. Derfor vil vi have en retfærdig
      klimaafgift som lader forureneren betale og giver pengene tilbage til dem,
      der bliver mest udsat i vores samfund.
    </p>
    <p className="my-4">
      Klimaafgiften hjælper os også med at omstille det danske samfund til at
      forurene mindre. Vi skal reducere vores CO2-udledning med 70 procent inden
      2030, og for at vi kan nå det mål er der brug for gennemgribende tiltag.
      En bred klimaafgift vil gøre, at vi danskere gennem vores forbrug vil
      udlede mindre CO2. Det er en effektiv måde at skabe forandring.
    </p>
    <p className="my-4">
      Bag Verdens Bedste Klimaplan står Ungeklimarådet, Citizens&apos; Climate
      Lobby, Klimabevægelsen og en række ildsjæle.{' '}
      <Link to="/about-us" className="underline">
        Læs mere om holdet
      </Link>
    </p>
    <Button className="my-4 md:mb-0">Skriv under nu ✍️</Button>
  </div>
);

export default Letter;
