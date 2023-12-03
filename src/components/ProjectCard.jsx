/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectCard = ({ img, url, github, title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl font-medium tracking-wide">{title}</h2>
        <p className="mt-4 text-slate-700 loading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="__blank">
            <TbWorldWww className="w-12 h-12 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github} target="__blank">
            <FaGithubSquare className="w-12 h-12 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
