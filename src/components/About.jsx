import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-300 leading-8"
        >
          I'm <strong>Sabari Kannan</strong>, a BCA graduate with a passion
          for Full Stack Development, Data Analytics, and AI-powered
          applications. I enjoy building scalable web applications,
          interactive dashboards, and solving real-world problems through
          technology.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Education
            </h3>
            <p>BCA Graduate</p>
            <p>76% Overall</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Interests
            </h3>
            <ul className="space-y-2">
              <li>💻 Full Stack Development</li>
              <li>📊 Data Analytics</li>
              <li>🤖 Artificial Intelligence</li>
              <li>☁️ Cloud Technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;