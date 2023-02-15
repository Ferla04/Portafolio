
export const ProjectsItem = ({ name, img, repo, link, info }) => {
  return (
    <section className='galery-item'>
      <h3 translate='no'>{name}</h3>
      <article className='galery-img'>
        <img src={`/public/assets/${img}`} alt={name} />
        <div className='galery-icon'>
          <a href={repo} target='_blank' className='fa-brands fa-github' rel='noreferrer' />
          <a href={link} target='_blank' className='fa-solid fa-earth-americas' rel='noreferrer' />
        </div>
      </article>
      <span translate='no'>{info}</span>
    </section>
  )
}
