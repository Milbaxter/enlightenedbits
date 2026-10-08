import type { Content } from './types';

export const fi: Content = {
  lang: 'fi',
  routes: { home: '/', approach: '/nain-tyoskentelemme/', about: '/tiimi/', contact: '/tiimi/#yhteystiedot' },
  ui: {
    skip: 'Siirry sisältöön',
    navLabel: 'Päävalikko',
    nav: { home: 'Etusivu', approach: 'Näin työskentelemme', about: 'Meistä', contact: 'Yhteystiedot' },
    book: 'Soita meille',
    bookHref: 'tel:+358504941660',
    footer: '© 2026 Enlightened Bits · Josafatinkatu 9, 00510 Helsinki',
    footerNote: 'Tekoälyä omilla ehdoilla',
  },

  home: {
    title: 'Enlightened Bits – Tekoälyä omilla ehdoilla',
    description:
      'Tekoälykonsultointia yrityksille, järjestöille ja julkiselle sektorille. Autamme organisaatioita käyttämään tekoälyä taitavammin: määrittelemään ongelman, antamaan tekoälylle hyvän kontekstin ja mittaamaan todellisia tuloksia.',
    heroLines: ['Aikamme voimakkain työkalu.', '<em>Osaatteko käyttää sitä?</em>'],
    caption: 'Ensin tavoitteet.\nSitten tekoäly.',
    lede:
      'Autamme organisaatioita käyttämään tekoälyä taitavasti: selkeät tavoitteet, hyvä konteksti ja tulokset, jotka voi mitata omassa toiminnassa.',
    secondaryAction: 'Näin työskentelemme',
    beliefsEyebrow: 'Mihin uskomme',
    beliefsTitle: 'Määrittele ongelma hyvin. Sitten <em>tekoäly</em> voi tehdä työn.',
    beliefs: [
      {
        title: 'Tärkein taito on määritellä ongelma',
        text: 'Hyvin määritellyllä ongelmalla on selkeä tavoite ja testi onnistumiselle. Testin avulla tekoäly voi toistaa kierrosta: idea, toteutus, testi, uudestaan. Kierrosta voi ajaa yksi agentti tai 10 000 agenttia. Tarvitaan vain lisää laskentatehoa. Laskentateho halpenee ja tekoäly paranee joka vuosi, joten tällä menetelmällä ei ole ylärajaa. Jos ongelmaa ei osaa määritellä, ihmisen on pysyttävä mukana kierroksessa. Silloin ihminen on pullonkaula.',
      },
      {
        title: 'Konteksti on uusi kilpailuetu',
        text: 'Hyvä tieto omasta organisaatiosta antaa tekoälylle enemmän vipuvoimaa. Pian kaikilla on käytössään huipputason tekoäly. Silloin ero syntyy siitä, kenellä on parempi konteksti omasta työstään.',
      },
      {
        title: 'Mittaa tuloksia, älä demoja',
        text: 'Paras mittari on todellinen parannus toiminnassanne. Lisäksi käytämme tunnettuja vertailutestejä.',
      },
      {
        title: 'Ajattele ennen kuin rakennat',
        text: 'Puhu asiakkaiden kanssa ja ymmärrä ongelma ensin. Suurin osa ihmisen työstä kuuluu alkuun, jossa päätetään, mitä tehdään, ja loppuun, jossa testataan, onko tulos sitä, mitä haluttiin. Tekoäly tekee välissä olevan työn nopeasti.',
      },
      {
        title: 'Agenttiharness on ihmiskunnan suurin vipuvoima',
        text: 'Mallin ympärille rakennetut työkalut ja kierrokset, esimerkiksi Claude Code, voivat parantaa tuloksia enemmän kuin parempi malli. Siksi käyttäjän taidolla on suuri merkitys. Kun opit käyttämään näitä työkaluja hyvin, voit tehdä 10 tai jopa 1000 kertaa enemmän.',
      },
    ],
    principlesTitle: 'Miten autamme',
    principlesLead: 'Autamme organisaatiotanne saamaan tekoälystä <em>todellisia tuloksia</em>.',
    principles: [
      {
        title: 'Ongelman määrittely',
        text: 'Kirjoitamme yhdessä selkeät tavoitteet ja testit onnistumiselle. Silloin tekoäly voi tehdä työn, ja näette, toimiiko se.',
      },
      {
        title: 'Kontekstin rakentaminen',
        text: 'Kokoamme organisaationne tiedon muotoon, jota tekoäly osaa käyttää. Se on teidän omaanne ja toimii minkä tahansa mallin kanssa.',
      },
      {
        title: 'Rakentaminen ja mittaaminen',
        text: 'Rakennamme agentit ja työkalut. Mittaamme tuloksia oikeassa toiminnassanne, emme demossa.',
      },
      {
        title: 'Henkilöstön koulutus',
        text: 'Opetamme tiimillenne uudet työkalut. Taitava käyttäjä saa samasta tekoälystä paljon enemmän irti.',
      },
    ],
    processTitle: 'Kolme tapaa tehdä työtä kanssamme. Aloitetaan siitä, missä olette nyt.',
    processLink: 'Lue palveluista tarkemmin',
    audienceTitle: '',
    audienceLead: '',
    audience: [],
    whyTitle: 'Vahvuutemme: rakennamme näillä työkaluilla joka päivä.',
    whyText: [
      'Rakennamme tekoälyagentteja, harnesseja ja koneoppimisjärjestelmiä. Tiedämme, mihin nykyiset mallit pystyvät ja mihin eivät.',
      'Emme myy hypeä. Neuvomme, rakennamme ja mittaamme. Tarvittaessa käytämme avoimia malleja palvelimilla, joita hallitsette itse. Joskus paras neuvomme on jättää tekoäly pois.',
    ],
    ctaTitle: 'Soita tai lähetä sähköpostia, niin jutellaan. Ensimmäinen keskustelu on maksuton. Kerro, mikä teillä on tärkeää, niin mietitään yhdessä, mistä kannattaa lähteä liikkeelle.',
  },

  offer: {
    until: '2026-10-31',
    eyebrow: 'Syksyn tarjous yleishyödyllisille',
    title: 'Kartoitus <em>puoleen hintaan</em> yleishyödyllisille yhteisöille.',
    text: 'Välitämme hyvästä vaikutuksesta. Siksi järjestöt, säätiöt ja muut yleishyödylliset yhteisöt saavat Kartoituksesta 50 %:n alennuksen, kun tilaus tehdään viimeistään 31.10.2026. Selvitämme yhdessä, missä tekoäly voi vapauttaa aikaa teidän tehtävällenne ja missä sille ei ole paikkaa.',
    note: 'Ensimmäinen askel on maksuton kartoituspuhelu. Itse työn voi ajoittaa myös marraskuulle tai myöhemmäksi.',
  },

  process: [
    {
      eyebrow: 'Palvelu 01',
      title: 'Työpaja',
      short: 'Ohjattu työpaja. Opitte uusimmat tekoälytyökalut ja päätätte yhdessä, miten organisaationne haluaa käyttää tekoälyä.',
      body: 'Kokoamme yhteen johdon ja henkilöstön. Näytämme uusimmat tekoälytyökalut käytännössä, ja kokeilette niitä itse. Sitten keskustelemme siitä, miten haluatte käyttää tekoälyä, mitä haluatte pitää ihmisten käsissä ja mikä teitä huolettaa.',
      outcome: 'Yhteinen ymmärrys siitä, mihin tekoäly pystyy tänään, omat tekoälyperiaatteet ja ensimmäiset ideat käyttökohteiksi.',
    },
    {
      eyebrow: 'Palvelu 02',
      title: 'Kartoitus',
      short: 'Kartoitamme organisaationne ja löydämme kohteet, joissa tekoälystä saa hyötyä helpoimmin.',
      body: 'Selvitämme, mihin aika ja raha oikeasti kuluvat. Etsimme tehtävät, joissa tekoäly antaa eniten hyötyä pienimmällä vaivalla, ja tehtävät, joihin se ei sovi. Jokaiselle tehtävälle määrittelemme selkeän tavoitteen ja testin onnistumiselle. Arvioimme myös tietosuojan, riskit ja kustannukset.',
      offer: '−50 % yleishyödyllisille 31.10. asti',
      outcome: 'Tekoälyn käyttökohteet tärkeysjärjestyksessä. Jokaisella on tavoite, testi onnistumiselle ja rehellinen arvio hyödystä.',
    },
    {
      eyebrow: 'Palvelu 03',
      title: 'Rakentaminen',
      short: 'Prototyypistä valmiiseen tuotantojärjestelmään. Rakennamme sen ja otamme sen käyttöön.',
      body: 'Aloitamme nopealla prototyypillä ja testaamme sen oikeiden ihmisten ja oikean datan kanssa. Kun se toimii, rakennamme siitä kokonaisen järjestelmän ja viemme sen tuotantoon. Tarvittaessa käytämme avoimia malleja palvelimilla, joita hallitsette itse. Mittaamme tuloksia oikeassa toiminnassanne, emme demossa.',
      outcome: 'Toimiva järjestelmä tuotannossa, sovittuja tavoitteita vasten mitattuna, ja tiimi, joka osaa käyttää sitä.',
    },
  ],

  context: {
    eyebrow: 'Organisaation konteksti',
    title: 'Tekoäly ei tunne <em>teitä</em>.',
    lede: 'Tekoäly ei tiedä, mihin organisaationne pyrkii, miksi, tai millaista on hyvä työ juuri teillä. Selvitämme tämän yhdessä ja kirjoitamme sen muotoon, jonka avulla tekoäly osaa tehdä työtä oikeaan suuntaan.',
    bridgeTitle: 'Miten tavoitteista tulee tekoälylle ohjeita',
    bridge: [
      { label: 'Mitä', title: 'Mitä halutaan saada aikaan', text: 'Tehtävät, työnkulut ja lopputulokset, joilla on oikeasti merkitystä.' },
      { label: 'Miksi', title: 'Miksi se on tärkeää', text: 'Tavoitteet, arvot ja se, mistä onnistumisen tunnistaa.' },
      { label: 'Konteksti', title: 'Miten tekoäly sen ymmärtää', text: 'Hiljainen tieto kirjoitetaan auki ohjeiksi, lähteiksi, esimerkeiksi ja rajoiksi, joita tekoäly osaa käyttää.' },
      { label: 'Lopputulos', title: 'Tekoäly tekee työtä oikeaan suuntaan', text: 'Tuloksia arvioidaan omilla mittareillanne, ja kontekstia tarkennetaan niiden perusteella.' },
    ],
    includesTitle: 'Mitä konteksti sisältää',
    includes: [
      { title: 'Tavoitteet ja mittarit', text: 'Mihin pyritään ja mistä onnistumisen tunnistaa.' },
      { title: 'Arvot ja rajat', text: 'Mitä ei tehdä, missä tarvitaan aina ihminen ja keitä pitää kuulla.' },
      { title: 'Tieto ja lähteet', text: 'Mihin aineistoon tekoäly saa nojata ja mihin ei.' },
      { title: 'Työnkulut', text: 'Miten työ oikeasti etenee ja kuka tekee mitäkin.' },
      { title: 'Esimerkit', text: 'Millainen on hyvä lopputulos, omalla kielellänne ja omalla äänellänne.' },
      { title: 'Arviointi', text: 'Miten tuloksia tarkistetaan ja miten kontekstia parannetaan ajan mittaan.' },
    ],
    outcomeLabel: 'Lopputulos',
    outcome: 'Organisaation oma konteksti: selkeä kokonaisuus, jonka omistatte itse ja joka toimii minkä tahansa tekoälymallin kanssa, myös omalla palvelimellanne.',
    closer: 'Mallit vaihtuvat. <em>Konteksti</em> pysyy.',
    fit: 'Voidaan tehdä osana kartoitusta ja rakentamista tai erillisenä palveluna.',
    homeLink: 'Lue lisää organisaation kontekstista',
    anchor: 'konteksti',
  },

  approach: {
    title: 'Näin työskentelemme – Enlightened Bits',
    description:
      'Kolme palvelua: työpaja, organisaation kartoitus ja rakentaminen prototyypistä tuotantoon. Voitte aloittaa mistä tahansa niistä.',
    heroLines: ['Arvoista käytäntöön,', '<em>omaan tahtiinne.</em>'],
    lede:
      'Osa organisaatioista on vasta aloittamassa tekoälyn kanssa. Osalla on jo kokeilu, jonka he haluavat viedä tuotantoon. Siksi voitte aloittaa mistä palvelusta tahansa. Jokaisesta jää käteen jotain omaa, vaikka jatkaisitte sen jälkeen itse. Useimmat aloittavat maksuttomalla puhelulla ja työpajalla.',
    outcomeLabel: 'Lopputulos',
    faqTitle: 'Usein kysyttyä',
    faq: [
      {
        q: 'Mitä yhteistyö maksaa?',
        a: 'Ensimmäinen kartoituspuhelu on maksuton. Palvelut hinnoitellaan tarpeen mukaan kartoituspuhelun jälkeen.',
      },
      {
        q: 'Pitääkö meidän jo käyttää tekoälyä?',
        a: 'Ei tarvitse. Usein osa käyttää tekoälyä omin päin ja osa ei ollenkaan. Silloin yhteisestä keskustelusta on eniten hyötyä.',
      },
      {
        q: 'Suosittelette varmaan aina tekoälyä?',
        a: 'Emme. Tavoitteena on löytää tekoälylle oikea paikka juuri teillä. Joskus paras ratkaisu on päättää perustellusti, että jokin työ pysyy ihmisillä.',
      },
      {
        q: 'Myyttekö jonkin yhtiön tuotteita tai lisenssejä?',
        a: 'Emme. Olemme riippumattomia emmekä ota välityspalkkioita. Suosimme avointa lähdekoodia, mutta suosittelemme aina sitä, mikä sopii tarpeisiinne parhaiten.',
      },
      {
        q: 'Mitä tarkoittaa tekoäly omalla palvelimella?',
        a: 'Tekoälymalli toimii palvelimella, jonka omistatte tai jota hallitsette itse. Silloin tiedot eivät lähde ulkomaiseen pilvipalveluun. Tämä on tärkeää, jos käsittelette arkaluonteisia tietoja.',
      },
      {
        q: 'Voiko palveluista ostaa vain osan?',
        a: 'Voi. Moni aloittaa pelkällä työpajalla ja päättää sen jälkeen, jatketaanko yhdessä vai itse.',
      },
    ],
  },

  about: {
    title: 'Meistä – Enlightened Bits, Helsinki',
    description: 'Enlightened Bits on helsinkiläinen tekoälykonsultointiyritys. Autamme yrityksiä ja yhteisöjä käyttämään tekoälyä omilla ehdoillaan.',
    eyebrow: 'Meistä',
    heroTitle: 'Keitä olemme?',
    lede:
      'Enlightened Bits on helsinkiläinen tekoälykonsultointiyritys, ja taustamme on Aalto-yliopistossa. Uskomme, että tekoälyn hyödyt kuuluvat kaikille, kunhan jokainen organisaatio saa itse päättää, millä ehdoilla sitä käyttää.',
    photoAlt: 'Maximilian ja Juhani juoksevat Helsinki City Marathonia sateessa.',
    people: [
      {
        name: 'Maximilian',
        fullName: 'Maximilian Rehn',
        role: 'Perustaja',
        degree: 'DI, informaatioverkostot, Aalto-yliopisto',
        bio: '',
        email: 'maximilian@enlightenedbits.com',
        phone: '+358 50 494 1660',
      },
      {
        name: 'Juhani',
        fullName: 'Juhani Lindh',
        role: 'Perustaja',
        degree: 'DI, Complex Systems, Aalto-yliopisto',
        bio: '',
        email: 'juhani@enlightenedbits.com',
        phone: '+358 45 189 4225',
      },
    ],
    storyTitle: 'Miten tähän päädyttiin',
    story: [
      'Suomessa on huippuosaamista ja kaikki edellytykset käyttää tekoälyä viisaasti. Tähän ajatukseen palasimme yhä uudelleen.',
      'Aloitimme rakentamalla tekoälyratkaisuja organisaatioiden omille palvelimille. Pian huomasimme, että vaikein kysymys on harvoin tekninen. Vaikeinta on sopia yhdessä, mihin tekoälyä halutaan käyttää ja mihin ei.',
      'Siksi aloitamme nykyään arvoista ja tavoitteista. Tekniikka tulee vasta sen jälkeen, ja sen hallitsemme hyvin.',
    ],
    storyAction: 'Ota yhteyttä',
    contactTitle: 'Yhteystiedot',
    visitLabel: 'Käyntiosoite',
    address: ['Enlightened Bits', 'Josafatinkatu 9 LH 64', '00510 Helsinki'],
    mapLabel: 'Näytä kartalla',
    reachLabel: 'Sähköposti ja puhelin',
    visitNote: 'Toimistomme on Helsingissä. Sovithan käynnistä etukäteen sähköpostitse.',
  },
};
