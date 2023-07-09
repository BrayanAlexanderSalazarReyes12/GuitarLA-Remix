import { useLoaderData } from "@remix-run/react"
import { CargarGUitarras } from "~/models/guitarras.server"
import ListadoGuitarras from "~/Components/listadoGuitarras"

export function meta() {
  return [
    {
      title: "GuitarraLS - Tienda de guitarras",
      description: "GuitarraLA nuestra colección de guitarras"
    }
  ]
}

export async function loader() {
  const guitarras = await CargarGUitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData()
  return (
    <ListadoGuitarras
      guitarras={guitarras}
    />
  )
}

export default Tienda