import { Link } from "@remix-run/react"
import { formatearFecha } from "~/helpers"

export default function Blogs({blog}) {
    const {titulo, contenido, imagen, url, publishedAt} = blog
    return (
        <article className="post">
            <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link to={`/blog/${url}`} className="enlace">Leer Entrada</Link>
            </div>
        </article>
    )
}
