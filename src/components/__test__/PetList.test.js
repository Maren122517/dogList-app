import { render, screen } from '@testing-library/react';
import PetList from '../PetList';

test('renders pet list', () => {
  const pets = [
    { name: 'Buddy', species: 'Dog' },
    { name: 'Mittens', species: 'Cat' },
  ];

  render(<PetList pets={pets} />);

  // Usa getByText con una función de coincidencia
  pets.forEach(pet => {
    const petNameElement = screen.getByText((content, element) => 
      content.includes(pet.name) && element.tagName.toLowerCase() === 'h3'
    );
    const petSpeciesElement = screen.getByText((content, element) => 
      content.includes(pet.species) && element.tagName.toLowerCase() === 'p'
    );
    
    expect(petNameElement).toBeInTheDocument();
    expect(petSpeciesElement).toBeInTheDocument();
  });
});
