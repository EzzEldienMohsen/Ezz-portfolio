import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16 ">
        <img src={aboutSvg} className="w-full h-96" />
        <div>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-6 leading-loose capitalize">
            With a solid foundation in mechanical engineering cultivated over four years in the field, I transitioned to the dynamic realm of front-end development. Simultaneously, I augmented my skill set by working as a customer service representative, demonstrating my ability to balance responsibilities while pursuing my passion for technology.

Beginning with modest projects, I immersed myself in the fundamentals of web development, leveraging HTML, CSS, and JavaScript to create simple yet functional applications. This hands-on experience provided a crucial springboard for my journey into more sophisticated tools and frameworks.

Driven by a thirst for knowledge and innovation, I embraced React and Vite, harnessing their capabilities to build responsive and dynamic web solutions. Through meticulous experimentation, I gained insight into complex concepts such as React components, state management with hooks, and global content management.

Expanding my repertoire, I delved into renowned libraries including TanStack Query and React Router Dom, integrating their functionalities seamlessly into my projects. Concurrently, I refined my design skills by mastering modern CSS methodologies such as Styled Components and Tailwind CSS, ensuring both elegance and efficiency in my creations.

Moreover, I explored the vast landscape of packages and utilities, acquiring proficiency in essential tools like Toastify, Nanoid, and Axios. Additionally, I navigated the intricacies of headless CMS systems, acquiring valuable expertise in content management and delivery strategies.

As I reflect on my journey thus far, I am humbled by the depth of knowledge gained and invigorated by the prospect of continuous growth. Each project represents an opportunity to push boundaries, innovate, and contribute meaningfully to the ever-evolving field of web development.

Join me as we embark on an exciting journey of exploration and innovation, transforming ideas into reality through the power of technology. Together, let us shape the digital landscape and redefine possibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
