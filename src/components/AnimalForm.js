import React from 'react'
import { Button, Input } from './styles/themes'

const AnimalForm = (props) => {
    return (
        <form onSubmit={props.addAnimal}>
            <Input type="text" 
            name="inputText"
            value={props.inputText}
            placeholder="Add another animal"
            onChange={props.handleChange}
            />
            <Button type="submit">Add animal!</Button>
            <Button onClick={props.clearAll} >Clear All</Button>
            <Button onClick={props.homunculus}>Homunculus!</Button>
        </form>
    );
}

export default AnimalForm;