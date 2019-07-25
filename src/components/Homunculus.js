import React from 'react'
import { Title } from './styles/themes'

const Homunculus = (props) => {
    return <div>
        <h1>Draw a Homunculus out of these 3 animals!</h1>
    {props.homunculusAnimals.map(x => <Title key={x.id} >{x.name}</Title>)}
    </div>
}

export default Homunculus;