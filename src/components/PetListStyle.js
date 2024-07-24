import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  width: 150px;
  margin: 15px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: ${(props) => {
    if (props.species === 'perro') return '#0074ff';
    if (props.species === 'gato') return '#ff8f00';
    return '#00ff42';
  }};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export { List, ListItem }