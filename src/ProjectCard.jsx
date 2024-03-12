import { FaGithubSquare, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

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
          {title ===
          "Intégration Complète D'une Maquette Ecommerce Avec React.Js" ? (
            <a href="https://comfy-store-app-cyan.vercel.app">
              <TbWorldWww className="h-8 w-8 text-slate-500" />
            </a>
          ) : (
            ""
          )}
          {title ===
          "PlateSuggest: une application mobile réalisé avec React Native" ? (
            <>
              <a href="exp://u.expo.dev/update/43f27341-a892-44e8-bf32-40c2194e814e">
                <FaAppStoreIos className="h-8 w-8 text-slate-500" />
              </a>
              <a href="exp://u.expo.dev/update/3a7c0574-4ce4-4c3f-a99a-4bbcad1d9765">
                <FaAndroid className="h-8 w-8 text-slate-500" />
              </a>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
