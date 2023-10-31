import React, { JSX } from 'react';
import Image from 'next/image';

export default function IndustryOrBuild(): JSX.Element {
  return (
    <div className="flex flex-col items-center py-4 px-8 sm:py-12 sm:px-10 lg:px-20 bg-[#ECF5FE]">
      <p className="mb-12 font-bold text-xl lg:text-center lg:text-4xl lg:w-8/12 xl:w-4/12">
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
            <p className="font-bold mb-4 text-[#161616]">Catálogo por industria</p>
            <p className="mb-4 text-sm md:text-md text-justify text-[#161616]">
              Selecciona de nuestro catálogo de paquetes prediseñados por
              Industria y agrega componentes extras si lo requieres.
            </p>
            <button
              className={`py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded`}
            >
              <span> Escógelo</span>
            </button>
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
            <p className="font-bold mb-4 text-[#161616]">Catálogo por industria</p>
            <p className="mb-4 text-sm md:text-md text-justify text-[#161616]">
              Arma tu aplicativo seleccionando sólo los componentes que necesitas. Una solución a tu medida e imaginación.
            </p>
            <button
              className={`py-3.5 px-6 w-full justify-center text-white bg-[#00B8EC] border-0 focus:outline-none rounded`}
            >
              <span>Ármalo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
