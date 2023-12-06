'use client';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import React, { JSX, useEffect, useState } from 'react';
import Header from '../components/molecules/Header';
import Search from '../components/atoms/Search';
import Footer from '../components/organisms/Footer';
import SolutionsNav from '../components/molecules/SolutionsNav';
import ActionBtn from '../components/atoms/ActionBtn';
import useAppContext from '../contexts/hookAppContext';
import Sections from '../components/organisms/Sections';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { IModule, modules } from '../../data/modules';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import useModules from '../hooks/modulesHook';
import Helper from '../components/molecules/Helper';
import { ISolution } from '../../data/solutions';
import {
  classSolutions,
  formatByCurrencyMXN,
  getSubtotalPriceFormat,
  getTotalDays,
} from '../../utils';
import Image from 'next/image';

export default function Modules(): JSX.Element {
  const router = useRouter();
  const {
    selectedModules,
    setSelectedModules,
    setSelectedIndustry,
    setSelectedSolutions,
    selectedSolutions,
    selectedSections,
  } = useAppContext();

  const {
    currentModulesSelected,
    modulesWeb,
    modulesDesktop,
    modulesMobile,
    deleteModule,
    getStatusCheck,
    addModules,
    addModulesStorage,
  } = useModules();

  const [currentModules, setCurrentModules] = useState<IModule[]>(modules);

  const [term, setTerm] = useState<string>('');

  const sortModules = (modules: IModule[]) => {
    const compareModule = (aModule: IModule, bModule: IModule) => {
      const order: {
        web: number;
        desktop: number;
        mobile: number;
        [key: string]: number;
      } = {
        web: 0,
        desktop: 1,
        mobile: 2,
      };
      return order[aModule.solutions[0].id] - order[bModule.solutions[0].id];
    };
    return modules.sort(compareModule);
  };

  useEffect(() => {
    const modulesByTerm: IModule[] =
      term === ''
        ? modules
        : modules.filter((module: IModule) =>
            module.title.toLowerCase().includes(term.toLowerCase())
          );

    if (selectedSolutions.length > 0) {
      const modulesSolutions = modulesByTerm.filter((module: IModule) =>
        module.solutions.some((solution: ISolution) =>
          selectedSolutions
            .map((solution: ISolution) => solution.id)
            .includes(solution.id)
        )
      );
      if (selectedSections.length > 0) {
        const currentModules = modulesSolutions.filter((module: IModule) =>
          module.sections.some((section: string) =>
            selectedSections.includes(section)
          )
        );
        setCurrentModules(sortModules(currentModules));
        const enableIds = currentModules.map((module: IModule) => module.id);
        const currenModulesEnable = selectedModules.filter((module: IModule) =>
          enableIds.includes(module.id)
        );
        setSelectedModules(currenModulesEnable);
        addModulesStorage(currenModulesEnable);
      } else {
        setCurrentModules(sortModules(modulesSolutions));
        const enableIds = modulesSolutions.map((module: IModule) => module.id);
        const currenModulesEnable = selectedModules.filter((module: IModule) =>
          enableIds.includes(module.id)
        );
        setSelectedModules(currenModulesEnable);
        addModulesStorage(currenModulesEnable);
      }
    } else {
      setCurrentModules([]);
      setSelectedModules([]);
      addModulesStorage([]);
      // if (selectedSections.length > 0) {
      //   const current = modulesByTerm.filter((module: IModule) =>
      //     module.sections.some((section: string) =>
      //       selectedSections.includes(section)
      //     )
      //   );
      //   setCurrentModules(current);
      //   const enableIds = current.map((module: IModule) => module.id);
      //   const currenModulesEnable = selectedModules.filter((module: IModule) =>
      //     enableIds.includes(module.id)
      //   );
      //   setSelectedModules(currenModulesEnable);
      //   addModulesStorage(currenModulesEnable);
      // } else {
      //   setCurrentModules(selectedSolutions.length > 0 ? modulesByTerm : []);
      //   setSelectedModules([]);
      //   addModulesStorage([]);
      // }
    }
  }, [selectedSolutions, selectedSections, term]);

  const backActionBtn = () => {
    setSelectedIndustry(null);
    setSelectedSolutions([]);
    setSelectedModules([]);
  };

  const goToUrl = (url: string) => {
    router.push(url);
  };

  const [solutionShow, setSolutionShow] = useState<string[]>([
    'mobile',
    'desktop',
    'web',
  ]);
  const setSolutionShowStatus = (id: string, status: boolean) => {
    if (status) {
      setSolutionShow([...solutionShow, id]);
    } else {
      setSolutionShow(solutionShow.filter((module: string) => module !== id));
    }
  };

  const canShow = (id: string) => {
    return solutionShow.find((module: string) => module === id);
  };

  return (
    <div className="overflow-hidden">
      <Header title={'Arma tu solución'} urlBack={'/'} actionFn={backActionBtn}>
        <Search placeholder="Buscar" setTerm={setTerm} />
      </Header>
      <SolutionsNav />
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col w-full md:w-9/12">
          <div className="border-b px-10 md:px-10 py-4">
            <span>
              Selecciona los módulos o componentes para armar tu aplicación
              sitio web
            </span>
            <div className="mb-4">
              <Sections />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full flex-wrap">
            {currentModules.length > 0 ? (
              currentModules.map((module: IModule) => (
                <div
                  key={module.id}
                  className="flex flex-col px-2 py-4 w-full md:w-1/3"
                >
                  <div className="flex flex-col justify-between border-t border-x p-4 rounded-t-lg h-full">
                    <div className="relative flex mb-4">
                      <Image
                        src={module.image}
                        width="100"
                        height="140"
                        className="w-full"
                        loading={'lazy'}
                        alt="Boosteriit"
                      />
                      <div
                        className={`flex ${
                          classSolutions[module.solutions[0].id]
                        } h-8 text-white w-6/12 lg:w-7/12 xl:w-5/12 text-xs p-2 rounded-tr-lg self-end absolute`}
                      >
                        {module.solutions[0].icon}
                        <span className="hidden 2xl:flex ml-2">
                          {module.solutions[0].title}
                        </span>
                        <span className="flex 2xl:hidden ml-2">
                          {module.solutions[0].short}
                        </span>
                      </div>
                    </div>
                    <span className="text-boo-gray-hard text-sm font-light mb-4">
                      {module.title}
                    </span>
                    <div className="flex flex-col">
                      <span>
                        {module.price == 0 ? (
                          'Análisis detallado'
                        ) : (
                          <pre>$ {formatByCurrencyMXN(module.price)}</pre>
                        )}
                      </span>
                      <div className="flex">
                        <AiOutlineClockCircle />
                        <span className="font-light text-xs text-boo-str-description mb-2 ml-4">
                          {module.timeStr}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border p-4 rounded-b-lg">
                    <input
                      className="accent-green-400 cursor-pointer"
                      type="checkbox"
                      id={module.id}
                      onChange={() => addModules(module)}
                      checked={getStatusCheck(module.id)}
                    />
                    <span className="ml-2 text-boo-gray-hard font-normal text-sm">
                      Agregar a la solución
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex h-96 p-4 justify-center items-center w-full">
                <p className="text-boo-gray-hard font-semibold text-3xl">
                  Selecciona tu plataforma para visualizar tus componentes
                </p>
              </div>
            )}
          </div>
          {/*<div className="flex justify-center my-6">*/}
          {/*  <button className="py-2 px-4 rounded mr-2 border border-[boo-btn-bg text-boo-btn-bg hover:bg-boo-btn-bg-hover hover:text-white w-8/12 md:w-3/12">*/}
          {/*    <i className="fas fa-plus"></i> Cargar mas*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
        <div className="p-4 w-full md:w-3/12 md:border-l-2">
          <p className="mb-6 font-semibold">
            Seleccionados ({selectedModules.length})
          </p>
          {modulesMobile.length > 0 && (
            <div className="border-t pt-2 border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="pb-4 font-semibold text-sm">Aplicación Móvil</p>
                {canShow('mobile') ? (
                  <div
                    onClick={() => setSolutionShowStatus('mobile', false)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactUp />
                  </div>
                ) : (
                  <div
                    onClick={() => setSolutionShowStatus('mobile', true)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactDown />
                  </div>
                )}
              </div>

              {modulesMobile &&
                canShow('mobile') &&
                modulesMobile.map((module: IModule) => (
                  <div className="flex flex-col border-b mb-6 " key={module.id}>
                    <div className="flex text-xs justify-between">
                      <span className="w-8/12">{module.title}</span>
                      <span>
                        {module.price == 0 ? (
                          'Análisis detallado'
                        ) : (
                          <pre>$ {formatByCurrencyMXN(module.price)}</pre>
                        )}
                      </span>
                    </div>
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
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>
                  {getSubtotalPriceFormat(modulesMobile) !== '0' && (
                    <pre>
                      $ {getSubtotalPriceFormat(modulesMobile)}
                    </pre>
                  )}
                </p>
              </div>
              <div className="flex my-4">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {getTotalDays(modulesMobile) > 0 ? (
                      <pre>{getTotalDays(modulesMobile)} días</pre>
                    ) : (
                      'Análisis detallado'
                    )}
                  </p>
                </span>
              </div>
            </div>
          )}
          {modulesDesktop.length > 0 && (
            <div className="pt-2 border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="pb-4 font-semibold text-sm">
                  Aplicación de escritorio
                </p>
                {canShow('desktop') ? (
                  <div
                    onClick={() => setSolutionShowStatus('desktop', false)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactUp />
                  </div>
                ) : (
                  <div
                    onClick={() => setSolutionShowStatus('desktop', true)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactDown />
                  </div>
                )}
              </div>
              {modulesDesktop &&
                canShow('desktop') &&
                modulesDesktop.map((module: IModule) => (
                  <div className="flex flex-col border-b mb-6 " key={module.id}>
                    <div className="flex text-xs justify-between">
                      <span className="w-8/12">{module.title}</span>
                      <span>
                        {module.price == 0 ? (
                          'Análisis detallado'
                        ) : (
                          <pre>$ {formatByCurrencyMXN(module.price)}</pre>
                        )}
                      </span>
                    </div>
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
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>
                  {getSubtotalPriceFormat(modulesDesktop) !== '0' && (
                    <pre>
                      $ {getSubtotalPriceFormat(modulesDesktop)}
                    </pre>
                  )}
                </p>
              </div>
              <div className="flex my-4 item">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {getTotalDays(modulesDesktop) > 0 ? (
                      <pre>{getTotalDays(modulesDesktop)} días</pre>
                    ) : (
                      'Análisis detallado'
                    )}
                  </p>
                </span>
              </div>
            </div>
          )}
          {modulesWeb.length > 0 && (
            <div className="pt-2 border-b-2 mb-4">
              <div className="flex justify-between">
                <p className="pb-4 font-semibold text-sm">Aplicación de web</p>
                {canShow('web') ? (
                  <div
                    onClick={() => setSolutionShowStatus('web', false)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactUp />
                  </div>
                ) : (
                  <div
                    onClick={() => setSolutionShowStatus('web', true)}
                    className="cursor-pointer"
                  >
                    <BsChevronCompactDown />
                  </div>
                )}
              </div>
              {modulesWeb &&
                canShow('web') &&
                modulesWeb.map((module: IModule) => (
                  <div className="flex flex-col border-b mb-6 " key={module.id}>
                    <div className="flex text-xs justify-between">
                      <span className="w-8/12">{module.title}</span>
                      <span>
                        {module.price == 0 ? (
                          'Análisis detallado'
                        ) : (
                          <pre>$ {formatByCurrencyMXN(module.price)}</pre>
                        )}
                      </span>
                    </div>
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
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>
                  {getSubtotalPriceFormat(modulesWeb) !== '0' && (
                    <pre>
                      $ {getSubtotalPriceFormat(modulesWeb)}
                    </pre>
                  )}
                </p>
              </div>
              <div className="flex my-4 item">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {getTotalDays(modulesWeb) > 0 ? (
                      <pre>{getTotalDays(modulesWeb)} días</pre>
                    ) : (
                      'Análisis detallado'
                    )}
                  </p>
                </span>
              </div>
            </div>
          )}
          {selectedModules.length > 0 && (
            <>
              <div className="flex justify-between p-2">
                <p>Total de los productos</p>
                <p>
                  {getSubtotalPriceFormat(currentModulesSelected) !== '0' && (
                    <pre>
                      $ {getSubtotalPriceFormat(currentModulesSelected)}
                    </pre>
                  )}
                </p>
              </div>
              <div className="flex my-4 item items-center">
                <AiOutlineClockCircle className="text-boo-btn-bg" />
                <span className="flex items-center font-light text-xs text-boo-str-description ml-2">
                  Tiempo total:
                  <p className="font-semibold ml-4">
                    {getTotalDays(currentModulesSelected) > 0 ? (
                      <pre>{getTotalDays(currentModulesSelected)} días</pre>
                    ) : (
                      'Análisis detallado'
                    )}
                  </p>
                </span>
              </div>
              <ActionBtn
                title="Agregar al carrito"
                actionFn={() => goToUrl('/shopping-cart')}
              ></ActionBtn>
            </>
          )}
        </div>
      </div>
      <Helper />
      <Footer />
    </div>
  );
}
