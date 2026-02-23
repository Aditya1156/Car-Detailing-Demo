import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function generateSiteMetadata(): Metadata {
  const { businessName, city, description, website } = siteConfig;

  return {
    title: {
      default: `${businessName} | Premium Car Detailing in ${city}`,
      template: `%s | ${businessName}`,
    },
    description: `${description} Located in ${city}.`,
    keywords: [
      "car detailing",
      "car wash",
      "ceramic coating",
      "paint correction",
      "interior detailing",
      "auto detailing",
      `car detailing ${city}`,
      `car wash ${city}`,
      `ceramic coating ${city}`,
      businessName,
    ],
    authors: [{ name: businessName }],
    openGraph: {
      title: `${businessName} | Premium Car Detailing in ${city}`,
      description,
      url: website,
      siteName: businessName,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${businessName} | Premium Car Detailing in ${city}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateLocalBusinessSchema() {
  const { businessName, description, address, phone, email, website, workingHours } =
    siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: businessName,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
    },
    telephone: phone,
    email,
    url: website,
    openingHours: [workingHours.weekdays, workingHours.weekend],
    priceRange: "$$",
  };
}
