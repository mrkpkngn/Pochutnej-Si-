'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
    const [header, setHeader] = useState(false);

    const scrollHeader = () =>{
        if(window.scrollY >= 500){
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
    <div className={`flex z-20 justify-between items-center mt-6 h-11 lg:h-12 xl:h-14 max-w-[1400px] mx-auto px-4 rounded-2xl fixed left-0 right-0 ${header ? "lg:w-[75%] xl:w-[60%] w-[70%] bg-white/40 text-white lg:ease-in-out duration-500 z-20 " : "xl:w-[1800px] lg:w-[1000px] w-[85%] lg:ease-in-out duration-500 bg-orange text-white bg-opacity-0 z-0"}`}>
      <a href="#top"><h1 className="w-full font-header text-sm md:text-xl lg:text-xl xl:text-2xl">Pochutnej Si! BISTRO</h1></a>
      <ul className='hidden lg:flex'>
      <a href="https://mrkpkngn.github.io/Pochutnej-Si-/"><li className={`p-4 font-bold rounded-lg ${header ? "bg-white/60 text-white" : " bg-white text-orange"}`}>BISTRO</li></a>
        <li className={`p-4 font-bold rounded-lg ${header ? "hover:bg-white/40 hover:text-white" : " hover:bg-yellow hover:text-white"}`}>Menu</li>
        <li className={`p-4 font-bold rounded-lg ${header ? "hover:bg-white/40 hover:text-white" : " hover:bg-yellow hover:text-white"}`}>Galerie</li>
        <li className={`p-4 font-bold rounded-lg ${header ? "hover:bg-white/40 hover:text-white" : " hover:bg-yellow hover:text-white"}`}>Kontakt</li>
        <a href="https://pochutnej-si.choiceqr.com/booking"><li className={`p-4 font-bold rounded-lg ${header ? "hover:bg-white/40 hover:text-white" : " hover:bg-yellow hover:text-white"}`}>Rezervace</li></a>
      </ul>
      <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-50 fixed left-0 top-0 w-[65%] h-full border-r border-r-gray bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-200%] z-50'}>
        <a href="#top"><h1 className='w-full text-2xl font-header text-black m-4'>Pochutnej Si! Bistro</h1></a>
        <a href="https://mrkpkngn.github.io/Pochutnej-Si-/"><li className='p-4 border-b border-gray text-white bg-orange'>BISTRO</li></a>
          <li className='p-4 border-b border-gray text-black hover:bg-yellow hover:text-white'>Menu</li>
          <li className='p-4 border-b border-gray text-black hover:bg-yellow hover:text-white'>Galerie</li>
          <li className='p-4 border-b border-gray text-black hover:bg-yellow hover:text-white'>Kontakt</li>
          <a href="https://pochutnej-si.choiceqr.com/booking"><li className='p-4 text-black hover:bg-yellow hover:text-white'>Rezervace</li></a>
      </ul>
    </div>
  );
};

export default Navbar;