import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../app/components/organisms/Footer';
import Logo from '../../../app/components/atoms/Logo';
import Link from "next/link";
import '@testing-library/jest-dom'
describe('Footer', () => {

    // Renders the footer component without errors
    it('should render the footer component without errors', () => {
      render(<Footer />);
    });

    // Logo component is missing or broken
    it('should render the logo component without errors', () => {
      const { getByAltText } = render(<Logo />);
      expect(getByAltText('Boosteriit')).toBeInTheDocument();
    });

    // Link to industries is missing or broken
    it('should render the link to industries without errors', () => {
      const { getByText } = render(<Link href={'/industries'}>Industria</Link>);
      expect(getByText('Industria')).toBeInTheDocument();
    });

});
