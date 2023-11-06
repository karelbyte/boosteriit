'use client';
import React, { JSX, useState } from 'react';
import Header from '../components/molecules/Header';
import useAppContext from '../contexts/hookAppContext';
import { IModule, ISolution, modules, solutions } from '../contexts/appData';
import { formatByCurrencyMXN } from '../../utils';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import Footer from '../components/organisms/Footer';

export default function ShoppingCart(): JSX.Element {
  const { selectedModules, setSelectedModules, selectedSolutions } =
    useAppContext();

  const currentModulesSelected = modules.filter((nodule: IModule) =>
    selectedModules.includes(nodule.id)
  );

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

  const getTotalPrice = () => {
    const total = currentModulesSelected.reduce(
      (carry: number, module: IModule) => {
        return carry + module.price;
      },
      0
    );
    return formatByCurrencyMXN(total);
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
      <Header title={'Carrito de compra'} urlBack={'/industries'}>
        <></>
      </Header>
      <div className="flex-1 bg-[#ECF5FE]">
        {currentModulesSelected.length == 0 ? (
          <div className="p-6  text-black mt-20 py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20">
            <p className="text-xl xl:text-2xl mb-4">
              Arma una solución
            </p>
          </div>
        ) : (
          <div className="p-6 text-black mt-20 py-2 px-8 md:flex-row sm:py-4 sm:px-10 lg:px-20">
            <p className="text-xl xl:text-2xl mb-4">
              Arma una solución a tu medida
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              {solutionsToShow &&
                solutionsToShow.map((solution: ISolution, index: number) => (
                  <span key={solution.id} className="text-sm text-[#161616]">
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
                <p className="md:ml-4 text-[#00B8EC] underline text-sm">editar</p>
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
                          <span className="flex font-light text-xs text-[#686767] mb-2 mt-2">
                          {module.timeStr}
                            <div
                              className="ml-4 text-[#00B8EC] underline"
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
                        <span className="ml-2 text-[#161616] font-normal text-sm">
                          Descripción de la funcionalidad del módulo
                        </span>
                          {canShow(module.id) ? (
                            <div onClick={() => setShowStatus(module.id, false)}>
                              <BsChevronCompactUp />
                            </div>
                          ) : (
                            <div onClick={() => setShowStatus(module.id, true)}>
                              <BsChevronCompactDown />
                            </div>
                          )}
                        </div>

                        {canShow(module.id) && (
                          <div className="mt-2 font-light text-[#686767] text-sm p-2">
                            <p>{module.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="border rounded-md bg-white h-16 w-full sm:w-4/12"></div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
