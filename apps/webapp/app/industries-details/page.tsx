'use client';
import React, { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '../components/molecules/Header';
import Footer from '../components/organisms/Footer';
import useAppContext from '../contexts/hookAppContext';
import Helper from '../components/molecules/Helper';
import IndustriesSelector from '../components/atoms/IndustriesSelector';
import SolutionsNav from '../components/molecules/SolutionsNav';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { PiPlugLight } from 'react-icons/pi';
import { IoMdAlert } from 'react-icons/io';
import {
  BsCheck2,
  BsChevronCompactDown,
  BsChevronCompactUp,
} from 'react-icons/bs';
import ActionBtn from '../components/atoms/ActionBtn';
import {
  IFeature,
  IIndustryTemplate,
  industriesTemplate,
} from '../../data/industriesTemplate';
import { IIntegration, integrations } from '../../data/integrations';
import {
  classSolutions,
  formatByCurrencyMXN,
  getAdditional,
  getSubtotalPriceFormat,
  getTotalDays,
} from '../../utils';
import { IAdditional } from '../../data/addtionals';
import useIndustriesHook from '../hooks/useIndustriesHook';

export default function IndustriesDetails(): JSX.Element {
  const router = useRouter();
  const {
    selectedIndustry,
    selectedSolutions,
    selectedIndustriesTemplate,
    setSelectedIndustriesTemplate,
    selectedAdditionals,
    setSelectedAdditionals,
  } = useAppContext();

  const {
    checkOptions,
    setIntegrations,
    addTemplatesStorage,
    getAdditionalsStorage,
    getStatusCheck,
    getIntegrationStatusCheck
  } = useIndustriesHook();

  const [showDetails, setShowDetails] = useState<string[]>(['mobile']);

  const buildShoppingCart = () => {
    router.push('/shopping-cart');
  };

  const setShowDetailsFn = (id: string, status: boolean) => {
    if (status) {
      setShowDetails([...showDetails, id]);
    } else {
      setShowDetails(showDetails.filter((solution: string) => solution !== id));
    }
  };

  const canShowDetails = (id: string) => {
    return showDetails.find((solution: string) => solution === id);
  };

  useEffect(() => {
    setSelectedIndustriesTemplate([]);
    const templateForIndustries = industriesTemplate.filter(
      (template: IIndustryTemplate) =>
        template.industry === selectedIndustry?.id
    );
    const solutions = selectedSolutions.map((solution) => solution.id);

    const currents = templateForIndustries.filter(
      (template: IIndustryTemplate) => solutions.includes(template.solution)
    );
    const currentAdditionals = selectedAdditionals
      .concat(getAdditionalsStorage())
      .filter(
        (additional: IAdditional) =>
          additional.industry === selectedIndustry?.id
      )
      .filter((additional: IAdditional) =>
        solutions.includes(additional.solution)
      );
    setSelectedAdditionals(currentAdditionals);
    setSelectedIndustriesTemplate(currents);
    addTemplatesStorage(currents);
  }, [selectedSolutions, selectedIndustry]);

  return (
    <div className="overflow-hidden">
      <Header title={'Industrias'} urlBack={'/'}>
        <IndustriesSelector />
      </Header>
      <SolutionsNav />
      {selectedIndustriesTemplate && (
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex flex-col w-full md:w-9/12 p-4">
            <p>Industria | {selectedIndustry?.title}</p>
            {selectedIndustriesTemplate &&
              selectedIndustriesTemplate.map((template: IIndustryTemplate) => (
                <div
                  key={template.id}
                  className="flex flex-col md:flex-row w-full flex-wrap mt-4 border rounded-lg p-6"
                >
                  <div className="flex justify-between items-center bg-white w-full">
                    <div
                      className={`p-2 flex rounded-lg items-center text-white text-xs ${
                        classSolutions[template.solution]
                      }`}
                    >
                      {template.icon}
                      <span className="hidden md:flex">{template.title}</span>
                      <span className="flex md:hidden">{template.short}</span>
                    </div>
                    <div className="flex flex-col md:flex-row my-4 items-center text-xs text-boo-str-description">
                      <span className="font-light md:mr-2">
                        Tiempo de implementación
                      </span>
                      <div className="flex items-center self-end ">
                        <AiOutlineClockCircle />
                        <p className="ml-2 font-semibold">
                          {template.days} días
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-2 flex flex-col w-full">
                    <div className="flex flex-col md:flex-row w-full justify-between">
                      <Image
                        src={template.image}
                        width="150"
                        height="140"
                        priority
                        alt="Boosteriit"
                        className="w-auto"
                      />
                      <div className="flex flex-col w-full mt-8 md:mt-0 md:w-6/12">
                        <span className="font-semibold">
                          Con tu app móvil obtén
                        </span>
                        {template.features &&
                          template.features.map((feature: IFeature) => (
                            <div
                              key={feature.id}
                              className="flex items-start my-2 text-boo-str-description"
                            >
                              <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                              <p className="ml-2">{feature.title}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {canShowDetails(template.id) && (
                    <div className="w-full mt-2">
                      <div className="flex justify-between w-full gap-4">
                        <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                          <Image
                            src={template.image_slide1}
                            width="150"
                            height="140"
                            priority
                            alt="Boosteriit"
                            className="w-auto"
                          />
                        </div>
                        <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                          <Image
                            src={template.image_slide2}
                            width="150"
                            height="140"
                            priority
                            alt="Boosteriit"
                            className="w-auto"
                          />
                        </div>
                        <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                          <Image
                            src={template.image_slide3}
                            width="150"
                            height="140"
                            priority
                            alt="Boosteriit"
                            className="w-auto"
                          />
                        </div>
                        <div className="flex justify-center p-4 bg-boo-bg w-4/12">
                          <Image
                            src={template.image_slide4}
                            width="150"
                            height="140"
                            priority
                            alt="Boosteriit"
                            className="w-auto"
                          />
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col md:gap-4 mb-4">
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
                        {getAdditional(
                          template.solution,
                          template.industry
                        ).map((additional: IAdditional) => (
                          <div
                            key={additional.id}
                            className="flex flex-col md:px-2 md:py-4 w-full md:w-1/3"
                          >
                            <div className="flex flex-col justify-between border-t border-x p-4 md:rounded-t-lg h-full">
                              <span className="text-boo-gray-hard text-sm font-light mb-4">
                                {additional.title}
                              </span>
                              <div className="flex flex-col">
                                <span className="text-boo-str-description mb-4">
                                  {additional.description}
                                </span>
                                <p>$ {additional.price} + IVA</p>
                                <div className="flex my-4 items-center text-xs text-boo-str-description">
                                  <AiOutlineClockCircle />
                                  <p className="ml-2">
                                    Lista en {additional.days} días
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="border md:border p-4 md:rounded-b-lg">
                              <input
                                className="accent-green-400 cursor-pointer"
                                type="checkbox"
                                id={additional.id}
                                onChange={checkOptions}
                                checked={getStatusCheck(additional.id)}
                              />
                              <span className="ml-2 text-boo-gray-hard font-normal text-sm">
                                Agregar a la solución
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex bg-boo-blue p-2 mt-4 w-full justify-center">
                    <div className="flex justify-between items-center">
                      <span className="text-boo-btn-bg text-lg mr-4">
                        {canShowDetails(template.id)
                          ? 'Ocultar detalles'
                          : 'Mostrar detalles'}
                      </span>
                      {canShowDetails(template.id) ? (
                        <div
                          onClick={() => setShowDetailsFn(template.id, false)}
                          className="cursor-pointer text-boo-btn-bg"
                        >
                          <BsChevronCompactUp />
                        </div>
                      ) : (
                        <div
                          onClick={() => setShowDetailsFn(template.id, true)}
                          className="cursor-pointer text-boo-btn-bg"
                        >
                          <BsChevronCompactDown />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
                  {integrations &&
                    integrations.map((integration: IIntegration) => (
                      <div key={integration.id} className="flex gap-4">
                        <input
                          type="checkbox"
                          className="accent-green-400 cursor-pointer"
                          onChange={() => setIntegrations(integration) }
                          checked={getIntegrationStatusCheck(integration.id)}
                          id={integration.id}
                        />
                        <span className="text-boo-str-description">
                          {integration.title}
                        </span>
                      </div>
                    ))}
                </div>
                <div className="mt-2 border p-2 rounded-lg flex items-start xl:items-center gap-4 border-boo-alert bg-boo-alert-bg w-full xl:w-2/3">
                  <IoMdAlert className="text-boo-alert" />
                  El costo y tiempo de cada integración se detalla en la sesión
                  de conocimiento.
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full md:w-3/12 md:border-l-2">
            <p className="mb-6 font-semibold">
              Seleccionados ({selectedIndustriesTemplate.length})
            </p>
            {selectedIndustriesTemplate.length > 0 &&
              selectedIndustriesTemplate.map((template: IIndustryTemplate) => (
                <div key={template.id}>
                  <div className="flex justify-between p-2">
                    <p>{template.title}</p>
                    <p>${formatByCurrencyMXN(template.price)}</p>
                  </div>
                  <div className="flex my-4 item items-center">
                    <AiOutlineClockCircle className="text-boo-btn-bg" />
                    <span className="flex items-center font-light text-xs text-boo-str-description ml-2">
                      Lista en:
                      <p className="font-semibold ml-4">{template.days} días</p>
                    </span>
                  </div>
                </div>
              ))}
            {selectedIndustriesTemplate.length > 0 && (
              <div className="flex flex-col">
                <div className="flex justify-between p-2">
                  <p>Total de los productos</p>
                  <p>$ {getSubtotalPriceFormat(selectedIndustriesTemplate)}</p>
                </div>
                <ActionBtn
                  title="Agregar al carrito"
                  actionFn={buildShoppingCart}
                ></ActionBtn>
                <div className="flex my-4 item items-center self-center">
                  <AiOutlineClockCircle className="text-boo-btn-bg" />
                  <span className="flex items-center font-light text-xs text-boo-str-description ml-2">
                    Tiempo total:
                    <p className="font-semibold ml-2">
                      {getTotalDays(selectedIndustriesTemplate)} días
                    </p>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Helper />
      <div className="hidden md:flex">
        <Footer />
      </div>
    </div>
  );
}
