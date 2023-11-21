import { ISolution } from '../../../data/solutions';
import ActionBtn from '../atoms/ActionBtn';
import React, { JSX } from 'react';
import useAppContext from '../../contexts/hookAppContext';

interface ISolutionBreadcrumbsProps {
  setShowModalSelectSolution: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SolutionBreadcrumbs(
  props: ISolutionBreadcrumbsProps
): JSX.Element {
  const { setShowModalSelectSolution } = props;
  const { selectedSolutions } = useAppContext();
  return (
    <div className="flex items-center">
      {selectedSolutions &&
        selectedSolutions.map((solution: ISolution, index: number) => (
          <span key={solution.id} className="text-sm text-boo-gray-hard">
            <span className="hidden md:flex mr-4">{solution.title}</span>
            <span className="flex md:hidden mr-4">{solution.short}</span>
          </span>
        ))}
      {selectedSolutions.length > 0 && (
        <ActionBtn
          title="editar"
          styleClass="border-none ml-4 text-boo-btn-bg underline"
          actionFn={() => setShowModalSelectSolution(true)}
        />
      )}
    </div>
  );
}
