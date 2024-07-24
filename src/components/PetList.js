import React from 'react';
import { List, ListItem } from './PetListStyle';

const PetList = ({ pets }) => (
  <List>
    {pets.map((pet, index) => (
      <ListItem key={index} species={pet.species}>
        <h3>{pet.name}</h3>
        <p>{pet.species}</p>
      </ListItem>
    ))}
  </List>
);

export default PetList;
