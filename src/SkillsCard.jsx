// eslint-disable-next-line react/prop-types
const SkillsCard = ({ icon, title }) => {
  return (
    <article>
      <span>{icon} </span>
      <h4 className="mt-6 font-bold">{title}</h4>
      {/* <p className="mt-2 text-slate-500">{text}</p> */}
    </article>
  );
};

export default SkillsCard;
