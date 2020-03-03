import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const Letter = () => (
  <div className="relative bg-sand-100 p-10 md:p-20 mx-auto max-w-3xl rounded-sm">
    <h2 className="text-xl sm:text-2xl font-bold mb-4">
      Der er brug for handling nu
    </h2>
    <p className="my-4">
      Danmark har behov for en grøn omstilling. Jo før, jo bedre. Klimaloven er
      en god start, men den fortæller os desværre ikke, hvordan vi når de
      70-procent i 2030.
    </p>
    <p className="my-4">
      Vi foreslår en klima-løsning, som klimaeksperter og økonomieksperter
      støtter og som røde, grønne, og blå politikere kan blive enige om.
    </p>
    <p className="my-4">
      Vi ønsker et system i balance, hvor vi som forbrugere belønnes økonomisk
      for at købe bæredygtigt ind og som virksomhed har et økonomisk incitament
      til at producere klimavenlige produkter.
    </p>
    <p className="my-4">
      Derfor vil vi have en social retfærdig klimaafgift som lader forureneren
      betale, og hvor andre tiltage sørger for, at løsningen ikke rammer socialt
      skævt, eller at alle vores udledninger blot flyttes til udlandet.
    </p>
    <p className="my-4">
      En bred klimaafgift vil gøre, at Danmark gennem vores virksomhedernes og
      borgernes forbrug vil udlede færre drivhusgasser. Det er den mest effektiv
      måde at skabe forandring.
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
