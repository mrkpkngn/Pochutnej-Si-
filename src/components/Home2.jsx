import React, { useState } from 'react';
import workhere from '../assets/img/workhere.png'
import Reveal from '../components/Reveal.tsx'

function Home2() {
    return (
      <div className='flex justify-center items-center'>
        <div className="pt-16 pb-16 mx-16 md:mx-96">
          <Reveal><h1 className="text-4xl font-header text-center md:text-7xl">Práce v Pochutnej si! BISTRO</h1></Reveal>
          <div className="flex justify-center">
            <Reveal delay={0.25}><img src={workhere} className="w-full py-6 md:w-[40rem]"></img></Reveal>
          </div>
          <Reveal delay={0.25}><p className="font-body text-center md:text-2xl">
          Do našeho týmu Pochutnej si! v Třinci přijmeme kolegu či kolegyni na pozici pomocný kuchař / kuchařka. Hledáme spolehlivého parťáka, který má chuť učit se nové recepty a postupy, baví ho moderní gastronomie a touží rozvíjet své kuchařské schopnosti v mladém kolektivu podobně smýšlejících nadšenců. Podrobnosti sdělíme při osobním setkání. Schůzku si domluvíme na bistro@enaxa.cz, kam nám rovnou napište i něco o sobě.<br></br><br></br>Těšíme se!
          </p></Reveal>
        </div>
      </div>
    )
}

export default Home2