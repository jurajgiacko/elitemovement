"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#09090f]/95 backdrop-blur-md border-b border-[#1f2937]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#22c55e] rounded-sm flex items-center justify-center font-black text-black text-sm">
              EM
            </div>
            <div>
              <span className="font-bold text-white text-base leading-tight block">
                Elite Movement
              </span>
              <span className="text-[#22c55e] text-[10px] font-medium tracking-widest uppercase leading-tight block">
                Physio · Praha
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#22c55e]"
                    : "text-[#e5e7eb] hover:text-[#22c55e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-[#22c55e] text-black font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-[#4ade80] transition-colors duration-200"
            >
              Rezervovat zdarma
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#09090f] border-t border-[#1f2937] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-2 transition-colors ${
                pathname === link.href ? "text-[#22c55e]" : "text-[#e5e7eb]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="bg-[#22c55e] text-black font-bold text-base px-5 py-3 rounded-sm text-center mt-2"
          >
            Rezervovat zdarma
          </Link>
        </div>
      )}
    </nav>
  );
}
