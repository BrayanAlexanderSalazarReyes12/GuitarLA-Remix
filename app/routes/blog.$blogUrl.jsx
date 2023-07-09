import { Link, useLoaderData } from "@remix-run/react"
import { mostrarBlog } from "~/models/blogGuitarra.server"
import { formatearFecha } from "~/helpers"

export function meta ({data}) {
  if(!data){
    return {
      title: 'Entrada de Blog No encontrada',
      descripcion: `Guitarras, ventas de guitarras, blog no encontrado`
    }
  }
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
      descripcion: `Guitarras, ventas de guitarras, blog sobre ${data.data[0].attributes.titulo}`
    }
  ]
}

export async function loader({params}) {
  const {blogUrl} = params
  const blog = await mostrarBlog(blogUrl)
  if(blog.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  return blog
}

export default function BlogUrl() {
  const blog = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = blog.data[0].attributes
  return (
    <article className="post mt-3">
      <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} className="imagen" />
      <div className="contenido">
          <h3>{titulo}</h3>
          <p className="fecha">{formatearFecha(publishedAt)}</p>
          <p className="texto">{contenido}</p>
          <Link to={-1} className="enlace">volver</Link>
      </div>
    </article>
  )
}
