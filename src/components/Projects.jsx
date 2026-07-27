import { motion } from "framer-motion";

const projects = [
  {
    title: "Campus Connect",
    image: "/projects/campusconnect.png",
    description:
      "AI-powered smart campus platform for students and faculty with authentication, announcements, resource sharing, and timetable management.",
    tech: ["React", "Firebase", "Node.js"],
    github:
      "https://github.com/sabari-kannan/Campus-Connect-The-Smart-Campus",
  },
  {
    title: "Sales & Revenue Dashboard",
    image: "/projects/sales-dashboard.png",
    description:
      "Interactive Power BI dashboard for analyzing sales, revenue, profit, and business performance.",
    tech: ["Power BI", "SQL", "Python"],
    github:
      "https://github.com/sabari-kannan/Sales-Revenue-Analysis-Dashboard",
  },
  {
    title: "Data Cleaning & Reporting Automation",
    image: "/projects/data-cleaning.png",
    description:
      "Python automation project that cleans datasets, handles missing values, and generates reports efficiently.",
    tech: ["Python", "Pandas"],
    github:
      "https://github.com/sabari-kannan/Data-Cleaning-Reporting-Automation",
  },
  {
    title: "Predictive Analytics Using Historical Data",
    image: "/projects/predictive.png",
    description:
      "Machine learning model that predicts future outcomes using historical datasets.",
    tech: ["Python", "Machine Learning"],
    github:
      "https://github.com/sabari-kannan/Complete-Predictive-Analytics-Using-Historical-Data-project",
  },
  {
    title: "Customer Segmentation Analysis",
    image: "/projects/customer-segmentation.png",
    description:
      "K-Means clustering project that segments customers into meaningful business groups.",
    tech: ["Python", "Scikit-learn"],
    github:
      "https://github.com/sabari-kannan/Customer-Segmentation-Analysis",
  },
  {
    title: "Food Connect",
    image: "/projects/food-connect.png",
    description:
      "Salesforce application that connects surplus food donors with volunteers for efficient food distribution.",
    tech: ["Salesforce", "Apex", "Flow"],
    github: "#",
    video: "https://drive.google.com/file/d/1IKssDo8iNxk8jmWo0Al71Lgs89jCUdHA/view?usp=drive_link",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "Modern responsive portfolio built using React, Tailwind CSS, Express.js, and MongoDB.",
    tech: ["React", "Tailwind CSS", "Express"],
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-14"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/20"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      ▶ Demo Video
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;