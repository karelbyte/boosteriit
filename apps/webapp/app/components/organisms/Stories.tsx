import React, { JSX } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Stars from '../atoms/Stars';
import SlidesBtn from "../molecules/SlidesBtn";
export default function Stories(): JSX.Element {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider: React.MutableRefObject<any> = React.useRef<any>(Slider);

  const next = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  const previous = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  return (
    <div className="flex flex-col pb-12 bg-boo-blue">
      <p className="self-center my-6 font-bold">Casos de éxito</p>
      <p className="self-center w-24 border-t-2 mb-6 border-boo-btn-bg"></p>
      <Slider ref={slider} {...settings}>
        <div className="h-96 lg:h-[450px] xl:h-96 p-4">
          <div className="flex flex-col justify-between items-center border rounded-2xl border-blue-100 h-full bg-white p-6">
            <p className="pt-6 pb-4 text-slate-400">INOUT</p>
            <Stars />
            <p className="text-center py-6 text-sm lg:text-lg xl:text-xl md:w-9/12">
              “Boosteriit es estilo BRP bien, rápido y a la primera”
            </p>
            <div className="flex flex-col xl:flex-row items-center mb-6">
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-bold">Ing. José Laccer</p>
                <p>Presidente</p>
              </div>
              <div className="hidden xl:flex h-12 border-e-2 mx-6"></div>
              <Image
                src="/assets/stories/inout_logo.svg"
                width="100"
                height="140"
                className="w-auto xl:w-4/12 mt-4 md:mt-0"
                priority
                alt="Boosteriit"
              />
            </div>
          </div>
        </div>

        <div className="h-96 lg:h-[450px] xl:h-96 p-4">
          <div className="flex flex-col justify-between items-center border rounded-2xl border-blue-100 h-full bg-white p-6">
            <p className="pt-6 pb-4 text-slate-400">OPCION FINANCIERA</p>
            <Stars />
            <p className="text-center py-6 text-sm lg:text-md xl:text-xl md:w-10/12">
              “Tardé 5 años en poder encontrar a alguien que me ayudara como
              Boosteriit.”
            </p>
            <div className="flex flex-col xl:flex-row items-center justify-center mb-6">
              <div className="flex flex-col text-center sm:text-left xl:text-md">
                <p className="font-bold">Lic. Alejandro Quezada</p>
                <p>CEO Opción Financiera</p>
              </div>
              <div className="hidden xl:flex h-12 border-e-2 mx-6"></div>
              <Image
                src="/assets/stories/logo-opfin.svg"
                width="100"
                height="140"
                className="w-auto xl:w-4/12 mt-4 md:mt-0"
                priority
                alt="Boosteriit"
              />
            </div>
          </div>
        </div>

        <div className="h-96 lg:h-[450px] xl:h-96 p-4">
          <div className="flex flex-col justify-between items-center border rounded-2xl border-blue-100 h-full bg-white p-6">
            <p className="pt-6 pb-4 text-slate-400">SUNWAT ENERGY</p>
            <Stars />
            <p className="w-9/12 text-center py-6 text-sm lg:text-md xl:text-xl">
              “Una mezcla entre calidad, buen precio y eficiencia en tiempos”
            </p>
            <div className="flex flex-col xl:flex-row items-center justify-center mb-6">
              <div className="flex flex-col text-center sm:text-left xl:w-5/12 xl:pl-6">
                <p className="font-bold">Ing. Luis Lara</p>
                <p> Presidente</p>
              </div>
              <div className="hidden xl:flex h-12 border-e-2 mx-6"></div>
              <Image
                src="/assets/stories/sunwat-logo.svg"
                width="100"
                height="140"
                className="w-auto xl:w-5/12 mt-4 md:mt-0"
                priority
                alt="Boosteriit"
              />
            </div>
          </div>
        </div>
      </Slider>
      <SlidesBtn style={'self-center lg:hidden'} next={next} previous={previous}/>
    </div>
  );
}
