const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element px-8 py-8 flex flex-col sm:flex-row sm:gap-x-16 sm:py-8">
        <h2>
          Web <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          <a
            href=""
            className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
          >
            Home
          </a>
          <a
            href=""
            className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
          >
            About
          </a>
          <a
            href=""
            className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
          >
            Skills
          </a>
          <a
            href=""
            className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
