import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let's Connect 👋
            </h3>

            <p className="text-gray-300">
              I'm currently looking for opportunities as a Full Stack Developer,
              Data Analyst, or Software Engineer. Feel free to contact me.
            </p>

            <div>
              <p><strong>Email:</strong> sksabari7m@gmail.com</p>
              <p><strong>Phone:</strong> +91 9994317131</p>
              <p><strong>Location:</strong> Tamil Nadu, India</p>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/sabari-kannan"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 px-5 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 px-5 py-2 rounded-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            ></textarea>

            <button
              className="bg-cyan-500 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;