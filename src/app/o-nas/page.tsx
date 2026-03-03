import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Target, Zap, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás | Mgr. Tomáš Hybner — Elite Movement Physio Praha",
  description:
    "Mgr. Tomáš Hybner — fyzioterapeut se zkušenostmi z práce s profesionálními sportovci. Poznaj tým Elite Movement a filozofii fyzioterapie, která léčí příčinu.",
  keywords: [
    "Tomáš Hybner fyzioterapeut Praha",
    "Elite Movement fyzioterapie",
    "sportovní fyzioterapeut Praha",
    "fyzioterapeut se zkušenostmi sportovci",
  ],
};

const values = [
  {
    icon: Target,
    title: "Léčíme příčinu",
    desc: "Symptom je jen zpráva. Naše práce je přijít na to, co ji posílá — a to opravit.",
  },
  {
    icon: Heart,
    title: "Upřímnost nade vše",
    desc: "Nebudeme ti říkat, co chceš slyšet. Řekneme ti, co potřebuješ vědět — i kdyby to nebylo pohodlné.",
  },
  {
    icon: Zap,
    title: "Výsledky, ne sezení",
    desc: "Naším cílem je, abys k nám nemusel/a chodit věčně. Chceme, aby sis poradil/a sám/a.",
  },
];

const timeline = [
  {
    year: "Start",
    title: "Vznik Elite Movement",
    desc: "Elite Movement vznikl z frustrace s konvenční fyzioterapií — rychlé sezení, žádná edukace, symptomy se vrátí. Tomáš Hybner chtěl dělat věci jinak.",
  },
  {
    year: "Praxe",
    title: "Zkušenosti z vrcholového sportu",
    desc: "Práce s profesionálními sportovci přinesla pohled na to, co opravdu funguje pod tlakem — rychlý návrat k výkonu, bez kompromisů.",
  },
  {
    year: "Dnes",
    title: "Sportovní i běžní klienti",
    desc: "Elite Movement dnes pomáhá jak vrcholovým sportovcům, tak lidem s bolestmi zad z práce u počítače. Přístup je vždy stejně důkladný.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#09090f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              O nás
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Fyzioterapie bez
              <br />
              <span className="gradient-text">zbytečného plýtvání</span>
              <br />
              tvým časem.
            </h1>
            <p className="text-[#6b7280] text-lg leading-relaxed max-w-xl">
              Věříme, že fyzioterapie má smysl jen tehdy, když skutečně řeší
              problém — ne jen dočasně tlumí bolest a žije ze tvých pravidelných
              návštěv.
            </p>
          </div>
        </div>
      </section>

      {/* Tomáš Hybner */}
      <section className="py-20 bg-[#111118] border-y border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo placeholder */}
            <div className="relative order-2 md:order-1">
              <div className="bg-[#09090f] border border-[#1f2937] rounded-sm aspect-[4/5] max-w-sm mx-auto flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent" />
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#22c55e] font-black text-2xl">
                      TH
                    </span>
                  </div>
                  <div className="text-[#6b7280] text-sm">Mgr. Tomáš Hybner</div>
                  <div className="text-[#22c55e] text-xs mt-1">Fyzioterapeut</div>
                </div>
                {/* Green corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#22c55e] opacity-5" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#22c55e]/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#22c55e]/30" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#22c55e]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[#22c55e] text-xs font-medium">
                  Mgr. Tomáš Hybner — Zakladatel & Fyzioterapeut
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                &ldquo;Dělám fyzioterapii, protože
                <span className="gradient-text"> chci vidět výsledky</span>
                &nbsp;— ne jen pacienty.&rdquo;
              </h2>

              <div className="space-y-4 text-[#6b7280] leading-relaxed mb-8">
                <p>
                  Tomáš Hybner vystudoval fyzioterapii (Mgr.) a od začátku se
                  zaměřil na sportovní rehabilitaci a manuální terapii. Práce s
                  profesionálními sportovci ho naučila, že výsledky musí
                  přicházet rychle a musí být trvalé — v profesionálním sportu
                  není čas na half-measures.
                </p>
                <p>
                  Elite Movement vznikl jako odpověď na frustraci s tím, jak
                  vypadá konvenční fyzioterapie: 20 minut sezení, cvičení na
                  strojích, které pacient nerozumí, a bolest, která se vrátí za
                  tři týdny. To nestačí.
                </p>
                <p>
                  Dnes Tomáš pracuje s každým — od atletů po lidi s chronickými
                  bolestmi zad. Přístup je vždy stejný: pochopit příčinu, léčit
                  efektivně, naučit klienta samostatnosti.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Mgr. fyzioterapie",
                  "Sportovní rehabilitace",
                  "Manuální terapie",
                  "Dry Needling",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1a1a24] border border-[#1f2937] text-[#e5e7eb] text-xs px-3 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="py-20 md:py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Naše filozofie
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Tři principy,
              <br />
              <span className="gradient-text">které nás definují</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#111118] border border-[#1f2937] rounded-sm p-8"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story timeline */}
      <section className="py-20 bg-[#111118] border-t border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
                Náš příběh
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Jak vznikl
                <br />
                <span className="gradient-text">Elite Movement</span>
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#22c55e]/50 via-[#22c55e]/20 to-transparent" />

              <div className="space-y-10">
                {timeline.map((item) => (
                  <div key={item.title} className="flex gap-8">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-sm bg-[#09090f] border border-[#22c55e]/30 flex items-center justify-center">
                        <span className="text-[#22c55e] font-bold text-xs">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 pb-2">
                      <h3 className="text-white font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#09090f] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22c55e]/6 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Pojďme pracovat
            <br />
            <span className="gradient-text">společně.</span>
          </h2>
          <p className="text-[#6b7280] text-lg mb-10 max-w-xl mx-auto">
            Konzultace zdarma. Žádné závazky. Jen upřímný rozhovor o tom, jak
            ti pomůžeme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-black font-bold text-base px-8 py-4 rounded-sm hover:bg-[#4ade80] transition-all group"
            >
              Domluvit konzultaci
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+420603460433"
              className="inline-flex items-center justify-center gap-2 border border-[#1f2937] text-[#e5e7eb] font-medium text-base px-8 py-4 rounded-sm hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all"
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
