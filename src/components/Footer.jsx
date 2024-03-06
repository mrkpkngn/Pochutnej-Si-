import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from '../assets/img/pochuntejsi_logo.png'

function Footer() {
    return (
        <div className="bg-black flex flex-col items-center lg:flex-row py-8 px-20 gap-6">
        <div className="flex flex-col gap-6 items-center lg:items-start flex-1">
        <img src={logo} className="w-48"></img>
        <p className="text-white text-center text-xs">Copyright © 2024 Pochutnej Si! Bistro | All Rights Reserved </p>
        </div>
        <div className='flex flex-col items-center gap-1 lg:items-end flex-1'>
          <b className="text-orange text-center font-bold font-header lg:text-xl">Kontaktujte nás</b>
          <div className='flex flex-row gap-2'>
            <a href='https://www.facebook.com/pochutnejsi.bistro/' className='p-1 bg-white rounded-md'><FaFacebookSquare className='text-orange lg:text-2xl' /></a>
            <a href='https://www.instagram.com/pochutnejsibistro/' className='p-1 bg-white rounded-md'><AiFillInstagram className='text-orange lg:text-2xl' /></a>
            <a href='tel:+420775932273' className='p-1 bg-white rounded-md'><FaSquarePhone className='text-orange lg:text-2xl' /></a>
            <a href='mailto:bistro@pochutnejsi.cz' className='p-1 bg-white rounded-md'><SiGmail className='text-orange lg:text-2xl' /></a>
          </div>
        </div>
      </div>
    )
}

export default Footer