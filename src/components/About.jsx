import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16 ">
        <img src={aboutSvg} className="w-full h-64" />
        <div>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-6 leading-loose capitalize">
            i am a former mechanical engineer, graduated in 2019 and worked in
            this career for 4 years. i also worked as a customer service
            representative while studying Front-End. i have made a lot of simple
            projects while learning Front-end developing. two using the vanilla
            of three languages. i then started working on react and vite and i
            have done several projects. i made simple one in my trial to
            understand components and react structure. i made some trying to
            understand react hooks, custom hooks, and global content. i made
            some in my trial to learn some libraries such as: react query ,
            react router dom. and along the way i improved my css and learned
            about styled components and tailwind css. i got knowledge about
            several packages like toastify, nanoid, axios gained knowledge about
            how to deal with headless cms and a lot more and yet there is more
            to come.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
