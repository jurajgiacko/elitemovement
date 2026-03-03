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
      "Sportovní zranění nejsou jen fyzická bolest — jsou to vykradené tréninky, přerušené sezóny a pocit, že tě tělo brzdí. Naším cílem je dostat tě zpět do plného výkonu co nejrychleji, bez zkratek, které by problém vrátily.",
    benefits: [
      "Individuální rehabilitační program šitý na míru tvému sportu",
      "Postupná progrese zátěže — žádné zbytečné pauzy",
      "Koordinace s tvým trenérem nebo lékařem",
      "Cvičební plán pro domácí trénink mezi sezeními",
    ],
    ideal: "Sportovci po zranění, operaci nebo s chronickými obtížemi.",
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
  },
  {
    id: "diagnostika",
    icon: Clock,
    title: "Diagnostika pohybu",
    tagline: "Nejdřív pochopit — pak léčit.",
    description:
      "Bolest je jen signál. Skutečná příčina může být úplně jinde. Komplexní diagnostika pohybových vzorů nám umožní přesně identifikovat, co stojí za tvými obtížemi.",
    benefits: [
      "Kompletní pohybová analýza",
      "Postura a svalové dysbalance",
      "Funkční testy a screening",
      "Jasný plán léčby po diagnostice",
    ],
    ideal: "Nevysvětlitelné bolesti, opakující se zranění, prevence.",
  },
  {
    id: "prevence",
    icon: Award,
    title: "Prevence zranění",
    tagline: "Nejlepší zranění je to, ke kterému nikdy nedojde.",
    description:
      "Profesionální sportovci vědí, že prevence je levnější než léčba. Pravidelná fyzioterapeutická péče odhalí rizikové vzorce dřív, než se projeví jako zranění.",
    benefits: [
      "Screening rizikových faktorů",
      "Cvičení zaměřené na slabé články",
      "Pravidelný monitoring pohybových vzorů",
      "Doporučení pro tréninkový plán",
    ],
    ideal: "Aktivní sportovci, kteří chtějí trénovat bez přerušení.",
  },
  {
    id: "cvicebni-plan",
    icon: Users,
    title: "Individuální cvičební plán",
    tagline: "Efekt terapie musí fungovat i doma.",
    description:
      "Fyzioterapie nefunguje jen v ordinaci. Domácí cvičení je nezbytnou součástí léčby — ale musí být přesné, progresivní a šité na míru tobě.",
    benefits: [
      "Přesně navržený program pro tvůj problém",
      "Video demonstrace každého cviku",
      "Pravidelný update plánu podle progresu",
      "Podpora mezi sezeními",
    ],
    ideal: "Každý klient — cvičební plán je součástí každé terapie.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#f7f7f5] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e11d48]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black text-[#e11d48]/[0.04] leading-none select-none pointer-events-none">
          FYZIO
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              Naše služby
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d0d0d] leading-tight mb-6">
              Každá metoda má
              <br />
              svůj důvod.
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed max-w-xl">
              Nevybíráme náhodně. Na základě diagnostiky zvolíme přesně tu
              kombinaci metod, která funguje pro tvůj konkrétní problém.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="border border-[#e5e7eb] rounded-sm overflow-hidden scroll-mt-24"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left */}
                    <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#e5e7eb] bg-[#f7f7f5] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-[#e11d48] flex items-center justify-center rounded-sm">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-[#9ca3af] text-xs font-bold tracking-widest">
                            0{index + 1}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#0d0d0d] mb-2">
                          {service.title}
                        </h2>
                        <p className="text-[#e11d48] text-sm font-medium italic mb-4">
                          {service.tagline}
                        </p>
                        <p className="text-[#374151] text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
                        <div className="text-[#9ca3af] text-xs mb-1 uppercase tracking-wider">
                          Ideální pro
                        </div>
                        <div className="text-[#374151] text-sm">
                          {service.ideal}
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="md:col-span-3 p-8 md:p-10 bg-white flex flex-col justify-between">
                      <div>
                        <div className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
                          Co získáš
                        </div>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
                              <span className="text-[#374151] text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-8">
                        <Link
                          href="/kontakt"
                          className="inline-flex items-center gap-2 bg-[#e11d48] text-white font-bold text-sm px-6 py-3 rounded-sm hover:bg-[#9f1239] transition-colors group"
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
      <section className="py-20 md:py-28 bg-[#e11d48] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[18vw] font-black text-white/5 leading-none select-none pointer-events-none">
          FYZIO
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Nejsi si jistý/á,
            <br />
            která služba je pro tebe?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Zavolej nebo napiš. Probereme tvůj problém a doporučíme, kde
            začít. Bez závazku, bez poplatku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#e11d48] font-bold text-base px-8 py-4 rounded-sm hover:bg-[#f0efed] transition-colors group"
            >
              Kontaktovat nás
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
