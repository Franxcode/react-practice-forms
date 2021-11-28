const Variables = () => {

    const saludo = "Hola desde constante"
    const imagen = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"

    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen} alt="" />
        </div>
    )
}

export default Variables
