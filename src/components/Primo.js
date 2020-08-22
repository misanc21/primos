import React from 'react'

const Primo = ({primoe, eliminar}) => {
    let {primo, padre, fecha, id} = primoe
    return (
        <div className="primo">
            <p><span>{primo}</span></p>
            <p>Madre o padre: <span>{padre}</span></p>
            <p>Fecha de nacimiento <span>{fecha}</span></p>
            <button className="button eliminar u-full-width" onClick={() => eliminar(id)}>Eliminar</button>
        </div>
    )
}

export default Primo