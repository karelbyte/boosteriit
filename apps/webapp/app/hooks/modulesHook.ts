import { useEffect, useState } from 'react';
import { IModule, ISolutionAvailable } from '../../data/modules';
import useAppContext from '../contexts/hookAppContext';

export default function useModules() {
  const { selectedModules, setSelectedModules } = useAppContext();
  const [currentModulesSelected, setCurrentModulesSelected] = useState<
    IModule[]
  >([]);

  const [modulesWeb, setModulesWeb] = useState<IModule[]>([]);

  const [modulesDesktop, setModulesDesktop] = useState<IModule[]>([]);

  const [modulesMobile, setModulesMobile] = useState<IModule[]>([]);

  const addModulesStorage = (modules: IModule[]) => {
    const modulesIds = modules.map((module: IModule) => {
      return { id: module.id };
    });
    localStorage.setItem('modules', JSON.stringify(modulesIds));
  };

  const addModules = (currentModule: IModule) => {
    const moduleFound = selectedModules.find(
      (module: IModule) => module.id == currentModule.id
    );
    if (moduleFound) {
      const currents = selectedModules.filter(
        (module: IModule) => module.id !== currentModule.id
      );
      setSelectedModules(currents);
      addModulesStorage(currents);
    } else {
      const currents = [...selectedModules, currentModule];
      setSelectedModules(currents);
      addModulesStorage(currents);
    }
  };

  const deleteModule = (id: string) => {
    const currents = selectedModules.filter(
      (module: IModule) => module.id !== id
    );
    setSelectedModules(currents);
    addModulesStorage(currents);
  };

  useEffect(() => {
    setCurrentModulesSelected(selectedModules);
  }, [selectedModules]);

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

  const getStatusCheck = (id: string) => {
    return selectedModules.map((module: IModule) => module.id).includes(id);
  };


  return {
    addModulesStorage,
    addModules,
    getStatusCheck,
    deleteModule,
    currentModulesSelected,
    setCurrentModulesSelected,
    modulesWeb,
    setModulesWeb,
    modulesDesktop,
    setModulesDesktop,
    modulesMobile,
    setModulesMobile,
  };
}
