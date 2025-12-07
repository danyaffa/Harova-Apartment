// FILE: /pages/seo/harova-apartment.tsx

import Head from "next/head";
import Link from "next/link";

const SITE_URL = "https://harovaapartment.com";

export default function HarovaApartmentSeoPage() {
  const title =
    "Harova Apartment – Private Holiday Rental in Jerusalem’s Jewish Quarter";
  const description =
    "Harova Apartment is a private, fully equipped holiday rental in the Jewish Quarter of Jerusalem, just a short walk from the Western Wall.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: "Harova Apartment",
    url: SITE_URL,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jerusalem",
      addressCountry: "IL",
    },
    image: [`${SITE_URL}/harova_main.jpg`],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Harova Apartment, Jerusalem holiday rental, Jewish Quarter apartment, Old City accommodation"
        />
        <link rel="canonical" href={`${SITE_URL}/seo/harova-apartment`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Harova Apartment – Jerusalem Rental" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/seo/harova-apartment`} />
        <meta property="og:site_name" content="Harova Apartment" />
        <meta property="og:image" content={`${SITE_URL}/harova_main.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Harova Apartment – Jerusalem Rental" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/harova_main.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate">
        <h1>Harova Apartment – Stay in Jerusalem’s Jewish Quarter</h1>

        <p>
          <strong>Harova Apartment</strong> is a private holiday apartment in the
          Jewish Quarter of Jerusalem’s Old City, ideal for couples or families
          who want to stay close to the Western Wall.
        </p>

        <h2>Highlights</h2>
        <ul>
          <li>Located in the heart of the Jewish Quarter.</li>
          <li>Comfortable bedroom(s) and living area.</li>
          <li>Equipped kitchen for self-catering stays.</li>
          <li>Air conditioning and Wi-Fi.</li>
        </ul>

        <p>
          For booking information, photos, and availability, please visit the{" "}
          <Link href="/">
            <a>Harova Apartment homepage</a>
          </Link>
          .
        </p>
      </main>
    </>
  );
}
