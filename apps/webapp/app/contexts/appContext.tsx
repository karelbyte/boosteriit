'use client';
import React, { createContext, useState, ReactNode } from 'react';
import { ISolution } from '../../data/solutions';
import { IIndustry } from '../../data/industries';
import { IModule } from '../../data/modules';
import { IIndustryTemplate } from '../../data/industriesTemplate';
import { IIntegration } from '../../data/integrations';
import { IAdditional } from "../../data/addtionals";
export interface ContextType {
  selectedSolutions: ISolution[];
  setSelectedSolutions: React.Dispatch<React.SetStateAction<ISolution[]>>;
  selectedIndustry: IIndustry | null;
  setSelectedIndustry: React.Dispatch<React.SetStateAction<IIndustry | null>>;
  selectedModules: IModule[];
  setSelectedModules: React.Dispatch<React.SetStateAction<IModule[]>>;
  selectedSections: string[];
  setSelectedSections: React.Dispatch<React.SetStateAction<string[]>>;
  selectedIndustriesTemplate: IIndustryTemplate[];
  setSelectedIndustriesTemplate: React.Dispatch<
    React.SetStateAction<IIndustryTemplate[]>
  >;
  selectedIntegrations: IIntegration[];
  setSelectedIntegrations: React.Dispatch<React.SetStateAction<IIntegration[]>>;
  selectedAddtionals: IAdditional[];
  setSelectedAddtionals: React.Dispatch<React.SetStateAction<IAdditional[]>>;
}
const AppContext = createContext<ContextType | null>(null);
function AppContextProvider({ children }: { children: ReactNode }) {
  const [selectedSolutions, setSelectedSolutions] = useState<ISolution[]>([]);

  const [selectedIndustry, setSelectedIndustry] = useState<IIndustry | null>(
    null
  );

  const [selectedIndustriesTemplate, setSelectedIndustriesTemplate] = useState<
    IIndustryTemplate[]
  >([]);

  const [selectedModules, setSelectedModules] = useState<IModule[]>([]);

  const [selectedSections, setSelectedSections] = useState<string[]>([]);

  const [selectedIntegrations, setSelectedIntegrations] = useState<
    IIntegration[]
  >([]);

  const [selectedAddtionals, setSelectedAddtionals] = useState<
    IAdditional[]
  >([]);

  const contextProperties = {
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
    selectedAddtionals,
    setSelectedAddtionals
  };

  return (
    <AppContext.Provider value={contextProperties}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
