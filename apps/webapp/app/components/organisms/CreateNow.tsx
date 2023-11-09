import React, { JSX, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import Image from "next/image";
interface ICreateNowProps {
  mobileHidden?: boolean;
  customStyle: string;
}
export default function CreateNow(props: ICreateNowProps): JSX.Element {
  const { mobileHidden, customStyle }: ICreateNowProps = props;
  const router = useRouter();
  const show = mobileHidden ? 'hidden' : '';
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
      <button
        onClick={() => setShowModal(true)}
        className={`${show} sm:flex justify-center text-white bg-boo-btn-bg border-0 ${customStyle} focus:outline-none rounded hover:bg-boo-btn-bg-hover`}
      >
        <span> Crear ahora</span>
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-boo-blue p-4 w-11/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 rounded-lg">
            <div className="flex justify-end px-2">
              <AiOutlineClose className="cursor-pointer" onClick={closeModal} />
            </div>
            <div className="flex flex-col px-4" >
              <p className="pb-2 font-semibold text-md">
                Elige según tu industria o ármalo por componentes
              </p>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col md:flex-row border p-6 mr-0 sm:mr-8 w-full bg-white rounded-2xl mb-6 shadow-sm">
                  <Image
                    src="/assets/industries/industries.svg"
                    width="100"
                    height="140"
                    className="w-1/3 self-center md:mr-8"
                    loading={'lazy'}
                    alt="Boosteriit"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-bold mb-2 text-md text-boo-gray-hard">
                        Catálogo por industria
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
                <div className="flex flex-col md:flex-row border p-6 mr-0 sm:mr-12 w-full  bg-white rounded-2xl shadow-sm">
                  <Image
                    src="/assets/industries/build.svg"
                    width="100"
                    height="140"
                    className="w-1/3 self-center md:mr-8"
                    priority
                    alt="Boosteriit"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-bold text-md mb-2 text-boo-gray-hard">
                        Ármalo desde cero
                      </p>
                      <p className="mb-4 text-sm text-justify text-boo-gray-hard">
                        Arma tu aplicativo seleccionando sólo los componentes que
                        necesitas. Una solución a tu medida e imaginación.
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
