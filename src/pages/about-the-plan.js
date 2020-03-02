import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import InteractiveBox from '../components/InteractiveBox/InteractiveBox';

const P = ({ children }) => (
  <p className="my-4 leading-loose text-gray-800">{children}</p>
);

const Article = ({ logo, url, title }) => (
  <div
    className={`hover-translate w-full rounded-lg bg-white cursor-pointer text-gray-600 hover:text-gray-700 shadow-xl `}
  >
    <div className="p-6 flex items-center">
      <img className="h-6 opacity-50" src={`/media/${logo}`} />
      <div className="ml-auto text-sm uppercase tracking-wide text-gray-600">
        6. april 2019
      </div>
    </div>
    <h4 className="text-lg px-6 pb-6 text-gray-800">{title}</h4>
    <p className="text-center">
      Danmarks politikere er blevet enige: Danmark skal reducere sine
      udledninger med 70 pct. ift. niveauet i 1990. Danmarks politikere er
      blevet enige: Danmark skal reducere sine udledninger med 70 pct. ift.
      niveauet i 1990. Danmarks politikere er blevet enige: Danmark skal
      reducere sine udledninger med 70 pct. ift. niveauet i 1990.
    </p>
    <div className="w-full bg-gray-200 p-3 flex items-center justify-center">
      <FaExternalLinkAlt />
      <div className="ml-3">Læs mere</div>
    </div>
  </div>
);

const ThePlan = () => {
  return (
    <Layout>
      <SEO title="Lidt mere om planen" description="" />
      <section>
        <h1 className="text-center text-3xl md:text-5xl my-12 font-bold">
          Lidt mere om planen
        </h1>
        <div className="w-full max-w-lg mx-auto">
          <P>
            Klimakrisen er et globalt problem. Fordi Danmark har verdens 7.
            højeste klimaaftryk prper indbygger, skal vi være et grønt
            foregangsland, så vi kan inspirere og påvirke resten af verden. Vi
            skal nå de 70% men så omkostningseffektivt som muligt for at tage
            hensyn til vores velfærd, lighed, dansk konkurrenceevne og jobs.
            Vores klimahandlingsplaner skal ikke blot flytte vores udledninger
            uden for vores grænser, og det danske erhvervsliv skal stadig være
            konkurrencedygtig.
          </P>
          <P>
            For at nå disse mål foreslår vi at bruge en løsning, der bygger på
            følgende principper:
            <ul>
              <li>
                Forureneren betaler en støt stigende ensartet afgift på
                udledninger af drivhusgasser. Prisen skal være høj nok til at nå
                klimalovens målsætning.{' '}
              </li>
              <li>
                Afgiften bør kombineres med tiltage, så løsningen ikke rammer
                socialt skævt og en dansker med gennemsnitlig forbrug ikke
                bliver ramt på pengepungen.
              </li>
              <li>
                Afgiften bør kombineres med tiltag, så danske udledninger, jobs
                og konkurrenceevnen ikke unødigt flyttes til udlandet.
              </li>
            </ul>
          </P>
          <P>
            Løsningen lægger sig tæt op ad “klimabidrag og -bonus”-modellen, der
            støttes af 27 Nobelprismodtagere i økonomi og over 3500 økonomer.
          </P>
          <P>Det er verdens bedste klimaplan.</P>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex items-center">
          <div className="md:w-1/2 md:pr-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              Lad forureneren betale en støt stigende og ensartet klimaafgift
            </h2>
            <P>
              FNs klimapanel IPCC, Den Internationale Valutafond, Verdensbanken,
              OECD, Nationalbanken, De Økonomiske Råd, Klimarådet og senest
              11.000 forskere er enige: en klimaafgift er den bedste løsning til
              at reducere hurtigst muligt vores udledninger, da indsatsen for at
              reducere udledningerne sker der, hvor det er billigst.
            </P>
            <P>
              Faktisk er en klimaafgift langt mere effektiv end hidtil beregnet
              og i Tyskland og Storbritannien har klimaafgifter har haft en stor
              indflydelse for at reducere deres udledninger.
            </P>
            <P>
              Modellen er smart, fordi den gør klimavenlige produkter og ydelser
              relativt billigere end før: det gør at kunder, altså virksomheder
              og forbrugere, får et større incitament til at købe disse i stedet
              for varer, der er klimabelastende. Klimaafgiften giver også et
              incitament til at innovere og skabe nye, klimavenlige løsninger:
              de kan pludselig være rentable. Fordi prisen er støt stigende,
              giver det også mulighed til alle for at omstille sig - også dem,
              som i dag ikke er særlig grønne.
            </P>
            <P>
              I Danmark bør en klimaafgift indføres på fossile brændsler, cement
              og landbruget - det sikrer en bred dækning. På grund af de
              eksisterende punktafgifter og Klimarådets foreslået værktøj er
              selve beskatning ikke nødvendigvis en kompliceret sag. Kraka og
              Deloitte har beregnet, at en afgift på 1250 kroner per ton
              CO2-ækvivalenter vil sandsynligvis være tilstrækkelig til at nå 70
              pct. målet i 2030.
            </P>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <InteractiveBox>
              <Article link="link_1" logo="information.svg" title="Slide 1" />
              <Article link="link_2" logo="information.svg" title="Slide 2" />
            </InteractiveBox>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              En løsning, der sikrer den sociale balance
            </h2>
            <P>
              Udfordringen ved en klimaafgift er, at den kan ramme socialt
              skævt. De svagere stillede har en mindre rådighedsbeløb, og den
              ekstra omkostning har større betydning end hos de mere velhavende.
              Heldigvis findes der en løsning på det.
            </P>
            <P>
              Ved at give en betydelig andel af indtægten tilbage til borgerne
              sørger man for, at afgiften ikke vender den tunge ende nedad.
              Faktisk viser en analyse i Tyskland og to i USA, at det kan ende
              med, at de svageste får flere penge i lommen, end de gjorde før,
              fordi deres forbrug af klimabelastende varer er overordnet mindre
              end hos de velhavende. De har fx. færre biler, mindre boliger,
              flyver mindre og generelt et mindre forbrug.
            </P>
            <P>
              Pengene kan tilbageføres på mange måder. Det kunne være gennem den
              grønne check, gennem lavere skatter og afgifter, eller et højere
              personfradrag. Kraka og Deloitte har for nyligt anbefalet, at man
              hovedsageligt sænker de eksisterende energiafgifter. Nogle
              foretrækker et højere personfradrag, da det ikke går ud over
              incitamentet til at være i job. Fordi det samlede afgiftsprovenu
              falder over tiden, da vores udledninger falder, betyder det dog,
              at personfradraget skal justeres ned over tid - noget der kan gøre
              den grønne check mere attraktiv.
            </P>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <Article
              logo="information.svg"
              title="Lorem ipsum article"
              text=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex items-center">
          <div className="md:w-1/2 md:pr-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              En løsning, der sikrer, at virksomheder ikke flytter udledninger
              og jobs til udlandet
            </h2>
            <P>
              Det er også vigtigt, at udledninger, jobs og konkurrenceevnen ikke
              blot flytter uden for vores grænser. Det er vigtigt at påpege, at
              OECD i 2016 viste, at strenge miljølove ikke påvirker eksporten
              negativt. Et nyere studie viser også, at højere klimaafgifter ikke
              påvirker væksten.
            </P>
            <P>
              Der er dog forståelse for, at det kan være svært at formidle
              budskabet til virksomheder. Ligesom skatteministeren Morten
              Bødskov forklarer i hans svar til Skatteudvalget d. 8. januar
              2020, er der to nemme måder at sørge for, at man undgår det: at
              justere afgiften prper sektor eller ved at give et højere
              bundfradrag til virksomheder, der er særlige udsatte for
              international konkurrence. Et højere bundfradrag vil sørge for, at
              de gennem klimaafgiften får incitamentet til at reducere deres
              klimaaftryk, mens deres bundlinje bliver beskyttet. Det højere
              bundfradrag vil være baseret på den enkelte virksomheds historiske
              udledninger, ligesom vi har erfaring med fra det europæiske
              kvotesystem.
            </P>
            <P>
              Fordi bundfradraget ikke vil stige, mens klimaafgiften gør, får
              virksomhederne et incitament til at omstille sig. Virksomheder,
              der i forvejen er omfattet af det europæiske kvotesystem, kunne få
              fuld fradrag for kvoteprisen, de betaler, for at undgå
              dobbeltbeskatning.
            </P>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <Article logo="information.svg" title="Lorem ipsum article" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              Løsningen har allerede mange støtter i Danmark
            </h2>
            <P>
              En variant af den ovenstående løsning er blevet foreslået af
              Radikale Venstre i januar 2020. I de efterfølgende dage fik
              forslaget støtte fra Politiken, Ekstra Bladet, Børsen,
              Information, og Berlingske. Det fik også støtte fra CEPOS og
              AE-rådet, fra Kraka tidligere, og fra nogle af de meste prominente
              økonomere i Danmark. En gennemgribende rapport fra Kraka og
              Deloitte udgivet i februar viser, hvordan en dansk klimaafgift kan
              skrues sammen for at opnå målene.
            </P>
            <P>
              Selvom klimaafgifter ikke kan levere 70% reduktion i udledninger
              alene, så kan de 70% ikke realistisk nås uden. De ovenstående
              forslag sørger for, at klimaafgifter ikke svækker den danske
              konkurrenceevne, eller at den tunge ende vender nedad.
            </P>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <Article logo="information.svg" title="Lorem ipsum article" />
            <Article logo="information.svg" title="Lorem ipsum article" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
