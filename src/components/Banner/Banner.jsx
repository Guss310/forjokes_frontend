import React from 'react'
import { Carousel } from 'react-bootstrap'
import UcuImg1 from '../../assests/images/UcuImg1.jpg'
import UcuImg2 from '../../assests/images/UcuImg3.jpg'
import UcuImg3 from '../../assests/images/UcuImg4.jpg'
import '../Banner/banner.css'

const Banner = () => {
  return (
    
    <section className='slider'>
        <Carousel variant='dark'>
      <Carousel.Item>
        <img src={UcuImg1} className='d-block w-100' alt="First slide" />
        <Carousel.Caption>
            <div className='slider_des'>
                <h5 className='heading'>¡Bienvenido a <span>UCUInsider!</span></h5>
                <p className='subText'> Esta es una plataforma de red social y foro en línea donde puedes compartir contenido, discutir temas y votar por publicaciones y comentarios.  </p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={UcuImg2} className='d-block w-100' alt="First slide" />
      <Carousel.Caption>
            <div className='slider_des'>
                <h5 className='heading'>Consejos para disfrutar mejor</h5>
                <p className='subText'> Para empezar, regístrate y completa tu perfil. Una vez dentro, puedes publicar preguntas o compartir tus opiniones. No olvides interactuar con otras personas: comenta, vota y comparte el contenido que quieras.  </p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={UcuImg3} className='d-block w-100' alt="First slide" />
      <Carousel.Caption>
            <div className='slider_des'>
                <h5 className='heading'>Normas de la Comunidad</h5>
                <p className='subText'> Para mantener un ambiente seguro y amigable, pedimos a todos los usuarios que respeten las siguientes normas: sé respetuoso en tus interacciones, evita el contenido ofensivo y mantén el enfoque en lo sano. </p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Banner;