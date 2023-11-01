import { Link } from "react-router-dom"

const Item = ( {producto} ) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Categoria:{producto.categoria} </p>
                <p>{producto.description} </p>
                <p>Precio: ${producto.precio} </p>
                <Link className="ver-mas" to= {`/Item/${producto.id}`} >Ver mas</Link>
            </div>
        </div>
    )
}

export default Item