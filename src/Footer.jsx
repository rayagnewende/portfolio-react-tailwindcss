import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-10 text-center border-t-2 mb-2 pt-2">
      <span className="">Copyright @ 2024</span>
      <div className="mt-2 flex gap-x-2 justify-center">
        <a href="https://github.com/rayagnewende">
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/kaborerayagnewendeevariste/">
          <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href="">
          <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
