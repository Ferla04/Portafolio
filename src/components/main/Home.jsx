import './home.css'

export const Home = () => {
  return (
    <section id='home' className='home'>
      <article className='home-info'>
        <div className='home-welcome'>
          <p>Hola! soy</p>
          <h3 className='neon'>Fer<span id='offset'>n</span>anda velasquez M.</h3>
        </div>
        <img src='/assets/heyPhone.png' alt='me' />
        <p>¡Bienvenido a mi portafolio! Aquí encontrarás una muestra de mi trabajo y habilidades como desarrollador web, espero que disfrutes explorando asi como yo disfruté trabajando en estos proyectos.</p>
        <div className='home-networks'>
          <a className='cv' target='_blank' href='/CV-Fernanda_Velasquez.pdf'>
            <i className='fa-solid fa-user' />
            CV
          </a>
          <a className='fa-brands fa-github' target='_blank' href='https://github.com/Ferla04' rel='noreferrer' />
          <a className='fa-brands fa-linkedin' target='_blank' href='https://www.linkedin.com/in/ferla04' rel='noreferrer' />
        </div>
      </article>

      <article className='home-img'>
        <img src='../assets/hey.png' alt='me' />
      </article>
    </section>
  )
}
