'use client';
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { ISolution } from '../../data/solutions';
import { IIndustry, industries } from "../../data/industries";
import { IModule, modules } from '../../data/modules';
import {
  IIndustryTemplate,
  industriesTemplate,
} from '../../data/industriesTemplate';
import { IIntegration, integrations } from "../../data/integrations";
import { IAdditional } from '../../data/addtionals';
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
  selectedAdditionals: IAdditional[];
  setSelectedAdditionals: React.Dispatch<React.SetStateAction<IAdditional[]>>;
}
const AppContext = createContext<ContextType | null>(null);
function AppContextProvider({ children }: { children: ReactNode }) {
  const getTemplateStorage = () => {
    const templatesStorage = localStorage.getItem('templates');
    if (templatesStorage) {
      const templatesIds = JSON.parse(templatesStorage).map(
        (item: { id: string }) => item.id
      );
      const currentTemplates = industriesTemplate.filter(
        (template: IIndustryTemplate) => templatesIds.includes(template.id)
      );
      setSelectedIndustriesTemplate(currentTemplates);
    }
  };
  const getModulesStorage = () => {
    const currentStorage = localStorage.getItem('modules');

    if (currentStorage) {
      const modulesIds = JSON.parse(currentStorage).map(
        (item: { id: string }) => item.id
      );
      const currenModules = modules.filter((module: IModule) =>
        modulesIds.includes(module.id)
      );
      setSelectedModules(currenModules);
    }
  };

  const getIndustryStorage = () => {
    const industry = localStorage.getItem('industry');
    if (!industry) {
      return null;
    }
    const industryStorage = JSON.parse(industry);
    setSelectedIndustry(industries.find((item: IIndustry) => item.id === industryStorage.id) ||
      null)
  };

  const getIntegrationStorage = () => {
    const currentIntegrationsStorage = localStorage.getItem('integrations');
    if (currentIntegrationsStorage) {
      const integrationsIds = JSON.parse(currentIntegrationsStorage).map(
        (item: { id: string }) => item.id
      );
      const currenIntegrations = integrations.filter((integration: IIntegration) =>
        integrationsIds .includes(integration.id)
      );
      setSelectedIntegrations(currenIntegrations);
    }
  };

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

  const [selectedAdditionals, setSelectedAdditionals] = useState<IAdditional[]>(
    []
  );

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
    selectedAdditionals,
    setSelectedAdditionals,
  };

  useEffect(() => {
    getIndustryStorage()
    getModulesStorage();
    getTemplateStorage();
    getIntegrationStorage()
  }, []);

  return (
    <AppContext.Provider value={contextProperties}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
