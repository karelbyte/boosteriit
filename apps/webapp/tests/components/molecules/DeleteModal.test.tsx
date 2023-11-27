import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteModal from '../../../app/components/molecules/DeleteModal';

describe('DeleteModal', () => {
  it('should render modal when showModal is true', () => {
    const showModal = true;
    const setShowModal = jest.fn();
    const caption = 'Test Caption';
    const deleteAction = jest.fn();

    const { getByText } = render(
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        caption={caption}
        deleteAction={deleteAction}
      />
    );

    expect(getByText(caption)).toBeInTheDocument();
    expect(getByText('Cancelar')).toBeInTheDocument();
    expect(getByText('Eliminar')).toBeInTheDocument();
  });

  // Does not render anything when showModal is false
  it('should not render anything when showModal is false', () => {
    const showModal = false;
    const setShowModal = jest.fn();
    const caption = 'Test Caption';
    const deleteAction = jest.fn();

    const { container } = render(
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        caption={caption}
        deleteAction={deleteAction}
      />
    );
    expect(container.firstChild).toBeNull();
  });
});
