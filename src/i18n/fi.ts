import type { Content } from './types';

export const fi: Content = {
  lang: 'fi',
  routes: { home: '/', approach: '/nain-tyoskentelemme/', about: '/tiimi/', contact: '/tiimi/#yhteystiedot' },
  ui: {
    skip: 'Siirry sisältöön',
    navLabel: 'Päävalikko',
    nav: { home: 'Etusivu', approach: 'Näin työskentelemme', about: 'Meistä', contact: 'Yhteystiedot' },
    book: 'Varaa maksuton kartoituspuhelu',
    footer: '© 2026 Enlightened Bits · Josafatinkatu 9, 00510 Helsinki',
    footerNote: 'Tekoäly omilla ehdoilla',
  },

  home: {
    title: 'Enlightened Bits – Tekoälyä omilla ehdoilla',
    description:
      'Tekoälykonsultointi yrityksille, järjestöille ja julkiselle sektorille. Autamme päättämään, mihin tekoälyä kannattaa käyttää, ja rakennamme sen niin, että data ja päätösvalta pysyvät teillä.',
    heroLines: ['Tekoälyä', '<em>omilla ehdoilla.</em>'],
    caption: 'Ensin tavoitteet.\nSitten tekoäly.',
    lede:
      'Autamme organisaatioita päättämään, mihin tekoälyä kannattaa käyttää ja mihin ei. Sitten rakennamme sen niin, että data ja päätösvalta pysyvät teillä.',
    secondaryAction: 'Näin työskentelemme',
    bandLeft: 'Tekoälykonsultointi yrityksille ja yhteisöille',
    beliefsEyebrow: 'Mihin uskomme',
    beliefsTitle: 'Tekoäly on keino. <em>Ihminen</em> on tarkoitus.',
    beliefs: [
      {
        title: 'Aikaa ajattelulle',
        text: 'Tekoäly hoitaa rutiinit nopeammin. Vapautuva aika kannattaa käyttää siihen, mitä kone ei tee puolestamme: ajatteluun, kohtaamisiin ja parempiin päätöksiin.',
      },
      {
        title: 'Pelko pitää ymmärtää',
        text: 'Tekoäly herättää myös pelkoa: työn, oikeudenmukaisuuden ja hallinnan menettämisen puolesta. Pelkoa ei kuitata. Se kuunnellaan, koska siinä on usein viisautta.',
      },
      {
        title: 'Parempi yhteiskunta kaikille',
        text: 'Tekoälyn hyödyt eivät saa jäädä harvoille. Kun yritykset, järjestöt ja julkinen sektori ottavat sen käyttöön omien arvojensa mukaan, se voi auttaa rakentamaan yhteiskuntaa, joka toimii paremmin kaikille.',
      },
    ],
    principlesTitle: 'Miksi me',
    principlesLead: 'Tekoäly on <em>väline</em>. Suunnan päätätte te.',
    principles: [
      {
        title: 'Ensin miksi, sitten millä',
        text: 'Aloitamme arvoista ja tavoitteista. Joskus paras suosituksemme on jättää tekoäly pois.',
      },
      {
        title: 'Neuvomme ja rakennamme',
        text: 'Emme jätä teitä PowerPoint-esityksen kanssa. Toteutamme sen, mistä sovitaan.',
      },
      {
        title: 'Teidän palvelimellanne',
        text: 'Tarvittaessa avoimet mallit teidän hallitsemallanne infralla. Tieto ei lähde ulkomaisen pilvipalvelun käsiteltäväksi.',
      },
    ],
    questionsEyebrow: 'Kuulostaako tutulta?',
    questionsTitle: 'Tekoäly on jo arjessanne, suunnitelma vielä puuttuu.',
    questions: [
      'Osa työyhteisöstä käyttää tekoälyä omin päin, ja osa ei uskalla koskea siihen.',
      'Hallitus kysyy tekoälysuunnitelmaa, eikä kukaan tiedä, mistä aloittaa.',
      'Kokeilu tehtiin, mutta vastaukset jäivät yleisiksi, koska kone ei tunne teitä.',
      'Arkaluonteista tietoa ei voi viedä ulkomaiseen pilveen, joten koko asia tuntuu mahdottomalta.',
    ],
    questionsNote:
      'Ette ole yksin. <a href="https://stat.fi/julkaisu/cm1hnps701dbm07w59uo0jw6u" rel="noopener">Tilastokeskuksen mukaan</a> 38 % vähintään kymmenen hengen yrityksistä käytti tekoälyä vuonna 2025, mutta vain 15 % oli kirjannut sille yhteiset toimintatavat. <a href="https://tieke.fi/kartoitimme-tekoalyn-vastuullinen-kayttoonotto-ja-somen-murros-pohdituttavat-jarjestoissa-arki-on-tasapainoilua-digitalisaation-kanssa/" rel="noopener">TIEKEn kartoituksessa</a> 37 % järjestöistä ei vielä käyttänyt tekoälyä lainkaan.',
    processTitle: 'Neljä vaihetta. Aloitetaan siitä, missä olette nyt.',
    processLink: 'Katso palvelut tarkemmin',
    audienceTitle: 'Kenen kanssa teemme töitä',
    audienceLead: 'Organisaatioille, joille <em>arvot</em> eivät ole koriste.',
    audience: [
      { title: 'Yritykset', text: 'Kun tekoälyn pitää tuoda tulosta ilman, että se syö sitä, miksi olette olemassa.' },
      { title: 'Järjestöt ja säätiöt', text: 'Kun resurssit ovat rajalliset ja arvot keskiössä.' },
      { title: 'Kunnat ja julkiset toimijat', text: 'Kun luottamus, tietosuoja ja yhdenvertaisuus eivät jousta.' },
      { title: 'Oppilaitokset', text: 'Kun tekoäly muuttaa sekä opettamista että oppimista.' },
    ],
    whyTitle: 'Tunnemme tekniikan, joten voimme puhua siitä rehellisesti.',
    whyText: [
      'Olemme rakentaneet tekoälyagentteja ja koneoppimisjärjestelmiä. Tiedämme, mihin nykyiset mallit pystyvät ja mihin eivät.',
      'Siksi emme myy hypeä. Neuvomme ja rakennamme itse, toimimme läpinäkyvästi, ja joskus paras suosituksemme on jättää tekoäly pois.',
    ],
    ctaTitle: 'Aloitetaan maksuttomalla kartoituspuhelulla. Kertokaa, mikä teille on tärkeää, niin mietitään yhdessä, mistä kannattaa aloittaa.',
  },

  offer: {
    until: '2026-10-31',
    eyebrow: 'Syys–lokakuun tarjous yleishyödyllisille',
    title: 'Kartoitus <em>puoleen hintaan</em> yleishyödyllisille yhteisöille.',
    text: 'Järjestöt, säätiöt ja muut yleishyödylliset yhteisöt saavat Kartoituksesta 50 %:n alennuksen, kun tilaatte sen 31.10.2026 mennessä. Käymme kanssanne läpi, mihin aika oikeasti kuluu, missä tekoäly voisi vapauttaa sitä tärkeämpään ja missä se ei kuulu kuvaan.',
    note: 'Aloitetaan maksuttomalla kartoituspuhelulla. Itse työ voidaan tehdä myös marraskuussa tai myöhemmin.',
  },

  process: [
    {
      eyebrow: 'Vaihe 01',
      title: 'Suunta',
      short: 'Työpaja, jossa organisaatio muotoilee omat arvonsa ja tavoitteensa tekoälyn suhteen.',
      body: 'Kokoamme yhteen johdon, työntekijät ja tarvittaessa jäsenet tai vapaaehtoiset. Käymme läpi, mitä tekoäly on ja mitä se ei ole. Sen jälkeen keskustelemme siitä, mitä te arvostatte, mitä tavoittelette ja mitä ette halua luovuttaa koneelle. Otamme puheeksi myös ne huolet ja pelot, joita tekoäly herättää.',
      outcome: 'Organisaationne omat tekoälyperiaatteet ja kolme ensimmäistä käyttökohdetta: lyhyt, selkokielinen ja yhdessä tehty.',
      product: 'Suuntatyöpaja',
      price: '1 500 € + alv',
    },
    {
      eyebrow: 'Vaihe 02',
      title: 'Kartoitus',
      short: 'Arjen työn läpikäynti: missä on todellista hyötyä ja missä rajat kulkevat.',
      body: 'Käymme läpi, mihin aika teillä oikeasti kuluu. Tunnistamme tehtävät, joissa tekoäly voisi vapauttaa aikaa tärkeämpään, ja ne, joissa se ei kuulu kuvaan. Samalla arvioimme tietosuojan, riskit ja kustannukset.',
      offer: '−50 % yleishyödyllisille 31.10. asti',
      outcome: 'Priorisoitu lista käyttökohteista, niiden ehdot ja rehellinen arvio hyödyistä.',
    },
    {
      eyebrow: 'Vaihe 03',
      title: 'Kokeilu',
      short: 'Yksi tai kaksi pientä pilottia oikeassa työssä, oikeiden ihmisten kanssa.',
      body: 'Rakennamme kokeilut niin, että data ja päätösvalta pysyvät teillä. Tarvittaessa käytämme avoimen lähdekoodin malleja omalla infralla. Mittaamme sitä, mitä sovimme suuntavaiheessa tärkeäksi.',
      outcome: 'Toimiva kokeilu, kokemukset käyttäjiltä ja päätöksen pohja: jatketaanko, muutetaanko vai lopetetaanko.',
    },
    {
      eyebrow: 'Vaihe 04',
      title: 'Käyttöönotto',
      short: 'Osaaminen, käytännöt ja seuranta, jotta muutos kestää.',
      body: 'Koulutamme ihmiset käyttämään työkaluja harkiten ja kirjaamme yhteiset pelisäännöt. Sovimme myös, miten periaatteita tarkastellaan uudelleen, kun teknologia ja tarpeet muuttuvat.',
      outcome: 'Osaava työyhteisö, sovitut käytännöt ja kevyt tapa arvioida suuntaa jatkossa.',
    },
  ],

  context: {
    eyebrow: 'Organisaation konteksti',
    title: 'Kone ei tunne <em>teitä</em>. Vielä.',
    lede: 'Tekoäly ei tiedä, mitä organisaationne tavoittelee, miksi, eikä millä ehdoilla työ on hyvää. Kartoitamme sen kanssanne ja muutamme muotoon, jonka avulla kone voi työskennellä kohti haluamaanne lopputulosta.',
    bridgeTitle: 'Silta tavoitteiden ja teknologian välillä',
    bridge: [
      { label: 'Mitä', title: 'Mitä haluatte saada aikaan', text: 'Tehtävät, työnkulut ja lopputulokset, joilla on teille oikeasti merkitystä.' },
      { label: 'Miksi', title: 'Miksi se on tärkeää', text: 'Tavoitteet, arvot ja se, mistä tunnistatte onnistumisen.' },
      { label: 'Konteksti', title: 'Miten kone sen ymmärtää', text: 'Hiljainen tieto kirjoitetaan auki: ohjeiksi, lähteiksi, esimerkeiksi ja rajoiksi, joita kone osaa käyttää.' },
      { label: 'Lopputulos', title: 'Kone työskentelee teidän suuntaanne', text: 'Tuloksia arvioidaan teidän mittareillanne, ja kontekstia tarkennetaan niiden perusteella.' },
    ],
    includesTitle: 'Mitä konteksti sisältää',
    includes: [
      { title: 'Tavoitteet ja mittarit', text: 'Mitä tavoitellaan ja mistä onnistumisen tunnistaa.' },
      { title: 'Arvot ja rajat', text: 'Mitä ei tehdä, mikä vaatii aina ihmisen ja kenen ääni pitää kuulua.' },
      { title: 'Tieto ja lähteet', text: 'Mihin aineistoon kone saa nojata ja mihin ei.' },
      { title: 'Työnkulut', text: 'Miten työ oikeasti etenee ja kuka tekee mitä.' },
      { title: 'Esimerkit', text: 'Millainen on hyvä lopputulos, teidän kielellänne ja teidän äänellänne.' },
      { title: 'Arviointi', text: 'Miten tuloksia tarkistetaan ja miten kontekstia parannetaan ajan myötä.' },
    ],
    outcomeLabel: 'Lopputulos',
    outcome: 'Organisaationne konteksti: selkokielinen, teidän omistamanne kokonaisuus, joka toimii minkä tahansa tekoälymallin kanssa, myös omalla palvelimellanne.',
    closer: 'Mallit vaihtuvat. <em>Konteksti</em> jää teille.',
    fit: 'Voidaan tehdä osana kartoitusta ja kokeilua tai omana palvelunaan.',
    homeLink: 'Lue lisää organisaation kontekstista',
    anchor: 'konteksti',
  },

  approach: {
    title: 'Näin työskentelemme – Enlightened Bits',
    description:
      'Neljä vaihetta arvoista käytäntöön: suunta, kartoitus, kokeilu ja käyttöönotto. Voitte aloittaa mistä vaiheesta tahansa.',
    heroLines: ['Arvoista käytäntöön,', '<em>teidän tahdissanne.</em>'],
    lede:
      'Osa organisaatioista vasta pohtii suuntaa, osa on jo kokeillut ja haluaa viedä tekoälyn arkeen. Siksi voitte aloittaa mistä vaiheesta tahansa, ja jokainen vaihe tuottaa jotain, mikä jää teille, vaikka jatkaisitte omin voimin. Useimmat aloittavat maksuttomalla kartoituspuhelulla ja suuntatyöpajalla.',
    outcomeLabel: 'Lopputulos',
    faqTitle: 'Usein kysyttyä',
    faq: [
      {
        q: 'Mitä yhteistyö maksaa?',
        a: 'Ensimmäinen kartoituspuhelu on maksuton. Suuntatyöpaja maksaa 1 500 € + alv. Muut palvelut hinnoitellaan tarpeen mukaan kartoituksen jälkeen.',
      },
      {
        q: 'Pitääkö meidän jo käyttää tekoälyä?',
        a: 'Ei. Moni aloittaa tilanteesta, jossa osa käyttää työkaluja omin päin ja osa ei ollenkaan. Juuri silloin yhteinen keskustelu on arvokkainta.',
      },
      {
        q: 'Suosittelette varmaan aina tekoälyä?',
        a: 'Emme. Tavoite on löytää teille sopiva suhde tekoälyyn. Joskus paras lopputulos on perusteltu päätös jättää jokin asia ihmisten tehtäväksi.',
      },
      {
        q: 'Myyttekö jonkin yhtiön tuotteita tai lisenssejä?',
        a: 'Emme. Olemme riippumattomia, emmekä saa välityspalkkioita. Suosimme avointa lähdekoodia, mutta suosittelemme sitä, mikä sopii teidän tarpeisiinne.',
      },
      {
        q: 'Mitä tarkoittaa tekoäly omalla infralla?',
        a: 'Tekoälymalli toimii teidän omalla tai hallitsemallanne palvelimella, jolloin tiedot eivät lähde ulkomaisen pilvipalvelun käsiteltäviksi. Tämä on tärkeää, kun käsittelette arkaluonteista tietoa.',
      },
      {
        q: 'Voiko palveluista ostaa vain osan?',
        a: 'Voi. Moni aloittaa pelkällä suuntatyöpajalla (1 500 € + alv) ja päättää sen jälkeen, jatketaanko yhdessä vai omin voimin.',
      },
    ],
  },

  about: {
    title: 'Meistä – Enlightened Bits, Helsinki',
    description: 'Enlightened Bits on helsinkiläinen tekoälykonsultti. Autamme yrityksiä ja yhteisöjä käyttämään tekoälyä omilla ehdoillaan.',
    eyebrow: 'Meistä',
    heroTitle: 'Ihmiset Enlightened Bitsin takana.',
    lede:
      'Olemme helsinkiläinen tekoälykonsultti, ja taustamme on Aalto-yliopistossa. Uskomme, että tekoälyn hyödyt kuuluvat kaikille, kunhan jokainen organisaatio saa itse päättää, millä ehdoilla sitä käyttää.',
    photoAlt: 'Maximilian ja Juhani juoksemassa Helsingin maratonia sateessa.',
    people: [
      {
        name: 'Maximilian',
        fullName: 'Maximilian Rehn',
        role: 'Perustaja',
        degree: 'DI, Information Networks, Aalto-yliopisto',
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
      'Palasimme yhä uudelleen samaan ajatukseen: Suomessa on huippuosaamista, ja meillä on kaikki edellytykset käyttää tekoälyä viisaasti.',
      'Aloitimme rakentamalla paikallista tekoälyä organisaatioiden omille palvelimille. Työssä huomasimme, että vaikein kysymys on harvoin tekninen. Vaikeinta on päättää yhdessä, mihin tekoälyä halutaan ja mihin ei.',
      'Siksi aloitamme nykyään arvoista ja tavoitteista. Tekniikka seuraa perässä, ja sen osaamme hyvin.',
    ],
    storyAction: 'Tehdään yhdessä',
    contactTitle: 'Yhteystiedot',
    visitLabel: 'Käyntiosoite',
    address: ['Enlightened Bits', 'Josafatinkatu 9 1h 64', '00510 Helsinki'],
    mapLabel: 'Näytä kartalla',
    reachLabel: 'Sähköposti ja puhelin',
    visitNote: 'Toimistomme on Helsingissä. Sovithan käynnistä etukäteen sähköpostitse.',
  },
};
