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
      <section className="relative min-h-screen flex items-center bg-[#f7f7f5] overflow-hidden pt-20">
        {/* Red accent bar top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e11d48]" />

        {/* Background text decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-black text-[#e11d48]/[0.04] leading-none select-none pointer-events-none tracking-tighter">
          PHYSIO
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <div className="w-2 h-2 bg-[#e11d48] rounded-full" />
                <span className="text-[#374151] text-xs font-medium tracking-wider uppercase">
                  Sportovní fyzioterapie · Praha
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0d0d0d] leading-[1.0] tracking-tight mb-6">
                Vrátíme tě
                <br />
                zpět k tomu,
                <br />
                <span className="text-[#e11d48]">co miluješ.</span>
              </h1>

              <p className="text-[#374151] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Fyzioterapie, která léčí{" "}
                <strong className="text-[#0d0d0d]">příčinu</strong> — ne jen
                symptomy. Zkušenosti s profesionálními sportovci. Individuální
                přístup bez zbytečných poplatků.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-[#e11d48] text-white font-bold text-base px-8 py-4 rounded-sm hover:bg-[#9f1239] transition-colors group"
                >
                  Konzultace zdarma
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+420603460433"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#e5e7eb] text-[#374151] font-medium text-base px-8 py-4 rounded-sm hover:border-[#0d0d0d] hover:text-[#0d0d0d] transition-colors shadow-sm"
                >
                  <Phone className="w-5 h-5" />
                  +420 603 460 433
                </a>
              </div>

              <div className="flex flex-wrap gap-5">
                {[
                  "Bez doporučení od lékaře",
                  "Odpověď do 24 h",
                  "Zkušenosti s pro-sportovci",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e11d48] shrink-0" />
                    <span className="text-[#374151] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-sm shadow-2xl shadow-black/10 p-8 max-w-sm w-full relative">
                  {/* Red accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#e11d48] rounded-l-sm" />

                  <div className="flex items-center gap-3 mb-6 pl-4">
                    <div className="w-14 h-14 rounded-sm bg-[#e5e7eb] flex items-center justify-center shrink-0">
                      <span className="text-[#9ca3af] font-black text-lg">TH</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#0d0d0d] text-sm">
                        Mgr. Tomáš Hybner
                      </div>
                      <div className="text-[#9ca3af] text-xs">
                        Fyzioterapeut, zakladatel
                      </div>
                    </div>
                  </div>

                  <blockquote className="pl-4 text-[#374151] text-sm leading-relaxed border-l-0 italic mb-6">
                    &ldquo;Fyzioterapie má smysl jen tehdy, když tě naučí žít
                    bez bolesti — ne jen přežívat od sezení k sezení.&rdquo;
                  </blockquote>

                  <div className="pl-4 space-y-3">
                    {[
                      "Individuální přístup, vše v ceně",
                      "Léčba příčiny, ne symptomů",
                      "Zkušenosti s pro sportovci",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#e11d48] rounded-full shrink-0" />
                        <span className="text-[#374151] text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#0d0d0d] text-white px-4 py-3 rounded-sm shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#e11d48] text-[#e11d48]"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold">5.0</span>
                  </div>
                  <div className="text-[#9ca3af] text-xs mt-0.5">
                    Spokojenost klientů
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9ca3af]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#0d0d0d] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#e11d48] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#9ca3af] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Proč právě my
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight mb-6">
                Fyzioterapie bez
                <br />
                <span className="em-underline">zbytečného BS.</span>
              </h2>
              <p className="text-[#374151] text-lg leading-relaxed mb-8">
                Víme, jak frustrující je platit za terapii, která řeší jen příznak
                — a za pár týdnů se bolest vrátí. My to děláme jinak.
              </p>
              <div className="space-y-5">
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
                    desc: "Naším cílem je, aby sis poradil/a sám/a — ne chodit k nám věčně.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-7 h-7 bg-[#e11d48] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 rounded-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-[#0d0d0d] font-bold mb-1">
                        {item.title}
                      </div>
                      <div className="text-[#374151] text-sm leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-[#f7f7f5] rounded-sm p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e11d48] opacity-5 rounded-bl-full" />
                <div className="w-full max-w-xs mx-auto aspect-[4/5] bg-[#e5e7eb] rounded-sm flex items-center justify-center mb-6">
                  <span className="text-[#9ca3af] font-black text-4xl">TH</span>
                </div>
                <div className="border-l-4 border-[#e11d48] pl-4">
                  <p className="text-[#374151] italic text-sm leading-relaxed mb-3">
                    &ldquo;Nenechám tě chodit na sezení donekonečna. Chci, aby
                    sis poradil/a sám/a.&rdquo;
                  </p>
                  <div className="text-[#0d0d0d] font-bold text-sm">
                    Mgr. Tomáš Hybner
                  </div>
                  <div className="text-[#9ca3af] text-xs">
                    Zakladatel, fyzioterapeut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                Co nabízíme
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight">
                Služby, které
                <br />
                skutečně fungují.
              </h2>
            </div>
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-2 text-[#374151] font-medium text-sm border-b border-[#374151] pb-0.5 hover:text-[#e11d48] hover:border-[#e11d48] transition-colors self-start md:self-auto"
            >
              Všechny služby <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e7eb]">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white p-8 hover:bg-[#e11d48] transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-[#f7f7f5] group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-[#e11d48] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#0d0d0d] group-hover:text-white font-bold mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#374151] group-hover:text-white/80 text-sm leading-relaxed mb-5 transition-colors">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-1 text-[#e11d48] group-hover:text-white text-sm font-medium transition-colors">
                    Více info{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Jak to funguje
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight mb-10">
                3 kroky od bolesti
                <br />
                k pohybu.
              </h2>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-[#e11d48] text-white font-bold text-base px-8 py-4 rounded-sm hover:bg-[#9f1239] transition-colors group"
              >
                Začít teď — zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Vyplníš formulář",
                  desc: "Stačí pár řádků — napiš nám, co tě trápí.",
                },
                {
                  step: "02",
                  title: "Do 24 h se ozveme",
                  desc: "Zavoláme ti a domluvíme termín, který ti vyhovuje.",
                },
                {
                  step: "03",
                  title: "Konzultace zdarma",
                  desc: "Diagnostikujeme příčinu a nastavíme plán léčby šitý na míru.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="flex gap-6 bg-[#f7f7f5] p-6 rounded-sm border-l-4 border-[#e11d48]"
                >
                  <div className="text-[#e11d48] text-3xl font-black leading-none shrink-0 mt-1">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-[#0d0d0d] font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#374151] text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block bg-[#e11d48]/20 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Co říkají klienti
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Výsledky, které mluví za sebe.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm p-6 flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#e11d48] text-[#e11d48]"
                    />
                  ))}
                </div>
                <p className="text-[#d1d5db] text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#2a2a2a]">
                  <div className="w-8 h-8 bg-[#e11d48] flex items-center justify-center rounded-sm shrink-0">
                    <span className="text-white font-bold text-xs">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-[#6b7280] text-xs">{t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Časté otázky
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d0d0d] leading-tight">
              Máš otázky?
              <br />
              Máme odpovědi.
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#f7f7f5] border border-[#e5e7eb] rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#f0efed] transition-colors">
                  <span className="text-[#0d0d0d] font-semibold">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-[#e11d48] shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-[#374151] text-sm leading-relaxed border-t border-[#e5e7eb]">
                  <div className="pt-4">{faq.a}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#e11d48] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
          GO
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            První krok je zdarma.
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Zavolej nebo vyplň formulář. Do 24 hodin se ti ozveme a probereme,
            jak ti nejlépe pomůžeme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#e11d48] font-bold text-base px-8 py-4 rounded-sm hover:bg-[#f0efed] transition-colors group"
            >
              Vyplnit formulář
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+420603460433"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-medium text-base px-8 py-4 rounded-sm hover:bg-white/10 transition-colors"
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
