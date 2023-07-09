import imagen from "~~/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return [
    {
      title: "GuitarLA - Sobre Nosotros",
      description: 'Ventas de guitarras, blog de música'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="centenedor nosotros">
      <h2 className="heading">Nosostros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Nam et dolor sit amet ex ultricies condimentum sit amet nec tortor. 
            Duis rutrum metus vel elit varius, et sagittis odio semper. 
            Donec vitae rutrum sem. Aliquam facilisis, ante id varius vulputate, 
            eros odio iaculis dolor, sed ullamcorper mauris diam eleifend lectus. 
            Aenean maximus lorem lobortis libero lacinia imperdiet. Ut hendrerit in nulla ac ullamcorper. 
            Phasellus varius aliquet est, ut rutrum mauris iaculis vitae. Aliquam erat volutpat. 
            Vivamus aliquet ex lorem, sit amet elementum nisl sagittis eget.</p>

            <p>Nam et dolor sit amet ex ultricies condimentum sit amet nec tortor. 
            Duis rutrum metus vel elit varius, et sagittis odio semper. 
            Donec vitae rutrum sem. Aliquam facilisis, ante id varius vulputate, 
            eros odio iaculis dolor, sed ullamcorper mauris diam eleifend lectus. 
            Aenean maximus lorem lobortis libero lacinia imperdiet. Ut hendrerit in nulla ac ullamcorper. 
            Phasellus varius aliquet est, ut rutrum mauris iaculis vitae. Aliquam erat volutpat. 
            Vivamus aliquet ex lorem, sit amet elementum nisl sagittis eget.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros