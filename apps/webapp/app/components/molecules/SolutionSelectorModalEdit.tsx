import React, { JSX, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import useAppContext from '../../contexts/hookAppContext';
import { solutions, ISolution } from '../../contexts/appData';

interface ISolutionSelectorModalProps {
  currentSolutions: string[];
  showModalEdit: boolean;
  setShowModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SolutionSelectorModalEdit(
  props: ISolutionSelectorModalProps
): JSX.Element {
  const {
    currentSolutions,
    showModalEdit,
    setShowModalEdit,
  }: ISolutionSelectorModalProps = props;
  const { setSelectedSolutions, selectedSolutions } = useAppContext();

  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedSolutions([...currentSolutions, id]);
    } else {
      setSelectedSolutions(
        selectedSolutions.filter((option: string) => option !== id)
      );
    }
  };

  const closeModal = () => {
    setShowModalEdit(false);
  };

  useEffect(() => {
    for (const solution of solutions) {
      if (document) {
        const elem: HTMLInputElement | null = document.getElementById(
          solution.id
        ) as HTMLInputElement;
        if (elem) {
          elem.checked = currentSolutions.includes(solution.id);
        }
      }
    }
  }, [currentSolutions, showModalEdit]);

  return (
    <>
      {showModalEdit && (
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
                    <div className="p-4 mr-2 text-xs md:text-xl text-[#00B8EC] border rounded-full border-[#CCF1FB] bg-[#CCF1FB]">
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
                      className="accent-green-400 cursor-pointer"
                      id={solution.id}
                      onChange={checkOptions}
                    />
                  </div>
                ))}

              <div className="flex justify-end py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 rounded mr-2 border border-[#00B8EC] text-[#00B8EC] hover:bg-[#007799] hover:text-white w-5/12"
                  onClick={closeModal}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
