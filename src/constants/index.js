import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Block Chain Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Penetration Tester",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Backend Developer",
      company_name: "Boolokam TV",
      icon: "https://i.ibb.co/84kK0KD/boolokamtv.png",
      iconBg: "#383E56",
      date: "Aug 2020 - Sept 2022",
      points: [
        "Played a pivotal role as a collaborative force in the development of the Boolokam.tv OTT platform, effectively serving a global user base.",
        "Achieved 70% increase in platform performance through efficient server management and optimization.",
        "Implemented advanced video quality switching algorithms, significantly reducing video transcoding costs.",
        "Utilized cutting-edge AWS services, including Lightsail, Amazon EC2 and S3; to implement the OTT platform.",
      ],
    },
    {
      title: "Frontend Developer (Intern)",
      company_name: "Innovation Incubator",
      icon: "https://i.ibb.co/TWSDjgy/innovation.jpg",
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Feb 2022",
      points: [
        "Contributed to the development team in creating a user-friendly and dynamic interface for 1000x.club.",
        "Assisted in debugging and troubleshooting frontend issues, ensuring smooth functionality and user experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Gained practical experience in working with React JS libraries and frameworks, such as Redux and React Router.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Upwork",
      icon: "https://i.ibb.co/TvDp27p/upwork.jpg",
      iconBg: "#17A600",
      date: "May 2020 - Present",
      points: [
        "Developed and delivered multiple websites, including pauloroid.world (an artist's portfolio website) and wekonnekt.co (a professional networking platform).",
        "Demonstrated expertise in frontend development, responsive design, and cross-browser compatibility.",
        "Utilized agile project management methodologies to ensure efficient and successful website delivery.",
      ],
    },
   
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ektha '23",
      description:
        "Contributed to developing a college Techno-Cultural Fest website, featuring event listings and seamless booking functionality, enhancing participant experience.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: "/Ektha.PNG",
      source_code_link: "https://github.com/bijinbjames/Ektha-v2",
    },
    {
      name: "Pauloroid",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: "/Paul.PNG",
      source_code_link: "http://pauloroid.world/",
    },
    {
      name: "Polyfund",
      description:
        "Decentralized Application powered by Ethereum Blockchain, where all the information about campaigns, contributions, withdrawal requests and funds are kept on a Blockchain Network, visible to all and decentralized.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "./Polyfund.PNG",
      source_code_link: "https://github.com/bijinbjames/Polyfund-mini-project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };