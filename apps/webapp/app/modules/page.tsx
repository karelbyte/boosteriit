'use client';
import React, { JSX } from 'react';
import Header from '../components/molecules/Header';
import Search from '../components/atoms/Search';
import Footer from '../components/organisms/Footer';
import SolutionsNav from '../components/molecules/SolutionsNav';
import {AiOutlineClockCircle} from 'react-icons/ai'
export default function Modules(): JSX.Element {
  return (
    <div className="overflow-hidden">
      <Header title={'Arma tu solución'} urlBack={'/industries'}>
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
            <div className="flex flex-col px-2 py-4 w-full md:w-1/3">
              <div className="flex flex-col justify-between border-t border-x p-4 rounded-t-lg h-full">
                <div className="border rounded-lg h-48 mb-4"></div>
                <span className="text-[#161616] text-sm font-light mb-4" >Inicio de sesión, con app de google y redes sociales </span>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg mb-4">$ 20,000</span>
                  <div className="flex" >
                    <AiOutlineClockCircle/>
                    <span className="font-light text-xs text-[#686767] mb-2 ml-4">Lista en: 12 días</span>
                  </div>

                </div>

              </div>
              <div className="border p-4 rounded-b-lg">
                <input type="checkbox" />
                <span className="ml-2 text-[#161616] font-normal text-sm">Agregar a la solución</span>
              </div>
            </div>
          </div>

        </div>
        <div className="p-6 w-2/12 md:border-l-2">
          <span>Seleccionados</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
