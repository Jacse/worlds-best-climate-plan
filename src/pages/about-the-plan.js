import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="relative my-4 leading-loose text-gray-800">{children}</p>
);

const FootNote = ({ children, ...props }) => (
  <a className="bg-green-100 hover:bg-green-200 py-1 rounded-sm cursor-pointer">
    {children}
    <Article {...props} />
  </a>
);

const Article = ({ url, title, from, date, img, left = false }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute w-2/3 m-4 p-4 bg-gray-100 border border-gray-300 rounded-sm leading-tight text-left hover:bg-gray-200"
    style={{
      [left ? 'left' : 'right']: '100%',
      transform: 'translateY(-50%)',
    }}
  >
    <div className="flex items-center">
      {img && (
        <div className="w-12 mr-4 flex-shrink-0">
          <img src={img} />
        </div>
      )}
      <div>
        <h4 className="text-gray-800 mb-2">{title}</h4>
        <div className="flex">
          <span className="text-green-500 mr-2">{from}</span>
          <span className="text-gray-600">{date}</span>
        </div>
      </div>
    </div>
  </a>
);

const ThePlan = () => {
  return (
    <Layout>
      <SEO title="Lidt mere om planen" description="" />
      <section className="w-full max-w-xl mx-auto text-justify pt-16">
        <h1 className="text-2xl my-6 font-bold">Lidt mere om planen</h1>
        <P>
          Klimakrisen er et globalt problem.{' '}
          <FootNote
            title="The Global Resource Footprint of Nations"
            url="http://www.creea.eu/8-project/2-creea-booklet"
            from="CREEA"
            date="2. marts 2020"
          >
            Fordi Danmark har verdens 7. højeste klimaaftryk per indbygger
          </FootNote>
          , skal vi være et grønt foregangsland, så vi kan inspirere og påvirke
          resten af verden. Vi skal nå de 70% men så omkostningseffektivt som
          muligt for at tage hensyn til vores velfærd, lighed, dansk
          konkurrenceevne og jobs. Vores klimahandlingsplaner skal ikke blot
          flytte vores udledninger uden for vores grænser, og det danske
          erhvervsliv skal stadig være konkurrencedygtig.
        </P>
        <P>
          For at nå disse mål foreslår vi at bruge en løsning, der bygger på
          følgende principper:
          <ul>
            <li>
              Forureneren betaler en støt stigende ensartet afgift på
              udledninger af drivhusgasser. Prisen skal være høj nok til at nå
              klimalovens målsætning.
            </li>
            <li>
              Afgiften bør kombineres med tiltage, så løsningen ikke rammer
              socialt skævt og en dansker med gennemsnitlig forbrug ikke bliver
              ramt på pengepungen.
            </li>
            <li>
              Afgiften bør kombineres med tiltag, så danske udledninger, jobs og
              konkurrenceevnen ikke unødigt flyttes til udlandet.
            </li>
          </ul>
        </P>
        <P>
          Løsningen lægger sig tæt op ad “klimabidrag og -bonus”-modellen, der{' '}
          <FootNote
            title="Economists' Statement on Carbon Dividends"
            url="https://www.econstatement.org/"
            from="Climate Leadership Counsil"
            date="16. januar 2019"
            left
          >
            støttes af 27 Nobelprismodtagere i økonomi og over 3500 økonomer.
          </FootNote>
        </P>
        <P>Det er verdens bedste klimaplan.</P>
      </section>
      <section className="w-full max-w-xl mx-auto text-justify">
        <h2 className="text-lg my-6 font-bold">
          Lad forureneren betale en støt stigende og ensartet klimaafgift
        </h2>
        <P>
          FNs klimapanel IPCC, Den Internationale Valutafond, Verdensbanken,
          OECD, Nationalbanken, De Økonomiske Råd, Klimarådet og senest 11.000
          forskere er enige: en klimaafgift er den bedste løsning til at
          reducere hurtigst muligt vores udledninger, da indsatsen for at
          reducere udledningerne sker der, hvor det er billigst.
        </P>
        <P>
          Faktisk er en klimaafgift langt mere effektiv end hidtil beregnet og i
          Tyskland og Storbritannien har klimaafgifter har haft en stor
          indflydelse for at reducere deres udledninger.
        </P>
        <P>
          Modellen er smart, fordi den gør klimavenlige produkter og ydelser
          relativt billigere end før: det gør at kunder, altså virksomheder og
          forbrugere, får et større incitament til at købe disse i stedet for
          varer, der er klimabelastende. Klimaafgiften giver også et incitament
          til at innovere og skabe nye, klimavenlige løsninger: de kan pludselig
          være rentable. Fordi prisen er støt stigende, giver det også mulighed
          til alle for at omstille sig - også dem, som i dag ikke er særlig
          grønne.
        </P>
        <P>
          I Danmark bør en klimaafgift indføres på fossile brændsler, cement og
          landbruget - det sikrer en bred dækning. På grund af de eksisterende
          punktafgifter og Klimarådets foreslået værktøj er selve beskatning
          ikke nødvendigvis en kompliceret sag.{' '}
          <FootNote
            link="link-3"
            title="En klimareform, der sikrer de magiske 70 pct."
            url="http://kraka.org/small_great_nation/en_klimareform_der_sikrer_de_magiske_70_pct"
            from="Kraka"
            date="22. februar 2020"
            img="http://kraka.org/sites/all/themes/regnar/logo.png"
          >
            Kraka og Deloitte har beregnet, at en afgift på 1250 kroner per ton
            CO2-ækvivalenter vil sandsynligvis være tilstrækkelig til at nå 70%
            målet i 2030.
          </FootNote>
        </P>
      </section>
      <section className="w-full max-w-xl mx-auto text-justify">
        <img className="block mx-auto my-8" src="/how-it-works/loving.svg" />
        <h2 className="text-lg my-6 font-bold">
          En løsning, der sikrer den sociale balance
        </h2>
        <P>
          Udfordringen ved en klimaafgift er, at den kan ramme socialt skævt. De
          svagere stillede har en mindre rådighedsbeløb, og den ekstra
          omkostning har større betydning end hos de mere velhavende. Heldigvis
          findes der en løsning på det.
        </P>
        <P>
          Ved at give en betydelig andel af indtægten tilbage til borgerne
          sørger man for, at afgiften ikke vender den tunge ende nedad. Faktisk
          viser{' '}
          <FootNote
            title="MCC and PIK contribute to Climate Policy Special Report for German government"
            url="https://www.mcc-berlin.net/en/news/information/information-detail/article/mcc-and-pik-contribute-to-climate-policy-special-report-for-german-government.html"
            from="MCC"
            date="12. juli 2019"
          >
            en analyse i Tyskland
          </FootNote>{' '}
          og{' '}
          <FootNote
            title="Carbon Tax and Revenue Recycling: Revenue, Economic, and Distributional Implications"
            url="https://taxfoundation.org/carbon-tax/"
            from="Tax Foundation"
            date="6. november 2019"
            left
            img="https://taxfoundation.org/wp-content/themes/tf-wp-theme/images/favicons/apple-touch-icon-180x180.png"
          >
            to i USA
          </FootNote>
          , at det kan ende med, at de svageste får flere penge i lommen, end de
          gjorde før, fordi deres forbrug af klimabelastende varer er overordnet
          mindre end hos de velhavende. De har fx. færre biler, mindre boliger,
          flyver mindre og generelt et mindre forbrug.
        </P>
        <P>
          Pengene kan tilbageføres på mange måder. Det kunne være gennem den
          grønne check, gennem lavere skatter og afgifter, eller et højere
          personfradrag. Kraka og Deloitte har for nyligt anbefalet, at man
          hovedsageligt sænker de eksisterende energiafgifter. Nogle foretrækker
          et højere personfradrag, da det ikke går ud over incitamentet til at
          være i job. Fordi det samlede afgiftsprovenu falder over tiden, da
          vores udledninger falder, betyder det dog, at personfradraget skal
          justeres ned over tid - noget der kan gøre den grønne check mere
          attraktiv.
        </P>
      </section>
      <section className="w-full max-w-xl mx-auto text-justify">
        <h2 className="text-lg my-6 font-bold">
          En løsning, der sikrer, at virksomheder ikke flytter udledninger og
          jobs til udlandet
        </h2>
        <P>
          Det er også vigtigt, at udledninger, jobs og konkurrenceevnen ikke
          blot flytter uden for vores grænser. Det er vigtigt at påpege, at{' '}
          <FootNote
            title="Tougher environmental laws do not hurt export competitiveness – OECD study"
            url="https://www.oecd.org/newsroom/tougher-environmental-laws-do-not-hurt-export-competitiveness.htm"
            from="OECD"
            date="10. marts 2016"
          >
            OECD i 2016 viste, at strenge miljølove ikke påvirker eksporten
            negativt.
          </FootNote>{' '}
          Et nyere studie viser også,{' '}
          <FootNote
            title="Do Carbon Prices Limit Economic Growth? "
            url="https://journals.sagepub.com/doi/full/10.1177/2378023119898326"
            from="Daniel Driscoll, University of California, San Diego"
            date="7. januar 2020"
            left
          >
            at højere klimaafgifter ikke påvirker væksten.
          </FootNote>{' '}
        </P>
        <P>
          Der er dog forståelse for, at det kan være svært at formidle budskabet
          til virksomheder. Ligesom skatteministeren Morten Bødskov forklarer i
          hans svar til Skatteudvalget d. 8. januar 2020, er der to nemme måder
          at sørge for, at man undgår det: at justere afgiften prper sektor
          eller ved at give et højere bundfradrag til virksomheder, der er
          særlige udsatte for international konkurrence. Et højere bundfradrag
          vil sørge for, at de gennem klimaafgiften får incitamentet til at
          reducere deres klimaaftryk, mens deres bundlinje bliver beskyttet. Det
          højere bundfradrag vil være baseret på den enkelte virksomheds
          historiske udledninger, ligesom vi har erfaring med fra det europæiske
          kvotesystem.
        </P>
        <P>
          Fordi bundfradraget ikke vil stige, mens klimaafgiften gør, får
          virksomhederne et incitament til at omstille sig. Virksomheder, der i
          forvejen er omfattet af det europæiske kvotesystem, kunne få fuld
          fradrag for kvoteprisen, de betaler, for at undgå dobbeltbeskatning.
        </P>
      </section>
      <section className="w-full max-w-xl mx-auto text-justify">
        <h2 className="text-lg my-6 font-bold">
          Løsningen har allerede mange støtter i Danmark
        </h2>
        <P>
          En variant af den ovenstående løsning er blevet foreslået af Radikale
          Venstre i januar 2020. I de efterfølgende dage fik forslaget støtte
          fra Politiken, Ekstra Bladet, Børsen, Information, og Berlingske. Det
          fik også støtte fra CEPOS og AE-rådet, fra Kraka tidligere, og fra{' '}
          <FootNote id="link-7">
            nogle af de meste prominente økonomer i Danmark
          </FootNote>
          . En gennemgribende rapport fra Kraka og Deloitte udgivet i februar
          viser, hvordan en dansk klimaafgift kan skrues sammen for at opnå
          målene.
        </P>
        <P>
          Selvom klimaafgifter ikke kan levere 70% reduktion i udledninger
          alene, så kan de 70% ikke realistisk nås uden. De ovenstående forslag
          sørger for, at klimaafgifter ikke svækker den danske konkurrenceevne,
          eller at den tunge ende vender nedad.
        </P>
      </section>
    </Layout>
  );
};

export default ThePlan;
