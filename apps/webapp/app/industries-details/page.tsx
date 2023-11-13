'use client';
import React, { JSX, useState } from 'react';
import Image from 'next/image';
import Header from '../components/molecules/Header';
import Footer from '../components/organisms/Footer';
import useAppContext from '../contexts/hookAppContext';
import Helper from '../components/molecules/Helper';
import IndustriesSelector from '../components/atoms/IndustriesSelector';
import SolutionsNav from '../components/molecules/SolutionsNav';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import { PiPlugLight } from 'react-icons/pi';
import { IIndustry, industries } from '../../data/industries';
import {
  BsCheck2,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from 'react-icons/bs';
import { IModule } from '../../data/modules';
import { classSolutions, formatByCurrencyMXN } from '../../utils';

export default function IndustriesDetails(): JSX.Element {
  const { selectedIndustry, selectedSolutions } = useAppContext();

  const [showDetails, setShowDetails] = useState<string[]>(['mobile']);

  const setShowDetailsFn = (id: string, status: boolean) => {
    if (status) {
      setShowDetails([...showDetails, id]);
    } else {
      setShowDetails(showDetails.filter((solution: string) => solution !== id));
    }
  };
  const getCurrentIndustry = () => {
    const current = industries.find(
      (industry: IIndustry) => industry.id == selectedIndustry
    );
    return current ? current.title : '';
  };
  const canShow = (id: string) => {
    return selectedSolutions.find((solution: string) => solution === id);
  };

  const canShowDetails = (id: string) => {
    return showDetails.find((solution: string) => solution === id);
  };

  return (
    <div className="overflow-hidden">
      <Header title={'Industrias'} urlBack={'/'}>
        <IndustriesSelector />
      </Header>
      <SolutionsNav />
      {selectedIndustry && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex flex-col w-full md:w-9/12 p-4">
            <p>Industria | {getCurrentIndustry()}</p>
            {canShow('mobile') && (
              <div className="flex flex-col md:flex-row w-full flex-wrap mt-4 border rounded-lg p-6">
                <div className="flex justify-between items-center bg-white w-full">
                  <div className="bg-boo-mobile p-2 flex rounded-lg items-center text-white text-xs">
                    <FaMobileAlt />
                    <span className="ml-2">App Movil</span>
                  </div>
                  <div className="flex my-4 items-center text-xs text-boo-str-description">
                    <span className="font-light mr-2">
                      Tiempo de implementación
                    </span>
                    <AiOutlineClockCircle />
                    <p className="ml-2 font-semibold">30 días</p>
                  </div>
                </div>
                <div className="my-2 flex flex-col w-full">
                  <div className="flex flex-col md:flex-row w-full justify-between">
                    <Image
                      src="/assets/industries/mobile.svg"
                      width="150"
                      height="140"
                      priority
                      alt="Boosteriit"
                      className="w-auto"
                    />
                    <div className="flex flex-col w-6/12">
                      <span className="font-semibold">
                        Con tu app móvil obtén
                      </span>
                      <div className="flex items-start my-2 text-boo-str-description">
                        <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                        <p className="ml-2">Gestión y catálogo de vuelos</p>
                      </div>
                      <div className="flex items-start my-2 text-boo-str-description">
                        <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                        <p className="ml-2">Gestión y catálogo de hoteles</p>
                      </div>
                      <div className="flex items-start my-2 text-boo-str-description">
                        <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                        <p className="ml-2">
                          Registro de usuario con correo o redes sociales
                        </p>
                      </div>
                      <div className="flex items-start my-2 text-boo-str-description">
                        <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                        <p className="ml-2">
                          Proceso de pago con distintos métodos de cobro
                        </p>
                      </div>
                      <div className="flex items-start my-2 text-boo-str-description">
                        <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                        <p className="ml-2">Módulo con promociones y más...</p>
                      </div>
                    </div>
                  </div>
                </div>
                {canShowDetails('mobile') && (
                  <div className="w-full mt-2">
                    <div className="flex justify-between w-full gap-4">
                      <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                        <Image
                          src="/assets/industries/iph1.svg"
                          width="150"
                          height="140"
                          priority
                          alt="Boosteriit"
                          className="w-auto"
                        />
                      </div>
                      <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                        <Image
                          src="/assets/industries/iph2.svg"
                          width="150"
                          height="140"
                          priority
                          alt="Boosteriit"
                          className="w-auto"
                        />
                      </div>
                      <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                        <Image
                          src="/assets/industries/iph3.svg"
                          width="150"
                          height="140"
                          priority
                          alt="Boosteriit"
                          className="w-auto"
                        />
                      </div>
                      <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                        <Image
                          src="/assets/industries/iph4.svg"
                          width="150"
                          height="140"
                          priority
                          alt="Boosteriit"
                          className="w-auto"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                      <span className="font-semibold">
                        Añade módulos con funcionalidades extra y potencia tu
                        producto
                      </span>
                      <span className="text-boo-str-description">
                        Cada módulo tiene un costo por separado y un tiempo
                        adicional de implementación
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row w-full flex-wrap">
                      <div className="flex flex-col px-2 py-4 w-full md:w-1/3">
                        <div className="flex flex-col justify-between border-t border-x p-4 rounded-t-lg h-full">
                          <span className="text-boo-gray-hard text-sm font-light mb-4">
                            Historial de compras
                          </span>
                          <div className="flex flex-col">
                            <span className="text-boo-str-description mb-4">
                              Programa que se instala en tu ordenador, funciona
                              sin conexión a internet.
                            </span>
                            <p>$ 40,000 + IVA</p>
                            <div className="flex my-4 items-center text-xs text-boo-str-description">
                              <AiOutlineClockCircle />
                              <p className="ml-2">Lista en 30 días</p>
                            </div>
                          </div>
                        </div>
                        <div className="border p-4 rounded-b-lg">
                          <input
                            className="accent-green-400 cursor-pointer"
                            type="checkbox"
                          />
                          <span className="ml-2 text-boo-gray-hard font-normal text-sm">
                            Agregar a la solución
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex bg-boo-blue p-2 mt-4 w-full justify-center">
                  <div className="flex justify-between items-center">
                    <span className="text-boo-btn-bg text-lg mr-4">
                      {canShowDetails('mobile')
                        ? 'Ocultar detalles'
                        : 'Mostrar detalles'}
                    </span>
                    {canShowDetails('mobile') ? (
                      <div
                        onClick={() => setShowDetailsFn('mobile', false)}
                        className="cursor-pointer text-boo-btn-bg"
                      >
                        <BsChevronCompactUp />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowDetailsFn('mobile', true)}
                        className="cursor-pointer text-boo-btn-bg"
                      >
                        <BsChevronCompactDown />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {canShow('web') && (
              <div className="flex flex-col md:flex-row w-full flex-wrap mt-4 border rounded-lg p-4">
                web
              </div>
            )}
            {canShow('desktop') && (
              <div className="flex flex-col md:flex-row w-full flex-wrap mt-4 border rounded-lg p-4">
                desktop
              </div>
            )}
            <div className="flex flex-col my-6 w-full border rounded-lg p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white border border-boo-web bg-boo-web">
                  <PiPlugLight />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold"> Integraciones</span>
                  <span className="text-boo-str-description">
                    ¿Requieres conectar una integración en tu solución?
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-6 md:ml-16 gap-4">
                <span>
                  Selecciona las integraciones que requiere tu negocio.
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <input type="checkbox" className="accent-green-400 cursor-pointer"/>
                    <span className="text-boo-str-description">Filtrar promociones con IA</span>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" />
                    <span className="text-boo-str-description">CRM</span>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" className="accent-green-400 cursor-pointer"/>
                    <span className="text-boo-str-description">Sistema de facturación</span>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox"  className="accent-green-400 cursor-pointer"/>
                    <span className="text-boo-str-description">Motor de reservaciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:w-3/12 md:border-l-2">
            <p className="mb-6 font-semibold">Seleccionados</p>
          </div>
        </div>
      )}
      <Helper />
      <Footer />
    </div>
  );
}
