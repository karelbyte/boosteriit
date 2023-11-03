import React, { JSX} from 'react';
import Image from 'next/image';
import SolutionSelectorModal from './SolutionSelectorModal';
import ActionBtn from '../atoms/ActionBtn';

export default function IndustryOrBuild(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-4 px-8 sm:py-12 sm:px-10 lg:px-20 bg-[#ECF5FE]">
      <p className="mb-12 font-black text-xl lg:text-center lg:text-4xl lg:w-8/12 xl:w-8/12">
        Elige según tu industria o ármalo por componentes
      </p>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="flex flex-col h-96 md:flex-row border p-12 mr-0 sm:mr-8 w-full bg-white rounded-2xl mb-6 shadow-sm">
          <Image
            src="/assets/industries/industry.svg"
            width="100"
            height="140"
            className="w-1/3 self-center mb-8 md:mr-8"
            priority
            alt="Boosteriit"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold mb-4 text-lg text-[#161616]">
                Catálogo por industria
              </p>
              <p className="mb-4 text-sm text-justify text-[#161616]">
                Selecciona de nuestro catálogo de paquetes prediseñados por
                Industria y agrega componentes extras si lo requieres.
              </p>
            </div>
            <SolutionSelectorModal>
              <ActionBtn title="Escógelo" />
            </SolutionSelectorModal>
          </div>
        </div>
        <div className="flex flex-col h-96 md:flex-row border p-12 mr-0 sm:mr-12 w-full  bg-white rounded-2xl shadow-sm">
          <Image
            src="/assets/industries/build.svg"
            width="100"
            height="140"
            className="w-1/3 self-center mb-8 md:mr-8"
            priority
            alt="Boosteriit"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold text-lg mb-4 text-[#161616]">
                Catálogo por industria
              </p>
              <p className="mb-4 text-sm text-justify text-[#161616]">
                Arma tu aplicativo seleccionando sólo los componentes que
                necesitas. Una solución a tu medida e imaginación.
              </p>
            </div>

            <button
              className={`py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded hover:bg-[#007799]`}
            >
              <span>Ármalo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
