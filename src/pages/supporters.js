import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Supporter from '../components/Supporter';

const supporters = [
  ['logo', '350.svg', '', ''],
  ['logo', 'ccl.png', '', ''],
  ['logo', 'dgs.png', '', ''],
  // ['logo', 'frej.png', '', ''],
  ['logo', 'ungeklimaraadet.png', '', ''],
  // ['person', 'background.jpg', 'Alpha Albert', 'Økonom'],
];

const Supporters = () => {
  return (
    <Layout>
      <SEO title="Støtter" description="" />
      <section className="w-full">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mt-16 px-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl my-3 font-bold">Støtter</h1>
              <p className="text-xl">
                Det er ikke os, der har fundet på ideen med klimabidrag og
                dividende. Idéen er gennemænkt og støttet af forskere og
                økonomer verden over. Og i Danmark støtter over 100 forskere,
                virksomheder og organisationer ideen.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-16 mb-32 px-6">
          {supporters.map(([type, image, name, title], i) => (
            <Supporter
              key={i}
              type={type}
              image={image}
              name={name}
              title={title}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Supporters;
