import './home.css'

export const Home = () => {
  return (
    <section id='home' className='home'>
      <article className='home-info'>
        <div className='home-welcome'>
          <p>Hola! soy</p>
          <h3 className='neon'>Fer<span id='offset'>n</span>anda velasquez</h3>
        </div>
        <p>Mollit nisi tempor nostrud deserunt cillum. Ut pariatur fugiat velit ut anim fugiat quis cillum aliquip amet ex consectetur mollit voluptate. Sint laborum aute nulla aute aute labore ipsum.</p>
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
        <img src='/assets/hey.png' alt='me' />
      </article>
    </section>
  )
}
