import React from "react";
import useAppContext from "../contexts/hookAppContext";
import { ISolution, solutions } from "../../data/solutions";
export default function useSolutions() {

  const { selectedSolutions, setSelectedSolutions } = useAppContext();
  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      const solution = solutions.find((solution) => solution.id == id);
      if (solution) setSelectedSolutions([...selectedSolutions, solution]);
    } else {
      setSelectedSolutions(
        selectedSolutions.filter((solution: ISolution) => solution.id !== id)
      );
    }
  };

  return {
    selectedSolutions,
    setSelectedSolutions,
    checkOptions
  };
}
