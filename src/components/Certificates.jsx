import { motion } from "framer-motion";

const certificates = [
  "Salesforce Developer with Agent Blazer Champion",
  "IBM SkillsBuild - Web Development Fundamentals",
  "Infosys - Object Oriented Programming using Python",
  "Infosys - Introduction to Cyber Security",
  "Foundation of Coding with Python",
  "Fundamentals of Web Development",
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-semibold">
                🏆 {certificate}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;