import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({crearPrimo}) => {
    const [error, setError] = useState (false)
    const [datos, setDatos] = useState({
        primo: '',
        padre: '',
        fecha: ''
    })

    let {primo, padre, fecha} = datos

    const actualizaState = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const submitPrimo = e => {
        e.preventDefault();

        if (primo.trim === '' || padre === '' || fecha.trim === ''){
            setError(true)
            return
        }
        setError(false)
        datos.id = uuidv4()
        crearPrimo(datos)
        setDatos({
            primo: '',
            padre: '',
            fecha: ''
        })
    }

    return (
        <Fragment>
            <h3>Datos</h3>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>:null}
            <form onSubmit={submitPrimo}>
                <label>Nombre del primo</label>
                <input
                    type="text"
                    name="primo"
                    className="u-full-width"
                    placeholder="ingresa el nombre del primo"
                    onChange={actualizaState}
                    value={primo}
                />
                <label>Nombre de mamá/papá</label>
                <select className="u-full-width" name="padre" onChange={actualizaState} value={padre}>
                    <option value="Araceli">Araceli</option>
                    <option value="Patricia">Patricia</option>
                    <option value="Elvia">Elvia</option>
                    <option value="Felipe">Felipe</option>
                    <option value="Pablo">Pablo</option>
                    <option value="Evaristo">Evaristo</option>
                    <option value="Esperanza">Esperanza</option>
                    <option value="Mirna">Mirna</option>
                    <option value="Miryam">Miryam</option>
                    <option value="Silvia">Silvia</option>
                    <option value="Magdalena">Magdalena</option>
                    <option value="Barbara">Barbara</option>
                    <option value="Enrique">Enrique</option>
                    <option value="Mayra">Mayra</option>
                    <option value="Yesenia">Yesenia</option>
                    <option value="Adrián">Adrián</option>
                </select>
                <label>Fecha de nacimiento</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    placeholder="ingresa fecha de nac del primo"
                    onChange={actualizaState}
                    value={fecha}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar
                </button>
            </form>
        </Fragment>
    )
}

export default Formulario