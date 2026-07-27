import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              Sabari Kannan
            </h2>

            <p className="text-gray-400 mt-2">
              Full Stack Developer • Data Analyst • AI Enthusiast
            </p>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/sabari-kannan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sabarikannan-s-2558ba328"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sabari Kannan. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="bg-cyan-500 p-3 rounded-full hover:bg-cyan-600 transition mt-5 md:mt-0"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;