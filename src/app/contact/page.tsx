"use client";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={32} />,
      link: "https://github.com/JoshGreat-Phaethon",
      color: "hover:text-gray-300",
    },
    {
      name: "Email",
      icon: <MdEmail size={32} />,
      link: "mailto:rokanberseker1@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={32} />,
      link: "https://instagram.com/gabriel_jap6",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-[#0a0a0a] via-[#0f0028] to-[#1a0033] overflow-hidden">
      {/* Efek Partikel Bokeh */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-400 rounded-full opacity-30 blur-xl"
            style={{
              width: Math.random() * 35 + 15,
              height: Math.random() * 35 + 15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
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
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,255,0.7)]">
          Hubungi Saya
        </h1>
        <p className="text-gray-300 mt-3 mb-10 text-lg">
          Silakan hubungi saya melalui platform di bawah ini:
        </p>

        {/* Ikon Kontak */}
        <div className="flex justify-center gap-10 mt-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition-all ${contact.color}`}
              whileHover={{ scale: 1.2 }}
            >
              {contact.icon}
              <p className="mt-2 text-sm">{contact.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
