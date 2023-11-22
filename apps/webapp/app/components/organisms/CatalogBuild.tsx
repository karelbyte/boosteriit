import React, { JSX, useState } from 'react';
import Slider from 'react-slick';
import { BsPlusLg } from 'react-icons/bs';
import { BiHelpCircle } from 'react-icons/bi';
import SlidesBtn from '../molecules/SlidesBtn';
import SolutionSelectorModalEdit from '../molecules/SolutionSelectorModalEdit';
import useAppContext from '../../contexts/hookAppContext';
import { IModule, modules } from '../../../data/modules';
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

export default function CatalogBuild(): JSX.Element {
  const router = useRouter();
  const goToUrl = (path: string) => {
    router.push(path);
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
  const { selectedSolutions, setSelectedModules } = useAppContext();
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

  const items = modules.slice(0, 4);

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

  const [showModal, setShowModal] = useState<boolean>(false);

  const setShowModalAndModule = (module: IModule) => {
    setShowModal(true);
    setSelectedModules([module]);
  };

  return (
    <>
      <SolutionSelectorModalEdit
        setShowModalEdit={setShowModal}
        showModalEdit={showModal}
        currentSolutions={selectedSolutions}
        nextPath={'/modules'}
      />
      <div className="flex flex-col my-12 px-6 sm:my-24 sm:px-12 xl:my-12 xl:px-24">
        <p className="mb-6 font-bold text-xl text-justify md:text-center md:text-2xl lg:text-4xl">
          Arma tu solución
        </p>
        <p className="self-center w-24 border-t-2 mb-6 border-boo-btn-bg"></p>
        <p className="self-center mb-12 lg:w-10/12 xl:w-6/12 text-justify sm:text-center">
          Construye una aplicación a tu medida integrando los módulos que le den
          valor a tu producto.
        </p>
        <Slider ref={slider} {...settings}>
          {items &&
            items.map((item: IModule, index: number) => (
              <div key={index} className="p-2">
                <div className="flex flex-col border rounded-lg p-6 h-[28rem]">
                  <div className="h-64"></div>

                  <p className="mb-2 mt-2 text-md">{item.title}</p>
                  <p className="text-[#686767] mb-6 text-xs">{item.subtitle}</p>
                  <button
                    className={`flex py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover`}
                    onClick={() => setShowModalAndModule(item)}
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
                onClick={() => goToUrl('/modules')}
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
