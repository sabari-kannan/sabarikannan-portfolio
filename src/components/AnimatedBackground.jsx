import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-20"
      />

      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />

    </div>
  );
}

export default AnimatedBackground;