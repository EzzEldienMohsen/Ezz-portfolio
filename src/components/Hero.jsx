import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaLaptop } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-5xl tracking-wider font-bold">
            I am Ezz Eldien Deghedy
          </h1>
          <p className="text-2xl capitalize text-slate-700 tracking-wide mt-8">
            Front-End React.js Developer: Crafting Responsive, Interactive & Dynamic Websites
          </p>
          <p className="mt-4 text-lg text-slate-700 capitalize tracking-wide">
            I'm Ezz Eldien Deghedy, specializing in front-end web development. Proficient in React framework, I leverage its hooks and various libraries to craft dynamic interfaces. My toolkit extends to TanStack-Query, React-Router-Dom, and Redux toolkit for efficient state management. With expertise in CSS frameworks like Tailwind-CSS, I bring sleek designs to life, ensuring they are responsive across all devices. Moreover, I incorporate material libraries such as daisy-ui, flow-bite, material-ui, and tailwind material for added versatility. My projects range from portfolios to online stores, enriched with captivating animations. I'm well-versed in animation libraries like framer motion, react springs, and AOS, enhancing user experience. Additionally, I have expertise in integrating RESTful APIs, ensuring seamless data communication and enhancing the functionality of web applications. Rooted in solid fundamentals of HTML5, CSS3, and JavaScript, I ensure robust and interactive web solutions.
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
