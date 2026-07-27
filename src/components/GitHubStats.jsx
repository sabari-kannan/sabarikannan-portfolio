import { motion } from "framer-motion";

function GitHubStats() {
  return (
    <section
      id="github"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          GitHub Statistics
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=sabari-kannan&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-xl w-full"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sabari-kannan&theme=tokyonight"
            alt="GitHub Streak"
            className="rounded-xl w-full"
          />

        </div>

      </div>
    </section>
  );
}

export default GitHubStats;