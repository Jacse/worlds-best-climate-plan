import React from 'react';
import Layout from '../components/Layout';
import da from '../i18n/da';

const Index = () => {
  const text = da.faq.map(([question, answer], i) => (
    <div key={i}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  ));
  return (
    <Layout>
      <p>{text}</p>
    </Layout>
  );
};

export default Index;
