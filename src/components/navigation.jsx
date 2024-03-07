import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center gap-6 mt-3">
      <button onClick={() => swiper.slidePrev()}><MdNavigateBefore className="text-white text-4xl m-2 rounded-full border-2 border-white" /></button>
      <button onClick={() => swiper.slideNext()}><MdNavigateNext className="text-white text-4xl m-2 rounded-full border-2 border-white " /></button>
    </div>
  );
}