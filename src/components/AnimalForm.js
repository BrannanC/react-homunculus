import React from 'react'

const AnimalForm = (props) => {
    return (
        <form onSubmit={props.addAnimal}>
            <input type="text" 
            name="inputText"
            value={props.inputText}
            placeholder="Add another animal"
            onChange={props.handleChange}
            />
            <button type="submit">Add animal!</button>
            <button onClick={props.clearAll} >Clear All</button>
            <button onClick={props.homunculus}>Homunculus!</button>
        </form>
    );
}

export default AnimalForm;