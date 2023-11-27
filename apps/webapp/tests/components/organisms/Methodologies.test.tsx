import React from 'react';
import { render } from '@testing-library/react';
import Methodologies from '../../../app/components/organisms/Methodologies';
describe('Methodologies', () => {
  // Renders a div element with class 'flex flex-col items-center py-4 px-8 sm:py-12 sm:px-10 lg:px-20'
  it('should render a div element with the correct class', () => {
    const { container } = render(<Methodologies />);
    expect(container.querySelector('div')?.classList.contains('flex')).toBe(
      true
    );
  });

  it('should render without any MethCard components', () => {
    const { queryByTestId } = render(<Methodologies />);
    expect(queryByTestId('meth-card')).toBeNull();
  });
});
