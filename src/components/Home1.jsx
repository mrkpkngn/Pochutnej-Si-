import React, { useState } from 'react';
import Reveal from '../components/Reveal.tsx'

function Home1() {
    return (
    <div className="bg-aboutusmobile bg-fixed bg-cover lg:bg-contain lg:bg-no-repeat lg:bg-right flex">
        <div className= "w-full bg-black bg-opacity-80 lg:bg-transparent lg:bg-aboutusmd">
          <div className="m-10 text-center py-16 md:max-w-[50rem] lg:pl-32">
            <Reveal><h1 className="text-orange font-header text-4xl md:text-7xl">Pochutnej si! BISTRO</h1></Reveal>
            <p className="text-white font-body pt-6 md:text-2xl"><Reveal>Jsme moderní bistro s mladým, nadšeným týmem profesionálních kuchařů, příjemnou obsluhou a otevřenou kuchyní.</Reveal> <br></br><br></br><Reveal delay={0.25}>V naší stálé nabídce najdete nejen vybrané Street Food speciality. Ve všední dny připravujeme také obědové menu. Nápojový lístek obsahuje rozmanitou nabídku čepovaného piva, drinky nebo výběrovou kávu CofeeCulture.</Reveal><br></br><br></br><Reveal>Našimi hesly jsou čerstvost, kvalita, sezónnost a osobní, profesionální přístup. Na své si u nás přijdou všichni, kteří si rádi pochutnají na skvělém jídle a chtějí si užít atmosféru vyladěnou do posledního detailu. Pochutnej si Bistro přímo sousedí s vyhlášeným lahůdkářstvím a obchodem Pochutnej si! DELIKATESAMI.<br></br><br></br>Těšíme se na vaši návštěvu.</Reveal></p>
          </div>
        </div>
      </div>
    )
}

export default Home1