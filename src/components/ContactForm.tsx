"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    jmeno: "",
    prijmeni: "",
    email: "",
    telefon: "",
    zprava: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    // Simulate submission — integrate with Formspree, Resend or backend
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-[#e11d48] flex items-center justify-center rounded-sm mb-6">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-[#0d0d0d] font-black text-xl mb-3">
          Zpráva odeslána!
        </h3>
        <p className="text-[#374151] text-sm max-w-sm">
          Děkujeme. Ozveme se ti do 24 hodin. Pokud to spěchá, zavolej přímo
          na{" "}
          <a
            href="tel:+420603460433"
            className="text-[#e11d48] font-bold hover:underline"
          >
            +420 603 460 433
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="jmeno"
            className="block text-[#374151] text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Jméno *
          </label>
          <input
            id="jmeno"
            name="jmeno"
            type="text"
            required
            value={formData.jmeno}
            onChange={handleChange}
            placeholder="Jan"
            className="w-full bg-white border border-[#e5e7eb] rounded-sm px-4 py-3 text-[#0d0d0d] text-sm placeholder-[#d1d5db] focus:outline-none focus:border-[#e11d48] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="prijmeni"
            className="block text-[#374151] text-xs font-semibold uppercase tracking-wider mb-2"
          >
            Příjmení *
          </label>
          <input
            id="prijmeni"
            name="prijmeni"
            type="text"
            required
            value={formData.prijmeni}
            onChange={handleChange}
            placeholder="Novák"
            className="w-full bg-white border border-[#e5e7eb] rounded-sm px-4 py-3 text-[#0d0d0d] text-sm placeholder-[#d1d5db] focus:outline-none focus:border-[#e11d48] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[#374151] text-xs font-semibold uppercase tracking-wider mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="jan.novak@email.cz"
          className="w-full bg-white border border-[#e5e7eb] rounded-sm px-4 py-3 text-[#0d0d0d] text-sm placeholder-[#d1d5db] focus:outline-none focus:border-[#e11d48] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="telefon"
          className="block text-[#374151] text-xs font-semibold uppercase tracking-wider mb-2"
        >
          Telefon
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          value={formData.telefon}
          onChange={handleChange}
          placeholder="+420 123 456 789"
          className="w-full bg-white border border-[#e5e7eb] rounded-sm px-4 py-3 text-[#0d0d0d] text-sm placeholder-[#d1d5db] focus:outline-none focus:border-[#e11d48] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="zprava"
          className="block text-[#374151] text-xs font-semibold uppercase tracking-wider mb-2"
        >
          Co tě trápí? *
        </label>
        <textarea
          id="zprava"
          name="zprava"
          required
          rows={4}
          value={formData.zprava}
          onChange={handleChange}
          placeholder="Popiš nám krátce svůj problém — co tě bolí, jak dlouho, co jsi už zkusil/a..."
          className="w-full bg-white border border-[#e5e7eb] rounded-sm px-4 py-3 text-[#0d0d0d] text-sm placeholder-[#d1d5db] focus:outline-none focus:border-[#e11d48] transition-colors resize-none"
        />
      </div>

      <p className="text-[#9ca3af] text-xs">
        Odesláním souhlasíš se zpracováním osobních údajů pro účely odpovědi.
      </p>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#e11d48] text-white font-bold text-base px-8 py-4 rounded-sm hover:bg-[#9f1239] transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Odesílám...
          </>
        ) : (
          <>
            Odeslat — konzultace zdarma
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
