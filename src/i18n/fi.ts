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
    footerNote: 'Tekoälyä omilla ehdoilla',
  },

  home: {
    title: 'Enlightened Bits – Tekoälyä omilla ehdoilla',
    description:
      'Tekoälykonsultointia yrityksille, järjestöille ja julkiselle sektorille. Autamme päättämään, missä tekoälystä on hyötyä, ja otamme sen käyttöön niin, että tiedot ja päätösvalta pysyvät omissa käsissänne.',
    heroLines: ['Tekoälyä', '<em>omilla ehdoilla.</em>'],
    caption: 'Ensin tavoitteet.\nSitten tekoäly.',
    lede:
      'Autamme organisaatioita päättämään, missä tekoälystä on hyötyä ja missä ei. Sen jälkeen otamme sen käyttöön niin, että tiedot ja päätösvalta pysyvät omissa käsissänne.',
    secondaryAction: 'Näin työskentelemme',
    bandLeft: 'Tekoälykonsultointia yrityksille ja yhteisöille',
    beliefsEyebrow: 'Mihin uskomme',
    beliefsTitle: 'Tekoäly palvelee <em>ihmistä</em>, ei toisin päin.',
    beliefs: [
      {
        title: 'Aikaa ajattelulle',
        text: 'Tekoäly hoitaa rutiinit nopeammin. Säästyvä aika kannattaa käyttää siihen, mitä kone ei tee puolestamme: ajatteluun, ihmisten kohtaamiseen ja parempiin päätöksiin.',
      },
      {
        title: 'Pelkoja pitää kuunnella',
        text: 'Moni pelkää, mitä tekoäly tekee työlle, oikeudenmukaisuudelle ja päätösvallalle. Pelkoja ei pidä ohittaa, sillä niissä on usein paljon perää.',
      },
      {
        title: 'Parempi yhteiskunta kaikille',
        text: 'Tekoälyn hyödyt eivät saa jäädä harvoille. Kun yritykset, järjestöt ja julkinen sektori ottavat sen käyttöön omien arvojensa pohjalta, se voi auttaa rakentamaan yhteiskuntaa, joka toimii paremmin kaikille.',
      },
    ],
    principlesTitle: 'Miksi me',
    principlesLead: 'Te päätätte <em>suunnan</em>. Me autamme perille.',
    principles: [
      {
        title: 'Ensin tavoite, sitten tekniikka',
        text: 'Lähdemme liikkeelle arvoista ja tavoitteista. Joskus paras neuvomme on jättää tekoäly kokonaan pois.',
      },
      {
        title: 'Neuvomme ja toteutamme',
        text: 'Emme jätä käteenne pelkkää diaesitystä. Teemme itse sen, mistä sovitaan.',
      },
      {
        title: 'Omalla palvelimella',
        text: 'Tarvittaessa käytämme avoimia malleja palvelimella, jota hallitsette itse. Silloin tiedot eivät lähde ulkomaiseen pilvipalveluun.',
      },
    ],
    questionsEyebrow: 'Kuulostaako tutulta?',
    questionsTitle: 'Tekoälyä käytetään jo, mutta yhteinen suunnitelma puuttuu.',
    questions: [
      'Osa työntekijöistä käyttää tekoälyä omin päin, ja osa ei uskalla kokeilla sitä lainkaan.',
      'Hallitus odottaa tekoälysuunnitelmaa, mutta kukaan ei tiedä, mistä aloittaa.',
      'Tekoälyä on kokeiltu, mutta vastaukset jäivät ympäripyöreiksi, koska se ei tunne organisaatiotanne.',
      'Arkaluonteisia tietoja ei voi viedä ulkomaiseen pilvipalveluun, joten koko asia tuntuu mahdottomalta.',
    ],
    questionsNote:
      'Tilanne on yleinen. <a href="https://stat.fi/julkaisu/cm1hnps701dbm07w59uo0jw6u" rel="noopener">Tilastokeskuksen mukaan</a> vähintään kymmenen hengen yrityksistä 38 % käytti tekoälyä vuonna 2025, mutta vain 15 %:lla oli sille kirjatut käytännöt. <a href="https://tieke.fi/kartoitimme-tekoalyn-vastuullinen-kayttoonotto-ja-somen-murros-pohdituttavat-jarjestoissa-arki-on-tasapainoilua-digitalisaation-kanssa/" rel="noopener">TIEKEn kyselyssä</a> 37 % järjestöistä ei käyttänyt tekoälyä vielä lainkaan.',
    processTitle: 'Neljä vaihetta. Aloitetaan siitä, missä olette nyt.',
    processLink: 'Lue palveluista tarkemmin',
    audienceTitle: 'Asiakkaamme',
    audienceLead: 'Organisaatiot, joille <em>arvot</em> ovat muutakin kuin sanoja.',
    audience: [
      { title: 'Yritykset', text: 'Tekoälyn pitää tuottaa tulosta, mutta ei yrityksen omien arvojen kustannuksella.' },
      { title: 'Järjestöt ja säätiöt', text: 'Resurssit ovat niukat, ja arvot ohjaavat kaikkea tekemistä.' },
      { title: 'Kunnat ja julkinen sektori', text: 'Luottamuksesta, tietosuojasta ja yhdenvertaisuudesta ei voi tinkiä.' },
      { title: 'Oppilaitokset', text: 'Tekoäly muuttaa sekä opettamista että oppimista.' },
    ],
    whyTitle: 'Tunnemme tekniikan. Siksi puhumme siitä suoraan.',
    whyText: [
      'Olemme rakentaneet tekoälyagentteja ja koneoppimisjärjestelmiä. Tiedämme, mihin nykyiset mallit pystyvät ja mihin eivät.',
      'Emme lupaa ihmeitä. Neuvomme ja toteutamme itse, kerromme avoimesti, mitä teemme, ja joskus suosittelemme jättämään tekoälyn pois.',
    ],
    ctaTitle: 'Aloitetaan maksuttomalla kartoituspuhelulla. Kertokaa, mikä teille on tärkeää, niin mietitään yhdessä, mistä kannattaa lähteä liikkeelle.',
  },

  offer: {
    until: '2026-10-31',
    eyebrow: 'Syys–lokakuun tarjous yleishyödyllisille',
    title: 'Kartoitus <em>puoleen hintaan</em> yleishyödyllisille yhteisöille.',
    text: 'Järjestöt, säätiöt ja muut yleishyödylliset yhteisöt saavat Kartoituksesta 50 %:n alennuksen, kun tilaus tehdään viimeistään 31.10.2026. Kartoituksessa selvitämme yhdessä, mihin työaika kuluu, missä tekoäly voisi vapauttaa sitä tärkeämpään ja missä sille ei ole paikkaa.',
    note: 'Ensimmäinen askel on maksuton kartoituspuhelu. Itse työn voi ajoittaa myös marraskuulle tai myöhemmäksi.',
  },

  process: [
    {
      eyebrow: 'Vaihe 01',
      title: 'Suunta',
      short: 'Työpaja, jossa organisaatio päättää, mitä se tekoälyltä haluaa ja mitä ei.',
      body: 'Kokoamme yhteen johdon, työntekijät ja tarvittaessa jäsenet tai vapaaehtoiset. Aluksi käymme läpi, mitä tekoäly on ja mitä se ei ole. Sitten keskustelemme siitä, mitä pidätte tärkeänä, mihin pyritte ja mitä ette halua antaa koneen hoidettavaksi. Myös huolille ja peloille on tilaa.',
      outcome: 'Organisaation omat tekoälyperiaatteet ja kolme ensimmäistä käyttökohdetta. Lyhyesti, selkeästi ja yhdessä sovittuna.',
      product: 'Suuntatyöpaja',
      price: '1 500 € + alv',
    },
    {
      eyebrow: 'Vaihe 02',
      title: 'Kartoitus',
      short: 'Käymme arjen työn läpi ja selvitämme, missä tekoälystä on todellista hyötyä ja missä ei.',
      body: 'Selvitämme, mihin työaika oikeasti kuluu. Etsimme tehtävät, joissa tekoäly voisi vapauttaa aikaa tärkeämpään, ja ne, joihin se ei sovi. Samalla arvioimme tietosuojan, riskit ja kustannukset.',
      offer: '−50 % yleishyödyllisille 31.10. asti',
      outcome: 'Käyttökohteet tärkeysjärjestyksessä, kunkin edellytykset ja realistinen arvio hyödyistä.',
    },
    {
      eyebrow: 'Vaihe 03',
      title: 'Kokeilu',
      short: 'Yksi tai kaksi pientä kokeilua oikeassa työssä ja oikeiden ihmisten kanssa.',
      body: 'Toteutamme kokeilut niin, että tiedot ja päätösvalta pysyvät omissa käsissänne. Tarvittaessa käytämme avoimen lähdekoodin malleja omalla palvelimellanne. Mittaamme niitä asioita, jotka sovimme suuntatyöpajassa tärkeiksi.',
      outcome: 'Toimiva kokeilu, käyttäjien palaute ja pohja päätökselle: jatketaanko, muutetaanko vai lopetetaanko.',
    },
    {
      eyebrow: 'Vaihe 04',
      title: 'Käyttöönotto',
      short: 'Koulutus, yhteiset käytännöt ja seuranta, jotta muutos jää pysyväksi.',
      body: 'Koulutamme henkilöstön käyttämään työkaluja harkiten ja kirjaamme yhteiset pelisäännöt. Sovimme myös, miten periaatteita päivitetään, kun tekniikka ja tarpeet muuttuvat.',
      outcome: 'Osaava henkilöstö, sovitut käytännöt ja kevyt tapa tarkistaa suuntaa jatkossakin.',
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
    fit: 'Voidaan tehdä osana kartoitusta ja kokeilua tai erillisenä palveluna.',
    homeLink: 'Lue lisää organisaation kontekstista',
    anchor: 'konteksti',
  },

  approach: {
    title: 'Näin työskentelemme – Enlightened Bits',
    description:
      'Neljä vaihetta arvoista käytäntöön: suunta, kartoitus, kokeilu ja käyttöönotto. Voitte aloittaa mistä vaiheesta tahansa.',
    heroLines: ['Arvoista käytäntöön,', '<em>omaan tahtiinne.</em>'],
    lede:
      'Osa organisaatioista vasta miettii suuntaa, osa on jo kokeillut ja haluaa ottaa tekoälyn osaksi arkea. Siksi voitte aloittaa mistä vaiheesta tahansa. Jokaisesta vaiheesta jää käteen jotain pysyvää, vaikka jatkaisitte sen jälkeen itse. Useimmat aloittavat maksuttomalla kartoituspuhelulla ja suuntatyöpajalla.',
    outcomeLabel: 'Lopputulos',
    faqTitle: 'Usein kysyttyä',
    faq: [
      {
        q: 'Mitä yhteistyö maksaa?',
        a: 'Ensimmäinen kartoituspuhelu on maksuton. Suuntatyöpaja maksaa 1 500 € + alv. Muut palvelut hinnoitellaan tarpeen mukaan kartoituspuhelun jälkeen.',
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
        a: 'Voi. Moni aloittaa pelkällä suuntatyöpajalla (1 500 € + alv) ja päättää sen jälkeen, jatketaanko yhdessä vai itse.',
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
    address: ['Enlightened Bits', 'Josafatinkatu 9 1h 64', '00510 Helsinki'],
    mapLabel: 'Näytä kartalla',
    reachLabel: 'Sähköposti ja puhelin',
    visitNote: 'Toimistomme on Helsingissä. Sovithan käynnistä etukäteen sähköpostitse.',
  },
};
