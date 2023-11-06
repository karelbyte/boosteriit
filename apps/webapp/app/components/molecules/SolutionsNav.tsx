import type { JSX } from 'react';
import React, { useEffect } from 'react';
import ActionBtn from '../atoms/ActionBtn';
import useAppContext from '../../contexts/hookAppContext';
import { ISolution, solutions } from '../../contexts/appData';

export default function SolutionsNav(): JSX.Element {
  const { selectedSolutions, setSelectedSolutions } = useAppContext();

  useEffect(() => {
    for (const solution of solutions) {
      if (document) {
        const elem: HTMLInputElement | null = document.getElementById(
          solution.id
        ) as HTMLInputElement;
        if (elem) elem.checked = selectedSolutions.includes(solution.id);
      }
    }
  }, [selectedSolutions]);

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

  // useEffect(() => {
  //   return () => {
  //     setSelectedSolutions([]);
  //   };
  // }, [setSelectedSolutions]);

  return (
    <div className="p-6 bg-[#ECF5FE] text-black mt-16 md:mt-20 xl:text-center p-8 md:flex-row sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-start md:items-center mb-6">
        <span className="mb-6 md:mb-0 md:mr-6 md:border-r-2 text-sm md:pr-6">
          Versión de producto a desarrollar
        </span>
        <span className="text-sm">
          Modifica la selección y aplica el cambio para ver costos y tiempo de
          las diferentes versiones
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col  md:flex-row gap-4 md:gap-12">
          {solutions &&
            solutions.map((solution: ISolution) => (
              <div key={solution.id}>
                <input
                  type="checkbox"
                  className="mr-2 accent-green-400"
                  id={solution.id}
                  onChange={checkOptions}
                />
                <span>{solution.title}</span>
              </div>
            ))}
        </div>
        <div className="mt-8 md:mt-0">
          <ActionBtn title={'Aplicar cambios'} />
        </div>
      </div>
    </div>
  );
}
