import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import { EffectCards} from "swiper/modules";
import "./gallery.css"
import Navbar from "../components/GalleryNavbar";
import Navigation from "../components/navigation"

function Gallery() {

  return (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center py-24 gap-6">
            <h1 className="text-4xl font-header text-white md:7xl">Gallery</h1>
            


            <div className="p-10 pb-24 flex flex-col items-center gap-6 w-screen bg-yellow">
            <h2 className="font-body font-bold text-white text-3xl text-center">Cateringy - Svatby - Oslavy - Vecírky</h2>
            <Swiper effect={"cards"} modules={[EffectCards]} className="catering h-[320px] w-[240px]" nRealIndexChange={(swiper) => {swiper.allowTouchMove = false;swiper.unsetGrabCursor();}} onTouchEnd={(swiper) => {swiper.allowTouchMove = true;}}>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <SwiperSlide className="rounded-3xl"></SwiperSlide>
                <Navigation/>
            </Swiper>
            </div>
        </div>
    </div>
  );
}

export default Gallery;
