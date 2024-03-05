import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex w-[70%] justify-between items-center mt-6 h-16 max-w-[1240px] mx-auto px-4  text-white z-50 bg-white bg-opacity-40 rounded-2xl sticky top-6'>
      <h1 className="w-full font-header md:text-lg lg:text-2xl">Pochutnej Si! BISTRO</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Menu</li>
        <li className='p-4'>Gallery</li>
        <li className='p-4'>Contact</li>
        <li className='p-4'>Order</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'z-50 fixed left-0 top-0 w-[65%] h-full border-r border-r-gray bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-2xl font-header text-black m-4'>Pochutnej Si! Bistro</h1>
          <li className='p-4 border-b border-gray text-black'>Home</li>
          <li className='p-4 border-b border-gray text-black'>Menu</li>
          <li className='p-4 border-b border-gray text-black'>Gallery</li>
          <li className='p-4 border-b border-gray text-black'>Contact</li>
          <li className='p-4 text-black'>Order Now</li>
      </ul>
    </div>
  );
};

export default Navbar;