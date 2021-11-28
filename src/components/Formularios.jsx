import { useState } from "react"

const Formularios = () => {

    const [fruta, setFruta] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [carrito, setCarrito] = useState([])

    const guardarDatos = (e) =>{
        e.preventDefault();
        
        if (!fruta.trim()) {
            console.log("esta vacio fruta");
            return;
        }
        if (!descripcion.trim()) {
            console.log("esta vacio descripcion");
            return;
        }
        console.log(`procesando datos ${fruta} ${descripcion}`);
        setCarrito([
            ...carrito,
            {fruta: fruta, descripcion: descripcion}
        ])
        e.target.reset();
        setFruta("")
        setDescripcion("")
    }
    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos }>
            <input
              type="text"
              placeholder="Ingrese Fruta"
              className="form-control mb-2"
              onChange={ e => setFruta(e.target.value)}
            /> 
            <input
              type="text"
              placeholder="Ingrese Descripcion"
              className="form-control mb-2"
              onChange={e => setDescripcion(e.target.value)}
            /> 
            <button className="btn btn-primary w-100" type="submit">Agregar</button>
            </form>
            <ul>
                {
                    carrito.map((fruta, index)=> (<li key={index}>{fruta.fruta} - {fruta.descripcion}</li>))
                }
            </ul>
        </div>
    )
}

export default Formularios
