import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/Components/header'
import Footer from '~/Components/footer'
import { useEffect, useState } from 'react'

export function meta(){
    return(
        [
            {
                charset: 'UTF-8',
                title:'GuitarLA - Remix',
                viewport: "width=device-width, initial-scale=1.0"
            }
        ]
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){
    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null

    const [carrito,Setcarrito] = useState(carritoLS)

    useEffect(()=>{
        localStorage.setItem("carrito",JSON.stringify(carrito))
    },[carrito])

    const AgregarCarrito = guitarra => {
        if(carrito.some(guitarraState => guitarraState.id == guitarra.id)){
            const carritoActu = carrito.map( guitarraState => {
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            Setcarrito(carritoActu)
        }else {
            Setcarrito([...carrito, guitarra])
        }
    }

    const ActualizarCantidad = guitarra => {
        const carritoActu = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        Setcarrito(carritoActu)
    }

    const EliminarCarrito = id => {
        const carritoEliminado = carrito.filter(guitarraState => guitarraState.id !== id)
        Setcarrito(carritoEliminado)
    }

    return(
        <Document>
            <Outlet 
                context={{
                    AgregarCarrito,
                    carrito,
                    ActualizarCantidad,
                    EliminarCarrito
                }}
            />
        </Document>
    )
}

function Document({children}){
    return(
        <html lang="es">
        <head>
            <Meta />
            <Links /> 
        </head>
        <body>
            
            <Header />
            {children}
            <Footer />
            <Scripts />
            <LiveReload />
        </body>
        </html>
    )
}

/** manejos de errores */

export function CatchBoundary() {
    const error = useCatch()
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link to="/" className='error-enlace'>Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary() {
    const error = useRouteError()
    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className="error">{error.status} {error.statusText}</p>
                <Link to="/" className='error-enlace'>Tal vez quieras volver a la página principal</Link>
            </Document>
        )
    }
}   