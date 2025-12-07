// FILE: /pages/api/ai-profile.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Apartment", "LodgingBusiness"],
    name: "Harova Apartment",
    alternateName: "Harova Old City Apartment",
    url: "https://harovaapartment.com/",
    description:
      "Harova Apartment is a private holiday rental in Jerusalem's Jewish Quarter, offering a comfortable stay within walking distance of the Western Wall.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jerusalem",
      addressCountry: "IL",
    },
    image: ["https://harovaapartment.com/harova_main.jpg"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
      { "@type": "LocationFeatureSpecification", name: "Equipped kitchen", value: true },
    ],
    containsPlace: {
      "@type": "Place",
      name: "Old City of Jerusalem – Jewish Quarter",
    },
    sameAs: [
      "https://harovaapartment.com/",
      // Add Airbnb / booking URL here if public
    ],
  };

  res.setHeader("Content-Type", "application/ld+json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.status(200).json(jsonLd);
}
