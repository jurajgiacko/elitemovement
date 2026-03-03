"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

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
          ? "bg-white border-b border-[#e5e7eb] shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#e11d48] flex items-center justify-center rounded-sm font-black text-white text-sm shrink-0">
              EM
            </div>
            <div>
              <div className="font-black text-[#0d0d0d] text-base leading-tight tracking-tight">
                Elite Movement
              </div>
              <div className="text-[#e11d48] text-[10px] font-semibold tracking-widest uppercase leading-tight">
                Physio · Praha
              </div>
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
                    ? "text-[#e11d48]"
                    : "text-[#374151] hover:text-[#0d0d0d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-[#e11d48] text-white font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-[#9f1239] transition-colors duration-200"
            >
              Rezervovat zdarma
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0d0d0d]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#e5e7eb] px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium py-3 border-b border-[#f0efed] transition-colors ${
                pathname === link.href
                  ? "text-[#e11d48]"
                  : "text-[#374151]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <Link
              href="/kontakt"
              className="block bg-[#e11d48] text-white font-bold text-base px-5 py-3 rounded-sm text-center"
            >
              Rezervovat zdarma
            </Link>
            <a
              href="tel:+420603460433"
              className="flex items-center justify-center gap-2 border border-[#e5e7eb] text-[#374151] font-medium text-sm px-5 py-3 rounded-sm"
            >
              <Phone className="w-4 h-4" />
              +420 603 460 433
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
