"use client";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = [
    { name: "HTML & CSS", level: 50 },
    { name: "JavaScript", level: 15 },
    { name: "React.js", level: 25 },
    { name: "Responsive Design", level: 20 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[#0a0a0a] via-[#0f0028] to-[#1a0033] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-500 rounded-full opacity-40 blur-xl"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.7)]">
          Keahlian Frontend
        </h1>
        <p className="text-center text-gray-300 mt-3 mb-10 text-lg">
          Teknologi yang saya kuasai dalam pengembangan web
        </p>

        {/* Kartu Skill */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#10002b]/80 backdrop-blur-lg rounded-xl p-6 shadow-[0_0_15px_#ff33ff] border border-pink-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-bold mb-3 text-white">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_15px_#ff33ff]"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                />
              </div>
              <p className="mt-2 text-gray-300">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
