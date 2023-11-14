import { useEffect, useState } from 'react';
import { IModule, ISolutionAvailable } from '../../data/modules';
import useAppContext from '../contexts/hookAppContext';

export default function useModules() {
  const { selectedModules } = useAppContext();
  const [currentModulesSelected, setCurrentModulesSelected] = useState<
    IModule[]
  >([]);

  useEffect(() => {
    setCurrentModulesSelected(selectedModules);
  }, [selectedModules]);

  const [modulesWeb, setModulesWeb] = useState<IModule[]>([]);

  const [modulesDesktop, setModulesDesktop] = useState<IModule[]>([]);

  const [modulesMobile, setModulesMobile] = useState<IModule[]>([]);

  useEffect(() => {
    setModulesWeb(
      currentModulesSelected.filter((module: IModule) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'web'
        )
      )
    );
    setModulesDesktop(
      currentModulesSelected.filter((module: IModule) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'desktop'
        )
      )
    );
    setModulesMobile(
      currentModulesSelected.filter((module: IModule) =>
        module.solutions.some(
          (solution: ISolutionAvailable) => solution.id === 'mobile'
        )
      )
    );
  }, [currentModulesSelected]);

  return {
    currentModulesSelected,
    setCurrentModulesSelected,
    modulesWeb,
    setModulesWeb,
    modulesDesktop,
    setModulesDesktop,
    modulesMobile,
    setModulesMobile
  };
}
