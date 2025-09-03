"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e0e2e]/90 backdrop-blur-md shadow-lg border-b border-pink-600/20 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-pink-500">Gabriel</h1>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-pink-400 font-semibold"
                    : "text-gray-300 hover:text-pink-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
