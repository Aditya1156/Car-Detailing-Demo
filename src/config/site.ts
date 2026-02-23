export const siteConfig = {
  businessName: "A1 Car Detailing",
  tagline: "Premium Auto Care Studio",
  description:
    "Professional car wash, ceramic coating, and interior detailing services. We restore and protect your vehicle with precision, care, and a commitment to perfection.",
  city: "Bangalore",
  state: "Karnataka",
  address: "123 Auto Care Street, Bangalore, Karnataka 560001",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "info@a1cardetailing.com",
  website: "https://a1cardetailing.com",
  workingHours: {
    weekdays: "Monday - Saturday: 8:00 AM - 7:00 PM",
    weekend: "Sunday: 9:00 AM - 5:00 PM",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5966969934095!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890",
  stats: [
    { value: "15000+", label: "Cars Detailed" },
    { value: "8500+", label: "Happy Customers" },
    { value: "50+", label: "Expert Workers" },
    { value: "10+", label: "Years Experience" },
  ],
  services: [
    {
      id: 1,
      title: "Exterior Hand Wash & Wax",
      description:
        "Thorough hand wash with premium wax finish to restore your car's showroom shine and protect the paint.",
      image: "/images/services/exterior-wash.svg",
    },
    {
      id: 2,
      title: "Interior Deep Cleaning",
      description:
        "Complete interior detailing including seats, dashboard, carpets, and air vents for a fresh cabin experience.",
      image: "/images/services/interior-cleaning.svg",
    },
    {
      id: 3,
      title: "Paint Correction",
      description:
        "Professional paint correction to remove swirl marks, scratches, and oxidation for a flawless finish.",
      image: "/images/services/paint-correction.svg",
    },
    {
      id: 4,
      title: "Ceramic Coating",
      description:
        "Long-lasting ceramic protection that provides superior gloss, hydrophobic properties, and UV resistance.",
      image: "/images/services/ceramic-coating.svg",
    },
    {
      id: 5,
      title: "Engine Bay Detailing",
      description:
        "Professional engine cleaning and dressing to keep your engine bay looking brand new and running cool.",
      image: "/images/services/engine-detailing.svg",
    },
    {
      id: 6,
      title: "Headlight Restoration",
      description:
        "Restore clarity to foggy, yellowed headlights for improved visibility and a refreshed appearance.",
      image: "/images/services/headlight-restoration.svg",
    },
  ],
  whyChooseUs: [
    {
      title: "Expert Technicians",
      description:
        "Our detailers are skilled professionals with years of experience in premium car care.",
      icon: "Users",
    },
    {
      title: "Tailored Packages",
      description:
        "Detailing options customized to your car's condition and your preferences.",
      icon: "Settings",
    },
    {
      title: "Affordable Pricing",
      description:
        "Competitive rates with no hidden fees — quality service that fits your budget.",
      icon: "BadgeDollarSign",
    },
    {
      title: "Aftercare Support",
      description:
        "We provide post-service tips and care advice to keep your car looking sharp.",
      icon: "HeadphonesIcon",
    },
  ],
  testimonials: [
    {
      name: "Rahul Sharma",
      role: "BMW Owner",
      text: "Absolutely incredible service! My BMW looks brand new after the ceramic coating. The attention to detail is unmatched.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Mercedes Owner",
      text: "Best car detailing in Bangalore. The interior deep cleaning was thorough and my car smells amazing now.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "Audi Owner",
      text: "Professional team, premium products, and outstanding results. I won't go anywhere else for car care.",
      rating: 5,
    },
  ],
  gallery: [
    { src: "/images/gallery/car-1.svg", alt: "Luxury car detailing" },
    { src: "/images/gallery/car-2.svg", alt: "Ceramic coating finish" },
    { src: "/images/gallery/car-3.svg", alt: "Interior detailing" },
    { src: "/images/gallery/car-4.svg", alt: "Paint correction results" },
    { src: "/images/gallery/car-5.svg", alt: "Engine bay cleaning" },
    { src: "/images/gallery/car-6.svg", alt: "Exterior hand wash" },
  ],
};

export type SiteConfig = typeof siteConfig;
