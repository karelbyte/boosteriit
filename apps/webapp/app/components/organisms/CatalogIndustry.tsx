import React, { JSX, useState } from 'react';
import Slider from 'react-slick';
import { BsPlusLg } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import SlidesBtn from '../molecules/SlidesBtn';
import { IIndustry, industries } from '../../../data/industries';
import SolutionSelectorModalEdit from '../molecules/SolutionSelectorModalEdit';
import useAppContext from '../../contexts/hookAppContext';
import Image from 'next/image';
import useIndustriesHook from '../../hooks/useIndustriesHook';
import { useRouter } from 'next/navigation';
import ContactModal from './ContactModal';
import DataSendModal from './DataSendModal';
import RequestSentModal from './RequestSentModal';

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
  const { selectedSolutions } = useAppContext();
  const { addIndustryStorage } = useIndustriesHook();
  const router = useRouter();
  const goToUrl = (path: string) => {
    router.push(path);
  };
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

  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [showModalDataSend, setShowDataSend] = useState<boolean>(false);

  const [showModalRequest, setShowModalRequest] = useState<boolean>(false);

  const modalContactProps = {
    showModal: showModalContact,
    setShowModal: setShowModalContact,
    activeModalSendSuccess: setShowDataSend,
    activeModalRequestSuccess: setShowModalRequest,
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

  const setShowModalAndIndustry = (industry: IIndustry) => {
    setShowModal(true);
    addIndustryStorage(industry);
  };

  return (
    <>
      <SolutionSelectorModalEdit
        setShowModalEdit={setShowModal}
        showModalEdit={showModal}
        currentSolutions={selectedSolutions}
        nextPath={'/industries-details'}
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
                <div className="relative w-full flex flex-col border rounded-lg p-4 h-[28rem]">
                  <div className="flex justify-center h-64 w-full border rounded-lg">
                    <Image
                      src={item.image}
                      width="100"
                      height="140"
                      className="w-auto"
                      loading={'lazy'}
                      alt="Boosteriit"
                    />
                  </div>

                  <p className="mb-2 mt-2 text-md">{item.title}</p>
                  <p className="text-boo-str-description mb-6 text-xs">
                    {item.subtitle}
                  </p>
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center text-boo-btn-bg border border-boo-blue-2 bg-boo-blue-2">
                    {item.icon}
                  </div>
                  <button
                    className="flex py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover"
                    onClick={() => setShowModalAndIndustry(item)}
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
              <button
                className="flex py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover"
                onClick={() => goToUrl('/industries')}
              >
                Ver soluciones
              </button>
              <button
                className="flex py-5 px-6 w-full justify-center text-boo-btn-bg focus:outline-none rounded"
                onClick={() => setShowModalContact(true)}
              >
                Contacto
              </button>
            </div>
          </div>
        </Slider>
        <SlidesBtn style={'self-center mt-4'} next={next} previous={previous} />
      </div>
      <ContactModal {...modalContactProps} />
      <DataSendModal
        showModal={showModalDataSend}
        setShowModal={setShowDataSend}
      />
      <RequestSentModal
        showModal={showModalRequest}
        setShowModal={setShowModalRequest}
      />
    </>
  );
}
