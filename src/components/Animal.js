import React from "react";
import { Button, Title, ListItem } from "./styles/themes";

const Animal = props => {
  return (
    <ListItem>
      <Title>{props.animalItem.name}</Title>
      <Button name={props.animalItem.name} onClick={props.removeAnimal}>
        [X]
      </Button>
    </ListItem>
  );
};

export default Animal;
