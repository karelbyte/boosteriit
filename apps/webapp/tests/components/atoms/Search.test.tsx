import React from 'react';
import { render,} from '@testing-library/react';
import Search from '../../../app/components/atoms/Search';
import '@testing-library/jest-dom';
describe('Search', () => {

    // Renders an input field with the given placeholder text and a magnifying glass icon.
    it('should render an input field with the given placeholder text and a magnifying glass icon', () => {
      // Arrange
      const placeholder = 'Enter text';
      const setTerm = jest.fn();

      // Act
      const { getByPlaceholderText, getByTestId } = render(<Search placeholder={placeholder} setTerm={setTerm} />);
      const inputField = getByPlaceholderText(placeholder);
      const magnifyingGlassIcon = getByTestId('magnifying-glass-icon');

      // Assert
      expect(inputField).toBeInTheDocument();
      expect(magnifyingGlassIcon).toBeInTheDocument();
    });

});
