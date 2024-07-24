import { useState } from 'react';

const usePets = () => {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  return {
    pets,
    addPet,
  };
};

export default usePets;
