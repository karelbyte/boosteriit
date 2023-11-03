import React, { JSX } from 'react';
import Slider from 'react-slick';
import { BsPlusLg } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import SlidesBtn from '../molecules/SlidesBtn';

interface IItem {
  id: number;
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

export default function CatalogBuild(): JSX.Element {
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
      title: 'Inicio de sesión',
      subtitle: 'Con app de google y redes sociales',
    },
    {
      id: 2,
      title: 'Perfil de cliente',
      subtitle: 'Configuración y edición de datos',
    },
    {
      id: 3,
      title: 'Gestión de vuelos',
      subtitle: 'Disponibles y filtrado ',
    },
    {
      id: 4,
      title: 'Carrito de compra',
      subtitle: 'Listado de artículos selccionados',
    },
    {
      id: 5,
      title: 'Salud y cuidado',
      subtitle: 'Empresas del giro salud y cuidado personal',
    },
    {
      id: 6,
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

  const HelpCircle = () => {
    return (
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#00B8EC] border border-[#CCF1FB] bg-[#CCF1FB]">
        <BiHelpCircle />
      </div>
    );
  };

  return (
    <div className="flex flex-col my-12 px-6 sm:my-24 sm:px-12 xl:my-12 xl:px-24">
      <p className="mb-6 font-bold text-xl text-justify md:text-center md:text-2xl lg:text-4xl">
        Arma tu solución
      </p>
      <p className="self-center w-24 border-t-2 mb-6 border-[#00B8EC]"></p>
      <p className="self-center mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center">
        Construye una aplicación a tu medida integrando los módulos que le den
        valor a tu producto.
      </p>
      <Slider ref={slider} {...settings}>
        {items &&
          items.map((item: IItem, index: number) => (
            <div key={index} className="p-2">
              <div className="flex flex-col border rounded-lg p-6 h-[28rem]">
                <div className="h-64"></div>

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
            <HelpCircle />
            <div className="flex flex-col">
              <span className="mt-8 mb-2 text-md">
                ¿No encuentras tu solución?
              </span>
              <span className="mb-6 text-sm text-[#686767]">
                Tenemos una a tu medida
              </span>
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
      <SlidesBtn style={'self-center mt-4'} next={next} previous={previous} />
    </div>
  );
}
