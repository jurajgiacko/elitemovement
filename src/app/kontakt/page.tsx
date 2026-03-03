import type { Metadata } from "next";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt & Rezervace | Elite Movement Physio Praha",
  description:
    "Rezervuj si bezplatnou konzultaci. Zavolej na +420 603 460 433 nebo vyplň formulář. Fyzioterapie Praha — odpovídáme do 24 hodin.",
  keywords: [
    "fyzioterapie Praha kontakt",
    "rezervace fyzioterapie Praha",
    "Elite Movement kontakt",
    "fyzioterapeut Praha telefon",
  ],
};

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 603 460 433",
    href: "tel:+420603460433",
    desc: "Volejte v pracovní dny 8:00–18:00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "th.elitemovement@gmail.com",
    href: "mailto:th.elitemovement@gmail.com",
    desc: "Odpovídáme do 24 hodin",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@elite_movement_cz",
    href: "https://www.instagram.com/elite_movement_cz",
    desc: "Sleduj nás pro tipy a novinky",
  },
  {
    icon: MapPin,
    label: "Lokace",
    value: "Praha",
    href: undefined,
    desc: "Aktuální adresa zasíláme při objednání",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#09090f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[#22c55e] text-xs font-medium tracking-widest uppercase mb-4">
              Kontakt & Rezervace
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              První krok
              <br />
              <span className="gradient-text">je zdarma.</span>
            </h1>
            <p className="text-[#6b7280] text-lg leading-relaxed max-w-xl">
              Vyplň formulář nebo zavolej. Ozveme se ti do 24 hodin — a
              probereme, jak ti nejlíp pomůžeme.
            </p>

            {/* Notice about location */}
            <div className="mt-6 flex gap-3 bg-[#1a1a24] border border-[#22c55e]/20 rounded-sm p-4">
              <MapPin className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
              <div>
                <div className="text-[#e5e7eb] text-sm font-medium mb-1">
                  Poznámka k adrese
                </div>
                <div className="text-[#6b7280] text-sm">
                  Přesnou adresu ordinace ti pošleme při potvrzení termínu.
                  Pracujeme v Praze — dostupné MHD.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-[#09090f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111118] border border-[#1f2937] rounded-sm p-8 md:p-10">
                <h2 className="text-2xl font-black text-white mb-2">
                  Napište nám
                </h2>
                <p className="text-[#6b7280] text-sm mb-8">
                  Odpovídáme do 24 hodin. Konzultace je bezplatná.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Quick call CTA */}
              <a
                href="tel:+420603460433"
                className="block bg-[#22c55e] rounded-sm p-6 hover:bg-[#4ade80] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-black" />
                  <span className="text-black font-bold text-lg">
                    Raději zavolej
                  </span>
                </div>
                <div className="text-black/80 text-sm mb-3">
                  Nejrychlejší způsob — rovnou probereme, co tě trápí.
                </div>
                <div className="text-black font-black text-2xl">
                  +420 603 460 433
                </div>
              </a>

              {/* Contact cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="bg-[#111118] border border-[#1f2937] rounded-sm p-5 hover:border-[#22c55e]/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#22c55e]" />
                      </div>
                      <div>
                        <div className="text-[#6b7280] text-xs uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-white font-medium text-sm mb-1">
                          {info.value}
                        </div>
                        <div className="text-[#6b7280] text-xs">{info.desc}</div>
                      </div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={
                      info.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* Hours */}
              <div className="bg-[#111118] border border-[#1f2937] rounded-sm p-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-sm bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#22c55e]" />
                  </div>
                  <div>
                    <div className="text-[#6b7280] text-xs uppercase tracking-wider mb-2">
                      Ordinační hodiny
                    </div>
                    <div className="space-y-1">
                      {[
                        { day: "Po – Pá", time: "8:00 – 19:00" },
                        { day: "Sobota", time: "9:00 – 14:00 (dle dohody)" },
                        { day: "Neděle", time: "Zavřeno" },
                      ].map((row) => (
                        <div
                          key={row.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-[#6b7280]">{row.day}</span>
                          <span className="text-white">{row.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
