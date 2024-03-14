import { FaGithubSquare, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ img, github, title, text }) => {
  return (
    <div className="mt-4 marker:backdrop:bg-white rounded-lg shadow-md hover:shadow-xl duration:100 ">
      <img
        src={img}
        alt={title}
        className="w-full object-fill shadow-t-xl h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>

        <div className="mt-4 flex gap-x-4">
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="h-8 w-8 text-slate-500" />
          </a>
          {title ===
          "Intégration complète d'une maquette ecommerce avec React.js" ? (
            <a
              href="https://comfy-store-app-cyan.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <TbWorldWww className="h-8 w-8 text-slate-500" />
            </a>
          ) : (
            ""
          )}
          {title ===
          "PlateSuggest: une application mobile réalisé avec React Native" ? (
            <>
              <a
                href="https://expo.dev/accounts/kaboreva/projects/frontend/updates/0b6ae6c7-faa9-4d2e-b690-37dc9d050659"
                target="_blank"
                rel="noreferrer"
              >
                <FaAppStoreIos className="h-8 w-8 text-slate-500" />
              </a>
              <a
                href="https://expo.dev/accounts/kaboreva/projects/frontend/updates/0b6ae6c7-faa9-4d2e-b690-37dc9d050659"
                target="_blank"
                rel="noreferrer"
              >
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
