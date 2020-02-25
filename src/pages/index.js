import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Form from '../components/Form';
import SEO from '../components/SEO';
import Letter from '../components/Letter';
import HowItWorks from '../components/HowItWorks';

const Index = () => {
  return (
    <Layout transparentMenu>
      <SEO title="Verdens Bedste klimaplan" description="" />
      {/* Hero and letter */}
      <section
        className="pt-20 relative mb-64"
        style={{
          background: 'url(../../background.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="absolute w-full h-full inset-0"
          style={{
            background:
              'linear-gradient(rgba(1, 27, 26, 0.2), rgba(1, 27, 26, 1))',
          }}
        ></div>
        <div className="relative mx-auto md:py-24 p-8">
          <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-sand-100 leading-none">
            Støt en ny dansk klimaskat
          </h1>
          <p className="max-w-xl mx-auto text-center md:text-xl my-8 text-sand-100">
            Danmark skal have en afgift på varer der ødelægger klimaet.
            Forureneren betaler og pengene gives tilbage til borgerne.
          </p>
          <Button className="block mx-auto">Skriv under nu ✍️</Button>
        </div>
        {/* Letter */}
        <div className="transform -mt-64 translate-y-64">
          <Letter />
        </div>
      </section>
      {/* Sådan virker det */}
      <section className="mx-auto max-w-2xl px-8 pt-12">
        <HowItWorks />
      </section>
      {/* Support form */}
      <section className="mx-auto max-w-4xl p-8 md:p-20 bg-sand-100 mb-12">
        <div className="mx-auto max-w-lg">
          <Form />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
