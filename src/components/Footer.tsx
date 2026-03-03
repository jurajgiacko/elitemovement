import Link from "next/link";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#09090f] border-t border-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed max-w-xs">
              Sportovní fyzioterapie s přístupem, který léčí příčinu — ne jen
              symptomy. Pracujeme s profesionálními sportovci i aktivními
              jedinci.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
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
                    className="text-[#6b7280] text-sm hover:text-[#22c55e] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+420603460433"
                  className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#22c55e] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#22c55e] shrink-0" />
                  +420 603 460 433
                </a>
              </li>
              <li>
                <a
                  href="mailto:th.elitemovement@gmail.com"
                  className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#22c55e] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#22c55e] shrink-0" />
                  th.elitemovement@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/elite_movement_cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#6b7280] text-sm hover:text-[#22c55e] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#22c55e] shrink-0" />
                  @elite_movement_cz
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="inline-block bg-[#22c55e] text-black font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-[#4ade80] transition-colors"
              >
                Konzultace zdarma
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6b7280] text-xs">
            © {new Date().getFullYear()} Elite Movement Physio — Mgr. Tomáš
            Hybner. Všechna práva vyhrazena.
          </p>
          <p className="text-[#6b7280] text-xs">
            Sportovní fyzioterapie Praha
          </p>
        </div>
      </div>
    </footer>
  );
}
