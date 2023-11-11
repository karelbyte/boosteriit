'use client';
import React, { JSX, useState } from 'react';
import Header from '../components/molecules/Header';
import useAppContext from '../contexts/hookAppContext';
import Footer from '../components/organisms/Footer';
import SolutionSelectorModalEdit from '../components/molecules/SolutionSelectorModalEdit';
import ActionBtn from '../components/atoms/ActionBtn';
import ContactModal from '../components/organisms/ContactModal';
import DataSendModal from '../components/organisms/DataSendModal';
import RequestSentModal from '../components/organisms/RequestSentModal';
import { formatByCurrencyMXN } from '../../utils';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { ISolution, solutions } from '../../data/solutions';
import { IModule, modules } from '../../data/modules';
export default function ShoppingCart(): JSX.Element {
  const {
    selectedModules,
    setSelectedModules,
    selectedSolutions,
    selectedIndustry,
  } = useAppContext();

  const [showModalSelectSolution, setShowModalSelectSolution] =
    useState<boolean>(false);

  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  const [showModalDataSend, setShowDataSend] = useState<boolean>(false);

  const [showModalRequest, setShowModalRequest] = useState<boolean>(false);

  const modalContactProps = {
    showModal: showModalContact,
    setShowModal: setShowModalContact,
    activeModalSendSuccess: setShowDataSend,
    activeModalRequestSuccess: setShowModalRequest,
  };
  const [modulesShow, setModulesShow] = useState<string[]>([]);

  const currentModulesSelected = modules.filter((nodule: IModule) =>
    selectedModules.includes(nodule.id)
  );

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

  const getSubtotalPrice = () => {
    return currentModulesSelected.reduce((carry: number, module: IModule) => {
      return carry + module.price;
    }, 0);
  };

  const getSubtotalPriceFormat = () => {
    return formatByCurrencyMXN(getSubtotalPrice());
  };

  const getIva = () => {
    return getSubtotalPrice() * 0.16;
  };

  const getIvaFormat = () => {
    return formatByCurrencyMXN(getIva());
  };

  const getTotalPriceWhitIVA = () => {
    const subtotal = getSubtotalPrice();
    const iva = getIva();
    return formatByCurrencyMXN(subtotal + iva);
  };

  const deleteModule = (id: string) => {
    setSelectedModules(
      selectedModules.filter((module: string) => module !== id)
    );
  };

  const solutionsToShow = solutions.filter((solution: ISolution) =>
    selectedSolutions.includes(solution.id)
  );

  return (
    <div className="overflow-hidden flex flex-col min-h-screen">
      <SolutionSelectorModalEdit
        currentSolutions={selectedSolutions}
        setShowModalEdit={setShowModalSelectSolution}
        showModalEdit={showModalSelectSolution}
      />
      <Header title={'Carrito de compra'} urlBack={'/industries'}>
        <></>
      </Header>
      <div className="flex-1 bg-[#ECF5FE]">
        {currentModulesSelected.length == 0 ? (
          <div className="flex justify-center items-center p-6 text-black mt-20 py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20">
            <p className="text-xl xl:text-2xl mb-4 mt-20 ">Arma una solución</p>
          </div>
        ) : (
          <div className="p-6 text-black mt-20 py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20">
            <p className="text-xl xl:text-2xl mb-4">
              Arma una solución a tu medida
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              {solutionsToShow &&
                solutionsToShow.map((solution: ISolution, index: number) => (
                  <span key={solution.id} className="text-sm text-boo-gray-hard">
                    {index == 0 ? (
                      solution.title
                    ) : (
                      <span className="flex">
                        <span className="hidden md:flex">-</span>
                        {solution.title}
                      </span>
                    )}
                  </span>
                ))}
              {solutionsToShow.length > 0 && (
                <ActionBtn
                  title="editar"
                  styleClass="border-none ml-4 text-boo-btn-bg underline"
                  actionFn={() => setShowModalSelectSolution(true)}
                />
              )}
            </div>
            <div className="flex flex-col md:flex-row mt-6 gap-4 ">
              <div className="w-full sm:w-8/12">
                {currentModulesSelected &&
                  currentModulesSelected.map((module: IModule) => (
                    <div key={module.id} className="w-full ">
                      <div className="flex flex-col sm:flex-row border-t border-x rounded-t-md  bg-white p-4 justify-between items-center w-full">
                        <div className="border h-16 w-16 bg-slate-50 mr-4"></div>
                        <div className="w-8/12">
                          <p>{module.title}</p>
                          <span className="flex font-light text-xs text-boo-str-description mb-2 mt-2">
                            {module.timeStr}
                            <div
                              className="ml-4 text-boo-btn-bg underline cursor-pointer"
                              onClick={() => deleteModule(module.id)}
                            >
                              eliminar
                            </div>
                          </span>
                        </div>
                        <span className="font-semibold text-lg ">
                          $ {formatByCurrencyMXN(module.price)}
                        </span>
                      </div>
                      <div className="border rounded-b-lg mb-4 bg-white p-2 flex flex-col ">
                        <div className="flex justify-between">
                          <span className="ml-2 text-boo-gray-hard font-normal text-sm">
                            Descripción de la funcionalidad del módulo
                          </span>
                          {canShow(module.id) ? (
                            <div
                              onClick={() => setShowStatus(module.id, false)}
                              className="cursor-pointer"
                            >
                              <BsChevronCompactUp />
                            </div>
                          ) : (
                            <div
                              onClick={() => setShowStatus(module.id, true)}
                              className="cursor-pointer"
                            >
                              <BsChevronCompactDown />
                            </div>
                          )}
                        </div>

                        {canShow(module.id) && (
                          <div className="mt-2 font-light text-boo-str-description text-sm p-2">
                            <p>{module.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-full sm:w-4/12">
                <div className="border-x border-t p-4 bg-white rounded-t-lg">
                  Resumen de orden
                </div>
                <div className="border p-4 bg-white">
                  <div className="flex justify-between mb-4">
                    <span>Productos ({currentModulesSelected.length})</span>
                    <span>$500,000</span>
                  </div>
                  {selectedIndustry.length > 0 && (
                    <div className="flex justify-between mb-4 text-boo-str-description">
                      <span>Funciones Extras ()</span>
                      <span>$500,000</span>
                    </div>
                  )}
                  <div className="border mb-4"></div>
                  <div className="flex justify-between mb-4">
                    <span>Subtotal</span>
                    <span>${getSubtotalPriceFormat()}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-boo-str-description">
                    <span>IVA</span>
                    <span>${getIvaFormat()}</span>
                  </div>
                </div>
                <div className="border-x border-b p-4 bg-white  rounded-b-lg">
                  <div className="flex justify-between mb-4">
                    <span>TOTAL</span>
                    <span>${getTotalPriceWhitIVA()}</span>
                  </div>
                  <ActionBtn
                    title="Construir"
                    actionFn={() => setShowModalContact(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
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
      <Footer />
    </div>
  );
}
