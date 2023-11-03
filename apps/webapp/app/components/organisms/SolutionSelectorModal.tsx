import React, { JSX, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { BiDesktop } from 'react-icons/bi';
interface ISolutionSelectorModalProps {
  children: JSX.Element;
}
export default function SolutionSelectorModal(
  props: ISolutionSelectorModalProps
): JSX.Element {
  const { children }: ISolutionSelectorModalProps = props;

  const [showModalSelectSolution, setShowModalSelectSolution] =
    useState<boolean>(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      actionFn: () => {
        setShowModalSelectSolution(true);
      },
    });
  });

  const [options, setOptions] = useState<string[]>([]);

  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setOptions([...options, id]);
    } else {
      setOptions(options.filter((option: string) => option !== id));
    }
  };

  const getStyle = (options: string[]) => {
    if (options.length === 0) {
      return 'py-2 px-4 text-white bg-gray-300 rounded w-5/12';
    }
    return 'py-2 px-4 text-white bg-[#00B8EC] rounded hover:bg-[#007799] w-5/12';
  };

  return (
    <>
      {childrenWithProps}
      {showModalSelectSolution && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-lg">
            <div className="flex flex-col p-4">
              <AiOutlineClose className="self-end" />
              <p className="pb-2 font-bold text-lg">
                ¿Qué versión de tu solución te gustaría desarrollar?
              </p>
              <p className="pb-10 text-sm">
                Elige una o varias versiones según tus necesidades.
              </p>
              <div className="flex border justify-between rounded-lg py-4 px-6 my-2 items-center">
                <div className="p-4 mr-2 text-xs md:text-xl text-[#00B8EC] border rounded-full  border-[#CCF1FB] bg-[#CCF1FB] ">
                  <FaMobileAlt />
                </div>
                <div className="w-9/12">
                  <p className="font-bold text-xs md:text-md">
                    Aplicación para móvil
                  </p>
                  <p className="text-xs md:text-sm text-[#161616]">
                    Aplicación móvil disponible en las tiendas de Apple y
                    Google.
                  </p>
                </div>
                <input type="checkbox" id="movil" onChange={checkOptions} />
              </div>
              <div className="flex border justify-between rounded-lg  py-4 px-6 my-2 items-center">
                <div className="p-4 mr-2 text-xs md:text-xl text-[#00B8EC] border rounded-full  border-[#CCF1FB] bg-[#CCF1FB]">
                  <BiDesktop />
                </div>
                <div className="w-9/12">
                  <p className="font-bold text-xs md:text-md">
                    Aplicación para escritorio
                  </p>
                  <p className="text-xs md:text-sm text-[#161616]">
                    Programa que se instala en tu ordenador, funciona sin
                    conexión a internet.
                  </p>
                </div>
                <input type="checkbox" id="desktop" onChange={checkOptions} />
              </div>
              <div className="flex border justify-between rounded-lg py-4 px-6 my-2 items-center">
                <div className="p-4 mr-2 text-xs md:text-xl text-[#00B8EC] border rounded-full border-[#CCF1FB] bg-[#CCF1FB]">
                  <MdWeb />
                </div>
                <div className="w-9/12">
                  <p className="font-bold text-xs md:text-md">Aplicación web</p>
                  <p className="text-xs md:text-sm text-[#161616]">
                    Sitio web responsivo, se puede acceder desde cualquier
                    dispositivo.
                  </p>
                </div>
                <input type="checkbox" id="web" onChange={checkOptions} />
              </div>
              <div className="flex justify-between py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 rounded mr-2 border border-[#00B8EC] text-[#00B8EC] hover:bg-[#007799] hover:text-white w-5/12"
                  onClick={() => setShowModalSelectSolution(false)}
                >
                  Cancelar
                </button>
                <button type="button" className={getStyle(options)}>
                  <i className="fas fa-plus"></i> Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
