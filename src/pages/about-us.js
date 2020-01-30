import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BehindThePlan = () => {
  return (
    <Layout>
      <SEO title="Bag planen" description="" />
      <section>
        <h1 className="text-center text-3xl md:text-5xl my-12 font-bold">
          Bag planen
        </h1>
        <div className="w-full max-w-lg mx-auto">
          <p className="my-4 leading-loose">
            Bag “Verdens Bedste Klimaplan” står Ungeklimarådet, Citizens&apos;
            Climate Lobby, Klimabevægelsen og en række ildsjæle.
          </p>
          <p className="my-4 leading-loose">
            Planen er dog ikke noget vi selv har fundet på. Idéen er oprindeligt
            støttet af 27 Nobelprismodtagere og 3.500+ økonomer, og idéen er
            tilpasset til Danmark, stærkt inspireret af en række danske
            økonomer, heriblandt Peter Birch Sørensen (tidl. overvismand og
            formand for Klimarådet).
          </p>
          <p className="my-4 leading-loose">Vi er støttet af filantroper.</p>
          <p className="my-4 leading-loose">
            Hvis du har spørgsmål, gerne vil støtte eller gerne vil skrive om
            Verdens Bedste Klimaplan, så skriv eller ring til Martin Collignon
            (medlem af Ungeklimarådet):
          </p>
          <p className="my-4 leading-loose">
            +45 42 91 31 10
            <br />
            <a
              className="text-green-700 border-b border-green-700 hover:text-green-600 hover:border-green-600"
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
