import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#e11d48] flex items-center justify-center rounded-sm font-black text-white text-sm shrink-0">
                EM
              </div>
              <div>
                <div className="font-black text-white text-base leading-tight tracking-tight">
                  Elite Movement
                </div>
                <div className="text-[#e11d48] text-[10px] font-semibold tracking-widest uppercase leading-tight">
                  Physio · Praha
                </div>
              </div>
            </div>
            <p className="text-[#9ca3af] text-sm leading-relaxed max-w-xs">
              Sportovní fyzioterapie s přístupem, který léčí příčinu — ne jen
              symptomy. Zkušenosti s profesionálními sportovci.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Navigace
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Úvod" },
                { href: "/sluzby", label: "Služby" },
                { href: "/o-nas", label: "O nás" },
                { href: "/kontakt", label: "Kontakt & Rezervace" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9ca3af] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+420603460433"
                  className="flex items-center gap-3 text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e11d48] shrink-0" />
                  +420 603 460 433
                </a>
              </li>
              <li>
                <a
                  href="mailto:th.elitemovement@gmail.com"
                  className="flex items-center gap-3 text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#e11d48] shrink-0" />
                  th.elitemovement@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/elite_movement_cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#9ca3af] text-sm hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#e11d48] shrink-0" />
                  @elite_movement_cz
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="inline-block bg-[#e11d48] text-white font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-[#9f1239] transition-colors"
              >
                Konzultace zdarma
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-xs">
            © {new Date().getFullYear()} Elite Movement Physio — Mgr. Tomáš Hybner
          </p>
          <p className="text-[#6b7280] text-xs">Sportovní fyzioterapie Praha</p>
        </div>
      </div>
    </footer>
  );
}
