import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Trophy, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás | Tým Elite Movement Physio Praha",
  description:
    "Tým Elite Movement — Mgr. Tomáš Hybner, fyzioterapeut české fotbalové reprezentace U21, FC Slovan Liberec, HC Slavia Praha. Sportovní fyzioterapie Praha.",
  keywords: [
    "Tomáš Hybner fyzioterapeut Praha",
    "Elite Movement fyzioterapie tým",
    "fyzioterapeut česká reprezentace",
    "fyzioterapeut FC Slovan Liberec",
    "fyzioterapeut HC Slavia Praha",
    "sportovní fyzioterapeut Praha",
  ],
};

const team = [
  {
    name: "Mgr. Tomáš Hybner",
    role: "Vedoucí fyzioterapeut & zakladatel",
    initials: "TH",
    story:
      "Po neúspěšném pokusu o přijetí na medicínu nastoupil na fyzioterapii — a rychle zjistil, že toto řemeslo mu umožňuje být blíže sportu i svým klientům. Dnes je za toto rozhodnutí maximálně vděčný.",
    clubs: [
      "Česká fotbalová reprezentace U21 (2025–)",
      "FC Slovan Liberec — A tým (2024–)",
      "HC Slavia Praha — vedoucí fyzioterapeut (2024–)",
      "Ženská hokejová reprezentace U16 (2024–2025)",
      "Český krasobruslařský svaz — externí (2024–)",
      "Akademie Tomáše Vernera — externí (2023–)",
      "UK Kings Prague — vedoucí fyzioterapeut (2021–)",
      "Elite Hockey Training Centre — externí (2019–)",
    ],
    education: [
      "UK FTVS — Aplikovaná fyzioterapie, nMgr. (2021–2023)",
      "UK FTVS — Fyzioterapie, Bc. (2018–2021)",
    ],
    courses: [
      "Optimal Dry Needling Solutions lvl. 2 (2025)",
      "Svalové kontrakce — CON, ECC, ISO (2024)",
      "Off Season prep team sports (2024)",
      "Optimal Dry Needling Solutions lvl. 1 (2023)",
      "Neurokinetic Therapy lvl. 1 (2023)",
      "Klinická sportovní fyzioterapie (2023)",
      "OMT Training, Osteopathic Spinal Manipulation (2022)",
      "Myofasciální a viscerální řetězení (2022)",
      "Viscerální manipulace (2022)",
      "Komplexní manuální techniky — Manipulace & Mobilizace (2021)",
      "FMT Blades: IASTM Practitioner (2021)",
    ],
  },
  {
    name: "Mgr. Matěj Síla",
    role: "Fyzioterapeut",
    initials: "MS",
    story:
      "První zkušenosti s fyzioterapií získal po vlastním sportovním úrazu. Ve svých terapiích kombinuje poznatky z fyzioterapie se silovým a kondičním tréninkem — s individuálním zaměřením pro každého klienta.",
    clubs: [
      "HC Slavia Praha — A tým (2024–)",
      "Elite Movement (2023–)",
    ],
    education: [
      "FTVS UK — Aplikovaná fyzioterapie, nMgr. (2023–)",
      "3. LF UK — Fyzioterapie, Bc. (2019–2022)",
    ],
    courses: [
      "Komplexní manuální techniky — Manipulace & Mobilizace (2024)",
      "Základy sportovní přípravy pro fyzioterapeuty (2024)",
    ],
  },
  {
    name: "Bc. Ladislav Dudák",
    role: "Fyzioterapeut",
    initials: "LD",
    story:
      "Člen týmu Elite Movement se zaměřením na sportovní fyzioterapii a individuální přístup ke každému klientovi.",
    clubs: [],
    education: [],
    courses: [],
  },
  {
    name: "Mgr. Anna Štorková",
    role: "Nutriční terapeutka",
    initials: "AŠ",
    story:
      "Nutriční podpora jako součást komplexní péče. Správná výživa je nezbytnou součástí regenerace, výkonu i dlouhodobého zdraví.",
    clubs: [],
    education: [],
    courses: [],
  },
];

const clinicValues = [
  "Nejsme smluvním partnerem pojišťoven — férovost přístupu na prvním místě",
  "Individuální přístup v léčbě každého klienta",
  "Intenzivní kontinuální vzdělávání a práce na terapeutických postupech",
  "Klient nikdy nehradí extra za specifické léčebné přístupy — vše je v ceně",
  "Dobu a intenzitu terapie vždy určuje ošetřující terapeut podle stavu klienta",
  "Vždy hledáme příčinu obtíží — neléčíme pouze symptomatologicky",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#f7f7f5] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e11d48]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[16vw] font-black text-[#e11d48]/[0.04] leading-none select-none pointer-events-none">
          TÝM
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              O nás
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d0d0d] leading-tight mb-6">
              Centrum sportovní
              <br />
              <span className="text-[#e11d48]">fyzioterapie.</span>
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed max-w-2xl mb-6">
              Jsme mladý tým fyzioterapeutů zabývající se sportovní medicínou a
              fyzioterapií. Pomáháme profesionálním sportovcům i běžně pracující
              populaci k bezbolestnému fungování ve sportu i v životě.
            </p>
            {/* Trophy badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "Česká fotbalová reprezentace",
                "FC Slovan Liberec",
                "HC Slavia Praha",
                "Český krasobruslařský svaz",
              ].map((club) => (
                <div
                  key={club}
                  className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-full px-3 py-1.5 shadow-sm"
                >
                  <Trophy className="w-3 h-3 text-[#e11d48] shrink-0" />
                  <span className="text-[#374151] text-xs font-medium">
                    {club}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinic values */}
      <section className="py-16 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {clinicValues.map((value) => (
              <div key={value} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 bg-[#e11d48] rounded-full mt-2 shrink-0" />
                <p className="text-[#374151] text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Tým
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight">
              Lidé za Elite Movement.
            </h2>
          </div>

          <div className="space-y-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-white border border-[#e5e7eb] rounded-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-4 gap-0">
                  {/* Identity */}
                  <div className="md:col-span-1 p-8 bg-[#f7f7f5] border-b md:border-b-0 md:border-r border-[#e5e7eb] flex flex-col items-start gap-4">
                    <div className="w-16 h-16 bg-[#e11d48] flex items-center justify-center rounded-sm">
                      <span className="text-white font-black text-xl">
                        {member.initials}
                      </span>
                    </div>
                    <div>
                      <div className="font-black text-[#0d0d0d] text-lg leading-tight mb-1">
                        {member.name}
                      </div>
                      <div className="text-[#e11d48] text-xs font-semibold uppercase tracking-wider">
                        {member.role}
                      </div>
                    </div>
                    <p className="text-[#374151] text-sm leading-relaxed">
                      {member.story}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-3 p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Clubs */}
                    {member.clubs.length > 0 && (
                      <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                          <Trophy className="w-4 h-4 text-[#e11d48]" />
                          <span className="text-[#0d0d0d] font-bold text-sm uppercase tracking-wider">
                            Pracovní výzvy
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {member.clubs.map((club) => (
                            <li
                              key={club}
                              className="text-[#374151] text-xs leading-relaxed flex gap-2"
                            >
                              <span className="text-[#e11d48] shrink-0">—</span>
                              {club}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Education */}
                    {member.education.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap className="w-4 h-4 text-[#e11d48]" />
                          <span className="text-[#0d0d0d] font-bold text-sm uppercase tracking-wider">
                            Vzdělání
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {member.education.map((edu) => (
                            <li
                              key={edu}
                              className="text-[#374151] text-xs leading-relaxed flex gap-2"
                            >
                              <span className="text-[#e11d48] shrink-0">—</span>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Courses */}
                    {member.courses.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#e11d48] rounded-full" />
                          </div>
                          <span className="text-[#0d0d0d] font-bold text-sm uppercase tracking-wider">
                            Vzdělávání
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {member.courses.slice(0, 6).map((course) => (
                            <li
                              key={course}
                              className="text-[#374151] text-xs leading-relaxed flex gap-2"
                            >
                              <span className="text-[#e11d48] shrink-0">—</span>
                              {course}
                            </li>
                          ))}
                          {member.courses.length > 6 && (
                            <li className="text-[#9ca3af] text-xs">
                              + {member.courses.length - 6} dalších kurzů
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Empty state for members without details */}
                    {member.clubs.length === 0 &&
                      member.education.length === 0 && (
                        <div className="sm:col-span-2 lg:col-span-3 flex items-center">
                          <p className="text-[#9ca3af] text-sm italic">
                            Detailní profil připravujeme.
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#e11d48] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
          START
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pojďme pracovat společně.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Konzultace zdarma. Žádné závazky. Jen upřímný rozhovor o tom, jak
            ti pomůžeme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#e11d48] font-bold text-base px-8 py-4 rounded-sm hover:bg-[#f0efed] transition-colors group"
            >
              Domluvit konzultaci
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+420603460433"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-medium text-base px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +420 603 460 433
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
