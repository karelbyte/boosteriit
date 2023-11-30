import React from 'react';
import { render } from "@testing-library/react";
import {AppContextProvider, AppContext} from '../app/contexts/appContext';

const mockLocalStorage = (function () {
  let store: Record<string, string> = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
  });
});

test('AppContextProvider inicializa el estado correctamente', () => {
  let appContextValues: any;

  render(
    <AppContextProvider>
      <AppContext.Consumer>
        {(value) => {
          appContextValues = value;
          return null;
        }}
      </AppContext.Consumer>
    </AppContextProvider>
  );

  expect(appContextValues.selectedSolutions).toEqual([]);
  expect(appContextValues.selectedIndustry).toBeNull();
  expect(appContextValues.selectedModules).toEqual([]);
  expect(appContextValues.selectedSections).toEqual([]);
  expect(appContextValues.selectedIndustriesTemplate).toEqual([]);
  expect(appContextValues.selectedIntegrations).toEqual([]);
  expect(appContextValues.selectedAdditionals).toEqual([]);
});

