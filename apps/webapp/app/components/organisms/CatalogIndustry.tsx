import React, { JSX } from 'react';
import Slider from 'react-slick';
import { BsPlusLg, BsCurrencyBitcoin, BsBuildings, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CiPlane } from 'react-icons/ci';
import { PiHamburgerBold } from 'react-icons/pi';
import { FaHandHoldingHeart, FaGuitar } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
import SlidesBtn from "../molecules/SlidesBtn";

interface IItem {
  id: number;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}
interface ISettings {
  dots?: boolean;
  infinite?: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: {
    settings: { slidesToScroll: number; slidesToShow: number };
    breakpoint: number;
  }[];
}

export default function CatalogIndustry(): JSX.Element {
  const settings: ISettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items: IItem[] = [
    {
      id: 1,
      icon: <CiPlane />,
      title: 'Viajes',
      subtitle: 'Reservas de viajes y hospedaje',
    },
    {
      id: 2,
      icon: <BsCurrencyBitcoin />,
      title: 'Fintech',
      subtitle: 'Para compañías de tecnología financiera',
    },
    {
      id: 3,
      icon: <BsBuildings />,
      title: 'Bienes y raíces',
      subtitle: 'Compra, venta y renta de inmuebles',
    },
    {
      id: 4,
      icon: <PiHamburgerBold />,
      title: 'Restaurante',
      subtitle: 'Actividades de servicio de comidas y bebidas',
    },
    {
      id: 5,
      icon: <FaHandHoldingHeart />,
      title: 'Salud y cuidado',
      subtitle: 'Empresas del giro salud y cuidado personal',
    },
    {
      id: 6,
      icon: <FaGuitar />,
      title: 'Entretenimiento',
      subtitle: 'Eventos, conciertos y espectáculos',
    },
  ];

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
    <div className="flex flex-col my-12 px-6 sm:my-24 sm:px-12 xl:my-12 xl:px-24">
      <p className="mb-6 font-bold text-xl text-justify md:text-center md:text-2xl lg:text-4xl">
        Catálogo por industria
      </p>
      <p className="self-center w-24 border-t-2 mb-6 border-[#00B8EC]"></p>
      <p className="self-center mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center">
        Elige de nuestro catálogo de soluciones por industria. Obtén atención
        personalizada para el desarrollo de tu producto digital end to end.
      </p>
      <Slider ref={slider} {...settings}>
        {items &&
          items.map((item: IItem, index: number) => (
            <div key={index} className="p-2">
              <div className="flex flex-col border rounded-lg p-6 h-[28rem]">
                <div className="h-64">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#00B8EC] border border-[#CCF1FB] bg-[#CCF1FB]">
                    {item.icon}
                  </div>
                </div>

                <p className="mb-2 mt-2 text-md">{item.title}</p>
                <p className="text-[#686767] mb-6 text-xs">{item.subtitle}</p>
                <button
                  className={`flex py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded hover:bg-[#007799]`}
                >
                  <span className="flex items-center">
                    <BsPlusLg />
                    <span className="ml-4">Agregar</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        <div className="p-2">
          <div className="flex flex-col justify-between border rounded-lg p-6 h-[28rem]">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#00B8EC] border border-[#CCF1FB] bg-[#CCF1FB]">
              <BiHelpCircle />
            </div>

            <div className="flex flex-col">
              <span className="mt-8 mb-2 text-md">¿No encuentras tu solución?</span>
              <span className="mb-6 text-sm text-[#686767]">Tenemos una a tu medida</span>
            </div>

            <p className="text-[#686767] mb-6 text-sm xl:text-md">
              Arma tu paquete personalizado ó comunícate con nosotros para una
              atención personalizada.
            </p>
            <button
              className={`flex py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded hover:bg-[#007799]`}
            >
              Ver soluciones
            </button>
            <button
              className={`flex py-5 px-6 w-full justify-center text-[#00B8EC] focus:outline-none rounded`}
            >
              Contacto
            </button>
          </div>
        </div>
      </Slider>
      <SlidesBtn style={'self-center mt-4'} next={next} previous={previous}/>
    </div>
  );
}
