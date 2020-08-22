import React from 'react'

const Primo = ({primoe}) => {
    let {primo, padre, fecha} = primoe
    return (
        <div className="primo">
            <p><span>{primo}</span></p>
            <p>Madre o padre: <span>{padre}</span></p>
            <p>Fecha de nacimiento <span>{fecha}</span></p>
        </div>
    )
}

export default Primo