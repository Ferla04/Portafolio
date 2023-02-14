
export const ProjectsItem = ({ name, img, repo, link, info }) => {
  return (
    <section class='galery-item'>
      <h3>{name}</h3>
      <article class='galery-img'>
        <img src={`/assets/${img}`} alt={name} />
        <div class='galery-icon'>
          <a href={repo} target='_blank' class='fa-brands fa-github' rel='noreferrer' />
          <a href={link} target='_blank' class='fa-solid fa-earth-americas' rel='noreferrer' />
        </div>
      </article>
      <span>{info}</span>
    </section>
  )
}
