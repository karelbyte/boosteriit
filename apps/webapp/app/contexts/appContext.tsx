'use client';
import React, { createContext, useState, ReactNode } from 'react';
export interface ContextType {
  selectedSolutions: string[];
  setSelectedSolutions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedIndustry: string;
  setSelectedIndustry: React.Dispatch<React.SetStateAction<string>>;
  selectedModules: string[];
  setSelectedModules: React.Dispatch<React.SetStateAction<string[]>>;
}
const AppContext = createContext<ContextType | null>(null);
function AppContextProvider({ children }: { children: ReactNode }) {
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const [selectedIndustry, setSelectedIndustry] = useState<string>('');

  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const contextProperties = {
    selectedSolutions,
    setSelectedSolutions,
    selectedIndustry,
    setSelectedIndustry,
    selectedModules,
    setSelectedModules,
  };

  return (
    <AppContext.Provider value={contextProperties}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
