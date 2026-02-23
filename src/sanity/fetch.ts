import { client } from "./client";
import { projectId } from "./env";
import {
  siteSettingsQuery,
  servicesQuery,
  pricingQuery,
  testimonialsQuery,
  faqQuery,
  galleryQuery,
} from "./queries";
import { siteConfig } from "@/config/site";

// Check if Sanity is configured
const isSanityConfigured = !!projectId;

// Generic fetcher with fallback
async function fetchWithFallback<T>(query: string, fallback: T): Promise<T> {
  if (!isSanityConfigured) return fallback;

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    if (!data || (Array.isArray(data) && data.length === 0)) return fallback;
    return data as T;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  const fallback = {
    businessName: siteConfig.businessName,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    city: siteConfig.city,
    state: siteConfig.state,
    address: siteConfig.address,
    phone: siteConfig.phone,
    whatsapp: siteConfig.whatsapp,
    email: siteConfig.email,
    weekdayHours: siteConfig.workingHours.weekdays,
    weekendHours: siteConfig.workingHours.weekend,
    googleMapsEmbed: siteConfig.googleMapsEmbed,
    heroBg: siteConfig.heroBg,
    facebook: siteConfig.social.facebook,
    instagram: siteConfig.social.instagram,
    twitter: siteConfig.social.twitter,
    youtube: siteConfig.social.youtube,
  };
  return fetchWithFallback(siteSettingsQuery, fallback);
}

export async function getServices() {
  const fallback = siteConfig.services.map((s, i) => ({
    _id: String(s.id),
    title: s.title,
    description: s.description,
    image: s.image,
    order: i + 1,
  }));
  return fetchWithFallback(servicesQuery, fallback);
}

export async function getPricing() {
  const fallback = siteConfig.pricing.map((p, i) => ({
    _id: String(i),
    name: p.name,
    price: p.price,
    period: p.period,
    description: p.description,
    features: p.features,
    popular: p.popular,
    order: i + 1,
  }));
  return fetchWithFallback(pricingQuery, fallback);
}

export async function getTestimonials() {
  const fallback = siteConfig.testimonials.map((t, i) => ({
    _id: String(i),
    name: t.name,
    role: t.role,
    text: t.text,
    rating: t.rating,
  }));
  return fetchWithFallback(testimonialsQuery, fallback);
}

export async function getFAQ() {
  const fallback = siteConfig.faq.map((f, i) => ({
    _id: String(i),
    question: f.question,
    answer: f.answer,
    order: i + 1,
  }));
  return fetchWithFallback(faqQuery, fallback);
}

export async function getGallery() {
  const fallback = siteConfig.gallery.map((g, i) => ({
    _id: String(i),
    src: g.src,
    alt: g.alt,
    order: i + 1,
  }));
  return fetchWithFallback(galleryQuery, fallback);
}
