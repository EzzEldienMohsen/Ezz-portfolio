import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

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
]

export const projects = [
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
    img: 'https://images.ctfassets.net/awulmt8zwv6o/4YvWZJPE027dFnRqR5aJcx/c8fd0cb8f266440dacc2119a7e52bbef/unsplash.JPG',
    url: 'https://unsplash-images-swart.vercel.app/',
    github: 'https://github.com/EzzEldienMohsen/Unsplash-Images',
    title: 'unsplash-images',
    text: 'in this project i used forms and forms data and used React query fetch data according to my search term and display the images.',
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
]
