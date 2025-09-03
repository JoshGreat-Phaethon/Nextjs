"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [bokehData, setBokehData] = useState<
    { width: number; height: number; left: string; top: string }[]
  >([]);

  useEffect(() => {
    // Generate efek bokeh hanya di sisi client
    const particles = Array.from({ length: 25 }).map(() => ({
      width: Math.random() * 35 + 15,
      height: Math.random() * 35 + 15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setBokehData(particles);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Website pribadi untuk menampilkan proyek dan skill.",
    },
    {
      title: "Sistem Transaksi Buku",
      desc: "Aplikasi sederhana untuk transaksi buku berbasis Java.",
    },
    {
      title: "Ecoenzym Battery",
      desc: "Proyek inovasi membuat baterai berbahan ecoenzym.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[#0a0a0a] via-[#0f0028] to-[#1a0033] overflow-hidden">
      {/* Efek Partikel Bokeh */}
      <div className="absolute inset-0 z-0">
        {bokehData.map((bokeh, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400 rounded-full opacity-30 blur-xl"
            style={{
              width: bokeh.width,
              height: bokeh.height,
              left: bokeh.left,
              top: bokeh.top,
            }}
            animate={{
              y: [0, 25, 0],
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
          Proyek Saya
        </h1>
        <p className="text-center text-gray-300 mt-3 mb-10 text-lg">
          Beberapa proyek dan inovasi yang sudah saya kerjakan
        </p>

        {/* Kartu Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#10002b]/80 backdrop-blur-lg rounded-xl p-6 shadow-[0_0_15px_#60a5fa] border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mt-3">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
