import SectionTitle from "./SectionTitle";
import AboutImge from "./assets/about.svg";

function About() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="align-element grid md:grid-cols-2  items-center gap-16">
        <img src={AboutImge} alt="about image" className="w-full h-64" />
        <article>
          <SectionTitle text="Développeur Full Stack" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am an engineer by training and a code enthusiast. as part of my
            job, i can take charge of developing the backend and/or frontend of
            an application. i have a profile with strong experience of
            JavaScript technologies.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
