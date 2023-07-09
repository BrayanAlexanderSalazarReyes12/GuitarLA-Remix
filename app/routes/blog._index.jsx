import { useLoaderData } from "@remix-run/react"
import { consultarBlog } from "~/models/blogGuitarra.server"
import ListadoBlogs from "../Components/listadoBlogs"

export function meta() {
  return [
    {
      title: "GuitarLA - Nuestro Blog",
      description: "GuitarLA, Blog de musica y ventas de guitarras"
    }
  ]
}

export async function loader() {
  const blogs = await consultarBlog()
  return blogs.data
}

function Blog() {
  const blogs = useLoaderData()

  return (
    <ListadoBlogs
      blogs = {blogs}
    />
  )
}

export default Blog