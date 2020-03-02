import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Form from '../components/Form/Form';
import { ModalContext } from '../components/Form/Modal';
import SEO from '../components/SEO';
import Letter from '../components/Letter';
import HowItWorks from '../components/HowItWorks';
import MentionedIn from '../components/MentionedIn';
import ShareButtons from '../components/ShareButtons';
import SupportedBy from '../components/SupportedBy';

const Index = () => {
  return (
    <Layout transparentMenu>
      <SEO title="Verdens Bedste klimaplan" description="" />
      {/* Hero and letter */}
      <section
        className="pt-20 relative mb-64 bg-cover bg-green-900"
        style={{
          backgroundImage: 'url(../../background.png)',
        }}
      >
        <div className="relative mx-auto md:pt-32 p-8">
          <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold text-sand-100 leading-none">
            Støt en retfærdig klimaafgift
          </h1>
          <p className="max-w-xl mx-auto text-center md:text-xl my-8 text-sand-100">
            Danmark skal have en afgift på varer der er klimabelastende.
            Forureneren betaler, men uden at det rammer socialt skævt, eller at
            alle vores udledninger flyttes til udlandet.
          </p>
          <ModalContext.Consumer>
            {openModal => (
              <Button
                onClick={openModal}
                large
                className="block mx-auto my-8 sm:my-16"
              >
                Skriv under nu&nbsp;&nbsp;✍️
              </Button>
            )}
          </ModalContext.Consumer>
          <ShareButtons />
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
      <SupportedBy />
      <section className="mx-auto max-w-4xl px-8 pt-12">
        <MentionedIn />
      </section>
      {/* Support form */}
      <Form className="mb-12" />
    </Layout>
  );
};

export default Index;
