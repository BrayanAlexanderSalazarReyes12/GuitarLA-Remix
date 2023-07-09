import { Outlet, useLoaderData } from "@remix-run/react"
import styles from "~/styles/blog.css"

export function meta() {
  return [
    {
      title: "GuitarLA - Nuestro Blog",
      description: "GuitarLA, Blog de musica y ventas de guitarras"
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Blog() {
  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Blog