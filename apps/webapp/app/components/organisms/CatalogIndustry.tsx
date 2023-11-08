import React, { JSX, useState } from 'react';
import Slider from 'react-slick';
import { BsPlusLg } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import SlidesBtn from '../molecules/SlidesBtn';
import { IIndustry, industries } from '../../contexts/appData';
import SolutionSelectorModalEdit from '../molecules/SolutionSelectorModalEdit';
import useAppContext from '../../contexts/hookAppContext';

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
  const { selectedSolutions, setSelectedIndustry } = useAppContext();
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

  const items = industries.slice(0, 4);

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

  const [showModal, setShowModal] = useState<boolean>(false);

  const setShowModalAndIndustry = (id: string) => {
    setShowModal(true);
    setSelectedIndustry(id);
  };

  return (
    <>
      <SolutionSelectorModalEdit
        setShowModalEdit={setShowModal}
        showModalEdit={showModal}
        currentSolutions={selectedSolutions}
        nextPath={'/industries'}
      />
      <div className="flex flex-col my-12 px-6 sm:my-24 sm:px-12 xl:my-12 xl:px-24">
        <p className="mb-6 font-bold text-xl text-justify md:text-center md:text-2xl lg:text-4xl">
          Catálogo por industria
        </p>
        <p className="self-center w-24 border-t-2 mb-6 border-boo-btn-bg"></p>
        <p className="self-center mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center">
          Elige de nuestro catálogo de soluciones por industria. Obtén atención
          personalizada para el desarrollo de tu producto digital end to end.
        </p>
        <Slider ref={slider} {...settings}>
          {items &&
            items.map((item: IIndustry, index: number) => (
              <div key={index} className="p-2">
                <div className="flex flex-col border rounded-lg p-6 h-[28rem]">
                  <div className="h-64">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
                      {item.icon}
                    </div>
                  </div>

                  <p className="mb-2 mt-2 text-md">{item.title}</p>
                  <p className="text-boo-str-description mb-6 text-xs">
                    {item.subtitle}
                  </p>
                  <button
                    className="flex py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover"
                    onClick={() => setShowModalAndIndustry(item.id)}
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
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
                <BiHelpCircle />
              </div>

              <div className="flex flex-col">
                <span className="mt-8 mb-2 text-md">
                  ¿No encuentras tu solución?
                </span>
                <span className="mb-6 text-sm text-boo-str-description">
                  Tenemos una a tu medida
                </span>
              </div>

              <p className="text-boo-str-description mb-6 text-sm xl:text-md">
                Arma tu paquete personalizado ó comunícate con nosotros para una
                atención personalizada.
              </p>
              <button className="flex py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover">
                Ver soluciones
              </button>
              <button className="flex py-5 px-6 w-full justify-center text-boo-btn-bg focus:outline-none rounded">
                Contacto
              </button>
            </div>
          </div>
        </Slider>
        <SlidesBtn style={'self-center mt-4'} next={next} previous={previous} />
      </div>
    </>
  );
}
