import { useContext } from 'react';
import { AppContext, ContextType } from './appContext';

const useAppContext = (): ContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useContext must be used with in a AppContext provider');
  }
  const {
    selectedSolutions,
    setSelectedSolutions,
    selectedIndustry,
    setSelectedIndustry,
    selectedModules,
    setSelectedModules,
    selectedSections,
    setSelectedSections,
    selectedIndustriesTemplate,
    setSelectedIndustriesTemplate,
    selectedIntegrations,
    setSelectedIntegrations,
    selectedAdditionals,
    setSelectedAdditionals
  }: ContextType = context;

  return {
    selectedSolutions,
    setSelectedSolutions,
    selectedIndustry,
    setSelectedIndustry,
    selectedModules,
    setSelectedModules,
    selectedSections,
    setSelectedSections,
    selectedIndustriesTemplate,
    setSelectedIndustriesTemplate,
    selectedIntegrations,
    setSelectedIntegrations,
    selectedAdditionals,
    setSelectedAdditionals
  };
};

export default useAppContext;
