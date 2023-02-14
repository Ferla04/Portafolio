import { projects } from '../../constants'
import { getRouteById } from '../../helpers/getRouteById'
import './projects.css'
import { ProjectsItem } from './ProjectsItem'

export const Projects = () => {
  const { id, name: title } = getRouteById('projects')

  return (
    <section id={id} className='galery-container'>
      <h2>{title}</h2>
      <div className='galery'>
        {
          projects.map(project =>
            <ProjectsItem key={project.name} {...project} />
          )
        }
      </div>
    </section>
  )
}
