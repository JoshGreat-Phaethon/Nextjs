"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Animasi */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-pink-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600 rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-[#0e0e2e]/80 rounded-2xl shadow-xl border border-pink-600/30 p-8 md:p-10 backdrop-blur-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          \
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src="/gabriel.jpg"
                alt="Gabriel"
                width={200}
                height={200}
                className="rounded-full border-4 border-pink-500 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full border-4 border-pink-400 animate-ping opacity-30"></div>
            </div>
            <h2 className="text-2xl font-bold mt-4 text-white">Gabriel</h2>
            <p className="text-pink-400 text-sm">Indie Gamedev</p>
          </div>
          {/* Deskripsi */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-pink-400 mb-3">
              Tentang Saya
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya adalah siswa kelas 11{" "}
              <span className="text-pink-400">SMK Negeri 8 Malang</span> yang
              memiliki passion dalam pengembangan game dan teknologi modern.
            </p>

            {/* Visi & Misi */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-pink-400 flex items-center gap-2">
                  🎯 Visi & Misi
                </h3>
                <p className="text-gray-300 ml-6">
                  Belajar, berkembang, dan berbagi ilmu.
                </p>
              </div>

              {/* Tujuan */}
              <div>
                <h3 className="text-xl font-semibold text-pink-400 flex items-center gap-2">
                  🚀 Tujuan
                </h3>
                <p className="text-gray-300 ml-6">
                  Menjadi <span className="text-blue-400">Indie Gamedev</span>{" "}
                  profesional dan membuat proyek open-source yang bermanfaat.
                </p>
              </div>
            </div>

            {/* Tombol */}
            <div className="mt-6 flex gap-4">
              <a
                href="/projects"
                className="bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-xl text-white font-medium transition duration-300"
              >
                Lihat Proyek
              </a>
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white font-medium transition duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm z-10">
        © 2025 Gabriel • SMK Negeri 8 Malang
      </p>
    </section>
  );
}
