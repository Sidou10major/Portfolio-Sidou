import {
  mobile,
  backend,
  kotlin,
  python,
  arduino,
  web,
  javascript,
  html,
  css,
  zino,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  esi,
  bto,
  BO,
  delivery,
  threejs,
  relay,
  athmane,
  food,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Kotlin Developer",
    icon: kotlin,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "arduino",
    icon: arduino,
  },
];

const experiences = [
  {
    title: "Node JS and Express JS Developer",
    company_name: "ESI",
    icon: esi,
    iconBg: "#383E56",
    date: "April 2021 - July 2021",
    points: [
      "Leader of the team.",
      "Collaborating with a team of students to develop a web app for house demanding management.",
      "Implementing back-end using Node JS and Express JS.",
      "Participating in code reviews and providing constructive feedback to other teammates.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Free lance",
    icon: bto,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developing a commercial website for beauty touch store at Oran.",
      "Implementing the website using HTML, CSS and Javascript.",
      "Doing all the development process from Studying the needs to the deployment.",
    ],
  },
  {
    title: "React JS Developer",
    company_name: "Easy Relay",
    icon: relay,
    iconBg: "#383E56",
    date: "July 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with my partner and a developer from the company to create high quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Kotlin developer",
    company_name: "ESI",
    icon: esi,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - June 2023",
    points: [
      "Developing a food delivery app using Kotlin as a language.",
      "Participating in code reviews and providing constructive feedback to my partner.",
    ],
  },
  {
    title: "IOT and hardware",
    company_name:"ESI",
    icon: esi,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developing a smart vending machine using Raspberry PI and Python.",
      "Collaborating with a team of 11 students to implement this project.",
      "Designing some Pieces using 3D modeling Tools like Fusion360 and SolidWorks.",
      "Participating in code reviews and providing feedback to other teammates.",
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "Nice man, polite, kind and most of all a great developer.",
    name: "Athmane Doumi",
    designation: "Back end developer",
    company: "Maystro delivery",
    image: athmane,
  },
  {
    testimonial:
      "I thought a website can never help me increase my sales but what this man did has really changed my life to the better.",
    name: "Mohammed",
    designation: "CEO",
    company: "Beauty touch",
    image: "",
  },
  {
    testimonial:
      "Knowing Sid Ahmed is a tresor but Working with him is just the joy of life.",
    name: "Zineddine Brahami",
    designation: "Web developer",
    company: "Web Rocket",
    image: zino,
  },
];

const projects = [
  {
    name: "Food_Recipe_Website",
    description:
      "Website developed using PHP that has a client part and an admin part. The website is developed using MVC architecture.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/Sidou10major/dzcook",
  },
  {
    name: "Easy-Relay back-office",
    description:
      "Web application to help easy relay board membres to follow their workflow.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: BO,
    source_code_link: "https://github.com/Sidou10major/Easy-Relay-Back-Office",
  },
  {
    name: "Food delivery app",
    description: "Mobile app to order food from different restaurants and track the command until its arriving.",
    tags: [
      {
        name:"Kotlin",
        color:"blue-text-gradient",
      },
      {
        name:"restapi",
        color:"green-text-gradient",
      },
      {
        name:"Firebase",
        color:"pink-text-gradient",
      },
    ],
    image: delivery,
    source_code_link: "https://github.com/Sidou10major/Food-delivery-app"
  }
];

export { services, technologies, experiences, testimonials, projects };
