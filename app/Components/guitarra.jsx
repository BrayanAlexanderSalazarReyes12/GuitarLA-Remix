import { Link } from "@remix-run/react"
import { formatearCantidad } from "~/helpers"

function Guitarra({guitarra}) {
    const {nombre, precio, imagen, descripcion, url} = guitarra
    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">{formatearCantidad(precio)}</p>
                <Link className="enlace" to={`/guitarras/${url}`} >Ver producto</Link>
            </div>
        </div>
    )
}

export default Guitarra