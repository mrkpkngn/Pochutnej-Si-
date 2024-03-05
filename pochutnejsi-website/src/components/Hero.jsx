import React, { useState } from 'react';
import Heroimg from '../assets/img/Hero.png'

function Hero() {
    return (
        <div className="flex justify-center items-center h-[90vh]"> 
        <div className="block h-fit"><img src={Heroimg} alt="Hero Image" className="pt-5 pb-0 md:w-[35rem]"></img></div>
      </div>
    )
}

export default Hero