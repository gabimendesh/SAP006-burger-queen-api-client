import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FormSignIn from './signIn';

describe('SignIn', () => {
  describe('', () => {
    it('onsubmit function', async () => {
      const mockOnSubmit = jest.fn();
      const { getByTestId, getByRole } = render(<FormSignIn onSubmit={mockOnSubmit} />);

      await act(async () => {
        fireEvent.change(getByTestId('email'), { target: { value: 'email@test.com' } });
        fireEvent.change(getByTestId('password'), { target: { value: '123456' } });
      });
      await act(async () => {
        fireEvent.click(getByRole('button'));
      });
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
