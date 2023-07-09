import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'
import { formatearCantidad } from '~/helpers'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta() {
    return [
        {
            title: 'GuitarLA - Carrito de compras',
            description: 'Ventas de guitarras, música, blog, carrito de compras, tienda'
        }
    ]
}

function Carrito() {
    const {carrito,ActualizarCantidad,EliminarCarrito} = useOutletContext()
    const [total,Settotal] = useState(0)
    
    useEffect(()=>{
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        Settotal(calculoTotal)
    },[carrito])
    
    return (
        <ClientOnly fallback={'Cargando...'}>
            {()=>(
                <main className="contenedor">
                    <h1 className="heading">Carrito de Compras</h1>
                    <div className="contenido">
                        <div className="carrito">
                            <h2>Articulos</h2>
                            {
                                carrito?.length === 0 ? 'Carrito vacio' : (
                                    carrito?.map( productos => (
                                        <div key={productos.id} className='producto'>
                                            <div>
                                                <img src={productos.imagen} alt= {`Imagen del producto ${productos.nombre}`} />
                                            </div>
                                            <div>
                                                <p className="nombre">{productos.nombre}</p>
                                                <p>Cantidad: </p>
                                                <select name="cantidad" id="cantidad" value={productos.cantidad} className='select' onChange={e => ActualizarCantidad({
                                                    cantidad: +e.target.value,
                                                    id: productos.id
                                                })}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                                <p className="precio"><span>{formatearCantidad(productos.precio)}</span></p>
                                                <p className="subtotal">Subtotal: <span>{formatearCantidad(productos.precio*productos.cantidad)}</span></p>
                                            </div>
                                            <button type="button" className='btn_eliminar' onClick={()=>EliminarCarrito(productos.id)}>X</button>
                                        </div>
                                    ))
                                )
                            }
                        </div>        
                        <aside className="resumen">
                            <h3>Resumen del pedido</h3>
                            <p className='total'>Total a pagar: <span>{formatearCantidad(total)}</span></p>
                        </aside>
                    </div>
                </main>
            )}
        </ClientOnly>
    )
}

export default Carrito