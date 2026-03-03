import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elite Movement Physio | Sportovní fyzioterapie Praha",
    template: "%s | Elite Movement Physio Praha",
  },
  description:
    "Sportovní fyzioterapie v Praze. Léčíme příčinu, ne jen symptomy. Zkušenosti s profesionálními sportovci. Konzultace zdarma — volejte +420 603 460 433.",
  keywords: [
    "sportovní fyzioterapie Praha",
    "fyzioterapie Praha",
    "fyzioterapeut Praha",
    "fyzio pro sportovce Praha",
    "manuální terapie Praha",
    "sportovní rehabilitace Praha",
    "Elite Movement fyzio",
    "Tomáš Hybner fyzioterapeut",
  ],
  authors: [{ name: "Mgr. Tomáš Hybner" }],
  creator: "Elite Movement Physio",
  metadataBase: new URL("https://www.elitemovement.cz"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.elitemovement.cz",
    siteName: "Elite Movement Physio",
    title: "Elite Movement Physio | Sportovní fyzioterapie Praha",
    description:
      "Sportovní fyzioterapie v Praze. Léčíme příčinu, ne jen symptomy. Zkušenosti s profesionálními sportovci.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite Movement Physio Praha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Movement Physio | Sportovní fyzioterapie Praha",
    description:
      "Sportovní fyzioterapie v Praze. Léčíme příčinu, ne jen symptomy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geist.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
