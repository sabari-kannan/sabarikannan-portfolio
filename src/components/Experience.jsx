import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold">
            Data Analyst Intern
          </h3>

          <p className="text-cyan-400 mt-2">
            Thiranex Technologies
          </p>

          <p className="text-gray-400 mb-6">
            Internship
          </p>

          <ul className="space-y-3 text-gray-300 list-disc ml-6">
            <li>Performed data cleaning and preprocessing using Python.</li>
            <li>Wrote SQL queries for data extraction and analysis.</li>
            <li>Built interactive Power BI dashboards.</li>
            <li>Generated reports and business insights from datasets.</li>
            <li>Worked with real-world datasets during the internship.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;