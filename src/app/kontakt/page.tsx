import type { Metadata } from "next";
import { Phone, Mail, Instagram, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt & Rezervace | Elite Movement Physio Praha",
  description:
    "Rezervuj si bezplatnou konzultaci. Zavolej na +420 603 460 433 nebo vyplň formulář. Fyzioterapie Praha — odpovídáme do 24 hodin.",
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
    desc: "Přesnou adresu zasíláme při potvrzení termínu",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#f7f7f5] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#e11d48]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#e11d48]/10 text-[#e11d48] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
              Kontakt & Rezervace
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0d0d0d] leading-tight mb-6">
              První krok
              <br />
              <span className="text-[#e11d48]">je zdarma.</span>
            </h1>
            <p className="text-[#374151] text-lg leading-relaxed max-w-xl mb-6">
              Vyplň formulář nebo zavolej. Ozveme se ti do 24 hodin a
              probereme, jak ti nejlíp pomůžeme.
            </p>

            {/* Address notice */}
            <div className="flex gap-3 bg-white border border-[#e5e7eb] rounded-sm p-4 shadow-sm">
              <div className="w-8 h-8 bg-[#e11d48] flex items-center justify-center rounded-sm shrink-0">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[#0d0d0d] text-sm font-semibold mb-0.5">
                  Poznámka k adrese
                </div>
                <div className="text-[#374151] text-sm">
                  Přesnou adresu ordinace ti pošleme při potvrzení termínu.
                  Pracujeme v Praze — dostupné MHD.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#f7f7f5] border border-[#e5e7eb] rounded-sm p-8 md:p-10">
                <h2 className="text-2xl font-black text-[#0d0d0d] mb-2">
                  Napište nám
                </h2>
                <p className="text-[#374151] text-sm mb-8">
                  Odpovídáme do 24 hodin. Konzultace je bezplatná.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {/* Phone CTA */}
              <a
                href="tel:+420603460433"
                className="block bg-[#e11d48] rounded-sm p-6 hover:bg-[#9f1239] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-bold text-lg">
                    Raději zavolej
                  </span>
                </div>
                <div className="text-white/80 text-sm mb-3">
                  Nejrychlejší způsob — rovnou probereme, co tě trápí.
                </div>
                <div className="text-white font-black text-2xl">
                  +420 603 460 433
                </div>
              </a>

              {/* Contact cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="bg-[#f7f7f5] border border-[#e5e7eb] rounded-sm p-5 hover:border-[#e11d48]/30 hover:bg-white transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-[#e11d48] flex items-center justify-center rounded-sm shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-[#9ca3af] text-xs uppercase tracking-wider mb-1">
                          {info.label}
                        </div>
                        <div className="text-[#0d0d0d] font-semibold text-sm mb-0.5">
                          {info.value}
                        </div>
                        <div className="text-[#9ca3af] text-xs">{info.desc}</div>
                      </div>
                    </div>
                  </div>
                );

                return info.href ? (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
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
              <div className="bg-[#f7f7f5] border border-[#e5e7eb] rounded-sm p-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#e11d48] flex items-center justify-center rounded-sm shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#9ca3af] text-xs uppercase tracking-wider mb-3">
                      Ordinační hodiny
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { day: "Po – Pá", time: "8:00 – 19:00" },
                        { day: "Sobota", time: "9:00 – 14:00 (dle dohody)" },
                        { day: "Neděle", time: "Zavřeno" },
                      ].map((row) => (
                        <div
                          key={row.day}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-[#374151]">{row.day}</span>
                          <span className="text-[#0d0d0d] font-medium">
                            {row.time}
                          </span>
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
