import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="my-4 leading-loose text-gray-800">{children}</p>
);

const EconomistsStatement = () => {
  return (
    <Layout>
      <SEO title="Økonomernes udsagn" description="" />
      <section>
        <h1 className="text-center text-3xl md:text-5xl my-12 font-bold">
          Økonomernes udmelding
        </h1>
        <div className="w-full max-w-lg mx-auto">
          <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
            Danish
          </h2>
          <P>
            Globale klimaændringer er et alvorligt problem, der kræver
            øjeblikkelig national handling. Med udgangspunkt i sunde økonomiske
            principper er vi forenet i følgende politiske anbefalinger.
          </P>
          <P>
            I. En kulstofafgift tilbyder det mest omkostningseffektive
            virkemiddel til at reducere kulstofudledninger i den skala og
            hastighed, der er nødvendig. Ved at korrigere en velkendt
            markedssvigt vil en kulstofafgift sende et kraftfuldt prissignal,
            der udnytter markedets usynlige hånd for at styre økonomiske aktører
            mod en lav-kulstof fremtid.
          </P>
          <P>
            II. Kulstofafgiften skal stige hvert år, indtil målene for
            emissionsreduktioner er nået og være indtægtsneutrale for at undgå
            debatter om statens størrelse. En støt stigende kulstofafgift vil
            fremskynde teknologisk innovation og storstilet
            infrastrukturudvikling. Det vil også fremskynde udbredelsen af
            ​​klimavenlige varer og tjenester.
          </P>
          <P>
            III. En tilstrækkelig robust og gradvist stigende kulstofafgift
            erstatter behovet for forskellige kulstofreguleringer, der er mindre
            effektive. Udskiftning af besværlige regler til fordel for en
            kulstofaftgift vil fremme økonomisk vækst og give den
            lovgivningsmæssige sikkerhed, som virksomheder har brug for
            langsigtede investeringer i klimavenlige alternativer.
          </P>
          <P>
            IV. For at beskytte det danske konkurrenceevne kunne der indføres en
            bundfradrag for virksomheder, hvor der er stor sandsynlighed for
            kulstoflækage. Da virksomhederne skal betale for udledninger over en
            vis grænse, har de stadig tilskyndelse til at reducere deres
            udledninger. Dette system ville øge konkurrenceevnen hos danske
            virksomheder, der er mere energieffektive end deres globale
            konkurrenter. Det ville også skabe et incitament for andre nationer
            til at vedtage lignende kulstofafgifter.
          </P>
          <P>
            V. For at maksimere en stigende kulstofafgifts retfærdighed og
            politiske levedygtighed skal alle indtægter returneres direkte til
            danske borgere gennem lige rabatter. De fleste familier, inklusive
            de mest sårbare, vil drage økonomisk fordel ved at modtage mere i
            "kulstofdividende", end de betaler for øgede priser.
          </P>
          <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
            English
          </h2>
          <P>
            Global climate change is a serious problem calling for immediate
            national action. Guided by sound economic principles, we are united
            in the following policy recommendations.
          </P>
          <P>
            I. A carbon tax offers the most cost-effective lever to reduce
            carbon emissions at the scale and speed that is necessary. By
            correcting a well-known market failure, a carbon tax will send a
            powerful price signal that harnesses the invisible hand of the
            marketplace to steer economic actors towards a low-carbon future.
          </P>
          <P>
            II. A carbon tax should increase every year until emissions
            reductions goals are met and be revenue neutral to avoid debates
            over the size of government. A consistently rising carbon price will
            encourage technological innovation and large-scale infrastructure
            development. It will also accelerate the diffusion of
            carbon-efficient goods and services.
          </P>
          <P>
            III. A sufficiently robust and gradually rising carbon tax will
            replace the need for various carbon regulations that are less
            efficient. Substituting a price signal for cumbersome regulations
            will promote economic growth and provide the regulatory certainty
            companies need for long- term investment in clean-energy
            alternatives.
          </P>
          <P>
            IV. To protect Danish competitiveness, a tax-free allowance could be
            used for companies where there is a high probability of carbon
            leakage. As companies would have to pay a tax above a certain limit,
            they would still have an incentive to reduce their emissions. This
            system would enhance the competitiveness of Danish firms that are
            more energy-efficient than their global competitors. It would also
            create an incentive for other nations to adopt similar carbon
            pricing.
          </P>
          <P>
            V. To maximize the fairness and political viability of a rising
            carbon tax, all the revenue should be returned directly to Danish
            citizens through equal rebates. The majority of families, including
            the most vulnerable, will benefit financially by receiving more in
            “carbon dividends” than they pay in increased energy prices.
          </P>
          <div style={{ textAlign: 'center' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf-wtAyJBnTpPggT2-OSzW64FFnhG20ajBHAFQZwAEjJGC-HA/viewform?embedded=true"
              width="640"
              height="1300"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EconomistsStatement;
