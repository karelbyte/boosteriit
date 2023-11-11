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
import { formatByCurrencyMXN, getTotalDays, getTotalPrice } from '../../utils';
import { IModule, ISolutionAvailable, modules } from '../../data/modules';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import useModules from '../hooks/modulesHook';

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
    setCurrentModulesSelected,
    modulesWeb,
    setModulesWeb,
    modulesDesktop,
    setModulesDesktop,
    modulesMobile,
    setModulesMobile,
  } = useModules();

  const [currentModules, setCurrentModules] = useState<IModule[]>(modules);

  useEffect(() => {
    if (selectedSolutions.length > 0) {
      const modulesSolutions = modules.filter((module: IModule) =>
        module.solutions.some((solution: ISolutionAvailable) =>
          selectedSolutions.includes(solution.id)
        )
      );
      if (selectedSections.length > 0) {
        setCurrentModules(
          modulesSolutions.filter((module: IModule) =>
            module.sections.some((section: string) =>
              selectedSections.includes(section)
            )
          )
        );
      } else {
        setCurrentModules(modulesSolutions);
      }
    } else {
      if (selectedSections.length > 0) {
        setCurrentModules(
          modules.filter((module: IModule) =>
            module.sections.some((section: string) =>
              selectedSections.includes(section)
            )
          )
        );
      } else {
        setCurrentModules(modules);
      }
    }
  }, [selectedSolutions, selectedSections]);

  useEffect(() => {
    setCurrentModulesSelected(
      modules.filter((nodule: IModule) => selectedModules.includes(nodule.id))
    );
  }, [selectedModules]);

  useEffect(() => {
    setModulesWeb(
      currentModulesSelected.filter((module) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'web'
        )
      )
    );
    setModulesDesktop(
      currentModulesSelected.filter((module) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'desktop'
        )
      )
    );
    setModulesMobile(
      currentModulesSelected.filter((module) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'mobile'
        )
      )
    );
  }, [currentModulesSelected]);

  const addModules = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedModules([...selectedModules, id]);
    } else {
      setSelectedModules(
        selectedModules.filter((option: string) => option !== id)
      );
    }
  };
  const backActionBtn = () => {
    setSelectedIndustry('');
    setSelectedSolutions([]);
    setSelectedModules([]);
  };

  const deleteModule = (id: string) => {
    if (document) {
      const elem: HTMLInputElement | null = document.getElementById(
        id
      ) as HTMLInputElement;
      if (elem) elem.checked = false;
    }
    setSelectedModules(
      selectedModules.filter((module: string) => module !== id)
    );
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
      <Header
        title={'Arma tu solución'}
        urlBack={'/industries'}
        actionFn={backActionBtn}
      >
        <Search placeholder="Buscar por nombre o industria" />
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
            {currentModules &&
              currentModules.map((module: IModule) => (
                <div
                  key={module.id}
                  className="flex flex-col px-2 py-4 w-full md:w-1/3"
                >
                  <div className="flex flex-col justify-between border-t border-x p-4 rounded-t-lg h-full">
                    <div className="flex border rounded-lg h-48 mb-4">
                      <div className="flex bg-boo-mobile h-8 text-white w-7/12 lg:w-6/12 xl:w-5/12 text-xs p-2 rounded-tr-lg self-end">
                        {module.solutions[0].icon}
                        <span className="ml-2">
                          {module.solutions[0].title}
                        </span>
                      </div>
                    </div>
                    <span className="text-[#161616] text-sm font-light mb-4">
                      {module.title}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg mb-4">
                        $ {formatByCurrencyMXN(module.price)}
                      </span>
                      <div className="flex">
                        <AiOutlineClockCircle />
                        <span className="font-light text-xs text-[#686767] mb-2 ml-4">
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
                      onChange={addModules}
                    />
                    <span className="ml-2 text-[#161616] font-normal text-sm">
                      Agregar a la solución
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center my-6">
            <button className="py-2 px-4 rounded mr-2 border border-[#00B8EC] text-[#00B8EC] hover:bg-[#007799] hover:text-white w-8/12 md:w-3/12">
              <i className="fas fa-plus"></i> Cargar mas
            </button>
          </div>
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
                      <span> $ {formatByCurrencyMXN(module.price)}</span>
                    </div>
                    <span className="flex font-light text-xs text-boo-str-description mb-2 mt-2">
                      {module.timeStr}
                      <div
                        className="ml-4 text-[#00B8EC] underline"
                        onClick={() => deleteModule(module.id)}
                      >
                        eliminar
                      </div>
                    </span>
                  </div>
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>$ {getTotalPrice(modulesMobile)}</p>
              </div>
              <div className="flex my-4">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {' '}
                    {getTotalDays(modulesMobile)} días
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
                      <span> $ {formatByCurrencyMXN(module.price)}</span>
                    </div>
                    <span className="flex font-light text-xs text-boo-str-description mb-2 mt-2">
                      {module.timeStr}
                      <div
                        className="ml-4 text-[#00B8EC] underline"
                        onClick={() => deleteModule(module.id)}
                      >
                        eliminar
                      </div>
                    </span>
                  </div>
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>$ {getTotalPrice(modulesDesktop)}</p>
              </div>
              <div className="flex my-4 item">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {' '}
                    {getTotalDays(modulesDesktop)} días
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
                      <span> $ {formatByCurrencyMXN(module.price)}</span>
                    </div>
                    <span className="flex font-light text-xs text-boo-str-description mb-2 mt-2">
                      {module.timeStr}
                      <div
                        className="ml-4 text-[#00B8EC] underline"
                        onClick={() => deleteModule(module.id)}
                      >
                        eliminar
                      </div>
                    </span>
                  </div>
                ))}
              <div className="flex justify-between bg-boo-blue p-1 text-sm">
                <p>Total</p>
                <p>$ {getTotalPrice(modulesWeb)}</p>
              </div>
              <div className="flex my-4 item">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-boo-str-description mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2">
                    {' '}
                    {getTotalDays(modulesWeb)} días
                  </p>
                </span>
              </div>
            </div>
          )}
          {selectedModules.length > 0 && (
            <>
              <div className="flex justify-between p-2">
                <p>Total de los productos</p>
                <p>$ {getTotalPrice(currentModulesSelected)}</p>
              </div>
              <div className="flex my-4 item items-center">
                <AiOutlineClockCircle className="text-boo-btn-bg" />
                <span className="flex items-center font-light text-xs text-boo-str-description ml-2">
                  Tiempo total:
                  <p className="font-semibold ml-4">
                    {' '}
                    {getTotalDays(currentModulesSelected)} días
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
      <Footer />
    </div>
  );
}
