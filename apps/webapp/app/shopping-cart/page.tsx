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
import { formatByCurrencyMXN, getTotalDays } from '../../utils';
import { ISolution, solutions } from '../../data/solutions';
import { IModule } from '../../data/modules';
import { AiOutlineClockCircle } from 'react-icons/ai';
import useModules from '../hooks/modulesHook';
import ShoppingCartSection from '../components/organisms/ShoppingCartSection';
import Helper from "../components/molecules/Helper";
export default function ShoppingCart(): JSX.Element {
  const {
    selectedModules,
    setSelectedModules,
    selectedSolutions,
    selectedIndustry,
  } = useAppContext();

  const { modulesWeb, modulesDesktop, modulesMobile, currentModulesSelected } =
    useModules();

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
        edit={true}
      />
      <Header title={'Carrito de compra'} urlBack={'/industries'}>
        <></>
      </Header>
      <div className="flex-1 bg-boo-blue">
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
                  <span
                    key={solution.id}
                    className="text-sm text-boo-gray-hard"
                  >
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
            <div className="flex flex-col md:flex-row w-full mt-4">
              <div className="flex flex-col gap-4 w-full pr-4">
                {modulesMobile.length > 0 && (
                  <div className="w-full">
                    <div className="flex justify-between items-center border-y border-x px-4 rounded-t-lg bg-white">
                      <span className="font-semibold">Aplicacion movil</span>
                      <div className="flex my-4 items-center text-xs text-boo-str-description">
                        <AiOutlineClockCircle />
                        <span className="font-light ml-2">
                          Tiempo aprox de implementación
                        </span>
                        <p className="ml-2 font-semibold">
                          {getTotalDays(modulesMobile)} días
                        </p>
                      </div>
                    </div>
                    <ShoppingCartSection
                      modules={modulesMobile}
                      deleteModule={deleteModule}
                      canShow={canShow}
                      setShowStatus={setShowStatus}
                    />
                    <div className="border-b border-x p-1 rounded-b-lg bg-white"></div>
                  </div>
                )}
                {modulesDesktop.length > 0 && (
                  <div className="w-full">
                    <div className="flex justify-between items-center border-y border-x px-4 rounded-t-lg bg-white">
                      <span className="font-semibold">Aplicacion desktop</span>
                      <div className="flex my-4 items-center text-xs text-boo-str-description">
                        <AiOutlineClockCircle />
                        <span className="font-light ml-2">
                          Tiempo aprox de implementación
                        </span>
                        <p className="ml-2 font-semibold">
                          {getTotalDays(modulesDesktop)} días
                        </p>
                      </div>
                    </div>
                    <ShoppingCartSection
                      modules={modulesDesktop}
                      deleteModule={deleteModule}
                      canShow={canShow}
                      setShowStatus={setShowStatus}
                    />
                    <div className="border-b border-x p-1 rounded-b-lg bg-white"></div>
                  </div>
                )}
                {modulesWeb.length > 0 && (
                  <div className="w-full">
                    <div className="flex justify-between items-center border-y border-x px-4 rounded-t-lg bg-white">
                      <span className="font-semibold">Aplicacion web</span>
                      <div className="flex my-4 items-center text-xs text-boo-str-description">
                        <AiOutlineClockCircle />
                        <span className="font-light ml-2">
                          Tiempo aprox de implementación
                        </span>
                        <p className="ml-2 font-semibold">
                          {getTotalDays(modulesWeb)} días
                        </p>
                      </div>
                    </div>
                    <ShoppingCartSection
                      modules={modulesWeb}
                      deleteModule={deleteModule}
                      canShow={canShow}
                      setShowStatus={setShowStatus}
                    />
                    <div className="border-b border-x p-1 rounded-b-lg bg-white"></div>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-4/12">
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
      <Helper/>
      <Footer />
    </div>
  );
}
