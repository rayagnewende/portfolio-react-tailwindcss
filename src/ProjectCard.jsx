import { FaGithubSquare } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ img, github, title, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl duration:100">
      <img
        src={img}
        alt={title}
        className="w-full object-cover shadow-t-xl h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
