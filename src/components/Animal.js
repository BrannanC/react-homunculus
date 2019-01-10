import React from 'react'

const Animal = (props) => {
    return <li>{props.animalItem.name}<button name={props.animalItem.name} onClick={props.removeAnimal}>[X]</button></li>
}

export default Animal;