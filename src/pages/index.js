import React from 'react';
import Layout from '../components/Layout';
import da from '../i18n/da';
import PriceChart from '../components/PriceChart';

const Index = () => {
  const text = da.intro.split('\n\n').map((line, i) => {
    if (line.startsWith('# ')) {
      return <h2 key={i}>{line.substr(2)}</h2>;
    } else if (line.startsWith('#Chart: ')) {
      switch (line.substr(8)) {
        case 'PriceChart':
          return <PriceChart />;
      }
    }
    return <p key={i}>{line}</p>;
  });
  return (
    <Layout>
      <p>{text}</p>
    </Layout>
  );
};

export default Index;
