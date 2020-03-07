import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import Layout from '../components/Layout';
import FootNoteContainer, {
  FootNoteItem as FootNote,
} from '../components/FootNote';
import SEO from '../components/SEO';

const P = ({ children }) => (
  <p className="sm:text-lg leading-relaxed my-4">{children}</p>
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
      <SEO
        title="Verdens Bedste Klimaplan"
        description="Læs her hvorfor Verdens Bedste Klimaplan giver super god mening."
      />
      <section className="w-full max-w-4xl mx-auto py-16 px-6">
        <div className="max-w-2xl">
          <FootNoteContainer>
            <h1 className="text-2xl font-bold mb-4">Lidt mere om planen</h1>
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
              , skal vi være et grønt foregangsland, så vi kan inspirere og
              påvirke resten af verden. Vi skal nå de 70 pct. men så
              omkostningseffektivt som muligt for at tage hensyn til vores
              velfærd, lighed, dansk konkurrenceevne og jobs. Vores
              klimahandlingsplaner skal ikke unødigt flytte vores udledninger
              uden for vores grænser, og det danske erhvervsliv skal stadig være
              konkurrencedygtig.
            </P>
            <P>
              For at nå disse mål foreslår vi at bruge en løsning, der bygger på
              følgende principper:
              <ul>
                <li>
                  Forureneren betaler en støt stigende afgift på udledninger af
                  drivhusgasser. Prisen skal være høj nok til at nå klimalovens
                  målsætning.
                </li>
                <li>
                  Afgiften bør kombineres med tiltag, så løsningen ikke rammer
                  socialt skævt og en dansker med gennemsnitlig forbrug ikke
                  bliver ramt på pengepungen.
                </li>
              </ul>
            </P>
            <P>
              Løsningen lægger sig tæt op ad “klimabidrag og -bonus”-modellen,
              der{' '}
              <FootNote
                title="Economists' Statement on Carbon Dividends"
                url="https://www.econstatement.org/"
                from="Climate Leadership Council"
                date="16. januar 2019"
              >
                støttes af 27 Nobelprismodtagere i økonomi og over 3500
                økonomer.
              </FootNote>
            </P>
            <P>Det er verdens bedste klimaplan.</P>

            <h2 className="text-lg my-6 font-bold">
              Lad forureneren betale en støt stigende og ensartet klimaafgift
            </h2>
            <P>
              <FootNote
                title="New U.N. Climate Report Says Put a High Price on Carbon"
                url="https://www.nytimes.com/2018/10/08/climate/carbon-tax-united-nations-report-nordhaus.html"
                from="The New York Times"
                date="8. oktober 2018"
                img="/about-the-plan/newyorktimes.svg"
              >
                FNs klimapanel IPCC
              </FootNote>
              ,{' '}
              <FootNote
                title="A carbon tax is ‘single most powerful’ way to combat climate change, IMF says"
                url="https://www.cnbc.com/2019/10/10/carbon-tax-most-powerful-way-to-combat-climate-change-imf.html"
                from="CNBC"
                date="10. oktober 2019"
                img="/about-the-plan/cnbc.svg"
              >
                Den Internationale Valutafond
              </FootNote>
              ,{' '}
              <FootNote
                title="Pricing Carbon"
                url="https://www.worldbank.org/en/programs/pricing-carbon"
                from="The World Bank"
                img="/about-the-plan/theworldbank.svg"
              >
                Verdensbanken
              </FootNote>
              ,{' '}
              <FootNote
                title="Few countries are pricing carbon high enough to meet climate targets"
                url="http://kraka.org/small_great_nation/en_klimareform_der_sikrer_de_magiske_70_pct"
                from="OECD"
                date="18. september 2018"
                img="/about-the-plan/kraka.svg"
              >
                OECD
              </FootNote>
              ,{' '}
              <FootNote
                title="Macroeconomic and Financial Policies for Climate Change Mitigation: A Review of The Literature"
                url="http://www.nationalbanken.dk/en/publications/Pages/2019/09/Working-paper-Macroeconomic-and-financial-policies-for-climate-change-mitigation-A-review-of-the-literature.aspx"
                from="Danmarks National Bank"
                date="5. september 2020"
                img="/about-the-plan/nationalbanken.svg"
              >
                Nationalbanken
              </FootNote>
              ,{' '}
              <FootNote
                title="Ensartet afgift på tværs af brancher er den billigste klimaløsning"
                url="https://dors.dk/oevrige-publikationer/kronikker-artikler/ensartet-afgift-paa-tvaers-brancher-billigste-klimaloesning"
                from="De Økonomiske Råd"
                date="22. august 2019"
              >
                De Økonomiske Råd
              </FootNote>
              ,{' '}
              <FootNote
                title="Analyse: CO2-afgift bør være drivkraft for den grønne omstilling"
                url="https://klimaraadet.dk/da/nyheder/analyse-co2-afgift-boer-vaere-drivkraft-den-groenne-omstilling"
                from="Klimarådet"
                date="17. april 2018"
                img="/about-the-plan/klimaraadet.svg"
              >
                Klimarådet
              </FootNote>{' '}
              og senest{' '}
              <FootNote
                title="World Scientists’ Warning of a Climate Emergency"
                url="https://academic.oup.com/bioscience/article/70/1/8/5610806"
                from="American Institute of Biological Sciences"
                date="5. november 2020"
                img="/about-the-plan/americaninstituteofbiologicalsciences.svg"
              >
                11.000 forskere
              </FootNote>{' '}
              er enige: en klimaafgift er den bedste løsning til at reducere
              hurtigst muligt vores udledninger, da indsatsen for at reducere
              udledningerne sker der, hvor det er billigst.
            </P>
            <P>
              Faktisk er{' '}
              <FootNote
                title="An efficient way to reduce emissions"
                url="https://www.aeaweb.org/research/carbon-tax-impact-sweden"
                from="American Economic Association"
                date="15. november 2019"
                img="/about-the-plan/americaneconomicassociation.svg"
              >
                en klimaafgift langt mere effektiv end hidtil beregnet
              </FootNote>{' '}
              og i{' '}
              <FootNote
                title="Rising carbon prices led to drop in German emissions in 2019"
                url="https://apnews.com/5388d8a3e1e69b24211a66191f129aba"
                from="AP News"
                date="7. januar 2020"
                img="/about-the-plan/apnews.svg"
              >
                Tyskland
              </FootNote>{' '}
              og{' '}
              <FootNote
                title="A carbon tax killed coal in the UK. Natural gas is next."
                url="https://qz.com/1192753/a-carbon-tax-killed-coal-in-the-uk-natural-gas-is-next/"
                from="Quartz"
                date="1. februar 2020"
                img="/about-the-plan/quartz.svg"
              >
                Storbritannien
              </FootNote>{' '}
              har klimaafgifter har haft en stor indflydelse for at reducere
              deres udledninger.
            </P>
            <P>
              Modellen er smart, fordi den gør klimavenlige produkter og ydelser
              relativt billigere end før: det gør at kunder, altså virksomheder
              og forbrugere, får et større incitament til at købe disse i stedet
              for varer, der er klimabelastende. Klimaafgiften giver også et
              incitament til at innovere og skabe nye klimavenlige løsninger: De
              kan pludselig være rentable. Fordi prisen er støt stigende, giver
              det også mulighed til alle for at omstille sig - også dem, som i
              dag ikke er særlig grønne.
            </P>
            <P>
              I Danmark bør en klimaafgift indføres på fossile brændsler, cement
              og landbruget - det sikrer en bred dækning. På grund af de
              eksisterende punktafgifter og{' '}
              <FootNote
                title="Effektive veje til drivhusgasreduktion i landbruget"
                url="https://klimaraadet.dk/da/analyser/effektive-veje-til-drivhusgasreduktion-i-landbruget"
                from="Klimarådet"
                date="15. februar 2016"
                img="/about-the-plan/klimaraadet.svg"
              >
                Klimarådets foreslået værktøj
              </FootNote>{' '}
              er selve beskatning ikke nødvendigvis en kompliceret sag.
              Klimaafgiftens pris skal baseres på at Danmark reducerer sine
              udledninger med 70 pct i 2030 ift. 1990, og at Danmark lever op
              til Parisaftalen. Den konkrete pris bør beregnes af Klimarådet.{' '}
              <FootNote
                title="En klimareform, der sikrer de magiske 70 pct."
                url="http://kraka.org/small_great_nation/en_klimareform_der_sikrer_de_magiske_70_pct"
                from="Kraka"
                date="22. februar 2020"
                img="/about-the-plan/kraka.svg"
              >
                Kraka og Deloitte har beregnet, at en afgift på 1250 kroner per
                ton CO2-ækvivalenter vil sandsynligvis være tilstrækkelig til at
                nå 70 pct. målet i 2030.
              </FootNote>
            </P>

            <img
              className="block mx-auto my-8"
              src="/how-it-works/loving.svg"
            />
            <h2 className="text-lg my-6 font-bold">
              En løsning, der sikrer den sociale balance
            </h2>
            <P>
              Udfordringen ved en klimaafgift er, at den kan ramme socialt
              skævt. De svagere stillet borgere har et mindre rådighedsbeløb, og
              den ekstra omkostning har større betydning end hos de mere
              velhavende. Heldigvis findes der en løsning på det.
            </P>
            <P>
              Ved at give en betydelig andel af indtægten tilbage til borgerne
              sørger man for, at afgiften ikke vender den tunge ende nedad.
              Faktisk viser{' '}
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
                img="/about-the-plan/taxfoundation.svg"
              >
                i USA
              </FootNote>
              , at det kan ende med, at de svageste får flere penge i lommen,
              end de gjorde før, fordi deres forbrug af klimabelastende varer er
              overordnet mindre end hos de velhavende. De har fx. færre biler,
              mindre boliger, flyver mindre og generelt et mindre forbrug.
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

            <h2 className="text-lg my-6 font-bold">
              En løsning, hvor virksomheder ikke behøver at flytte udledninger
              og jobs til udlandet
            </h2>
            <P>
              Det er svært at være uenig i, at udledninger, jobs og
              konkurrenceevne ikke skal unødigt flytte uden for vores grænser.
              Det er vigtigt at påpege,at{' '}
              <FootNote
                title="Tougher environmental laws do not hurt export competitiveness – OECD study"
                url="https://www.oecd.org/newsroom/tougher-environmental-laws-do-not-hurt-export-competitiveness.htm"
                from="OECD"
                date="10. marts 2016"
                img="/about-the-plan/oecd.svg"
              >
                OECD i 2016 viste, at strenge miljølove ikke påvirker eksporten
                negativt
              </FootNote>
              . Et nyere studie viser også,{' '}
              <FootNote
                title="Do Carbon Prices Limit Economic Growth? "
                url="https://journals.sagepub.com/doi/full/10.1177/2378023119898326"
                from="Daniel Driscoll, University of California, San Diego"
                date="7. januar 2020"
              >
                at højere klimaafgifter ikke påvirker væksten
              </FootNote>
              . I takt med at flere lande har reduktionsmål, bliver det meget
              usandsynligt, at udflytning af klimabelastende industrier sker.
              Det gælder især i EU, hvor det nye EU-parlament arbejder på at
              lovgive for at reducere hele EUs udledninger med minimum 50 pct. i
              2030, og en klimatold.
            </P>
            <P>
              Der er dog forståelse for, at det kan være svært at formidle
              budskabet til virksomheder. Ligesom{' '}
              <FootNote
                title="SAU alm. del - svar på spm. 192 om kommentar til henvendelsen af 13/12-19
              fra Ungeklimarådet"
                url="https://www.ft.dk/samling/20191/almdel/SAU/spm/192/svar/1624014/index.htm"
                from="Skatteministeren Morten Bødskov"
                date="10. januar 2020"
              >
                skatteministeren Morten Bødskov forklarer i hans svar til
                Skatteudvalget d. 8. januar 2020
              </FootNote>
              , er der to nemme måder at sørge for, at man undgår det: at
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

            <h2 className="text-lg my-6 font-bold">
              Løsningen har allerede mange støtter i Danmark
            </h2>
            <P>
              En variant af den ovenstående løsning er blevet foreslået af{' '}
              <FootNote
                title="Radikale vil have en grøn skattereform, så al forurening koster penge"
                url="https://politiken.dk/indland/politik/art7586970/Radikale-vil-have-en-gr%C3%B8n-skattereform-s%C3%A5-al-forurening-koster-penge"
                from="Politiken"
                date="3. januar 2020"
                img="/about-the-plan/politiken.svg"
              >
                Radikale Venstre
              </FootNote>{' '}
              i januar 2020. I de efterfølgende dage fik forslaget støtte fra{' '}
              <FootNote
                title="Politiken mener: Ja, Østergaard. Det skal være dyrere at skade klimaet"
                url="https://politiken.dk/debat/ledere/art7590141/Ja-%C3%98stergaard.-Det-skal-v%C3%A6re-dyrere-at-skade-klimaet"
                from="Politiken"
                date="8. januar 2020"
                img="/about-the-plan/politiken.svg"
              >
                Politiken
              </FootNote>
              ,{' '}
              <FootNote
                title="Grøn skat"
                url="https://ekstrabladet.dk/nyheder/lederen/groen-skat/7943974"
                from="Ekstra Bladet"
                date="6. januar 2020"
                img="/about-the-plan/ekstrabladet.svg"
              >
                Ekstra Bladet
              </FootNote>
              ,{' '}
              <FootNote
                title="Børsen mener: Den nødvendige grønne skattereform"
                url="https://borsen.dk/nyheder/opinion/boersen-mener-den-noedvendige-groenne-skattereform-4pmlg"
                from="Børsen"
                date="6. januar 2020"
                img="/about-the-plan/boersen.svg"
              >
                Børsen
              </FootNote>
              ,{' '}
              <FootNote
                title="Ja tak til en grøn skattereform, der belønner den klimabevidste forbruger"
                url="https://www.information.dk/indland/leder/2020/01/ja-tak-groen-skattereform-beloenner-klimabevidste-forbruger"
                from="Information"
                date="7. januar 2020"
              >
                Information
              </FootNote>
              , og{' '}
              <FootNote
                title="Fint med grønne skatter – ikke højere skatter, Morten Østergaard"
                url="https://www.berlingske.dk/ledere/fint-med-groenne-skatter-ikke-hoejere-skatter-morten-oestergaard"
                from="Berlingske"
                date="7. januar 2020"
                img="/about-the-plan/berlingske.svg"
              >
                Berlingske
              </FootNote>
              . Det fik også støtte fra{' '}
              <FootNote
                title="Blå og røde økonomer er enige: CO2-afgift vil være godt redskab"
                url="https://borsen.dk/nyheder/politik/blaa-og-roede-oekonomer-er-enige-co2-afgift-vil-vaere-godt-redskab-8rv6y"
                from="Børsen"
                date="8. januar 2020"
                img="/about-the-plan/boersen.svg"
              >
                CEPOS og AE-rådet
              </FootNote>
              , fra{' '}
              <FootNote
                title="Afgifter - den skarpeste kniv i klimaskuffen"
                url="http://kraka.org/debatindlaeg/afgifter_den_skarpeste_kniv_i_klimaskuffen"
                from="Kraka"
                date="27. november 2019"
                img="/about-the-plan/kraka.svg"
              >
                Kraka tidligere
              </FootNote>
              , og fra{' '}
              <FootNote
                title="Økonomer i kor: Danmark skal have en grøn skattereform. Og nej, det behøver ikke øge uligheden"
                url="https://www.information.dk/indland/2020/01/oekonomer-kor-danmark-groen-skattereform-nej-behoever-oege-uligheden"
                from="Information"
                date="29. januar 2020"
              >
                nogle af de meste prominente økonomer i Danmark
              </FootNote>
              .{' '}
              <FootNote
                title="En klimareform, der sikrer de magiske 70 pct."
                url="http://kraka.org/small_great_nation/en_klimareform_der_sikrer_de_magiske_70_pct"
                from="Kraka"
                date="22. februar 2020"
                img="/about-the-plan/kraka.svg"
              >
                En gennemgribende rapport fra Kraka og Deloitte udgivet i
                februar viser, hvordan en dansk klimaafgift kan skrues sammen
                for at opnå målene
              </FootNote>
              .
            </P>
            <P>
              Selvom klimaafgifter ikke kan levere 70 pct. reduktion i
              udledninger alene, så kan de 70 pct. ikke realistisk nås uden. De
              ovenstående forslag sørger for, at klimaafgifter ikke svækker den
              danske konkurrenceevne, eller at den tunge ende vender nedad.
            </P>
          </FootNoteContainer>
        </div>
      </section>
      <section className="w-full max-w-4xl mx-auto py-16 sm:pb-32 px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl my-6 font-bold">Spørgsmål og svar</h2>
          <Collapse
            accordion
            className="bg-transparent border-0 text-green-900"
            expandIcon={({ isActive }) =>
              isActive ? (
                <FaChevronCircleUp className="mr-4 flex-none text-green-500 text-2xl" />
              ) : (
                <FaChevronCircleDown className="mr-4 flex-none text-green-500 text-2xl" />
              )
            }
          >
            {faq.map(([question, answer]) => (
              <Panel
                key={question}
                header={question}
                headerClass="flex items-center py-4 cursor-pointer"
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
