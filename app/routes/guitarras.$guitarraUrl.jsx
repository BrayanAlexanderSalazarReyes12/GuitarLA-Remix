import { Link, useLoaderData, useOutletContext } from "@remix-run/react"
import { ConsultarGuitarra } from "~/models/guitarras.server"
import { formatearCantidad } from "~/helpers"
import { useState } from "react"
import Swal from "sweetalert2"

export function meta({data}){
  if(!data){
    return {
      title: 'Guitarra No encontrada',
      descripcion: `Guitarras, ventas de guitarras, guitarra no encontrada`
    }
  }
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
      descripcion: `Guitarras, ventas de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
  ]
}

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await ConsultarGuitarra(guitarraUrl)
  
  if(guitarra.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return guitarra
}

const GuitarraUrl = () => {
  const guitarra = useLoaderData()
  const {nombre, descripcion, imagen, precio } = guitarra.data[0].attributes
  const [cantidad, setCantidad] = useState(0)
  const {AgregarCarrito} = useOutletContext()

  const CompraGuitarra = e =>{
    e.preventDefault();
    if(cantidad < 1){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'debe seleccionar una cantidad',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }
    const guitarraSelect = {
      id: guitarra.data[0].id,
      nombre,
      imagen: imagen.data.attributes.url,
      precio,
      cantidad
    }
    AgregarCarrito(guitarraSelect)
  }

  return (
    <div className="guitarra">
      <img src={imagen.data.attributes.url} alt={`Imagenes de guitarras ${nombre}`} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{formatearCantidad(precio)}</p>
        <form action="#" className="formulario" onSubmit={CompraGuitarra}>
          <label htmlFor="cantidad">Cantidad</label>
          <select name="cantidad" id="cantidad" value={cantidad} onChange={e => setCantidad(Number(e.target.value))}>
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" name="agregar" id="agregar" value="Agregar al carrito"/>
        </form>
        <Link to={-1} className="enlace">Volver</Link>
      </div>
    </div>
  )
}

export default GuitarraUrl