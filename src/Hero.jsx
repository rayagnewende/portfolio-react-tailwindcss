/* eslint-disable react/no-unescaped-entities */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImage from "./assets/hero.svg";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className=" align-element  px-8 py-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            Je suis Evariste
          </h1>
          <p className="text-3xl mt-4 text-slate-700 tracking-wide ">
            Je suis un developpeur full stack, spécialisé dans le developpement
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
            <a href="">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImage} alt="presentation" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
