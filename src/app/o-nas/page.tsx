import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Target, Zap, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "O nás | Mgr. Tomáš Hybner — Elite Movement Physio Praha",
  description:
    "Mgr. Tomáš Hybner — fyzioterapeut se zkušenostmi z práce s profesionálními sportovci. Poznaj tým Elite Movement a filozofii fyzioterapie, která léčí příčinu.",
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
    desc: "Elite Movement dnes pomáhá jak vrcholovým sportovcům, tak lidem s bolestmi zad z kancelářské práce. Přístup je vždy stejně důkladný.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#f7f7f5] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e11d48]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              O nás
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d0d0d] leading-tight mb-6">
              Fyzioterapie, která
              <br />
              <span className="text-[#e11d48]">neplýtvá</span>
              <br />
              tvým časem.
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed max-w-xl">
              Věříme, že fyzioterapie má smysl jen tehdy, když skutečně řeší
              problém — ne jen dočasně tlumí bolest a žije ze tvých pravidelných
              návštěv.
            </p>
          </div>
        </div>
      </section>

      {/* Tomáš Hybner */}
      <section className="py-20 bg-white border-y border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo placeholder */}
            <div className="relative order-2 md:order-1">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#e11d48]/10 rounded-sm" />
                <div className="relative w-full aspect-[4/5] bg-[#e5e7eb] rounded-sm flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-[#d1d5db] flex items-center justify-center">
                    <span className="text-[#9ca3af] font-black text-2xl">TH</span>
                  </div>
                  <span className="text-[#9ca3af] text-xs uppercase tracking-wider">Foto — připravujeme</span>
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#0d0d0d] text-white px-4 py-3 rounded-sm shadow-xl">
                  <div className="text-[#e11d48] text-xs font-bold uppercase tracking-wider">
                    Zakladatel
                  </div>
                  <div className="text-white font-bold text-sm">
                    Mgr. Tomáš Hybner
                  </div>
                  <div className="text-[#9ca3af] text-xs">Fyzioterapeut</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Kdo jsme
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-[#0d0d0d] leading-tight mb-6">
                &ldquo;Dělám fyzioterapii, protože
                <span className="text-[#e11d48]"> chci vidět výsledky</span>
                &nbsp;— ne jen pacienty.&rdquo;
              </h2>

              <div className="space-y-4 text-[#374151] leading-relaxed mb-8">
                <p>
                  Tomáš Hybner vystudoval fyzioterapii (Mgr.) a od začátku se
                  zaměřil na sportovní rehabilitaci a manuální terapii. Práce s
                  profesionálními sportovci ho naučila, že výsledky musí
                  přicházet rychle a musí být trvalé.
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
                    className="bg-[#f7f7f5] border border-[#e5e7eb] text-[#374151] text-xs px-3 py-1.5 rounded-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Naše filozofie
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight">
              Tři principy,
              <br />
              které nás definují.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white border border-[#e5e7eb] rounded-sm p-8 relative overflow-hidden"
                >
                  <div className="text-[#e11d48]/5 text-8xl font-black absolute -bottom-2 -right-2 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-10 h-10 bg-[#e11d48] flex items-center justify-center rounded-sm mb-6">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#0d0d0d] font-bold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Náš příběh
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight">
                Jak vznikl
                <br />
                Elite Movement.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e5e7eb]" />
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.title} className="flex gap-8">
                    <div className="w-12 h-12 bg-[#e11d48] flex items-center justify-center rounded-sm shrink-0 relative">
                      <span className="text-white font-bold text-[10px] text-center leading-tight px-1">
                        {item.year}
                      </span>
                    </div>
                    <div className="pt-2 pb-6">
                      <h3 className="text-[#0d0d0d] font-bold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#374151] text-sm leading-relaxed">
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
