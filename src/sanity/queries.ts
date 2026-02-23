import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  businessName,
  tagline,
  description,
  city,
  state,
  address,
  phone,
  whatsapp,
  email,
  weekdayHours,
  weekendHours,
  googleMapsEmbed,
  "heroBg": heroBg.asset->url,
  facebook,
  instagram,
  twitter,
  youtube
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc){
  _id,
  title,
  description,
  "image": image.asset->url,
  order
}`;

export const pricingQuery = groq`*[_type == "pricing"] | order(order asc){
  _id,
  name,
  price,
  period,
  description,
  features,
  popular,
  order
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  _id,
  name,
  role,
  text,
  rating
}`;

export const faqQuery = groq`*[_type == "faq"] | order(order asc){
  _id,
  question,
  answer,
  order
}`;

export const galleryQuery = groq`*[_type == "galleryImage"] | order(order asc){
  _id,
  "src": image.asset->url,
  alt,
  order
}`;
