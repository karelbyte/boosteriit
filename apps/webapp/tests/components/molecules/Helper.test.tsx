import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppContextProvider } from '../../../app/contexts/appContext';
import Helper from '../../../app/components/molecules/Helper';
import { useRouter } from "next/navigation";

jest.mock('next/navigation');
describe('Helper', () => {

  const pushMock = jest.fn();
  // @ts-ignore
  useRouter.mockReturnValue({ push: pushMock } as any);
  it('should render a div with the specified class', () => {
    const { container } = render(
      <AppContextProvider>
        <Helper />
      </AppContextProvider>
    );
    const div = container.querySelector(
      `.z-10`
    );
    expect(div).toBeInTheDocument();
  });

});
