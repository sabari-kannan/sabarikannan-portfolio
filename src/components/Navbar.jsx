import { Link } from "react-scroll";

function Navbar() {
  const navItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "certificates",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          Sabari
        </h1>

        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                className="capitalize cursor-pointer hover:text-cyan-400 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <a
  href="/resume.pdf"
  download
  className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition"
>
  Resume
</a>
      </div>
    </nav>
  );
}

export default Navbar;