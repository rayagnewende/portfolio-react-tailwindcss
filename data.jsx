import { nanoid } from "nanoid";
import Cicd from "./src/assets/cicd.webp";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaPhp,
  FaJava,
  FaAws,
  FaDocker,
  FaPython,
  FaSass,
  FaGit,
  FaGithub,
  FaJenkins,
  FaGitlab,
} from "react-icons/fa";
import {
  SiJest,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
  SiHibernate,
  SiSpringsecurity,
  SiExpo,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandReactNative,
  TbBrandRedux,
} from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import PlateSuggest from "./src/assets/platesuggest.png";
import Ecommerce from "./src/assets/ecommerce.png";
import Docker from "./src/assets/docker.png";
import Css from "./src/assets/css.png";
import Sql from "./src/assets/sql.png";
import Java from "./src/assets/java.png";
import JQuery from "./src/assets/jquery.png";
import JavaScript from "./src/assets/javascript.png";
import APIEcommerce from "./src/assets/APIEcommerce.png";
import Express from "./src/assets/express.jpeg";
import Chatbot from "./src/assets/chatbot.png";
import SpringbootApi from "./src/assets/restapi.png";
import Jobify from "./src/assets/jobify.png";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#contact", text: "contact" },
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
    icon: <FaSass className="h-16 w-16 text-emerald-500" />,
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
    title: "Redux",
    icon: <TbBrandRedux className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <TbBrandReactNative className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Expo",
    icon: <SiExpo className="h-16 w-16 text-emerald-500" />,
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
  {
    id: nanoid(),
    title: "Next.js ",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "GIT",
    icon: <FaGit className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "GITHUB",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
    text: "",
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
    title: "SPRING BOOT",
    icon: <BiLogoSpringBoot className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Hibernate",
    icon: <SiHibernate className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "SPRING SECURITY",
    icon: <SiSpringsecurity className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "JENKINS",
    icon: <FaJenkins className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "PYTHON",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
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
  {
    id: nanoid(),
    title: "Prisma",
    icon: <TbBrandPrisma className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "GITLAB",
    icon: <FaGitlab className="h-16 w-16 text-emerald-500" />,
    text: "",
  },
  {
    id: nanoid(),
    title: "CI/CD",
    icon: Cicd,
    text: "",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: APIEcommerce,
    url: "#",
    github: "https://github.com/rayagnewende/ecommerce-api-with-springboot.git",
    title: "API RESTful e-commerce en Java Spring Boot — sécurisée et scalable",
    text: "Conception et implémentation d’une API RESTful robuste avec Java 17 et Spring Boot, intégrant sécurisation par JWT/OAuth2, gestion optimisée des transactions et respect des bonnes pratiques (Clean Code, SOLID, OWASP). L’architecture modulaire et testée facilite la scalabilité, la maintenance et l’intégration avec des services tiers (paiement, logistique, analytics",
  },
  {
    id: nanoid(),
    img: Express,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/rayagnewende/plate-suggest-backend.git",
    title: "Création d'une API Restful avec le Framework Express.js",
    text: "Création de la partie backend de l'application mobile PlateSuggest. l'API a été réalisée avec le framework Express.js et Google places.Les données ont été stockées dans une base de données MongoDB.",
  },
  {
    id: nanoid(),
    img: PlateSuggest,
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/rayagnewende/plate-suggest-frontend.git",
    title: "PlateSuggest: une application mobile réalisé avec React Native",
    text: "Intégrationn de la partie frontend de l'application PlateSuggest qui est une application mobile de suggestion plats et menus en fonction des préférences des utilisateurs.La partie frontend a été réalisé avec React Native et Expo.",
  },
  {
    id: nanoid(),
    img: SpringbootApi,
    url: "",
    github:
      "https://github.com/rayagnewende/complete_restfulAPI_with_springboot.git",
    title:
      "Implémentation d'une API Restful de gestion d'articles pour un blog avec Spring boot",
    text: "Cette API a été développée via spring boot, spring data jpa, hibernate, spring security et bien d'autres outils, tout en respectant les bonnes pratiques de programmation",
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
    img: Jobify,
    url: "",
    github: "https://github.com/rayagnewende/Job-Tracking-App.git",
    title:
      "Intégration d'une maquette professionnelle d'une application de suivi des offres d'emploi des utilisateurs",
    text: "l'intégration a été faite grace au framework Next.js,tailwindcss,  clerk, shadcn ui, prisma, et bien d'autres outils.",
  },
  {
    id: nanoid(),
    img: Chatbot,
    url: "https://comfy-store-app-cyan.vercel.app",
    github: "https://github.com/rayagnewende/chatbot-with-open-ai.git",
    title: "Création d'un chatbot avec Node.js(TypeScript)  et openai API.",
    text: "Il s'agit de la réalisation d'un chatbot ayant plus ou moins les fonctions que ChatGPT. cette API a été réalisé grace à openai API et TypeScript.",
  },
  {
    id: nanoid(),
    img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/329410356/original/70740188569f489f1bc0f2ad3cce1a106d992f1f/create-nestjs-rest-api.png",
    url: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/329410356/original/70740188569f489f1bc0f2ad3cce1a106d992f1f/create-nestjs-rest-api.png",
    github: "https://github.com/rayagnewende/intro-nestjs-app.git",
    title: "Création d'une API RESTful avec le framwork Nest.js",
    text: "cette API a été créée avec Nest.js et PoSTGRES comme base de données. c'estte API implémente pas mal de fonctionnalités notamment, la gestion des utilisateurs, celles des taches et bien d'autres",
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
