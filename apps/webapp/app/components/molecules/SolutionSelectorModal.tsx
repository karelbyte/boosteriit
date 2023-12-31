import React, { JSX, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import useAppContext from '../../contexts/hookAppContext';
import { solutions, ISolution } from '../../../data/solutions';
import { IColorSolutions } from '../../../utils';
import useSolutions from '../../hooks/solutionsHook.ts';

interface ISolutionSelectorModalProps {
  children: JSX.Element;
  nextPath: string;
  edit?: boolean;
}

export default function SolutionSelectorModal(
  props: ISolutionSelectorModalProps
): JSX.Element {
  const { children, nextPath, edit }: ISolutionSelectorModalProps = props;
  const router = useRouter();
  const { selectedSolutions, setSelectedSolutions } = useAppContext();
  const { checkOptions, getStatusCheck } = useSolutions();

  const [showModalSelectSolution, setShowModalSelectSolution] =
    useState<boolean>(false);

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      actionFn: () => {
        if (child.props.actionFn) child.props.actionFn();
        setShowModalSelectSolution(true);
      },
    });
  });

  const goToUrl = () => {
    router.push(nextPath);
  };

  const closeModal = () => {
    if (!edit) {
      setSelectedSolutions([]);
    }
    setShowModalSelectSolution(false);
  };

  const getStyle = (options: ISolution[]) => {
    return options.length === 0
      ? 'py-2 px-4 text-white bg-gray-300 rounded w-full md:w-5/12 mt-4 md:mt-0'
      : 'py-2 px-4 text-white bg-boo-btn-bg rounded hover:bg-boo-btn-bg-hover w-full md:w-5/12 mt-4 md:mt-0';
  };

  const classIconSolutions: IColorSolutions = {
    web: 'p-4 mr-2 text-xs md:text-xl text-white border rounded-full border-boo-web bg-boo-web',
    mobile:
      'p-4 mr-2 text-xs md:text-xl text-boo-white border rounded-full border-boo-mobile bg-boo-mobile',
    desktop:
      'p-4 mr-2 text-xs md:text-xl text-white border rounded-full border-boo-desktop bg-boo-desktop',
  };
  const getColorIcon = (id: string): string => {
    return classIconSolutions[id] || '';
  };

  return (
    <>
      {childrenWithProps}
      {showModalSelectSolution && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 md:z-10">
          <div className="bg-white p-4 w-full h-full md:h-auto md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 md:rounded-lg">
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
                    <div className={getColorIcon(solution.id)}>
                      {solution.icon}
                    </div>
                    <div className="w-9/12">
                      <p className="font-bold text-xs md:text-lg">
                        {solution.title}
                      </p>
                      <p className="text-xs md:text-sm text-boo-gray-hard">
                        {solution.subtitle}
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      className="accent-green-400 cursor-pointer"
                      id={solution.id}
                      checked={getStatusCheck(solution.id)}
                      onChange={checkOptions}
                    />
                  </div>
                ))}

              <div className="flex flex-col-reverse md:flex-row justify-between py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 rounded mr-2 mt-4 md:mt-0 border border-boo-btn-bg text-boo-btn-bg hover:bg-boo-btn-bg-hover hover:text-white w-full md:w-5/12"
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
