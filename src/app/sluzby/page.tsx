import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Target,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle2,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Služby | Sportovní fyzioterapie Praha",
  description:
    "Sportovní rehabilitace, manuální terapie, dry needling, diagnostika pohybu a prevence zranění v Praze. Fyzioterapie pro sportovce i aktivní jedince.",
  keywords: [
    "sportovní fyzioterapie Praha",
    "manuální terapie Praha",
    "dry needling Praha",
    "sportovní rehabilitace Praha",
    "fyzioterapie pro sportovce",
    "diagnostika pohybu Praha",
    "prevence zranění Praha",
  ],
};

const services = [
  {
    id: "sportovni-rehabilitace",
    icon: Zap,
    title: "Sportovní rehabilitace",
    tagline: "Návrat k výkonu — rychle a natrvalo.",
    description:
      "Sportovní zranění nejsou jen fyzická bolest — jsou to vykradené tréninky, přerušené sezóny a pocit, že tě tělo brzdí. Naším cílem je dostat tě zpět do plného výkonu co nejrychleji, bez zkratků, které by problém vrátily.",
    benefits: [
      "Individuální rehabilitační program šitý na míru tvému sportu",
      "Postupná progrese zátěže — žádné zbytečné pauzy",
      "Koordinace s tvým trenérem nebo lékařem",
      "Cvičební plán pro domácí trénink mezi sezeními",
    ],
    ideal: "Sportovci po zranění, operaci nebo s chronickými obtížemi.",
    seoKeyword: "sportovní rehabilitace Praha",
  },
  {
    id: "manualni-terapie",
    icon: Target,
    title: "Manuální terapie",
    tagline: "Ruční práce, která mluví za sebe.",
    description:
      "Manuální terapie je základ naší práce. Jde o přímý kontakt — prsty, dlaně, tlak a pohyb — zaměřený přesně na místo, kde vzniká problém. Mobilizace kloubů, měkké techniky, uvolnění fascií. Bez přístrojů, bez zkratek.",
    benefits: [
      "Přesná diagnostika pohybových dysfunkcí",
      "Mobilizace páteře a periferních kloubů",
      "Techniky měkkých tkání a fascií",
      "Edukace — naučíme tě, jak problému předcházet",
    ],
    ideal: "Bolesti zad, krku, kloubů, omezená pohyblivost.",
    seoKeyword: "manuální terapie Praha",
  },
  {
    id: "dry-needling",
    icon: Shield,
    title: "Dry Needling",
    tagline: "Přesná terapie jehlou pro uvolnění svalového napětí.",
    description:
      "Dry needling využívá tenkou jehlu k přesné stimulaci trigger pointů — zatuhlých uzlíků ve svalu, které způsobují bolest a omezují pohyb. Efekt je rychlý a trvalý. Kombinujeme ho vždy s manuální terapií pro maximální výsledek.",
    benefits: [
      "Rychlé uvolnění chronického svalového napětí",
      "Odstranění trigger pointů způsobujících bolest",
      "Zlepšení krevního zásobení tkání",
      "Bezbolestný a bezpečný postup",
    ],
    ideal: "Chronické svalové napětí, trigger pointy, migrény ze svalů.",
    seoKeyword: "dry needling Praha",
  },
  {
    id: "diagnostika",
    icon: Clock,
    title: "Diagnostika pohybu",
    tagline: "Nejdřív pochopit — pak léčit.",
    description:
      "Bolest je jen signál. Skutečná příčina může být úplně jinde. Komplexní diagnostika pohybových vzorů nám umožní přesně identifikovat, co stojí za tvými obtížemi — ať je to svalová dysbalance, špatná stereotyp pohybu nebo strukturální problém.",
    benefits: [
      "Kompletní pohybová analýza",
      "Postura a svalové dysbalance",
      "Funkční testy a screening",
      "Jasný plán léčby po diagnostice",
    ],
    ideal: "Nevysvětlitelné bolesti, opakující se zranění, prevence.",
    seoKeyword: "diagnostika pohybu Praha fyzioterapeut",
  },
  {
    id: "prevence",
    icon: Award,
    title: "Prevence zranění",
    tagline: "Nejlepší zranění je to, ke kterému nikdy nedojde.",
    description:
      "Profesionální sportovci vědí, že prevence je levnější než léčba. Pravidelná fyzioterapeutická péče odhalí rizikové vzorce dřív, než se projeví jako zranění — a udrží tě v tréninku bez přerušení.",
    benefits: [
      "Screening rizikových faktorů",
      "Cvičení zaměřené na slabé články",
      "Pravidelný monitoring pohybových vzorů",
      "Doporučení pro tréninkový plán",
    ],
    ideal: "Aktivní sportovci, kteří chtějí trénovat bez přerušení.",
    seoKeyword: "prevence sportovních zranění Praha fyzio",
  },
  {
    id: "cvicebni-plan",
    icon: Users,
    title: "Individuální cvičební plán",
    tagline: "Efekt terapie musí fungovat i doma.",
    description:
      "Fyzioterapie nefunguje jen v ordinaci. Domácí cvičení je nezbytnou součástí léčby — ale musí být přesné, progresivní a šité na míru tobě. Dostaneš plán s videi, vysvětlivkami a konzultací, kdykoli si nebudeš jistý/á.",
    benefits: [
      "Přesně navržený program pro tvůj problém",
      "Video demonstrace každého cviku",
      "Pravidelný update plánu podle progresu",
      "Podpora mezi sezeními",
    ],
    ideal: "Každý klient — cvičební plán je součástí každé terapie.",
    seoKeyword: "fyzioterapeutický cvičební plán Praha",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#09090f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Naše služby
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Každá metoda má
              <br />
              <span className="gradient-text">svůj důvod.</span>
            </h1>
            <p className="text-[#6b7280] text-lg leading-relaxed max-w-xl">
              Nevybíráme náhodně. Na základě diagnostiky zvolíme přesně tu
              kombinaci metod, která funguje pro tvůj konkrétní problém.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-[#111118] border border-[#1f2937] rounded-sm overflow-hidden scroll-mt-24"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: Header */}
                    <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1f2937] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#22c55e]" />
                          </div>
                          <span className="text-[#6b7280] text-xs font-medium tracking-widest uppercase">
                            0{index + 1}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                          {service.title}
                        </h2>
                        <p className="text-[#22c55e] text-sm font-medium italic mb-4">
                          {service.tagline}
                        </p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-[#1f2937]">
                        <div className="text-[#6b7280] text-xs mb-1 uppercase tracking-wider">
                          Ideální pro
                        </div>
                        <div className="text-[#e5e7eb] text-sm">
                          {service.ideal}
                        </div>
                      </div>
                    </div>

                    {/* Right: Benefits */}
                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-6">
                          Co získáš
                        </div>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                              <span className="text-[#e5e7eb] text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Link
                          href="/kontakt"
                          className="inline-flex items-center gap-2 bg-[#22c55e] text-black font-bold text-sm px-6 py-3 rounded-sm hover:bg-[#4ade80] transition-colors group"
                        >
                          Rezervovat konzultaci
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#111118] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22c55e]/6 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nejsi si jistý/á,
            <br />
            <span className="gradient-text">která služba je pro tebe?</span>
          </h2>
          <p className="text-[#6b7280] text-lg mb-10 max-w-xl mx-auto">
            Zavolej nebo napiš. Probereme tvůj problém a doporučíme, kde
            začít. Bez závazku, bez poplatku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-[#22c55e] text-black font-bold text-base px-8 py-4 rounded-sm hover:bg-[#4ade80] transition-all group"
            >
              Kontaktovat nás
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
