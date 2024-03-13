'use client'
import React, { useEffect, useState } from 'react';
import Heroimg from '../assets/img/logo.png'
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hero.css"


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
        <div className="flex flex-col justify-center items-center z-10 py-28 md:pb-28 hero"> 
        <div className="block h-fit z-10"><img src={Heroimg} alt="Hero Image" className="pt-10 pb-10 md:w-[65rem] md:pt-[7rem] md:pb-[1rem] z-10"></img></div>
        <div className='flex gap-6'>
           <Link to='https://pochutnej-si.choiceqr.com/takeaway' className={`font-header xl:text-2xl card1 hover:border-2 z-0 hidden text-center p-5 hover:text-white text-orange hover:bg-orange bg-white rounded-xl  lg:flex flex-col`}>OBĚD S SEBOU
          <p className=" font-body text-sm lg:text-xs ">PONDĚLÍ AŽ PÁTEK OD 11 DO 14 HODIN</p></Link>
          <Link to='https://pochutnej-si.choiceqr.com/section:stale-menu' className={`font-header xl:text-2xl hover:border-2 hidden text-center p-5 hover:text-white text-orange hover:bg-orange bg-white rounded-xl  lg:flex flex-col`}>JÍDLO S SEBOU
          <p className="font-body text-sm ">PÁTEK A SOBOTA</p></Link>
          <Link to='/cateringu' className={`font-header xl:text-2xl hover:border-2 hidden text-center p-5 hover:text-white text-orange hover:bg-orange bg-white rounded-xl lg:flex flex-col`}>NABÍDKA CATERINGU
          <p className="font-body text-sm ">UŽIJTE SI OSLAVU ČI VEČÍREK BEZ STAROSTÍ!</p></Link>
          <Link to='https://www.pochutnejsi.cz/Darkovy-poukaz-BISTRO-500-d3123.htm' className={`font-header xl:text-2xl hover:border-2 hidden text-center p-5 hover:text-white text-orange hover:bg-orange bg-white rounded-xl lg:flex flex-col`}>DÁRKOVÝ POUKAZ</Link>
        </div>
        <div className="flex flex-col gap-3 lg:hidden" id="anchor">
        <Link to='https://pochutnej-si.choiceqr.com/takeaway' className="bg-white p-3 md:p-4 text-orange text-sm md:text-lg rounded-md font-header flex flex-col text-center hover:text-white hover:bg-orange hover:border-2" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor="#anchor">
          OBĚD S SEBOU <span className="text-xs md:text-sm font-body">PONDĚLÍ AŽ PÁTEK OD 11 DO 14 HODIN</span>
        </Link>
        <Link to='https://pochutnej-si.choiceqr.com/section:stale-menu' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-orange hover:border-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="250" data-aos-anchor="#anchor">
          JÍDLO S SEBOU <span className="text-xs md:text-sm font-body">PÁTEK A SOBOTA</span>
        </Link>    
        <Link to='/cateringu' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-orange hover:border-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor="#anchor">
          NABÍDKA CATERINGU <span className="text-xs md:text-sm font-body uppercase">UŽIJTE SI OSLAVU ČI VEČÍREK BEZ STAROSTÍ!</span>
        </Link>
        <Link to='https://pochutnej-si.choiceqr.com/booking' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-orange hover:border-2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="750" data-aos-anchor="#anchor">
          REZERVACE
        </Link>    
        <Link to='https://www.pochutnejsi.cz/Darkovy-poukaz-BISTRO-500-d3123.htm' className="bg-white p-3 md:p-4 md:text-lg text-orange text-sm rounded-md font-header flex flex-col text-center hover:text-white hover:bg-orange hover:border-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" data-aos-anchor="#anchor">
          DÁRKOVÝ POUKAZ
        </Link>          
      </div>
      <FaChevronDown className="text-white text-3xl mt-12 animate-bounce md:hidden"></FaChevronDown>
      </div>
    )
  }

export default Hero