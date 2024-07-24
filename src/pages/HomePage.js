import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import PetList from '../components/PetList';
import usePets from '../hooks/usePets';

const HomePage = () => {
  const { pets, addPet } = usePets();

  return (
    <div>
      <RegistrationForm onRegister={addPet} />
      <PetList pets={pets} />
    </div>
  );
};

export default HomePage;
