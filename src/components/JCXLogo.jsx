import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ChevronsRight, BarChart2 } from "lucide-react";

const JCXLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated geometric element */}
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-lg shadow-md" />
        <motion.div
          className="absolute inset-0 border-2 border-blue-400 rounded-lg"
          animate={{
            rotate: [0, 3, -3, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      {/* "JCxConsultants" text in single line as specified */}
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          JC<span className="text-blue-600">x</span>Consultants
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default JCXLogo;
