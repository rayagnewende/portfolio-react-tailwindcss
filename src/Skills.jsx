import SectionTitle from "./SectionTitle";
import { skills, skills2 } from "../data";
import SkillsCard from "./SkillsCard";
import SubTitle from "./SubTitle";

const Skills = () => {
  return (
    <section
      className=" align-element sm:align-element py-20 px-8"
      id="stacktechnique"
    >
      <SectionTitle text="Technologies utilisées" />
      <SubTitle text="Front-end techno" />
      <div className="py-16 px-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 ">
        {skills.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
      <SubTitle text="Back-end techno" />
      <div className="py-16 px-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
        {skills2.map((item) => {
          return <SkillsCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
