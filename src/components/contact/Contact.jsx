import { getRouteById } from '../../helpers/getRouteById'
import './contact.css'

export const Contact = () => {
  const { id, name: title } = getRouteById('contact')

  return (
    <section id={id} className='contact'>
      <h2>{title}</h2>
      <p>Si tienes alguna pregunta o estás interesad@ en trabajar conmigo, no dudes en ponerte en contacto.</p>
      <a href='mailto:fer.velas135@gmail.com'>Escribeme</a>
      <img src='./assets/sayHi.png' alt='Hi' />
    </section>
  )
}
