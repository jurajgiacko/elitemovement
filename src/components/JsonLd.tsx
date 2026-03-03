export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: "Elite Movement Physio",
    description:
      "Sportovní fyzioterapie v Praze. Léčíme příčinu, ne jen symptomy. Zkušenosti s profesionálními sportovci.",
    url: "https://www.elitemovement.cz",
    telephone: "+420603460433",
    email: "th.elitemovement@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Praha",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.0755",
      longitude: "14.4378",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "CZK",
    medicalSpecialty: "PhysicalTherapy",
    founder: {
      "@type": "Person",
      name: "Mgr. Tomáš Hybner",
      jobTitle: "Fyzioterapeut",
    },
    sameAs: ["https://www.instagram.com/elite_movement_cz"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
