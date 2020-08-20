import React, {Fragment} from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h3>Datos</h3>
            <form>
                <label>Nombre del primo</label>
                <input
                    type="text"
                    name="primo"
                    className="u-full-width"
                    placeholder="ingresa el nombre del primo"
                />
                <label>Nombre de mamá/papá</label>
                <select className="u-full-width">
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