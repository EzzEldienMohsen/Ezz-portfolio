import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 gap-8 grid md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
