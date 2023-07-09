import { useLoaderData } from "@remix-run/react"
import { consultarBlog } from "~/models/blogGuitarra.server"
import { CargarGUitarras } from "~/models/guitarras.server"
import { mostrarCurso } from "~/models/curso.server"
import ListadoGuitarras from "~/Components/listadoGuitarras"
import ListadoBlogs from "~/Components/listadoBlogs"
import Cursos from "~/Components/cursos"
import stylesGuitarras from "~/styles/guitarra.css"
import stylesBlogs from "~/styles/blog.css"
import stylesCurso from "~/styles/curso.css"

export function meta() {
  return [
    {
      title: "GuitarLA - Inicio",
      description: "Ventas de guitarras, Cursos de guitarras y todos sobre el mundo de las guitarras"
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesBlogs
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [guitarras, blogs, curso] = await Promise.all([
    CargarGUitarras(),
    consultarBlog(),
    mostrarCurso()
  ])
  return {
    guitarras: guitarras.data,
    blogs: blogs.data,
    curso: curso.data
  }
}

export default function Index() {
  const {guitarras, blogs, curso} = useLoaderData()
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>
      <Cursos
        curso = {curso.attributes}
      />
      <section className="contenedor">
        <ListadoBlogs
          blogs = {blogs}
        />
      </section>
    </>
  )
}