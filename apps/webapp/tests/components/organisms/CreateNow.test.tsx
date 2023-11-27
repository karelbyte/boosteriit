import React from 'react';
import { render } from '@testing-library/react';
import CreateNow, {
  ICreateNowProps,
} from '../../../app/components/organisms/CreateNow';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('next/navigation');
describe('CreateNow', () => {
  const pushMock = jest.fn();
  // @ts-ignore
  useRouter.mockReturnValue({ push: pushMock } as any);
  it('should render a button with text "Crear ahora" when mobileHidden prop is false', () => {
    const props: ICreateNowProps = {
      mobileHidden: false,
      customStyle: '',
    };

    const { getByText } = render(<CreateNow {...props} />);
    const button = getByText('Crear ahora');
    expect(button).toBeInTheDocument();
  });

  // mobileHidden prop is true, button has class "hidden"
  it('should have class "hidden" when mobileHidden prop is true', () => {
    const props: ICreateNowProps = {
      mobileHidden: true,
      customStyle: '',
    };

    const { getByText } = render(<CreateNow {...props} />);
    const button = getByText('Crear ahora');
    expect(button).not.toHaveClass('hidden');
  });
});
