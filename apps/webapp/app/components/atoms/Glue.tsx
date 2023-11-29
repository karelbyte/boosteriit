import React, { JSX, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import { useRouter } from "next/navigation";
export default function Glue(): JSX.Element {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  const goToUrl = (path: string) => {
    closeModal();
    router.push(path);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 border-t bg-white p-4 justify-center flex sm:hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]">
        <button
          onClick={() => setShowModal(true)}
          className="p-2 cursor-pointer  text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover`"
        >
          <span>Crear ahora</span>
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[100] md:z-20">
          <div className="bg-boo-blue p-4 w-full h-full md:h-auto md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 md:rounded-lg">
            <div className="flex justify-end px-2">
              <AiOutlineClose className="cursor-pointer" onClick={closeModal} />
            </div>
            <div className="flex flex-col px-4">
              <p className="pb-2 font-semibold text-md">
                Elige según tu industria o ármalo por componentes
              </p>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col md:flex-row w-full p-4">
                  <div className="flex bg-boo-blue-green w-full md:w-1/2 border-t border-x rounded-t-lg  md:border-x-0  md:border-l md:rounded-t-none md:border-y md:rounded-tl-lg md:rounded-bl-lg p-2 justify-center md:justify-start">
                    <Image
                      src="/assets/industries/industries2.svg"
                      width="100"
                      height="140"
                      className="h-1/3 md:w-full self-center mb-2 md:mb-8 md:mr-8"
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
                        Selecciona de nuestro catálogo de paquetes prediseñados
                        por Industria y agrega componentes extras si lo
                        requieres.
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
                <div className="flex flex-col md:flex-row w-full p-4">
                  <div className="flex bg-boo-blue-green w-full md:w-1/2 border-t border-x rounded-t-lg  md:border-x-0  md:border-l md:rounded-t-none md:border-y md:rounded-tl-lg md:rounded-bl-lg p-2 justify-center md:justify-start">
                    <Image
                      src="/assets/industries/build2.svg"
                      width="100"
                      height="140"
                      className="h-1/3 md:w-full self-center mb-2 md:mb-8 md:mr-8"
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
                        Arma tu aplicativo seleccionando sólo los componentes
                        que necesitas. Una solución a tu medida e imaginación.
                      </p>
                    </div>
                    <button
                      className={`py-3.5 px-6 w-full justify-center text-white bg-boo-btn-bg border-0 focus:outline-none rounded hover:bg-boo-btn-bg-hover`}
                      onClick={() => goToUrl('/modules')}
                    >
                      <span>Ármalo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
