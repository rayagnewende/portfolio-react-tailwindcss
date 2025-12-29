/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "./SectionTitle";
import Developer from "./assets/developpeur.webp";

function About() {
  return (
    <section className="bg-white align-element     px-8 py-20" id="apropos">
      <SectionTitle text="A propos de moi" />
      <div className=" grid md:grid-cols-2  items-center gap-16">
        <img
          src={Developer}
          alt="about image"
          className="h-96 rounded-full mt-20"
        />
        <article className="pt-2">
          <SectionTitle text="Qui suis-je" />
          <p className="text-slate-600 mt-8 leading-loose">
            Ingénieur logiciel full-stack avec une expertise en Java/Spring
            Boot, JavaScript/Node.js, React et React Native..
          </p>
          <br />
          <SectionTitle text="Mon savoir faire" />
          <ul className="text-slate-600 mt-8 leading-loose">
            <li>Conception d’architectures backend</li>
            <li>Développement d’APIs sécurisées (JWT, OAuth2)</li>
            <li>Déploiement cloud (AWS)</li>
            <li>CI/CD (GitLab, Github Actions/ Jenkins)</li>
            <li>Développement mobile (React Native + Expo)</li>
          </ul>
          <br />
          <SectionTitle text="Ce que j'apportes" />
          <ul className="text-slate-600 mt-8 leading-loose">
            <li>
              Je transforme des besoins métiers en solutions fiables et
              scalables.
            </li>
            <li>
              J’aime optimiser les performances et améliorer l’expérience
              utilisateur.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
