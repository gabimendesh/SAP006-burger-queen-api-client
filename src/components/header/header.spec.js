import React from 'react';
import {
  render,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';

describe('Header component', () => {
  it('should render the header in the document', () => {
    render(<Header />, { wrapper: MemoryRouter });

    const OrderPageLink = screen.getByText(/Pedidos Finalizados/i);
    const logoutLink = screen.getByText(/Sair/i);
    expect(OrderPageLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
