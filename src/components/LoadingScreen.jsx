import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto"
        />

        <h2 className="mt-8 text-3xl font-bold text-cyan-400">
          Sabari Portfolio
        </h2>

        <p className="text-gray-400 mt-2">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;