import React from 'react';
import { render, act } from '@testing-library/react';
import usePets from '../../hooks/usePets';

const TestComponent = () => {
  const { pets, addPet } = usePets();
  return (
    <div>
      <button onClick={() => addPet({ name: 'Buddy', species: 'Dog' })}>Add Pet</button>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
            {pet.name} - {pet.species}
          </li>
        ))}
      </ul>
    </div>
  );
};

test('should add pets', () => {
  const { getByText, container } = render(<TestComponent />);

  act(() => {
    getByText('Add Pet').click();
  });

  expect(container.textContent).toContain('Buddy - Dog');
});
