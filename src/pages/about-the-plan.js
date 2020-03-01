import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import { FaExternalLinkAlt, FaPlus, FaMinus } from 'react-icons/fa';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="my-4 leading-loose text-gray-800">{children}</p>
);

const Article = ({ logo, url, title }) => (
  <div className="hover-translate w-full rounded-lg bg-white cursor-pointer text-gray-600 hover:text-gray-700 shadow-xl my-8">
    <div className="p-6 flex items-center">
      <img className="h-6 opacity-50" src={`/media/${logo}`} />
      <div className="ml-auto text-sm uppercase tracking-wide text-gray-600">
        6. april 2019
      </div>
    </div>
    <h4 className="text-lg px-6 pb-6 text-gray-800">{title}</h4>
    <div className="w-full bg-gray-200 p-3 flex items-center justify-center">
      <FaExternalLinkAlt />
      <div className="ml-3">Læs mere</div>
    </div>
  </div>
);

const faq = [
  [
    'Hvorfor skal Danmark have verdens bedste klimaplan?',
    'Danmarks politikere er blevet enige: Danmark skal reducere sine udledninger med 70 pct. ift. niveauet i 1990. Det kan sagtens nås, selvom det er ambitiøst. Ja, faktisk meget ambitiøst. Det eneste andet land, der er så ambitiøs er Sverige. \n\n Hvis man kigger på verdens samlede drivhusgasudledninger, så udgør Danmark kun en brøkdel. I 2014 udledte Danmark 0.27% pct af verdens samlede drivhusgasudledninger. Men hvorfor skal vi så gøre noget overhovedet? \n\n Her kommer den ubekvemme sandhed: Hvis vi kigger på vores nuværende klimaaftryk per indbygger, så er Danmark et af de slemmeste lande - og det er endnu værre, hvis vi kigger på al den historiske udledning - altså den forurening, som Danmark har været skyld i siden det industrielle gennembrud. Det giver os et ansvar for at gøre det bedre. \n\n Vi er en af de slemmeste drenge i klassen, men samtidig har vi kæmpe ambitioner om at blive bedre, og det giver os en unik mulighed. \n\n Danmark, hvis vi vælger den bedste klimaplan, kan vise hele omverdenen, at en grøn omstilling kan lade sig gøre - og dermed inspirere alle andre lande til at gøre det samme.',
  ],
  [
    'Er en pris på forurening nok til at give os 70 pct. CO2-reduktion i 2030?',
    'Nej, fordi vi har mægtig travlt. Men det kan få os langt og bedst muligt hen ad vejen. Derfor skal politikerne også investere i forskning, infrastruktur og incitamenter for at få de sidste procenter med.',
  ],
  [
    'Hvad er ulemperne? Det lyder for godt til at være sandt.',
    'Desværre er afgiften ikke nok i sig selv til at nå 70%. Derfor skal politikerne også træffe hårde beslutninger om fx. bilfrizoner, ladeinfrastruktur, bygningsreglement, olieudvinding og forskning',
  ],
  [
    'Skal løsningen ikke bruges i hele EU eller hele verden før den er effektiv?',
    'Det vil være den ideelle løsning, hvis verdens bedste klimaplan blev implementeret i hele verden eller i hele EU. Uanset hvad der sker udenfor vores grænser, er økonomerne stadigvæk overbeviste om, at det er bedst for Danmark at bruge planen, fordi det er den billigste og bedste vej for at nå vores mål, og så kan vi også vise vejen for de andre lande.',
  ],
  [
    'Skal man regne, hvor meget CO2 der er i ethvert produkt?',
    'Nope. Her består tricket i at lægge afgiften så tæt på forureningskilden som muligt; på fossile brændsler, drøvtyggere og materialerne til forurenende produktion såsom cement. Når prisen på CO2 bliver indregnet i disse produkter fra starten, vil afgiften rykke med fra produkt til produkt, der benytter sig af fx olie, kul eller cement.',
  ],
  [
    'Skal man fjerne alle eksisterende CO2-afgifter?',
    'Det behøver man faktisk ikke! Mange af vores eksisterende klimaafgifter i dag bruges til at finansiere vores velfærdsstat, og at fjerne dem vil kræve, at man finder nye indtægtskilder. Derfor er det nemmeste blot at lægge dem ovenpå de eksisterende afgifter - og lade politikerne tænke, hvordan de skal finansiere velfærden i fremtiden.',
  ],
  [
    'Skal industrier, der allerede er dækket af ETS-kvotesystemet også betale afgiften?',
    'Det skal de, da ETS-kvoterne er for billige til, at de kan støtte 70 pct. målet. Man kan eventuelt godt refundere det der svarer til ETS-prisen til de pågældende industrier.',
  ],
  [
    'Skal alle pengene gives tilbage til borgerne?',
    'Ideelt, jep! Pengene fordeles fuldstændig ligeligt mellem alle borgere, så uanset om du er millionær eller på kontanthjælp, får du det samme beløb ind på kontoen. For de fleste vil dette beløb mere end dække omkostningerne ved højere priser på sorte varer, og jo grønnere du lever, jo gladere vil din pengepung blive. I andre lande har man valgt at bruge en andel på velfærd eller forskning - det er dog ikke hvad økonomerne anbefaler.',
  ],
  [
    'Smutter alle jobs til udlandet?',
    'Det er meget usandsynligt. For det første er mange af de andre lande også ved at blive ambitiøse (og er derfor ikke interesserede i at få klimasyndere hos dem). Fordi EU har planer om en klimatold, så vil ikke-EU lande også være ambitiøse. Der findes også muligheder for at forbedre vores konkurrenceevne. Sidst men ikke mindst betyder verdens bedste klimaplan, at vi alle får travlt med den grønne omstilling. Der kommer til at opstå mange nye muligheder, fordi grønne produkter bliver mere konkurrencedygtige.',
  ],
  [
    'Er der andre lande, der har gjort det før?',
    'British Columbia i Canada har gjort det med succes - og det bliver nu udrullet i hele Canada. Det er på dagsorden i flere andre lande.',
  ],
  [
    'Hvad siger industrien?',
    'Nogle store danske virksomheder støtter en pris på forurening. Det gælder eksempelvis Nordea, Danfoss, Vestas, og Ørsted. Dansk Industri og Dansk Erhverv har generelt været imod “dumme afgifter”. Så er det heldigt, at verdens bedste klimaplan er super smart! Fordi den er billigere samfundsøkonomisk og mere forudsigelig end alternativerne, er det nærmest en selvfølge, at virksomhederne overordnet kommer til at elske planen. Nogle kommer til at brokke sig (især klimasyndere), men det er mere fordi nogle af deres forretninger ikke rigtig kan være bæredygtig - og de kan godt se at det bliver svært at være klimaneutrale i 2050. Men selve Aalborg Portland og Arla burde se fidusen i det - så kan de sælge mere af henholdsvis Futurecem og plantedrik',
  ],
  [
    'Hvor meget skal det koste at udlede CO2?',
    'For at vi skal af med vores udledninger, skal prisen være tilstrækkelig høj. Klimarådet nævnte i 2018 en pris på over 800 kroner per ton udledt CO2, men det var før målet om 70 pct. blev til. Det er sandsynligt, at prisen vil være mellem 1.000 og 1.500 kroner i 2030.',
  ],
  [
    'Hvordan finansierer vi velfærdsstaten hvis afgifterne fra fossile brændsler ikke findes længere?',
    'Hvis vi antager, at vi rent faktisk gerne vil være klimaneutrale i 2050, så kommer vi ikke til at bruge fossile brændsler, og derfor skal vi uanset hvad finde nye indtægtskilder. Det har sådan set ikke rigtigt noget med verdens bedste klimaplan at gøre.',
  ],
  [
    'Betyder det, at jeg ikke kan flyve længere?',
    'Nej. Det betyder simpelthen bare, at du betaler den reelle pris for din flyrejse. En smuttur til Paris vil derfor blive dyrere end i dag, men hvis du ønsker at prioritere det, vil der stadig være plads i budgettet til den årlige ferie for almindelige familier. Samtidig vil en pris på CO2 skubbe flyselskaberne til at få fart på udviklingen af klimavenlige brændstoffer og flyvemaskiner, som vil gøre grønne rejser mulige i fremtiden.',
  ],
  [
    'Kan man ikke bare forbyde tingene i stedet for?',
    'Det kunne man, men så er det mange ting man skal forbyde, og når man forbyder ting går det hårdere ud over de svageste, der ofte ikke har råd til alternativer. Med verdens bedste klimaplan vil varens reelle pris blive brugt - og så bestemmer man selv om man synes en vare er det værd.',
  ],
  [
    'Kunne man ikke bare ikke sætte et klimamærke på alt og lade folk selv bestemme om de vil købe dem?',
    'Det vil være en god start, men det er meget usandsynligt, at det vil gøre en forskel. Der er en grund til, at man nu sætter afgiften på cigaretter op, selvom der har være grimme billeder på indpakningen i et par år.',
  ],
  [
    'Er det ikke bare en skjult måde at lave borgerløn på?',
    'At give pengene tilbage gennem den grønne check er kun en metode at gøre det på. Man kunne også vælge at reducere andre afgifter, eller at hæve personfradraget. Beløbene vil dog ikke være særlige store for de fleste, så det er usandsynligt, at det vil påvirke borgernes bankkonto på en måde, der vil gøre at de ikke vil i arbejde.',
  ],
  [
    'Kan vi ikke bare støtte virksomhederne gennem den grønne omstilling i stedet?',
    'Det kunne man, men det er en dårligere løsning. Det er det fordi pengene kommer fra den fælles kasse (altså dine skattepenge), og fordi det er rigtig svært at gøre nok for at nå de 70 pct. Hvert år ville politikerne skulle beregne, hvor meget CO2 man har sparet, og derefter lave nye tiltag i stedet for blot at skrue op for afgiften. Det er uoverskueligt - og på ingen måde ambitiøst nok.',
  ],
];

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
            Klimakrisen er et globalt problem. Fordi Danmark har verdens 7. højeste klimaaftryk prper indbygger, skal vi være et grønt foregangsland, så vi kan inspirere og påvirke resten af verden. Vi skal nå de 70% men så omkostningseffektivt som muligt for at tage hensyn til vores velfærd, lighed, dansk konkurrenceevne og jobs. Vores klimahandlingsplaner skal ikke blot flytte vores udledninger uden for vores grænser, og det danske erhvervsliv skal stadig være konkurrencedygtig.
          </P>
          <P>
            For at nå disse mål foreslår vi at bruge en løsning, der bygger på følgende principper:
            <ul>
              <li>Forureneren betaler en støt stigende ensartet afgift på udledninger af drivhusgasser. Prisen skal være høj nok til at nå klimalovens målsætning. </li>
              <li>Afgiften bør kombineres med tiltage, så løsningen ikke rammer socialt skævt og en dansker med gennemsnitlig forbrug ikke bliver ramt på pengepungen.</li>
              <li>Afgiften bør kombineres med tiltag, så danske udledninger, jobs og konkurrenceevnen ikke unødigt flyttes til udlandet.</li>
            </ul>
          </P>
          <P>
            Løsningen lægger sig tæt op ad “klimabidrag og -bonus”-modellen, der støttes af 27 Nobelprismodtagere i økonomi og over 3500 økonomer.
          </P>
          <P>
            Det er verdens bedste klimaplan.
          </P>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex items-center">
          <div className="md:w-1/2 md:pr-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              Lad forureneren betale en støt stigende og ensartet klimaafgift 
            </h2>
            <P>
              FNs klimapanel IPCC, Den Internationale Valutafond, Verdensbanken, OECD, Nationalbanken, De Økonomiske Råd, Klimarådet og senest 11.000 forskere er enige: en klimaafgift er den bedste løsning til at reducere hurtigst muligt vores udledninger, da indsatsen for at reducere udledningerne sker der, hvor det er billigst. 
            </P>
            <P>
              Faktisk er en klimaafgift langt mere effektiv end hidtil beregnet og i Tyskland og Storbritannien har klimaafgifter har haft en stor indflydelse for at reducere deres udledninger. 
            </P>
            <P>
              Modellen er smart, fordi den gør klimavenlige produkter og ydelser relativt billigere end før: det gør at kunder, altså virksomheder og forbrugere, får et større incitament til at købe disse i stedet for varer, der er klimabelastende. Klimaafgiften giver også et incitament til at innovere og skabe nye, klimavenlige løsninger: de kan pludselig være rentable. Fordi prisen er støt stigende, giver det også mulighed til alle for at omstille sig - også dem, som i dag ikke er særlig grønne. 
            </P>
            <P>
              I Danmark bør en klimaafgift indføres på fossile brændsler, cement og landbruget - det sikrer en bred dækning. På grund af de eksisterende punktafgifter og Klimarådets foreslået værktøj er selve beskatning ikke nødvendigvis en kompliceret sag. Kraka og Deloitte har beregnet, at en afgift på 1250 kroner per ton CO2-ækvivalenter vil sandsynligvis være tilstrækkelig til at nå 70 pct. målet i 2030.
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
              En løsning, der sikrer den sociale balance
            </h2>
            <P>
              Udfordringen ved en klimaafgift er, at den kan ramme socialt skævt. De svagere stillede har en mindre rådighedsbeløb, og den ekstra omkostning har større betydning end hos de mere velhavende. Heldigvis findes der en løsning på det. 
            </P>
            <P>
              Ved at give en betydelig andel af indtægten tilbage til borgerne sørger man for, at afgiften ikke vender den tunge ende nedad. Faktisk viser en analyse i Tyskland og to i USA, at det kan ende med, at de svageste får flere penge i lommen, end de gjorde før, fordi deres forbrug af klimabelastende varer er overordnet mindre end hos de velhavende. De har fx. færre biler, mindre boliger, flyver mindre og generelt et mindre forbrug. 
            </P>
            <P>
              Pengene kan tilbageføres på mange måder. Det kunne være gennem den grønne check, gennem lavere skatter og afgifter, eller et højere personfradrag. Kraka og Deloitte har for nyligt anbefalet, at man hovedsageligt sænker de eksisterende energiafgifter. Nogle foretrækker et højere personfradrag, da det ikke går ud over incitamentet til at være i job. Fordi det samlede afgiftsprovenu falder over tiden, da vores udledninger falder, betyder det dog, at personfradraget skal justeres ned over tid - noget der kan gøre den grønne check mere attraktiv. 
            </P>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <Article logo="information.svg" title="Lorem ipsum article" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-5xl mx-auto md:flex items-center">
          <div className="md:w-1/2 md:pr-6">
            <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide">
              En løsning, der sikrer, at virksomheder ikke flytter udledninger og jobs til udlandet
            </h2>
            <P>
              Det er også vigtigt, at udledninger, jobs og konkurrenceevnen ikke blot flytter uden for vores grænser. Det er vigtigt at påpege, at OECD i 2016 viste, at strenge miljølove ikke påvirker eksporten negativt. Et nyere studie viser også, at højere klimaafgifter ikke påvirker væksten. 
            </P>
            <P>
              Der er dog forståelse for, at det kan være svært at formidle budskabet til virksomheder. Ligesom skatteministeren Morten Bødskov forklarer i hans svar til Skatteudvalget d. 8. januar 2020, er der to nemme måder at sørge for, at man undgår det: at justere afgiften prper sektor eller ved at give et højere bundfradrag til virksomheder, der er særlige udsatte for international konkurrence. Et højere bundfradrag vil sørge for, at de gennem klimaafgiften får incitamentet til at reducere deres klimaaftryk, mens deres bundlinje bliver beskyttet. Det højere bundfradrag vil være baseret på den enkelte virksomheds historiske udledninger, ligesom vi har erfaring med fra det europæiske kvotesystem. 
            </P>
            <P>
              Fordi bundfradraget ikke vil stige, mens klimaafgiften gør, får virksomhederne et incitament til at omstille sig. Virksomheder, der i forvejen er omfattet af det europæiske kvotesystem, kunne få fuld fradrag for kvoteprisen, de betaler, for at undgå dobbeltbeskatning. 
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
              En variant af den ovenstående løsning er blevet foreslået af Radikale Venstre i januar 2020. I de efterfølgende dage fik forslaget støtte fra Politiken, Ekstra Bladet, Børsen, Information, og Berlingske. Det fik også støtte fra CEPOS og AE-rådet, fra Kraka tidligere, og fra nogle af de meste prominente økonomere i Danmark. En gennemgribende rapport fra Kraka og Deloitte udgivet i februar viser, hvordan en dansk klimaafgift kan skrues sammen for at opnå målene.
            </P>
            <P>
              Selvom klimaafgifter ikke kan levere 70% reduktion i udledninger alene, så kan de 70% ikke realistisk nås uden. De ovenstående forslag sørger for, at klimaafgifter ikke svækker den danske konkurrenceevne, eller at den tunge ende vender nedad. 
            </P>
            </P>
          </div>
          <div className="md:w-1/2 md:pr-6">
            <Article logo="information.svg" title="Lorem ipsum article" />
            <Article logo="information.svg" title="Lorem ipsum article" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-2xl mx-auto my-8">
          <h2 className="text-2xl my-3 uppercase font-bold text-gray-800 tracking-wide text-center">
            Spørgsmål og svar
          </h2>
          <Collapse
            accordion
            className="bg-transparent border-0 text-gray-800"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaMinus className="mr-2" />
              ) : (
                <FaPlus className="mr-2" />
              )
            }
          >
            {faq.map(([question, answer]) => (
              <Panel
                key={question}
                header={question}
                headerClass="text-gray-600 flex items-center py-4 border-b border-gray-400 cursor-pointer hover:text-gray-800 focus:outline-none"
              >
                {answer.split('\n').map((paragraph, i) => (
                  <P key={i}>{paragraph}</P>
                ))}
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </Layout>
  );
};

export default ThePlan;
