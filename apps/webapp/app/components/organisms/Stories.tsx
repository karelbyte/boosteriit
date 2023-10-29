import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Stars from '../atoms/Stars';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
const Stories = () => {
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

  const slider = React.useRef<any>(Slider);

  const next = () => {
    if (slider.current) {
      slider.current.slickNext();
    } 
  };

  const previous = () => {
    if ( slider.current) {
      slider.current.slickPrev();
    }

  };

  return (
    <div className="flex flex-col pb-12 bg-[#ECF5FE]">
      <p className="self-center my-6 font-bold">Casos de éxito</p>
      <Slider ref={slider} {...settings}>
        <div className="sm:h-80 p-4">
          <div className="flex flex-col justify-center items-center border rounded-2xl border-blue-100 h-full bg-white">
            <p className="pt-6 pb-4 text-slate-400">INOUT</p>
            <Stars />
            <p className="md:w-9/12 text-center py-6 text-sm  sm:text-2xl">
              “Boosteriit es estilo BRP bien, rápido y a la primera”
            </p>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-bold">Ing. José Laccer</p>
                <p>Presidente</p>
              </div>
              <div className="hidden sm:flex h-12 border-e-2 mx-6"></div>
              <div>
                <Image
                  src="/assets/stories/inout_logo.svg"
                  width="100"
                  height="140"
                  className="w-auto mt-2 sm:mt-0"
                  priority
                  alt="marketplace."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:h-80 p-4">
          <div className="flex flex-col justify-center items-center border rounded-2xl border-blue-100 h-full bg-white">
            <p className="pt-6 pb-4 text-slate-400">OPCION FINANCIERA</p>
            <Stars />
            <p className="md:w-10/12 text-center py-6 text-sm sm:text-2xl">
              “Tardé 5 años en poder encontrar a alguien que me ayudara como
              Boosteriit.”
            </p>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-bold">Lic. Alejandro Quezada</p> <p>CEO Opción Financiera</p>
              </div>
              <div className="hidden sm:flex h-12 border-e-2 mx-6"></div>
              <div>
                <Image
                  src="/assets/stories/logo-opfin.svg"
                  width="100"
                  height="140"
                  className="w-auto mt-2 sm:mt-0"
                  priority
                  alt="marketplace."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-90 sm:h-80 p-4">
          <div className="flex flex-col justify-center items-center border rounded-2xl border-blue-100 h-full bg-white">
            <p className="pt-6 pb-4 text-slate-400">SUNWAT ENERGY</p>
            <Stars />
            <p className="w-9/12 text-center py-6 text-sm sm:text-2xl">
              “Una mezcla entre calidad, buen precio y eficiencia en tiempos”
            </p>
            <div className="flex flex-col md:flex-row items-center mb-6">
              <div className="flex flex-col text-center sm:text-left">
                <p className="font-bold">Ing. Luis Lara</p> <p> Presidente</p>
              </div>
              <div className="hidden sm:flex h-12 border-e-2 mx-6"></div>
              <div>
                <Image
                  src="/assets/stories/sunwat-logo.svg"
                  width="100"
                  height="140"
                  className="w-auto mt-2 sm:mt-0"
                  priority
                  alt="marketplace."
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className="self-center lg:hidden">
        <button className="rounded-full border p-4 border-[#00B8EC] mr-6" onClick={previous}>

        <BsChevronLeft className="text-2xl text-[#00B8EC]"/>
        </button>
        <button className="rounded-full border p-4 border-[#00B8EC]" onClick={next}>
        <BsChevronRight className="text-2xl text-[#00B8EC]"/>
        </button>
      </div>
    </div>
  );
};

export default Stories;
