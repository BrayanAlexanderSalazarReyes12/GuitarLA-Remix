import { Link, useLocation } from '@remix-run/react'
import imagen from "~~/img/carrito.png"

function Navegacion() {
    const Location = useLocation()
    return (
        <nav className="navegacion">        
            <Link to="/" className={Location.pathname === "/" ? 'active' : ''}>Inicio</Link>
            <Link to="/nosotros" className={Location.pathname === "/nosotros" ? 'active' : ''}>Nosotros</Link>
            <Link to="/guitarras" className={Location.pathname === "/guitarras" ? 'active' : ''}>Tienda</Link>
            <Link to="/blog" className={Location.pathname === "/blog" ? 'active' : ''}>Blog</Link>
            <Link to="/carrito"><img src={imagen} alt="carrito de compra" /></Link>
        </nav>
    )
}

export default Navegacion