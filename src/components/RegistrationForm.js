import React, { useState } from 'react';
import { Button, Form, Input } from './RegisFormStyle';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister({ name, species });
    setName('');
    setSpecies('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la mascota"
        required
      />
      <Input
        type="text"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        placeholder="Especie o raza"
        required
      />
      <Button type="submit">Registrar</Button>
    </Form>
  );
};

export default RegistrationForm;
