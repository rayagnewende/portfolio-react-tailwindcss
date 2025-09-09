/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";
import Developer from "./assets/developpeur.webp";

function About() {
  return (
    <section className="bg-white align-element     px-8 py-20" id="apropos">
      <SectionTitle text="A propos de moi" />
      <div className=" grid md:grid-cols-2  items-center gap-16">
        <img src={Developer} alt="about image" className="h-96 rounded-full mt-20" />
        <article>
          <SectionTitle text="Développeur Full Stack" />
          <p className="text-slate-600 mt-8 leading-loose">
            Je suis ingénieur de formation et un passionné de code. dans le
            cadre de mon travail, je peux prendre en charge le développement du
            backend et/ou du frontend d'une application sans oublier la partie
            conception evidemment.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            J'ai déjà eu l'opportunité de travailler sur plusieurs projets
            utilisant divers technologies et langages de programmation.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            J'ai un bon niveau d'analyse et de résolution de problèmes et j'aime
            également travailler sur des projets innovants qui apportent de la
            plus value aux utilisateurs finaux de nos projets.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
