import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import { EffectCards} from "swiper/modules";
import "./gallery.css"
import Navbar from "../components/GalleryNavbar";
import Navigation from "../components/navigation"
import FrostEffect from "../components/FrostEffectSecond";

function Gallery() {

  return (
    <div>
        <Navbar />
        <FrostEffect />
        <div className="flex flex-col items-center justify-center py-24 gap-6 overflow-x-hidden">
            <h1 className="text-4xl font-header text-white md:text-7xl md:py-10">Gallery</h1>

            <div className="p-10 pb-24 flex flex-col items-center gap-6 bg-yellow w-screen">
            <h2 className="font-body font-bold text-white text-3xl text-center md:text-5xl">Cateringy - Svatby - Oslavy - Vecírky</h2>
            <Swiper effect={"cards"} modules={[EffectCards]} className="catering h-[320px] w-[240px] md:h-[480px] md:w-[360px]" nRealIndexChange={(swiper) => {swiper.allowTouchMove = false;swiper.unsetGrabCursor();}} onTouchEnd={(swiper) => {swiper.allowTouchMove = true;}}>
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

            <div className="p-10 pb-24 flex flex-col items-center gap-6 w-screen bg-yellow">
            <h2 className="font-body font-bold text-white text-3xl text-center md:text-5xl">Cateringy - Svatby - Oslavy - Vecírky</h2>
            <Swiper effect={"cards"} modules={[EffectCards]} className="idk h-[320px] w-[240px] md:h-[480px] md:w-[360px]" onRealIndexChange={(swiper) => {swiper.allowTouchMove = false; swiper.unsetGrabCursor();}} onTouchEnd={(swiper) => {swiper.allowTouchMove = true;}}>
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
