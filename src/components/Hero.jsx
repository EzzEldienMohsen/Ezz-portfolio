import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaLaptop } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-5xl tracking-wider font-bold">
            I am Ezz Eldin Dghedy
          </h1>
          <p className="text-2xl capitalize text-slate-700 tracking-wide mt-8">
            front-end developer
          </p>
          <p className="mt-4 text-lg text-slate-700 capitalize tracking-wide">
            i am a front-end developer that at the start of this career, seeking
            an opportunity to hone my skills and and grow as a web developer, i
            am a quick learner, passionate about what i do, team player and
            hard-worker.
          </p>
          <div className="flex mt-4 gap-x-24">
            <a
              href="https://github.com/EzzEldienMohsen?tab=repositories"
              target="__blank"
            >
              <FaGithubSquare className="h-12 w-12 text-slate-600 hover:text-black duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/ezz-eldeen-deghedy-a615321b6"
              target="__blank"
            >
              <FaLinkedin className="h-12 w-12 text-slate-600 hover:text-blue-900 duration-300" />
            </a>
            <a
              href="https://vercel.com/ezzeldien-dghedys-projects"
              target="__blank"
            >
              <FaLaptop className="h-12 w-12 text-slate-600 hover:text-black duration-300" />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={heroImg} alt="Ezz" className="h-80 lg:h-96" />
        </div>
      </div>
    </div>
  )
}

export default Hero
