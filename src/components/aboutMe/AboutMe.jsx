import { skills } from '../../constants'
import { getRouteById } from '../../helpers/getRouteById'
import './aboutMe.css'

export const AboutMe = () => {
  const { id, name: title } = getRouteById('aboutMe')

  return (
    <section id={id}>
      <h2>{title}</h2>

      <div className='aboutMe'>
        <article>
          <div className='aboutMe-text'>
            <div className='line' />
            <p>
              Soy una programadora web autodidacta, apasionada por la tecnología y el crecimiento que ha experimentado el mundo de la programación.
              Mi misión es crear soluciones web de alta calidad que estén enfocadas en mejorar la interacción del usuario con la tecnología.
              He estado aprendiendo y mejorando mis habilidades por mi cuenta ya que pienso que la programación es una disciplina
              en constante evolución. Estoy emocionada por la oportunidad de trabajar en nuevos entornos y colaborar con personas que compartan mis
              intereses y pasión por el desarrollo.
            </p>
          </div>
        </article>

        <article className='skills'>
          <h3>Habilidades</h3>
          <article>
            {
              skills.map(({ name, icon }) =>
                <div key={name} className='skills-item'>
                  <div><span translate='no'>{name}</span></div>
                  <img src={icon} alt={name} className={name === 'ExpressJS' ? 'express' : ''} />
                </div>
              )
            }
          </article>
        </article>
      </div>
    </section>
  )
}
