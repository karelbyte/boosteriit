import React from "react";
import useAppContext from '../contexts/hookAppContext';
import { ISolution, solutions } from '../../data/solutions';
export default function useSolutions() {
  const { selectedSolutions, setSelectedSolutions } = useAppContext();
  const addSolutionsStorage = (solutions: ISolution[]) => {
    const solutionsToStorage = solutions.map((solution: ISolution) => {
      return {
        id: solution.id,
      };
    });
    localStorage.setItem('solutions', JSON.stringify(solutionsToStorage));
  };

  const getSolutionsStorage = () => {
    const solutionsStorage = localStorage.getItem('solutions');
    if (solutionsStorage) {
      const solutionsIds = JSON.parse(solutionsStorage).map(
        (item: { id: string }) => item.id
      );
      const currentSolutions = solutions.filter((solution: ISolution) => solutionsIds.includes(solution.id))
      setSelectedSolutions(currentSolutions)
    }
  };
  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      const solution = solutions.find((solution) => solution.id == id);
      if (solution) {
        const currents = [...selectedSolutions, solution];
        setSelectedSolutions(currents);
        addSolutionsStorage(currents);
      }
    } else {
      const currents = selectedSolutions.filter(
        (solution: ISolution) => solution.id !== id
      );
      setSelectedSolutions(currents);
      addSolutionsStorage(currents);
    }
  };

  const getStatusCheck = (id: string) => {
    return selectedSolutions
      .map((selectedSolution: ISolution) => selectedSolution.id)
      .includes(id);
  }

  return {
    getStatusCheck,
    getSolutionsStorage,
    selectedSolutions,
    setSelectedSolutions,
    checkOptions,
  };
}
