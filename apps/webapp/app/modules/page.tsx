'use client';
import React, { JSX } from 'react';
import Header from '../components/molecules/Header';
import Search from '../components/atoms/Search';
import Footer from '../components/organisms/Footer';
import SolutionsNav from '../components/molecules/SolutionsNav';
import { AiOutlineClockCircle } from 'react-icons/ai';
import useAppContext from '../contexts/hookAppContext';
import { IModule, modules } from '../contexts/appData';
import ActionBtn from '../components/atoms/ActionBtn';
import { useRouter } from 'next/navigation';
import { formatByCurrencyMXN } from '../../utils';
export default function Modules(): JSX.Element {
  const router = useRouter();
  const {
    selectedModules,
    setSelectedModules,
    setSelectedIndustry,
    setSelectedSolutions,
  } = useAppContext();
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

  const currentModulesSelected = modules.filter((nodule: IModule) =>
    selectedModules.includes(nodule.id)
  );

  const getTotalPrice = () => {
    const total = currentModulesSelected.reduce(
      (carry: number, module: IModule) => {
        return carry + module.price;
      },
      0
    );
    return formatByCurrencyMXN(total);
  };

  const getTotalDays = () => {
    return currentModulesSelected.reduce((carry: number, module: IModule) => {
      return carry + module.days;
    }, 0);
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
          <div className="border-b px-10 md:px-20 py-4">
            <span>
              Selecciona los módulos o componentes para armar tu aplicación
              sitio web
            </span>
          </div>
          <div className="flex flex-col md:flex-row w-full flex-wrap">
            {modules &&
              modules.map((module: IModule) => (
                <div
                  key={module.id}
                  className="flex flex-col px-2 py-4 w-full md:w-1/3"
                >
                  <div className="flex flex-col justify-between border-t border-x p-4 rounded-t-lg h-full">
                    <div className="border rounded-lg h-48 mb-4"></div>
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
          <p className="mb-6 font-semibold">Seleccionados</p>
          {selectedModules.length > 0 && (
            <div>
              {currentModulesSelected &&
                currentModulesSelected.map((module: IModule) => (
                  <div className="flex flex-col border-b mb-6 " key={module.id}>
                    <div className="flex text-xs justify-between">
                      <span className="w-8/12">{module.title}</span>
                      <span> $ {formatByCurrencyMXN(module.price)}</span>
                    </div>
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
                ))}
              <div className="flex justify-between">
                <p>Total</p>
                <p>$ {getTotalPrice()}</p>
              </div>
              <div className="flex my-4">
                <AiOutlineClockCircle />
                <span className="font-light text-xs text-[#686767] mb-2 ml-2">
                  Tiempo aprox de implementación
                  <p className="font-semibold mt-2"> {getTotalDays()} días</p>
                </span>
              </div>
              <ActionBtn
                title="Agregar al carrito"
                actionFn={() => goToUrl('/shopping-cart')}
              ></ActionBtn>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
