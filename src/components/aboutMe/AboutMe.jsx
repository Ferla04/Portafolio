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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur voluptates quas eligendi reprehenderit similique possimus repudiandae fugiat, sequi, repellendus autem voluptate error dolore. Modi tenetur voluptatum quidem tempore mollitia?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, harum repellat. Officia et animi voluptate qui eaque quae! Aut enim commodi distinctio rem earum. Debitis facere reiciendis quia. Explicabo, quis!
            </p>
          </div>
        </article>

        <article className='skills'>
          <h3>Habilidades</h3>
          <article>
            {
              skills.map(({ name, icon }) =>
                <div key={name} className='skills-item'>
                  <div><span>{name}</span></div>
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
