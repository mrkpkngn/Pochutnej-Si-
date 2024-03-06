import React, { useState } from 'react';
import { MdOutlinePayments } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { IoWifi } from "react-icons/io5";

function Home3() {
    return (
        <div className="bg-black">
        <div className="flex flex-col items-center justify-center py-16 md:mx-24">
          <h1 className="text-orange text-4xl text-center md:text-7xl font-header">Provozní doba</h1>
          <p className="text-white font-body text-center md:text-2xl pt-6 mx-16"><b>Pondělí až čtvrtek:</b> 11 - 14 hodin (pouze polední menu) <br></br> <b>Pátek:</b> 11 - 22 hodin (11 - 14 hodin pouze polední menu)<br></br><b>Sobota:</b> 11 - 22 hodin</p>
          <div className="flex flex-col pt-10 gap-6 lg:flex-row lg:mx-64">
              <div className="flex flex-col items-center text-center mx-16">
                <MdOutlinePayments className="text-white text-7xl lg:text-8xl"/>
                <b className="text-white text-2xl">Platby</b>
                <p className="text-white">Platit u nás můžete také platebními kartami nebo stravenkami.</p>
              </div>
              <div className="flex flex-col items-center text-center mx-16">
                <LuParkingCircle className="text-white text-7xl lg:text-8xl"/>
                <b className="text-white text-2xl">Parkoviště</b>
                <p className="text-white lg:text-sm">Na přilehlém parkovišti je parkování omezeno na 2 hodiny. Nezapomeňte si prosím nastavit parkovací kotouč!</p>
              </div>
              <div className="flex flex-col items-center text-center mx-16">
                <IoWifi className="text-white text-7xl lg:text-8xl"/>
                <b className="text-white text-2xl">Wifi</b>
                <p className="text-white">Naše veřejná wifi síť NejTV je vám k dispozici zdarma.</p>
              </div>
          </div>
          <div className="flex flex-col pt-12 align-center items-center lg:flex-row">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1664721852632!6m8!1m7!1sCAoSLEFGMVFpcE5XNEFvaEVfNjJMTXQ4SjBDeG9ST2MxTUxqeUxnUGhCSk1ReEQw!2m2!1d49.671310064386!2d18.671649428802!3f217.40716090289507!4f-3.5529490689846455!5f0.7820865974627469" className="h-[250px] lg:h-[300px] lg:w-[500px] xl:h-[400px] xl:w-[600px] " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="flex flex-col text-center px-7 lg:mx-0 xl:w-[50rem] lg:pl-20">
              <h1 className="text-orange font-header text-4xl pt-6 lg:pt-0 lg:pb-6 lg:text-4xl xl:text-7xl">Kde nás najdete?</h1>
              <p className="text-white font-body lg:text-xl xl:text-2xl">Naše bistro se nachází v Třinci, na Lidické ulici č. 544 v budově Styl. Pokud se rozhodnete přijet autem, je vám k dispozici přilehlé parkoviště. Nezapomeňte si ale nastavit parkovací kotouč, parkování je od 6 do 18 hodin omezeno na 2 hodiny. Pohodlně k nám dojedete také MHD - zastávka Lyžbice, Terasa Styl.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home3