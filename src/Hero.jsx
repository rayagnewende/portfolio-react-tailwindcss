/* eslint-disable react/no-unescaped-entities */
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

//import heroImage from "./assets/hero.svg";
import Developer from "./assets/developpeur.webp";
import Typewriter from "react-ts-typewriter";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className=" align-element  px-8 py-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            <Typewriter
              text="Je suis Evariste KABORE"
              speed={150}
              cursor={false}
            />
          </h1>
          <p className="text-3xl mt-4 text-slate-700 tracking-wide ">
            Un developpeur full stack, spécialisé dans le developpement
            d'applications web et mobile.
          </p>
          <p className="mt-2 text-lg text-slate-700 ">
            J'ai un profil polyvalent avec une facilité d'apprentissage des
            nouvelles technologies et une bonne communication écrite et orale.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/rayagnewende">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/kaborerayagnewendeevariste/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.frontendmentor.io/profile/rayagnewende">
              <SiFrontendmentor className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className=" hidden md:block ml-32">
          <img
            src={Developer}
            alt="presentation"
            className="h-80 lg:h-96 rounded-full"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
