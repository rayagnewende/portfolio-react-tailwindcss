import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-20 align-element">
      <SectionTitle text="List of the projects " />
      <div className="p-16 grid lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((projet) => {
          return <ProjectCard key={projet.id} {...projet} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
