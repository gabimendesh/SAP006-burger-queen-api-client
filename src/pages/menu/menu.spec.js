import React from 'react';
import {
  render,
  waitFor,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MenuPage from './index';

const fakeUser = { name: 'User Test', table: '6' };

describe('Card', () => {
  it('renders the current text inputs', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MenuPage />
      </BrowserRouter>,
    );

    const inputName = await waitFor(
      () => getByTestId('client-name'),
    );
    const inputTable = await waitFor(
      () => getByTestId('client-table'),
    );

    fireEvent.change(inputName, {
      target: {
        value: fakeUser.name,
      },
    });

    fireEvent.change(inputTable, {
      target: {
        value: fakeUser.table,
      },
    });

    expect(inputName.value).toEqual(fakeUser.name);
    expect(inputTable.value).toEqual(fakeUser.table);
  });

  it('should render the inputs in the document', async () => {
    render(
      <BrowserRouter>
        <MenuPage />
      </BrowserRouter>,
    );

    const clientName = screen.getByPlaceholderText(/Nome do cliente/i);
    const clientTable = screen.getByPlaceholderText(/Nº da mesa/i);

    expect(clientName).toBeInTheDocument();
    expect(clientTable).toBeInTheDocument();
  });
});
