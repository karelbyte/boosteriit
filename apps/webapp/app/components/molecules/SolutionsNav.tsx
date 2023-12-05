import type { JSX } from 'react';
import React, { useEffect } from 'react';
import { ISolution, solutions } from '../../../data/solutions';
import useSolutions from '../../hooks/solutionsHook.ts';
export default function SolutionsNav(): JSX.Element {
  const { checkOptions, getSolutionsStorage, getStatusCheck } = useSolutions();

  useEffect(() => {
    getSolutionsStorage();
  }, []);

  return (
    <div className="p-6 bg-boo-blue text-black mt-10 md:mt-20 xl:text-center md:flex-row sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-start md:items-center  md:mb-6">
        <span className="mb-6 md:mb-0 md:mr-6 md:border-r-2 text-sm md:pr-6">
         Plataforma para tu producto a desarrollar
        </span>
        <span className="hidden md:flex text-sm">
          Modifica la selección y aplica el cambio para ver costos y tiempo de
          las diferentes versiones
        </span>
      </div>

      <div className="flex justify-between md:justify-start md:flex-row  md:gap-12">
        {solutions &&
          solutions.map((solution: ISolution) => (
            <div
              key={solution.id}
              className="flex text-sm py-1 px-2 md:text-base md:border  xl:px-12  md:bg-white rounded-lg"
            >
              <input
                type="checkbox"
                className="mr-2 accent-green-400 cursor-pointer"
                id={solution.id}
                checked={getStatusCheck(solution.id)}
                onChange={checkOptions}
              />
              <span className="hidden md:flex">{solution.title}</span>
              <span className="flex md:hidden">{solution.short}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
