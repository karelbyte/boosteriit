import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IndustriesBannerFooter from '../../../app/components/molecules/IndustriesBannerFooter';
import { AppContextProvider } from '../../../app/contexts/appContext';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation');
describe('IndustriesBannerFooter', () => {
  const pushMock = jest.fn();
  // @ts-ignore
  useRouter.mockReturnValue({ push: pushMock } as any);

  // Renders the IndustriesBannerFooter component without crashing
  it('should render the IndustriesBannerFooter component without crashing', () => {
    render(
      <AppContextProvider>
        <IndustriesBannerFooter />
      </AppContextProvider>
    );
  });

  it('should display the Boosteriit logo', () => {
    const { getByAltText } = render(
      <AppContextProvider>
        <IndustriesBannerFooter />
      </AppContextProvider>
    );
    const logo = getByAltText('Boosteriit');
    expect(logo).toBeInTheDocument();
  });

  it('should not display the message "¿No ves tu industria entre las opciones?"', () => {
    const { queryByText } = render(
      <AppContextProvider>
        <IndustriesBannerFooter />
      </AppContextProvider>
    );
    const message = queryByText('¿No ves tu industria entre las opciones?');
    expect(message).toBeInTheDocument();
  });

});
