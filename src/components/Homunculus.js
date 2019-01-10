import React from 'react'

const Homunculus = (props) => {
    return <div>
        <h1>Draw a Homunculus out of these 3 animals!</h1>
    {props.homunculusAnimals.map(x => <p key={x.id} >{x.name}</p>)}
    </div>
}

export default Homunculus;