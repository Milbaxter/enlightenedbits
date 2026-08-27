# Team page content — Enlightened Bits
#
# This file is the ONLY place to edit the words on /tiimi/ and /en/team/.
# After changing anything here, run:   python3 build.py
#
# Format
#   ## section          starts a section
#   key.fi: value       Finnish text        (one line)
#   key.en: value       English text        (one line)
#   key: value          same in both languages
#   key.fi: >           multi-line text — indent the lines beneath it.
#                       A blank line inside the block starts a new paragraph.
#
# Lines starting with # are comments and are ignored.


## nav
home.fi:       Etusivu
home.en:       Home
about.fi:      Meistä
about.en:      About
contact.fi:    Yhteystiedot
contact.en:    Contact
book.fi:       Varaa tapaaminen
book.en:       Book a meeting
skip.fi:       Siirry sisältöön
skip.en:       Skip to content


## page
title.fi:        Tiimi – Enlightened Bits, Helsinki
title.en:        The team – Enlightened Bits, Helsinki

description.fi:  Enlightened Bitsin kaksi perustajaa Maximilian ja Juhani. Tekoälyä omalla infralla.
description.en:  The co-founders behind Enlightened Bits, Maximilian and Juhani. Local AI.

og_title.fi:     Enlightened Bitsin tiimi
og_title.en:     The team behind Enlightened Bits
og_desc.fi:      Kaksi founderia Helsingistä, molemmat Aalto-yliopistosta.
og_desc.en:      Two co-founders from Helsinki, both Aalto University graduates.

eyebrow.fi:      Tiimi
eyebrow.en:      The team

heading.fi:      Me olemme Enlightened Bits
heading.en:      The people behind Enlightened Bits.

lede.fi: >
  Kaksihenkinen työryhmä Helsingistä, molemmat
  Aalto-yliopistosta valmistuneita insinöörejä. Tavoite on tarjota suomalaisille
  organisaatioille tekoälyä infralla, jonka he omistavat kokonaan itse.

lede.en: >
  We're a two-person team from Helsinki, both recent graduates of Aalto
  University. Our goal is to give Finnish organisations capable AI on
  infrastructure they control or own, running open-source models.


## photo
# The founders photo in the top-left of the page. Replace the files in
# kuvat/ and update the alt text if you change the picture.
webp:    /kuvat/founders.webp
jpg:     /kuvat/founders.jpg
width:   1200
height:  1231
alt.fi:  Maximilian ja Juhani juoksemassa Helsinki Marathonia sateessa.
alt.en:  Maximilian and Juhani running the Helsinki Marathon in the rain.


## story
heading.fi:  Miten tähän päädyttiin
heading.en:  How we got here

body.fi: >
  Tapasimme Aalto-yliopistossa machine learning -kurssilla useampi vuosi sitten. Yksi keskustelunaihe, johon tuppasimme palata on, että Suomessa
  on poikkeuksellisen kova tietotekninen osaaminen, mutta taito ja firmat lähtevät tai myydään pois täältä. Meillä olisi kaikki edellytykset olla tekoälyn kehityksen suunnannäyttäjiä. Sen sijaan olemme koko EU:n kärkeä maksullisten pilvipalveluiden käytössä.
  
  Jos työ on säänneltyä tai luottamuksellista, sen
  pitäisi voida toimia laitteilla joita hallitset itse niin, että data ja käyttökustannukset eivät lähde Yhdysvaltoihin tekoälyn koulutettavaksi.
  Teemme siitä helppoa organisaatioille Suomessa.

body.en: >
  We met at Aalto University and kept coming back to the same idea: Finland
  has extreme talent density, and it can, should and will be a leader in
  applied AI. Finnish organisations shouldn't have to hand their most
  important work to an American cloud or an American AI company.

  For work that is regulated, private, or simply important, you should be able
  to run it on infrastructure you control, on open-source models, and keep
  your data, your costs and your freedom in your own hands. Enlightened Bits
  is how we make that practical for organisations across Finland.

cta.fi:  Tehdään yhteistyötä
cta.en:  Work with us


## contact
# If the address changes, update `maps_url` below to match.
heading.fi:  Yhteystiedot
heading.en:  Contact

intro.fi: >
  Toimistomme on Kalliossa Helsingissä. Sovithan käynnistä etukäteen, emme ole aina toimistolla.

intro.en: >
  Our office is in Helsinki. Please arrange a visit by email in advance.

address_label.fi:  Käyntiosoite
address_label.en:  Visiting address

address: >
  Enlightened Bits
  Josafatinkatu 9 1h 64
  00510 Helsinki

contact_label.fi:  Sähköposti ja puhelin
contact_label.en:  Email and phone

maps_label.fi:  Näytä kartalla
maps_label.en:  Show on a map
# Link target for the address. Update this when the address changes.
maps_url:  https://www.openstreetmap.org/search?query=Josafatinkatu%209%2C%2000510%20Helsinki


## person maximilian
name:      Maximilian
full_name: Maximilian Rehn
email:    maximilian@enlightenedbits.com
phone:    +358 50 494 1660
role.fi:  Perustaja
role.en:  Co-founder
degree.fi: DI, Informaatioverkostot, Aalto-yliopisto
degree.en: M.Sc. Information Networks, Aalto University

bio.fi: >
  Maximilian on diplomi-insinööri Aalto-yliopiston informaatioverkostoista,
  jossa hän oppi työskentelemisestä teknologian, datan ja ihmisten rajapinnassa. Valmistuttuaan,
  hän lähti San Franciscoon rakentamaan tekoälyagentteja, jossa hän
  työskenteli mm. autonomisten järjestelmien parissa alan
  kärkinimien kanssa. Enlightened Bitsissä hän tuo tuon kokemuksen takaisin Suomeen.

bio.en: >
  Maximilian has a Master of Science in Information Networks from Aalto
  University, where he worked at the meeting point of technology, data and
  people. He then went to San Francisco to build AI agents, working hands-on
  with autonomous systems at the frontier of the field. At Enlightened Bits he
  brings that experience home to Finland, running capable open-source AI on
  infrastructure you control.


## person juhani
name:      Juhani
full_name: Juhani Lindh
email:    juhani@enlightenedbits.com
phone:    +358 45 189 4225
role.fi:  Perustaja
role.en:  Co-founder
degree.fi: DI, Complex Systems, Aalto-yliopisto
degree.en: M.Sc. Complex Systems, Aalto University

bio.fi: >
  Juhanilla on taustaa tutkimuspuolelta, jossa hän on tehnyt machine learning implementaatiotyötä mm. neurotieteiden parissa.
  Hän vastaa laitteisto- ja asennuspuolesta, sekä tuntee teknisesti tarkasti koko järjestelmän; esim. uusimpien LLM-mallien arkkitehtuuria ja niihin liittyvää innovaatiota,
  agenttiteknologiaa, sekä miten tietojärjestelmiä voi käyttää turvallisesti ja tehokkaasti AI inferenssiin.

bio.en: >
  Juhani comes from an academic background, where he has done machine learning implementation work, e.g. in the neurosciences. He is responsible for the hardware and installation side, and has a detailed technical command of the system as a whole — the architecture of the latest LLM models and the innovations behind them, agent technology, and how IT systems can be used securely and efficiently for AI inference.
