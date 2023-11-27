import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionBtn, {
  ActionBtnProps,
} from '../../../app/components/atoms/ActionBtn';

describe('ActionBtn Component', () => {
  it('should call the provided action function on button click', () => {
    const actionFn = jest.fn();
    const props: ActionBtnProps = {
      title: 'test',
      actionFn: actionFn,
      disabled: false,
    };
    const { getByText } = render(<ActionBtn {...props} />);
    const button = getByText('test');
    fireEvent.click(button);
    expect(actionFn).toHaveBeenCalled();
  });

  it('should apply custom style class', () => {
    const customStyleClass = 'my-custom-class';
    const props: ActionBtnProps = {
      title: 'test',
      styleClass: customStyleClass,
      disabled: false,
    };
    const { container } = render(<ActionBtn {...props} />);
    expect(
      container.querySelector('button')?.classList.contains(customStyleClass)
    ).toBe(true);
  });
});
