import React, { JSX, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useAppContext from '../../contexts/hookAppContext';
import { solutions, ISolution } from '../../contexts/appData.ts';

interface ISolutionSelectorModalProps {
  children: JSX.Element;
  nextPath: string;
}

export default function SolutionSelectorModal(
  props: ISolutionSelectorModalProps
): JSX.Element {
  const { children, nextPath }: ISolutionSelectorModalProps = props;

  const router = useRouter();
  const { selectedSolutions, setSelectedSolutions } = useAppContext();

  const [showModalSelectSolution, setShowModalSelectSolution] =
    useState<boolean>(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      actionFn: () => {
        setShowModalSelectSolution(true);
      },
    });
  });

  const goToUrl = () => {
    router.push(nextPath);
  };

  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedSolutions([...selectedSolutions, id]);
    } else {
      setSelectedSolutions(
        selectedSolutions.filter((option: string) => option !== id)
      );
    }
  };

  const closeModal = () => {
    setSelectedSolutions([]);
    setShowModalSelectSolution(false);
  };

  const getStyle = (options: string[]) => {
    return options.length === 0
      ? 'py-2 px-4 text-white bg-gray-300 rounded w-5/12'
      : 'py-2 px-4 text-white bg-[#00B8EC] rounded hover:bg-[#007799] w-5/12';
  };

  return (
    <>
      {childrenWithProps}
      {showModalSelectSolution && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-4 w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-lg">
            <div className="flex flex-col p-4">
              <AiOutlineClose
                className="self-end cursor-pointer"
                onClick={closeModal}
              />
              <p className="pb-2 font-bold text-lg">
                ¿Qué versión de tu solución te gustaría desarrollar?
              </p>
              <p className="pb-10 text-sm">
                Elige una o varias versiones según tus necesidades.
              </p>
              {solutions &&
                solutions.map((solution: ISolution) => (
                  <div
                    key={solution.id}
                    className="flex border justify-between rounded-lg py-4 px-6 my-2 items-center"
                  >
                    <div className="p-4 mr-2 text-xs md:text-xl text-[#00B8EC] border rounded-full border-[#CCF1FB] bg-[#CCF1FB] ">
                      {solution.icon}
                    </div>
                    <div className="w-9/12">
                      <p className="font-bold text-xs md:text-lg">
                        {solution.title}
                      </p>
                      <p className="text-xs md:text-sm text-[#161616]">
                        {solution.subtitle}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="accent-green-400"
                      id={solution.id}
                      onChange={checkOptions}
                    />
                  </div>
                ))}

              <div className="flex justify-between py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 rounded mr-2 border border-[#00B8EC] text-[#00B8EC] hover:bg-[#007799] hover:text-white w-5/12"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className={getStyle(selectedSolutions)}
                  onClick={goToUrl}
                >
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
