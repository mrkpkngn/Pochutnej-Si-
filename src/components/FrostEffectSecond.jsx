'use client'
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const FrostEffect = () => {
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
    <div className={`flex justify-between items-center mt-6 h-11 lg:h-12 xl:h-14 max-w-[1400px] mx-auto px-4 rounded-2xl fixed right-0 left-0 lg:w-[75%] xl:w-[60%] w-[70%] backdrop-blur-md shadow-md text-white lg:ease-in-out duration-500} z-10`}>
    </div>
  );
};

export default FrostEffect;