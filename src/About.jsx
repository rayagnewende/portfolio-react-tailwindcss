import SectionTitle from "./SectionTitle";
import AboutImge from "./assets/about.svg";

function About() {
  return (
    <section className="bg-white px-8 py-20" id="apropos">
      <SectionTitle text="A propos" />
      <div className="align-element grid md:grid-cols-2  items-center gap-16">
        <img src={AboutImge} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="Développeur Full Stack" />
          <p className="text-slate-600 mt-8 leading-loose">
            Je suis ingénieur de formation et un passionné de code. dans le
            cadre de mon travail, je peux prendre en charge le développement du
            backend et/ou du frontend d'une application.j'ai un profil avec une
            forte expérience des technologies JavaScript.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            je suis titulaire de deux diplomes d'ingénieur, un à EMSI( Ecole
            Marocaine des Sciences de l'ingénieur) et l'autre est de
            l'université Sophia Antipolis de Nice
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
