# Elite Movement Physio — Website

Sportovní fyzioterapie Praha | [elitemovement.cz](https://www.elitemovement.cz)

## Stack

- **Next.js 15** — App Router, SSG (Static Site Generation)
- **TypeScript** — type safety
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations (ready to use)
- **Lucide React** — icons

## Stránky

| Route | Stránka |
|-------|---------|
| `/` | Homepage — Hero, USP, Služby, O nás, Recenzie, FAQ, CTA |
| `/sluzby` | Přehled všech služeb s detaily |
| `/o-nas` | Mgr. Tomáš Hybner, filozofie, příběh |
| `/kontakt` | Formulář, telefon, hodiny |

## SEO

- `next/metadata` na každé stránce
- `sitemap.xml` generovaný automaticky
- `robots.txt` 
- **JSON-LD** schema: `MedicalBusiness` + `LocalBusiness`
- Primární klíčová slova: *sportovní fyzioterapie Praha*, *fyzioterapeut Praha*

## Lokální vývoj

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000)

## Deployment — Vercel

1. Jdi na [vercel.com](https://vercel.com) → Import Project
2. Vyber repo `jurajgiacko/elitemovement`
3. Klikni **Deploy** — žádná konfigurace není potřeba

Vercel automaticky deployne každý push na `main`.

## Kontakt

Mgr. Tomáš Hybner — [th.elitemovement@gmail.com](mailto:th.elitemovement@gmail.com)
