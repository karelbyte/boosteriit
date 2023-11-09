import React from 'react';
import SolutionSelectorModal from './SolutionSelectorModal';
import ActionBtn from '../atoms/ActionBtn';
import Image from 'next/image';

export default function IndustriesBannerFooter() {
  return (
    <div className="p-6 bg-boo-blue mt-14 py-2 px-12 md:flex-row sm:py-4 sm:px-10 lg:px-20 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between">
        <Image
          src='/assets/industries/banner.svg'
          width="100"
          height="140"
          className="w-auto lg:w-1/3"
          alt="Boosteriit"
          loading={'lazy'}
        />
        <div className="flex flex-col my-8 md:mt-2  md:ml-12 md:py-12 lg:p-6 justify-between w-full">
          <span className="text-xl font-black pb-4">¿No ves tu industria entre las opciones?</span>
          <span className="text-boo-gray-hard text-xl w-full lg:w-10/12 mb-6 font-light">
            No te preocupes, estamos listos para crear una solución a la medida
            para ti.
          </span>
          <span className="text-xs text-boo-gray-hard">
            Diseña tu paquete personalizado o contáctanos para recibir una
            atención personalizada.
          </span>
          <div className="flex justify-between mt-8">
            <SolutionSelectorModal nextPath={'/modules'}>
              <ActionBtn title="Árma tu solución" />
            </SolutionSelectorModal>
            <button className="py-2 px-4 rounded mr-2 border border-boo-btn-bg text-boo-btn-bg hover:bg-boo-btn-bg-hover hover:text-white w-full ml-6">
              Agendar llamada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
