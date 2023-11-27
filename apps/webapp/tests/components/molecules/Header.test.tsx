import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header, { IHeader } from '../../../app/components/molecules/Header';
import { useRouter } from 'next/navigation';
jest.mock('next/navigation');
describe('Header', () => {
  const pushMock = jest.fn();
  // @ts-ignore
  useRouter.mockReturnValue({ push: pushMock } as any);

  it('should render a header with a title and a back button', () => {
    const props: IHeader = {
      title: 'Test Title',
      urlBack: 'test/url',
      actionFn: jest.fn(),
      children: <></>,
    };

    const { getByText } = render(<Header {...props} />);
    const backButton = getByText('Test Title');
    expect(backButton).toBeInTheDocument();
  });


  it('should render a header with a long title', () => {
    // Arrange
    const props: IHeader = {
      title: 'This is a very long title that exceeds the width of the header',
      urlBack: 'test/url',
    };

    const { getByText } = render(<Header {...props} />);
    const titleElement = getByText(props.title);

    expect(titleElement).toBeInTheDocument();
  });
});
