import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Back from '../../../app/components/atoms/Back';
import { useRouter } from 'next/navigation';
import '@testing-library/jest-dom';

jest.mock('next/navigation');
describe('Back Component', () => {
  it('should call the action function and navigate to the specified url when clicking the icon', () => {
    const pushMock = jest.fn();
    // @ts-ignore
    useRouter.mockReturnValue({ push: pushMock } as any);
    const actionFnMock = jest.fn();
    const { container } = render(
      <Back url="/ejemplo" actionFn={actionFnMock} />
    );
    const backButton = container.querySelector('.cursor-pointer');
    if (backButton) fireEvent.click(backButton);
    expect(actionFnMock).toHaveBeenCalled();
    expect(pushMock).toHaveBeenCalledWith('/ejemplo');
  });
});
