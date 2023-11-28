'use client';
import React, { JSX, useEffect, useState } from "react";
import Header from '../components/molecules/Header';
import useAppContext from '../contexts/hookAppContext';
import Footer from '../components/organisms/Footer';
import SolutionSelectorModalEdit from '../components/molecules/SolutionSelectorModalEdit';
import ActionBtn from '../components/atoms/ActionBtn';
import ContactModal from '../components/organisms/ContactModal';
import DataSendModal from '../components/organisms/DataSendModal';
import RequestSentModal from '../components/organisms/RequestSentModal';
import ShoppingCartModuleSection from '../components/organisms/ShoppingCartModuleSection';
import useModules from '../hooks/modulesHook';
import Helper from '../components/molecules/Helper';
import Image from 'next/image';
import {
  BsCheck2,
  BsChevronCompactDown,
  BsChevronCompactUp,
  BsTrash3,
} from 'react-icons/bs';
import { IAdditional } from '../../data/addtionals';
import { IFeature, IIndustryTemplate } from '../../data/industriesTemplate';
import {
  formatByCurrencyMXN,
  getSubtotalPrice,
  getSubtotalPriceFormat,
} from '../../utils';
import ErrorModal from '../components/molecules/ErrorModal';
import SolutionBreadcrumbs from '../components/molecules/SolutionBreadcrumbs';
import ShoppingCartEmpty from '../components/organisms/ShoppingCartEmpty';
import DeleteModal from '../components/molecules/DeleteModal';
import { IIntegration, integrations } from '../../data/integrations';
import useIndustriesHook from '../hooks/useIndustriesHook';
export default function ShoppingCart(): JSX.Element {
  const {
    selectedSolutions,
    selectedIndustry,
    selectedIndustriesTemplate,
    selectedAdditionals,
    setSelectedIndustriesTemplate,
    selectedIntegrations,
    setSelectedAdditionals
  } = useAppContext();

  const {
    modulesWeb,
    modulesDesktop,
    modulesMobile,
    currentModulesSelected,
    deleteModule,
  } = useModules();

  const { setIntegrations, getIntegrationStatusCheck, getAdditionalsStorage } = useIndustriesHook();

  const [showModalSelectSolution, setShowModalSelectSolution] =
    useState<boolean>(false);

  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [showModalDataSend, setShowDataSend] = useState<boolean>(false);

  const [showModalRequest, setShowModalRequest] = useState<boolean>(false);

  const [showModalError, setShowModalError] = useState<boolean>(false);

  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const [templateId, setTemplateId] = useState<string>('');

  const modalContactProps = {
    showModal: showModalContact,
    setShowModal: setShowModalContact,
    activeModalSendSuccess: setShowDataSend,
    activeModalRequestSuccess: setShowModalRequest,
    activeModalError: setShowModalError,
  };
  const [modulesShow, setModulesShow] = useState<string[]>([]);

  const setShowStatus = (id: string, status: boolean) => {
    if (status) {
      setModulesShow([...modulesShow, id]);
    } else {
      setModulesShow(modulesShow.filter((module: string) => module !== id));
    }
  };

  const canShow = (id: string) => {
    return modulesShow.find((module: string) => module === id);
  };

  const getAdditional = (solution: string, industry: string) => {
    return selectedAdditionals
      .filter((additional: IAdditional) => additional.industry === industry)
      .filter((additional: IAdditional) => additional.solution === solution);
  };

  const getTotalCountOfProducts = () => {
    return currentModulesSelected.length + selectedIndustriesTemplate.length;
  };

  const getSubtotalOfProducts = () => {
    return (
      getSubtotalPrice(currentModulesSelected) +
      getSubtotalPrice(selectedIndustriesTemplate)
    );
  };

  const getSubtotalOfProductsAndAditionals = () => {
    const totalAddtionals = getSubtotalPrice(selectedAdditionals);
    return getSubtotalOfProducts() + totalAddtionals;
  };

  const getIva = () => {
    return getSubtotalOfProductsAndAditionals() * 0.16;
  };

  const getTotalPriceWhitIVA = () => {
    return getSubtotalOfProductsAndAditionals() + getIva();
  };

  const deleteTemplate = (id: string) => {
    setSelectedIndustriesTemplate(
      selectedIndustriesTemplate.filter(
        (template: IIndustryTemplate) => template.id !== id
      )
    );
    setShowModalDelete(false);
  };

  const showDeleteModal = (id: string) => {
    setTemplateId(id);
    setShowModalDelete(true);
  };

  useEffect(() => {
    if (selectedAdditionals.length === 0) {
      setSelectedAdditionals(getAdditionalsStorage())
    }
  }, []);

  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <SolutionSelectorModalEdit
        currentSolutions={selectedSolutions}
        setShowModalEdit={setShowModalSelectSolution}
        showModalEdit={showModalSelectSolution}
        edit={true}
      />
      <Header title={'Carrito de compra'} urlBack={'/'}>
        <></>
      </Header>
      <div className="flex-1 bg-boo-blue">
        {currentModulesSelected.length == 0 &&
          selectedIndustriesTemplate.length == 0 && <ShoppingCartEmpty />}
        <div className="flex flex-col w-full p-6 text-black mt-10 md:flex-row sm:py-4 sm:px-10 lg:px-20">
          <div className="flex flex-col w-full">
            {currentModulesSelected.length > 0 && (
              <div className="w-full">
                <p className="text-xl xl:text-2xl mb-4 mt-4 md:mt-10">
                  Arma una solución a tu medida
                </p>
                <SolutionBreadcrumbs
                  setShowModalSelectSolution={setShowModalSelectSolution}
                />
                <div className="flex flex-col md:flex-row w-full mt-4">
                  <div className="flex flex-col gap-4 w-full pr-0 md:pr-4">
                    {modulesMobile.length > 0 && (
                      <ShoppingCartModuleSection
                        title={'Aplicación movil'}
                        modules={modulesMobile}
                        deleteModule={deleteModule}
                        canShow={canShow}
                        setShowStatus={setShowStatus}
                      />
                    )}
                    {modulesDesktop.length > 0 && (
                      <ShoppingCartModuleSection
                        title={'Aplicación de escritorio'}
                        modules={modulesDesktop}
                        deleteModule={deleteModule}
                        canShow={canShow}
                        setShowStatus={setShowStatus}
                      />
                    )}
                    {modulesWeb.length > 0 && (
                      <ShoppingCartModuleSection
                        title={'Aplicación web'}
                        modules={modulesWeb}
                        deleteModule={deleteModule}
                        canShow={canShow}
                        setShowStatus={setShowStatus}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
            {selectedIndustriesTemplate.length > 0 && (
              <div className="w-full mt-8">
                <p className="text-xl xl:text-2xl mb-4">
                  Industria | {selectedIndustry?.title}
                </p>
                <SolutionBreadcrumbs
                  setShowModalSelectSolution={setShowModalSelectSolution}
                />
                <div className="flex flex-col md:flex-row w-full mt-4">
                  <div className="flex flex-col gap-4 w-full pr-0 md:pr-4">
                    {selectedIndustriesTemplate &&
                      selectedIndustriesTemplate.map(
                        (template: IIndustryTemplate) => (
                          <div key={template.id} className="w-full">
                            <div className="flex items-center justify-between w-full border-t border-x bg-white rounded-t-lg p-4">
                              <div className="p-2 flex items-center text-md">
                                {template.icon}
                                <span className="ml-2">{template.title}</span>
                              </div>
                              <div
                                className="text-red-800 cursor-pointer"
                                onClick={() => showDeleteModal(template.id)}
                              >
                                <BsTrash3 />
                              </div>
                            </div>
                            <div className="border-t bg-white border-x w-full">
                              <div className="flex justify-between items-start mt-4 px-6 py-4">
                                <div className="flex">
                                  <Image
                                    src={template.image}
                                    width="150"
                                    height="140"
                                    priority
                                    alt="Boosteriit"
                                    className="w-24"
                                  />
                                  <div className="flex flex-col ml-4">
                                    <span>{selectedIndustry?.title}</span>
                                    <div className="flex items-center mt-2">
                                      <span className="text-xs lg:text-base text-boo-str-description">
                                        Listo en: {template.days} dias
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <span className="text-xs lg:text-base">
                                  ${formatByCurrencyMXN(template.price)} MXN
                                </span>
                              </div>
                            </div>
                            <div className="bg-white border-x p-4">
                              <div className="flex justify-between border-b p-6">
                                <span className="font-semibold">
                                  Funcionalidades
                                </span>
                                {canShow(template.id) ? (
                                  <div
                                    onClick={() =>
                                      setShowStatus(template.id, false)
                                    }
                                    className="cursor-pointer"
                                  >
                                    <BsChevronCompactUp />
                                  </div>
                                ) : (
                                  <div
                                    onClick={() =>
                                      setShowStatus(template.id, true)
                                    }
                                    className="cursor-pointer"
                                  >
                                    <BsChevronCompactDown />
                                  </div>
                                )}
                              </div>
                              {canShow(template.id) && (
                                <>
                                  <div className="border-b p-6">
                                    <span className="font-semibold">
                                      Incluidas en el producto
                                    </span>
                                    <div className="grid grid-cols-2 mt-2">
                                      {template.features &&
                                        template.features.map(
                                          (feature: IFeature) => (
                                            <div
                                              key={feature.id}
                                              className="flex items-start my-2 text-boo-str-description mr-4"
                                            >
                                              <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                                              <p className="ml-2">
                                                {feature.title}
                                              </p>
                                            </div>
                                          )
                                        )}
                                    </div>
                                  </div>
                                  {getAdditional(
                                    template.solution,
                                    template.industry
                                  ).length > 0 && (
                                    <div className="p-6">
                                      <span className="font-semibold">
                                        Agregadas como extra
                                      </span>
                                      <div className="grid grid-cols-2 mt-2">
                                        {getAdditional(
                                          template.solution,
                                          template.industry
                                        ).map((feature: IFeature) => (
                                          <div
                                            key={feature.id}
                                            className="flex items-start my-2 text-boo-str-description mr-4"
                                          >
                                            <BsCheck2 className="text-green-400 flex-shrink-0 mt-1" />
                                            <p className="mx-2">
                                              {feature.title}
                                            </p>
                                            <p>
                                              $
                                              {formatByCurrencyMXN(
                                                feature.price
                                              )}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                            <div className="w-full border-x border-b bg-white rounded-b-lg p-2"></div>
                          </div>
                        )
                      )}
                    {selectedIntegrations.length > 0 && (
                      <div className="bg-white border p-4 rounded-lg">
                        <p className="mb-6 text-md font-semibold">
                          Integraciones.
                        </p>
                        <div className="flex flex-col gap-4">
                          {integrations &&
                            integrations.map((integration: IIntegration) => (
                              <div key={integration.id} className="flex gap-4">
                                <input
                                  type="checkbox"
                                  className="accent-green-400 cursor-pointer"
                                  onChange={() => setIntegrations(integration)}
                                  checked={getIntegrationStatusCheck(
                                    integration.id
                                  )}
                                  id={integration.id}
                                />
                                <span className="text-boo-str-description">
                                  {integration.title}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {(currentModulesSelected.length > 0 ||
            selectedIndustriesTemplate.length > 0) && (
            <div className="w-full mt-10 md:w-6/12  md:mt-[6rem]">
              <div className="border-x border-t p-4 bg-white rounded-t-lg">
                Resumen de orden
              </div>
              <div className="border p-4 bg-white">
                <div className="flex justify-between mb-4">
                  <span>Productos ({getTotalCountOfProducts()})</span>
                  <span>${formatByCurrencyMXN(getSubtotalOfProducts())}</span>
                </div>
                {selectedIndustry && (
                  <div className="flex justify-between mb-4 text-boo-str-description">
                    <span>Funciones Extras ({selectedAdditionals.length})</span>
                    <span>{getSubtotalPriceFormat(selectedAdditionals)}</span>
                  </div>
                )}
                <div className="border mb-4"></div>
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span>
                    ${formatByCurrencyMXN(getSubtotalOfProductsAndAditionals())}
                  </span>
                </div>
                <div className="flex justify-between mb-4 text-boo-str-description">
                  <span>IVA</span>
                  <span>${formatByCurrencyMXN(getIva())}</span>
                </div>
              </div>
              <div className="border-x border-b p-4 bg-white  rounded-b-lg">
                <div className="flex justify-between mb-4">
                  <span>TOTAL</span>
                  <span>${formatByCurrencyMXN(getTotalPriceWhitIVA())}</span>
                </div>
                <ActionBtn
                  title="Construir"
                  actionFn={() => setShowModalContact(true)}
                />
              </div>
            </div>
          )}
        </div>
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
      <DeleteModal
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
        caption={'¿Seguro que deseas eliminar el producto de tu carrito?'}
        deleteAction={() => deleteTemplate(templateId)}
      />
      <ErrorModal showModal={showModalError} setShowModal={setShowModalError} />
      <Helper />
      <div className="hidden md:flex mt-10 md:mt-0">
        <Footer />
      </div>
    </div>
  );
}
