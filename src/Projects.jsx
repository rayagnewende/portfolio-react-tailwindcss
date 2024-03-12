import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-20 align-element px-8" id="projects">
      <SectionTitle text="Liste des projets réalisés  récemment" />
      <div className="p-16 grid gap-x-4 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((projet) => {
          return <ProjectCard key={projet.id} {...projet} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
