'use client'
import React, { useEffect, useState } from 'react';
import Heroimg from '../assets/img/Hero.png'



  function Hero(){
  const [header, setHeader] = useState(false);
  
      const scrollHeader = () =>{
          if(window.scrollY >= 200){
              setHeader(true)
          } else {
              setHeader (false)
          }
      }
  
      useEffect(()=>{
          window.addEventListener('scroll',scrollHeader)
  
          return ()=>{
              window.removeEventListener('scroll',scrollHeader)
          }
      })
  

    return (
        <div className="flex flex-col justify-center items-center mt-32 xs:mt-24 lg:mt-24 lg:h-[90vh] md:h-[100vh] sm:mt-24 xs:h-[110vh] h-[110vh] z-10 md:mt-44"> 
        <div className="block h-fit z-10"><img src={Heroimg} alt="Hero Image" className="pt-5 pb-0 md:w-[35rem] z-10"></img></div>
          <a href='https://pochutnej-si.choiceqr.com/takeaway' className={`font-header xl:text-2xl card1 hover:border-4 z-0 hidden text-center p-5 hover:text-white text-orange hover:bg-yellow bg-white rounded-xl absolute lg:flex flex-col ${header ? "translate-x-0 lg:translate-y-0 ease-in-out duration-500" : "xl:translate-x-[29rem] lg:translate-x-[22rem] lg:translate-y-[-3rem] ease-in-out duration-500"}`}>OBĚD S SEBOU
          <p className=" font-body text-sm lg:text-xs ">PONDĚLÍ AŽ PÁTEK OD 11 DO 14 HODIN</p></a>
          <a href='https://pochutnej-si.choiceqr.com/section:stale-menu' className={`font-header xl:text-2xl hover:border-4 hidden text-center p-5 hover:text-white text-orange hover:bg-yellow bg-white rounded-xl absolute lg:flex flex-col ${header ? "translate-x-0 lg:translate-y-0 ease-in-out duration-500" : "xl:translate-x-[-30rem] lg:translate-x-[-20rem] lg:translate-y-72 xl:translate-y-72 ease-in-out duration-500"}`}>JÍDLO S SEBOU
          <p className="font-body text-sm ">PÁTEK A SOBOTA</p></a>
          <a href='' className={`font-header xl:text-2xl hover:border-4 hidden text-center p-5 hover:text-white text-orange hover:bg-yellow bg-white rounded-xl absolute lg:flex flex-col ${header ? "translate-x-0 lg:translate-y-0 ease-in-out duration-500" : "xl:translate-x-[-30rem] lg:translate-x-[-22rem] lg:translate-y-[-5rem] xl:translate-y-[-10rem] ease-in-out duration-500"}`}>NABÍDKA CATERINGU
          <p className="font-body text-sm ">Užijte si oslavu či večírek bez starostí!</p></a>
          <a href='https://www.pochutnejsi.cz/Darkovy-poukaz-BISTRO-500-d3123.htm' className={`font-header xl:text-2xl hover:border-4 hidden text-center p-5 hover:text-white text-orange hover:bg-yellow bg-white rounded-xl absolute lg:flex flex-col ${header ? "translate-x-0 lg:translate-y-0 ease-in-out duration-500" : "xl:translate-x-[35rem] lg:translate-x-72 lg:translate-y-64 ease-in-out duration-500"}`}>DÁRKOVÝ POUKAZ</a>

        <div className="flex flex-col gap-3 xs:pb-20 lg:hidden md:pb-32">
        <a href='https://pochutnej-si.choiceqr.com/takeaway' className="bg-white p-3 md:p-4 text-orange text-sm md:text-lg rounded-md font-header flex flex-col text-center hover:text-white hover:bg-yellow hover:border-4" data-aos="fade-left" data-aos-duration="1000">
          OBĚD S SEBOU <span className="text-xs md:text-sm font-body">PONDĚLÍ AŽ PÁTEK OD 11 DO 14 HODIN</span>
        </a>
        <a href='https://pochutnej-si.choiceqr.com/section:stale-menu' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-yellow hover:border-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250">
          JÍDLO S SEBOU <span className="text-xs md:text-sm font-body">PÁTEK A SOBOTA</span>
        </a>    
        <a href='' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-yellow hover:border-4" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500">
          NABÍDKA CATERINGU <span className="text-xs md:text-sm font-body">Užijte si oslavu či večírek bez starostí!</span>
        </a>    
        <a href='https://www.pochutnejsi.cz/Darkovy-poukaz-BISTRO-500-d3123.htm' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-yellow hover:border-4" data-aos="fade-right" data-aos-duration="1000">
          DÁRKOVÝ POUKAZ
        </a>          
      </div>
      </div>
    )
  }

export default Hero