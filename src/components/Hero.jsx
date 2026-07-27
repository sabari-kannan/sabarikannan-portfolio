import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}

        <div>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400 text-lg mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-5"
          >
            Sabari Kannan
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Data Analyst",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-cyan-400 font-semibold"
          />

          <p className="text-gray-300 mt-6 leading-8">
            Passionate about building modern web applications,
            analyzing data, and creating AI-powered solutions
            that solve real-world problems.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 px-7 py-3 rounded-lg hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-7 py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/Profile.jpeg"
            alt="Sabari"
            className="w-80 h-80 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;