import React, { JSX } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SolutionSelectorModal from '../molecules/SolutionSelectorModal';
import ActionBtn from '../atoms/ActionBtn';

export default function IndustryOrBuild(): JSX.Element {
  const router = useRouter();
  const goToUrl = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex flex-col items-center py-4 px-8 sm:py-12 sm:px-10 lg:px-20 bg-boo-blue">
      <p className="mb-12 font-black text-xl lg:text-center lg:text-4xl lg:w-8/12 xl:w-8/12">
        Elige según tu industria o ármalo por componentes
      </p>
      <div className="flex flex-col sm:flex-row justify-center">
        <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4">
          <div className="flex bg-boo-blue-green w-full md:w-1/2 border-t border-x rounded-t-lg  md:border-x-0  md:border-l md:rounded-t-none md:border-y md:rounded-tl-lg md:rounded-bl-lg p-2 justify-center md:justify-start">
            <Image
              src="/assets/industries/industries2.svg"
              width="100"
              height="140"
              className="w-auto md:w-full self-center mb-8 md:mr-8"
              loading={'lazy'}
              alt="Boosteriit"
            />
          </div>
          <div className="flex flex-col w-full justify-between  border-b border-x rounded-b-lg md:border-x-0  md:rounded-b-none md:border-y md:rounded-tr-lg md:rounded-br-lg p-4 bg-white">
            <div>
              <p className="font-bold mb-4 text-lg text-boo-gray-hard">
                Catálogo por industrias
              </p>
              <p className="mb-4 text-sm text-justify text-boo-gray-hard">
                Selecciona de nuestro catálogo de paquetes prediseñados por
                Industria y agrega componentes extras si lo requieres.
              </p>
            </div>
            <button
              className={`py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover`}
              onClick={() => goToUrl('/industries')}
            >
              <span>Escógelo</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-2/3 p-4">
          <div className="flex bg-boo-blue-green w-full md:w-1/2 border-t border-x rounded-t-lg  md:border-x-0  md:border-l md:rounded-t-none md:border-y md:rounded-tl-lg md:rounded-bl-lg p-2 justify-center md:justify-start">
            <Image
              src="/assets/industries/build2.svg"
              width="100"
              height="140"
              className="w-auto md:w-full self-center mb-8 md:mr-8"
              loading={'lazy'}
              alt="Boosteriit"
            />
          </div>
          <div className="flex flex-col w-full justify-between  border-b border-x rounded-b-lg md:border-x-0  md:rounded-b-none md:border-y md:rounded-tr-lg md:rounded-br-lg p-4 bg-white">
            <div>
              <p className="font-bold mb-4 text-lg text-boo-gray-hard">
                Ármalo desde cero
              </p>
              <p className="mb-4 text-sm text-justify text-boo-gray-hard">
                Arma tu aplicativo seleccionando sólo los componentes que
                necesitas. Una solución a tu medida e imaginación.
              </p>
            </div>
            <SolutionSelectorModal nextPath={'/modules'}>
              <ActionBtn title="Ármalo" />
            </SolutionSelectorModal>
          </div>
        </div>
      </div>
    </div>
  );
}
