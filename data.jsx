import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiJest,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import PlateSuggest from "./src/assets/platesuggest.png";
import Ecommerce from "./src/assets/ecommerce.png";
import Docker from "./src/assets/docker.png";
import Css from "./src/assets/css.png";
import Sql from "./src/assets/sql.png";
import Java from "./src/assets/java.png";
import JQuery from "./src/assets/jquery.png";
import JavaScript from "./src/assets/javascript.png";
import Express from "./src/assets/express.jpeg";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "SASS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "TailwindCSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "BootStrap",
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "VITE.js",
    icon: <SiVite className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Styled components",
    icon: <SiStyledcomponents className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
];

export const skills2 = [
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Nest.js",
    icon: <SiNestjs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "PHP",
    icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "JAVA",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "MYSQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "POSTGRES",
    icon: <SiPostgresql className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "AWS",
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Jest labrairy",
    icon: <SiJest className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/329410356/original/70740188569f489f1bc0f2ad3cce1a106d992f1f/create-nestjs-rest-api.png",
    url: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/329410356/original/70740188569f489f1bc0f2ad3cce1a106d992f1f/create-nestjs-rest-api.png",
    github: "https://github.com/rayagnewende/intro-nestjs-app.git",
    title: "Création d'une API RESTful avec le framwork Nest.js",
    text: "cette API a été créée avec Nest.js et PoSTGRES comme base de données. c'estte API implémente pas mal de fonctionnalités notamment, la gestion des utilisateurs, celles des taches et bien d'autres",
  },
  {
    id: nanoid(),
    img: PlateSuggest,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/rayagnewende/plate-suggest-frontend.git",
    title: "PlateSuggest: une application mobile réalisé avec React Native",
    text: "Intégrationn de la partie frontend de l'application PlateSuggest qui est une application mobile de suggestion plats et menus en fonction des préférences des utilisateurs.La partie frontend a été réalisé avec React Native et Expo.Pour tester l'application, il suffit d'installer EXpo go dans votre téléphone et scanner le QRcode disponible en cliquant sur le lien ci-dessous.",
  },
  {
    id: nanoid(),
    img: Ecommerce,
    url: "https://comfy-store-app-cyan.vercel.app",
    github: "https://github.com/rayagnewende/comfy-store-app.git",
    title: "Intégration complète d'une maquette ecommerce avec React.js",
    text: "intégration complète d'une maquette ecommerce de vente de produits divers.l'intégration a été faite avec React 18, TailwindCSS, Vite, HOOKS, et bien d'autres technologies.",
  },
  {
    id: nanoid(),
    img: Express,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/rayagnewende/plate-suggest-backend.git",
    title: "Création d'une API Restful avec le frameword Express.js",
    text: "Création de la partie backend de l'application mobile PlateSuggest. l'API a été réalisée avec le framework Express.js et Google places.Les données ont été stockées dans une base de données MongoDB.",
  },
];

export const certifications = [
  {
    id: nanoid(),
    img: Docker,
    title: "Docker certification",
  },
  {
    id: nanoid(),
    img: Java,
    title: "Java certification",
  },
  {
    id: nanoid(),
    img: JavaScript,
    title: "JavaScript certification",
  },
  {
    id: nanoid(),
    img: JQuery,
    title: "JQuery certification",
  },
  {
    id: nanoid(),
    img: Css,
    title: "Css certification",
  },
  {
    id: nanoid(),
    img: Sql,
    title: "Sql certification",
  },
];
