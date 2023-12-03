import ProjectCard from './ProjectCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'
const Projects = () => {
  return (
    <div className="py-20 align-element" id="projects">
      <SectionTitle text="web creation" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
