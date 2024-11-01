import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Skilled in HTML & CSS, nicely crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Good proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/56RczHqFLFKkrY69V4PcfO/68895d00186c8e17fb3b2f7717a408d6/image.png',
    url: 'https://jobster-next-js.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/jobster-nextJS',
    title: 'Jobster nextJS',
    text: 'this is my first project using next js, I used prisma for my data base, Clerk for authentication,Typescript and Tailwind-css. Very proud of myself writing it.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/7nnJRViVTPjnrYL6dgfktI/9d91ef0111663d3b11e7e552a8fad898/mashawi.PNG',
    url: 'https://mashawi-react.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/mashawiReact',
    title: 'mashawi',
    text: 'This is the first ever typeScript project i have made, i translated it, i used a lot of form and check packages, i have made several cycles such as log in complete cycle, checkout cycle and cart cycle. I merged my cart with the backend cart, lazy loaded of course, i enhanced using tanstack query and react router dom together.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/3RsY2nUUw414uRNUxWeztf/bc7dd9669e6472e7b3026ad5e61e2ec0/prince.PNG',
    url: 'https://prince-pi.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/prince',
    title: 'Prince',
    text: 'This is the first translated website i have ever created, in this website i learned how to use i18n for translation and how to lazy load my component.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/1TD5AmMKSoBY7ZQRhvjqEP/ee8057893d7757df5429ac97e1d1eef7/Lounge.PNG',
    url: 'https://lounge-olive.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Lounge',
    title: 'Lounge',
    text: 'This is the front end of a lounge website I have created using the React JS framework, Tailwind CSS, and several different packages and libraries. The website is fully responsive, ensuring it looks great on all devices, and I have added custom styling to enhance the visual appeal and user experience. Additionally, I have set up a POST request to be ready for when the backend is completed, allowing for seamless integration once the server-side is done.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/10BGN2y0uNZwTV2YrYt6pm/8f9a84f90e06f9039f8665cb6294cbe4/HABITAT.JPG',
    url: 'https://habitat-react.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Habitat-React',
    title: 'Habitat',
    text: 'This is the first website i cloned using (HTML,CSS and JS) i decided to do it all over again to see how much i improved in this time and here we are',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/1rQFbSnhmpLsYeSL7I32Kz/98b0c16db5f004bd26a2bc2107c6d773/Algorezmi.JPG',
    url: 'https://algorezmi.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Algorezmi',
    title: 'Algorezmi',
    text: 'in this website I applied all the animation I learned in the previous period in my previous projects, I uses AOS library, Framer-Motion library and pure css animation.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/4lRVeqvGbOmlLZz3nCs0nm/4f25cc6d99d6256d13f0c4410387a390/ega-future.JPG',
    url: 'https://ega-future-clone.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/egaFuture-clone',
    title: 'EGA Future',
    text: 'this is a single page website, it has a very good room to grow, I learned how to use unit test using both of vitest and react test library, I improved my animation skills as I used AOS library, framer-motion and Pure CSS, It was a nice and useful practice. ',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/7vEgm45evRGPcZv1t6Doy3/c4c94cb01d3c34c73c6a2ee4645df11b/erp_pic.JPG',
    url: 'https://erp-clone-roan.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/erp-clone',
    title: 'framer motion trial',
    text: 'This is my first trial trying to use framer motion to add some simple animation to my site, I created my data so I made it to have the need to use optional chaining, it was a nice experience to have nice ideas and thoughts',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/3KVZmfP9o7R9HhjSEpJWuf/7d358e8c9c8ca10fefc18f499c7e412b/ace_tech.JPG',
    url: 'https://ace-tech-one.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/AceTech',
    title: 'Ace tech marketing solution',
    text: 'This is my first ever project as a front end web developer as i made the front end of my company web site using React.JS.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/7E6MIbRNDxZKSymjbqkOIf/244b5eec6e4c62259ac485a94c2e8f6d/comfy_store.JPG',
    url: 'https://comfy-store-lyart.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Comfy-store',
    title: 'Comfy Store',
    text: 'in this project I used all I have learned in react, I learned using daisy-ui while working on it, I used react router dom in sync with react query and redux toolkit, I have made several get and post requests to server, I made a guest user so if any one wants to see the full functionality without registering it can be done and I learned pagination as well.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/W8NnStBHi8DvLiRgo7Rgr/f87093ecb3698659a757dcb0d348f7bd/jobster.JPG',
    url: 'https://jobster-zeta.vercel.app/landing',
    github: 'https://github.com/EzzEldienMohsen/Jobster',
    title: 'Jobster',
    text: 'In this project i mainly and highly concentrated at Redux toolkit, I used it very much, created three slices with a lot of reducers, extraReduces and asyncThunks, and learned how to use recharts package.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/1CGwN8OWbSFUrsstzdmMFe/7c4f5546a8f03c6b501c1865de8031c6/redux.JPG',
    url: 'https://redux-tool-kit-six.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Redux-toolKit',
    title: 'Redux ToolKit',
    text: 'in this project i learned how to use Redux toolkit, its general structure, slices, hooks and how to handle fetched data and errors while using it.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/5MTKgRBtZSc0FViQKaaRP1/4871063439868dd0e523ce0155bace9c/mixmaster.JPG',
    url: 'https://mix-master-umber.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Mix-Master',
    title: 'Mix-Master',
    text: 'in this project i used react router dom to route between several pages and handled several errors also i used react query with axios and loader to fetch data, styled my components using styled components used action with forms and post method.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/3l7FJK2sQBZSp2YPcqP12i/d855c4aebd4ba19ae4aeac0f2c9ac068/tailwindcssportfolio-.JPG',
    url: 'https://ezz-portfolio.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Ezz-portfolio',
    title: 'Ezz portfolio',
    text: 'in this project i used TailWind css to style my project and created yet another resume.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/4YvWZJPE027dFnRqR5aJcx/c8fd0cb8f266440dacc2119a7e52bbef/unsplash.JPG',
    url: 'https://unsplash-images-swart.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Unsplash-Images',
    title: 'unsplash-images',
    text: 'in this project i used forms and forms data and used React query fetch data according to my search term and display the images.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/5T95iJt0oOBHOFCJfFVwIv/7c50d563b3e6d2b120f757cdc30427e4/reactTs.JPG',
    url: 'https://react-ts-brown.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/React-TS',
    title: 'React + TS',
    text: 'in this project I used React with TypeScript and Practiced Git and GitHub.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/2rZqGhWlsodRULp71IFHRZ/2798ec77c92efa22e708d8525a39a42d/ReactTimer.JPG',
    url: 'https://react-ts-p3.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/React-TS-P3',
    title: 'ReactTimer + TS',
    text: 'in this project I used React with TypeScript to create more advanced components, used typeScript with several hooks .',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/47ScPKMlGbNMNbm7PthCXa/7820c9655bda13856ef20c867181b296/Fetch_with_ts.JPG',
    url: 'https://react-ts-p4.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/React-TS-P4',
    title: 'Fetch with TS',
    text: 'in this project I focused on fetching with TS.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/7rfwtATuCioQb0icAHwtpm/475faaa9bb0000d17785f8c960e8fabd/reactTs-p5.JPG',
    url: 'https://react-ts-p5.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/React-TS-P5',
    title: 'ReduxToolKit with TS',
    text: 'in this project I focused on using Redux toolKit with TS.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/5qjsFHUPmaIxG7Z08HJ22N/10ab09bf47de7a954f409e50f7985389/resume.JPG',
    url: 'https://my-resume-kappa-eight.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/My-Resume',
    title: 'Resume',
    text: 'in this project i used headless cms which is contentful cms and created a project with three contents then fetched my project in a resume like project.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/2eMD2hF1wpVHEzthhQwgm5/92b864ccf53336a9f0d4be4cec7923bd/root-rock-project.JPG',
    url: 'https://rock-shop.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Rock-Shop',
    title: 'Rock-Shop',
    text: 'in this project i tried using the vanilla html, css and js to create a web pages i found a site that was full of projects to practice and it was beneficial to me doing so i made the  two-page website to test my self.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/58XqY70b9D8w5gYxCLue69/a20fd128e89e54999fd4ea9f47a53ecb/architecture.JPG',
    url: 'https://architect-theta.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Architect',
    title: 'Architect',
    text: 'in this project as well i tried to mimic the website i choose using vanilla to further enhance my proficiency and understanding when it comes to front end its one page and with little css effect but i concentrated in copying the page by looking to it.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/2iNdvxhOCCd0400h9t5RJH/a1352a0426629bf7d7b591df5446fde4/tours.png',
    url: 'https://tours-mocha.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Tours',
    title: 'Tours',
    text: 'this project was my first project using react and getting to know components and how react framework functions in general level.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/5DQ6rXSWE4cACfSSftaA4n/1da50cb366d8a521df4e8e9d3488ddb1/back-roads-project.JPG',
    url: 'https://back-roads-project.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Back-Roads-Project',
    title: 'Back-Roads',
    text: 'this project was my first project using vite  and getting to know how different its general setup is compared to react.',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/3IC2ccqHJdHC2QrMJk55NK/3fd5bfcf99c75d478a35fc8a5601bd51/reviews.JPG',
    url: 'https://reviews-henna.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Reviews',
    title: 'Reviews',
    text: 'this project is one of several small projects i have done to master how to integrate my knowledge and skills in the Css and vanilla JS with react and to learn more about react Hooks, several different libraries, how to use global context, how to customize a hook and how to fetch data using axios and useEffect and how to deal with errors and epis .',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/2KNpfBUOeP4H9FHrwicRWe/26347c18ff059dbb20ce11386df0720d/generate-colors.JPG',
    url: 'https://color-generation-iota.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Color-Generation',
    title: 'Color-Generator',
    text: 'this project is one of several small projects i have done to master how to integrate my knowledge and skills in the Css and vanilla JS with react and to learn more about react Hooks, several different libraries, how to use global context, how to customize a hook and how to fetch data using axios and useEffect and how to deal with errors and epis .',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/5yaDKmMxdPpITroi9qQ6xE/314812581f09ead32ee7054b5fa06eb8/menu.JPG',
    url: 'https://menu-sable.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Menu',
    title: 'Food-Menu',
    text: 'this project is one of several small projects i have done to master how to integrate my knowledge and skills in the Css and vanilla JS with react and to learn more about react Hooks, several different libraries, how to use global context, how to customize a hook and how to fetch data using axios and useEffect and how to deal with errors and epis .',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/7vj0ZUNb2N5Qv1fLQ8POgv/00aa5f7c7c2d0be03f162885ab504302/grocery-bud.JPG',
    url: 'https://grocery-bud-eta.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Grocery-Bud',
    title: 'Grocery-Bud',
    text: 'this project is one of several small projects i have done to master how to integrate my knowledge and skills in the Css and vanilla JS with react and to learn more about react Hooks, several different libraries, how to use global context, how to customize a hook and how to fetch data using axios and useEffect and how to deal with errors and epis .',
  },
  {
    id: nanoid(),
    img: 'https://images.ctfassets.net/awulmt8zwv6o/xyVr5vzocFST3nl4FVKlc/92bd67ee2e6b34ddb03e1882f5079409/questions.png',
    url: 'https://qa-gold.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/QA',
    title: 'Q-A',
    text: 'this project is one of several small projects i have done to master how to integrate my knowledge and skills in the Css and vanilla JS with react and to learn more about react Hooks, several different libraries, how to use global context, how to customize a hook and how to fetch data using axios and useEffect and how to deal with errors and epis .',
  },
];
