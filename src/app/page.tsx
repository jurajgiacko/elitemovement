import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  Phone,
  Target,
  Zap,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sportovní fyzioterapie Praha | Elite Movement Physio",
  description:
    "Vrátíme tě zpět k tomu, co miluješ. Sportovní fyzioterapie v Praze se zkušenostmi z práce s profesionálními sportovci. Konzultace zdarma.",
};

const stats = [
  { value: "8+", label: "let zkušeností" },
  { value: "500+", label: "spokojených pacientů" },
  { value: "Pro", label: "sportovní zázemí" },
  { value: "100%", label: "individuální přístup" },
];

const services = [
  {
    icon: Zap,
    title: "Sportovní rehabilitace",
    desc: "Návrat k výkonu po zranění. Rychle, efektivně, bez kompromisů.",
    href: "/sluzby#sportovni-rehabilitace",
  },
  {
    icon: Target,
    title: "Manuální terapie",
    desc: "Ruční práce zaměřená na příčinu bolesti — ne jen na symptomy.",
    href: "/sluzby#manualni-terapie",
  },
  {
    icon: Shield,
    title: "Dry Needling",
    desc: "Přesná jehlová terapie pro uvolnění trigger pointů a svalového napětí.",
    href: "/sluzby#dry-needling",
  },
  {
    icon: Clock,
    title: "Diagnostika pohybu",
    desc: "Komplexní analýza pohybových vzorů a odhalení příčiny tvých obtíží.",
    href: "/sluzby#diagnostika",
  },
  {
    icon: Award,
    title: "Prevence zranění",
    desc: "Terapie dřív než přijde problém. Pro sportovce, kteří nechtějí přerušit trénink.",
    href: "/sluzby#prevence",
  },
  {
    icon: Users,
    title: "Individuální cvičební plán",
    desc: "Domácí cvičení šité na míru — aby efekt terapie trval i mimo ordinaci.",
    href: "/sluzby#cvicebni-plan",
  },
];

const testimonials = [
  {
    name: "Klára",
    date: "září 2024",
    text: "Profesionální přístup a moderní metody mě nadchly. Terapie mi přinesla okamžitou úlevu po několika letech bolestí. Velmi příjemné prostředí, určitě doporučuji.",
    stars: 5,
  },
  {
    name: "Martin",
    date: "srpen 2024",
    text: "Skvělé zkušenosti — odborní fyzioterapeuti, citlivý přístup a opravdu rychlé zlepšení. Konečně jsem se cítil v dobrých rukou.",
    stars: 5,
  },
  {
    name: "Adam",
    date: "březen 2025",
    text: "Moderní vybavení a postupy, přátelský ale profesionální přístup a hlavně okamžitá úleva. Přesně to jsem hledal. Po terapii se cítím mnohem lépe.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Musím mít doporučení od lékaře?",
    a: "Ne. Na fyzioterapii u nás nepotřebuješ žádné doporučení. Stačí nás kontaktovat a domluvit si termín.",
  },
  {
    q: "Jak dlouho trvá jedna sezení?",
    a: "Standardní sezení trvá 60 minut. První konzultace, kde provedeme diagnostiku, může být o něco delší.",
  },
  {
    q: "Kolik sezení budu potřebovat?",
    a: "To záleží na povaze tvého problému. Na první konzultaci ti dáme upřímný odhad — bez zbytečného natahování léčby.",
  },
  {
    q: "Pracujete jen se sportovci?",
    a: "Ne. Pracujeme s každým, kdo chce efektivní péči. Od profesionálních sportovců až po lidi s bolestmi zad z kancelářské práce.",
  },
  {
    q: "Je první konzultace opravdu zdarma?",
    a: "Ano. První telefonická konzultace je bezplatná — řekneme ti, zda ti dokážeme pomoct a co bys měl/a očekávat.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#09090f] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#22c55e]/3 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#22c55e]/20 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-[#22c55e] text-xs font-medium tracking-wider uppercase">
                Sportovní fyzioterapie · Praha
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] tracking-tight mb-6">
              Vrátíme tě
              <br />
              <span className="gradient-text">zpět k tomu,</span>
              <br />
              co miluješ.
            </h1>

            <p className="text-[#6b7280] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Fyzioterapie, která léčí{" "}
              <span className="text-white font-medium">příčinu</span> — ne jen
              symptomy. Zkušenosti s profesionálními sportovci. Individuální
              přístup bez zbytečných poplatků navíc.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-black font-bold text-base px-8 py-4 rounded-sm hover:bg-[#4ade80] transition-all duration-200 group"
              >
                Konzultace zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+420603460433"
                className="inline-flex items-center justify-center gap-2 border border-[#1f2937] text-[#e5e7eb] font-medium text-base px-8 py-4 rounded-sm hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                +420 603 460 433
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6">
              {[
                "Bez doporučení od lékaře",
                "Odpověď do 24 h",
                "Zkušenosti s pro-sportovci",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0" />
                  <span className="text-[#6b7280] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6b7280]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111118] border-y border-[#1f2937] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#22c55e] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#6b7280] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
                Proč právě my
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Fyzioterapie bez
                <br />
                <span className="gradient-text">zbytečného BS.</span>
              </h2>
              <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
                Víme, jak frustrující je platit za terapii, která řeší jen
                příznak — a za pár týdnů se bolest vrátí. My to děláme jinak.
                Skutečná ruční práce, hledání příčiny a plán, který funguje i
                doma.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Individuální přístup",
                    desc: "Vše je součástí terapie — bez nadbytečných poplatků a překvapení na faktuře.",
                  },
                  {
                    title: "Zkušenosti z vrcholového sportu",
                    desc: "Pracujeme s profesionálními sportovci. Víme, co znamená rychlý a efektivní návrat k výkonu.",
                  },
                  {
                    title: "Léčba příčiny, ne symptomů",
                    desc: "Nenechame tě chodit na sezení donekonečna. Naším cílem je, aby sis poradil/a sám/a.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#22c55e] rounded-full" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        {item.title}
                      </div>
                      <div className="text-[#6b7280] text-sm leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-[#111118] border border-[#1f2937] rounded-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-full blur-2xl" />
                <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-6">
                  Mgr. Tomáš Hybner
                </div>
                <blockquote className="text-white text-xl font-semibold leading-relaxed mb-6">
                  &ldquo;Fyzioterapie má smysl jen tehdy, když tě naučí žít
                  bez bolesti — ne jen přežívat od sezení k sezení.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center">
                    <span className="text-[#22c55e] font-bold text-sm">TH</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      Mgr. Tomáš Hybner
                    </div>
                    <div className="text-[#6b7280] text-xs">
                      Zakladatel, fyzioterapeut
                    </div>
                  </div>
                </div>
              </div>
              {/* Accent corner */}
              <div className="absolute -bottom-px -right-px w-16 h-16 bg-[#22c55e] rounded-tl-2xl opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Co nabízíme
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              Služby, které{" "}
              <span className="gradient-text">skutečně fungují</span>
            </h2>
            <p className="text-[#6b7280] text-lg">
              Každá metoda má svůj důvod. Vybíráme to nejefektivnější pro tvůj
              konkrétní problém.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-[#09090f] border border-[#1f2937] rounded-sm p-6 hover:border-[#22c55e]/40 transition-all duration-200 hover:bg-[#09090f]/80"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center mb-4 group-hover:bg-[#22c55e]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#22c55e]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{service.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 text-[#22c55e] text-sm font-medium">
                    Více info{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-2 border border-[#22c55e]/30 text-[#22c55e] font-medium px-8 py-3 rounded-sm hover:bg-[#22c55e]/5 transition-all"
            >
              Všechny služby <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Jak to funguje
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              3 kroky od bolesti
              <br />
              <span className="gradient-text">k pohybu</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#22c55e]/30 to-transparent" />

            {[
              {
                step: "01",
                title: "Vyplníš formulář",
                desc: "Stačí pár řádků — napiš nám, co tě trápí. Žádná dlouhá administrativa.",
              },
              {
                step: "02",
                title: "Do 24h se ozveme",
                desc: "Zavoláme ti, probereme tvůj problém a domluvíme termín, který ti vyhovuje.",
              },
              {
                step: "03",
                title: "Konzultace zdarma",
                desc: "Na prvním sezení diagnostikujeme příčinu a nastavíme plán léčby šitý na míru.",
              },
            ].map((step, i) => (
              <div
                key={step.step}
                className="relative bg-[#111118] border border-[#1f2937] rounded-sm p-8"
              >
                <div className="text-[#22c55e] text-5xl font-black opacity-20 mb-4 leading-none">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {step.desc}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute -right-3 top-8 w-6 h-6 border-t border-r border-[#22c55e]/30 rotate-45" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#22c55e] text-black font-bold text-base px-8 py-4 rounded-sm hover:bg-[#4ade80] transition-all group"
            >
              Začít teď — zdarma
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#111118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Co říkají klienti
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Výsledky, které{" "}
              <span className="gradient-text">mluví za sebe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#09090f] border border-[#1f2937] rounded-sm p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#22c55e] text-[#22c55e]"
                    />
                  ))}
                </div>
                <p className="text-[#e5e7eb] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1f2937]">
                  <div className="w-8 h-8 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center">
                    <span className="text-[#22c55e] font-bold text-xs">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {t.name}
                    </div>
                    <div className="text-[#6b7280] text-xs">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#09090f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Časté otázky
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Máš otázky?
              <br />
              <span className="gradient-text">Máme odpovědi.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#111118] border border-[#1f2937] rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#1a1a24] transition-colors">
                  <span className="text-white font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#22c55e] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-0 text-[#6b7280] text-sm leading-relaxed border-t border-[#1f2937]">
                  <div className="pt-4">{faq.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-[#111118] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22c55e]/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-6">
            Začni dnes
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            První krok je
            <br />
            <span className="gradient-text">zdarma.</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto mb-10">
            Zavolej nebo vyplň formulář. Do 24 hodin se ti ozveme a probereme,
            jak ti nejlépe pomůžeme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-black font-bold text-base px-8 py-4 rounded-sm hover:bg-[#4ade80] transition-all group"
            >
              Vyplnit formulář
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+420603460433"
              className="inline-flex items-center justify-center gap-2 border border-[#1f2937] text-[#e5e7eb] font-medium text-base px-8 py-4 rounded-sm hover:border-[#22c55e]/50 hover:text-[#22c55e] transition-all"
            >
              <Phone className="w-5 h-5" />
              Zavolat přímo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
