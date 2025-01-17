import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';

const fakeUser = { email: 'user@test.com', password: '123password' };

const mockLogin = jest.fn((email, password) => Promise.resolve({ email, password }));

describe('SignIn', () => {
  describe('', () => {
    it('should not display error when value is valid', async () => {
      const { getByTestId } = render(<Login onSubmit={mockLogin} />, { wrapper: MemoryRouter });

      const email = await waitFor(
        () => getByTestId('email'),
      );
      const password = await waitFor(
        () => getByTestId('password'),
      );

      fireEvent.change(email, {
        target: {
          value: fakeUser.email,
        },
      });

      fireEvent.change(password, {
        target: {
          value: fakeUser.password,
        },
      });
      fireEvent.submit(screen.getByTestId('form'));

      expect(email.value).toEqual(fakeUser.email);
      expect(password.value).toEqual(fakeUser.password);
      expect(mockLogin).not.toBeCalled();
    });

    it('should render the sign in form with all fields required', () => {
      const mockOnSubmit = jest.fn();
      render(<Login onSubmit={mockOnSubmit} />, { wrapper: MemoryRouter });

      const email = screen.getByPlaceholderText(/Digite o seu email/i);
      const password = screen.getByPlaceholderText(/Digite a sua senha/i);
      const loginButton = screen.getByText(/Entrar/i, { selector: 'button' });

      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });
});
