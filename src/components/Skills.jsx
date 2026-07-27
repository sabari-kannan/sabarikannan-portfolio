import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Python", level: 90 },
  { name: "SQL", level: 90 },
  { name: "Power BI", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "Git & GitHub", level: 85 },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          Technical Skills
        </h2>

        <div className="space-y-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="bg-cyan-400 h-3 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;