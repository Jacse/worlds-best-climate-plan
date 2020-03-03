import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BehindThePlan = () => {
  return (
    <Layout>
      <SEO title="Bag planen" description="" />
      <section className="w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Bag planen</h1>
          <p className="sm:text-lg my-4">
            Bag “Verdens Bedste Klimaplan” står{' '}
            <a
              className="underline text-green-700 hover:text-green-500"
              href="https://kefm.dk/klima-og-vejr/ungeklimaraadet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ungeklimarådet
            </a>
            ,{' '}
            <a
              className="underline text-green-700 hover:text-green-500"
              href="https://citizensclimatelobby.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Citizens&apos; Climate Lobby
            </a>
            ,{' '}
            <a
              className="underline text-green-700 hover:text-green-500"
              href="https://www.klimabevaegelsen.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klimabevægelsen
            </a>{' '}
            og en række ildsjæle.
          </p>
          <p className="sm:text-lg my-4">
            Planen er dog ikke noget vi selv har fundet på. Idéen er oprindeligt
            støttet af 27 Nobelprismodtagere og 3.500+ økonomer, og idéen er
            tilpasset til Danmark, stærkt inspireret af en række danske
            økonomer, heriblandt Peter Birch Sørensen (tidl. overvismand og
            formand for Klimarådet).
          </p>
          <p className="sm:text-lg my-4">Vi er støttet af filantroper.</p>
          <p className="sm:text-lg my-4">
            Hvis du har spørgsmål, gerne vil støtte eller gerne vil skrive om
            Verdens Bedste Klimaplan, så skriv eller ring til Martin Collignon
            (medlem af Ungeklimarådet):
          </p>
          <p className="sm:text-lg my-4">+45 42 91 31 10</p>
          <p className="sm:text-lg my-4">
            <a
              className="underline text-green-700 hover:text-green-500"
              href="mailto:kontakt@verdensbedsteklimaplan.dk"
            >
              kontakt@verdensbedsteklimaplan.dk
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BehindThePlan;
