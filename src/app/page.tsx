"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0028] to-[#1a0033] text-white">
      {/* Foto Hina di Background */}
      <motion.div
        className="absolute inset-0 z-0 flex justify-center items-center opacity-10"
        animate={{ y: [0, 20, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Image
          src="/hina.jpeg"
          alt="Sorasaki Hina"
          width={700}
          height={700}
          className="rounded-full blur-md"
        />
      </motion.div>

      {/* Efek Partikel Bokeh */}
      <div className="absolute inset-0 overflow-hidden z-0">
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
              y: [0, 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Halo, Saya Gabriel 👋
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Seorang siswa kelas 11 SMK Negeri 8 Malang dengan passion di bidang
          pengembangan Game. Fokus mempelajari{" "}
          <span className="text-blue-400 font-semibold">
            Ren'py Engine dan Python
          </span>{" "}
          serta Teknologi Lainnya
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 transition-all shadow-[0_0_15px_#ff1aff] hover:shadow-[0_0_25px_#ff33ff] font-semibold"
          >
            Lihat Proyek
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all shadow-[0_0_15px_#3b82f6] hover:shadow-[0_0_25px_#60a5fa] font-semibold"
          >
            Hubungi Saya
          </a>
          <a
            href="/SecretPanel"
            className="px-6 py-3 rounded-lg bg-pink-400 hover:bg-pink-800 transition-all shadow-[0_0_15px_#ff1aff] hover:shadow-[0_0_25px_#ff33ff] font-semibold ml-4"
          >
            MYkisah
          </a>
        </motion.div>
      </div>
    </section>
  );
}
