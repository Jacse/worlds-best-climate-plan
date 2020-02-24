import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Form from '../components/Form';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <Layout transparentMenu>
      <SEO title="Verdens Bedste klimaplan" description="" />
      {/* Hero and letter */}
      <section
        className="lg:pt-20 relative mb-32"
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
        <div className="relative mx-auto p-24">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-sand-100 leading-none">
            Støt en ny dansk klimaskat
          </h1>
          <p className="text-center text-xl my-8 text-sand-100">
            Danmark skal have en afgift på varer der ødelægger klimaet.
            <br />
            Forureneren betaler og pengene gives tilbage til borgerne.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById('sign')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="block mx-auto"
          >
            Skriv under nu ✍️
          </Button>
        </div>
        {/* Letter */}
        <div className="relative bg-sand-100 p-20 mx-auto max-w-2xl transform -mt-24 translate-y-24">
          <h2 className="text-2xl font-bold mb-4">
            Der er brug for handling nu
          </h2>
          <p>Lorem ipsum</p>
        </div>
      </section>
      {/* Sådan virker det */}
      <section className="mx-auto max-w-2xl">
        <h2 className="text-2xl text-center font-bold mb-4 mx-auto">
          Sådan virker det
        </h2>
        <p className="text-lg text-center mb-4 mx-auto">
          Danmark skal have en afgift på varer der ødelægger klimaet.
          <br />
          Forureneren betaler og pengene gives tilbage til borgerne.
        </p>
        <div className="md:flex">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2 hidden md:block"></div>
        </div>
      </section>
      <Form />
    </Layout>
  );
};

export default Index;
