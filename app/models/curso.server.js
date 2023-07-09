export async function mostrarCurso() {
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
    return await respuesta.json()
}