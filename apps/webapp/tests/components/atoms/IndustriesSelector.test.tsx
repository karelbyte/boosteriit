import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IndustriesSelector from '../../../app/components/atoms/IndustriesSelector';
import '@testing-library/jest-dom';
import { AppContextProvider } from '../../../app/contexts/appContext';

describe('IndustriesSelector', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <AppContextProvider>
        <IndustriesSelector />
      </AppContextProvider>
    );
    expect(getByText('cambiar')).toBeInTheDocument();
  });

  it('show menu when clicking "change"', () => {
    const { getByText, getByTestId } = render(
      <AppContextProvider>
        <IndustriesSelector />
      </AppContextProvider>
    );
    fireEvent.click(getByText('cambiar'));
    expect(getByTestId('menu')).toBeInTheDocument();
  });

});
