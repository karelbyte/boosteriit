'use client';
import React from 'react';
import { IIndustry, industries } from '../../data/industries';
import useAppContext from '../contexts/hookAppContext';
import { additionals, IAdditional } from '../../data/addtionals';
import { IIntegration } from '../../data/integrations';
import { IIndustryTemplate } from '../../data/industriesTemplate';
export default function useIndustriesHook() {
  const {
    setSelectedIndustry,
    setSelectedAdditionals,
    selectedAdditionals,
    selectedIntegrations,
    setSelectedIntegrations,
  } = useAppContext();
  const addIndustryStorage = (industry: IIndustry) => {
    setSelectedIndustry(industry);
    localStorage.setItem('industry', JSON.stringify({ id: industry.id }));
  };

  const getIndustryStorage = () => {
    const industry = localStorage.getItem('industry');
    if (!industry) {
      return null;
    }
    const industryStorage = JSON.parse(industry);
    return (
      industries.find((item: IIndustry) => item.id === industryStorage.id) ||
      null
    );
  };
  const addAdditionalsStorage = (additionals: IAdditional[]) => {
    const additionalsIds = additionals.map((additional: IAdditional) => {
      return { id: additional.id };
    });
    localStorage.setItem('additionals', JSON.stringify(additionalsIds));
  };

  const getAdditionalsStorage = () => {
    const additionalsStorage = localStorage.getItem('additionals');
    if (additionalsStorage) {
      const additionalIds = JSON.parse(additionalsStorage).map(
        (item: { id: string }) => item.id
      );

      return additionals.filter((additional: IAdditional) =>
        additionalIds.includes(additional.id)
      );
    } else return [];
  };

  const addTemplatesStorage = (templates: IIndustryTemplate[]) => {
    const additionalsIds = templates.map((template: IIndustryTemplate) => {
      return { id: template.id };
    });
    localStorage.setItem('templates', JSON.stringify(additionalsIds));
  };

  const checkOptions = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      const additional = additionals.find(
        (additional: IAdditional) => additional.id == id
      );
      if (additional) {
        const currents = [...selectedAdditionals, additional];
        setSelectedAdditionals(currents);
        addAdditionalsStorage(currents);
      }
    } else {
      const currents = selectedAdditionals.filter(
        (additional: IAdditional) => additional.id !== id
      );
      setSelectedAdditionals(currents);
      addAdditionalsStorage(currents);
    }
  };

  const addIntegrationsStorage = (integrations: IIntegration[]) => {
    const integrationsIds = integrations.map((integration: IIntegration) => {
      return { id: integration.id };
    });
    localStorage.setItem('integrations', JSON.stringify(integrationsIds));
  };
  const setIntegrations = (currentIntegration: IIntegration) => {
    const foundIntegration = selectedIntegrations.find(
      (integration: IIntegration) => integration.id == currentIntegration.id
    );
    if (foundIntegration) {
      const current = selectedIntegrations.filter(
        (integration: IIntegration) => integration.id !== currentIntegration.id
      );
      setSelectedIntegrations(current);
      addIntegrationsStorage(current);
    } else {
      const current = [...selectedIntegrations, currentIntegration];
      setSelectedIntegrations(current);
      addIntegrationsStorage(current);
    }
  };

  const getStatusCheck = (id: string) => {
    return selectedAdditionals
      .map((additional: IAdditional) => additional.id)
      .includes(id);
  };

  const getIntegrationStatusCheck = (id: string) => {
    return selectedIntegrations
      .map((integration: IIntegration) => integration.id)
      .includes(id);
  };

  return {
    addTemplatesStorage,
    addAdditionalsStorage,
    getAdditionalsStorage,
    getStatusCheck,
    getIntegrationStatusCheck,
    setIntegrations,
    checkOptions,
    addIndustryStorage,
    getIndustryStorage,
  };
}
