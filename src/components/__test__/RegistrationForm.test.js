import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from '../RegistrationForm';

test('renders registration form and handles input and submit', () => {
  const mockRegister = jest.fn();
  render(<RegistrationForm onRegister={mockRegister} />);

  fireEvent.change(screen.getByPlaceholderText(/Nombre de la mascota/i), { target: { value: 'Buddy' } });
  fireEvent.change(screen.getByPlaceholderText(/Especie o raza/i), { target: { value: 'Dog' } });
  fireEvent.click(screen.getByText(/Registrar/i));

  expect(mockRegister).toHaveBeenCalledWith({ name: 'Buddy', species: 'Dog' });
});
