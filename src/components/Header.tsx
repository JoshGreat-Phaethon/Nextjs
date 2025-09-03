"use client";
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-400">Gabriel</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-pink-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-400">
            About
          </Link>
          <Link href="/skills" className="hover:text-pink-400">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-pink-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-pink-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
