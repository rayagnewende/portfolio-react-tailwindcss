import SectionTitle from "./SectionTitle";
import { skills } from "../data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className=" align-element sm:align-element py-20">
      <SectionTitle text="technologies used" />
      <div className="py-16 px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
