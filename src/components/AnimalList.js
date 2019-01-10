import React from 'react'
import Animal from './Animal';

const AnimalList = (props) => {
    return (
        <div>
            <ul className="AnimalList">
                {props.animals.map(x => <Animal animalItem={x} key={x.id.toString()} removeAnimal={props.removeAnimal} />)}
            </ul>
        </div>
    );
}

export default AnimalList;