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

  // Images
  heroBg:
    "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80&auto=format",
  statsBg:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80&auto=format",

  stats: [
    { value: 15000, suffix: "+", label: "Cars Detailed" },
    { value: 8500, suffix: "+", label: "Happy Customers" },
    { value: 50, suffix: "+", label: "Expert Workers" },
    { value: 10, suffix: "+", label: "Years Experience" },
  ],
  services: [
    {
      id: 1,
      title: "Exterior Hand Wash & Wax",
      description:
        "Thorough hand wash with premium wax finish to restore your car's showroom shine and protect the paint.",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80&auto=format",
    },
    {
      id: 2,
      title: "Interior Deep Cleaning",
      description:
        "Complete interior detailing including seats, dashboard, carpets, and air vents for a fresh cabin experience.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format",
    },
    {
      id: 3,
      title: "Paint Correction",
      description:
        "Professional paint correction to remove swirl marks, scratches, and oxidation for a flawless finish.",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&auto=format",
    },
    {
      id: 4,
      title: "Ceramic Coating",
      description:
        "Long-lasting ceramic protection that provides superior gloss, hydrophobic properties, and UV resistance.",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80&auto=format",
    },
    {
      id: 5,
      title: "Engine Bay Detailing",
      description:
        "Professional engine cleaning and dressing to keep your engine bay looking brand new and running cool.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80&auto=format",
    },
    {
      id: 6,
      title: "Headlight Restoration",
      description:
        "Restore clarity to foggy, yellowed headlights for improved visibility and a refreshed appearance.",
      image:
        "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&q=80&auto=format",
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
  pricing: [
    {
      name: "Basic Wash",
      price: "499",
      currency: "INR",
      period: "per wash",
      description: "Quick exterior refresh for your daily driver",
      features: [
        "Exterior Hand Wash",
        "Tire & Rim Cleaning",
        "Window Cleaning",
        "Dashboard Wipe",
        "Air Freshener",
      ],
      popular: false,
    },
    {
      name: "Premium Detail",
      price: "1,999",
      currency: "INR",
      period: "per session",
      description: "Complete interior & exterior transformation",
      features: [
        "Everything in Basic",
        "Interior Deep Cleaning",
        "Leather Conditioning",
        "Engine Bay Cleaning",
        "Paint Sealant",
        "Headlight Polish",
      ],
      popular: true,
    },
    {
      name: "Ceramic Shield",
      price: "8,999",
      currency: "INR",
      period: "lasts 2 years",
      description: "Ultimate protection with ceramic coating",
      features: [
        "Everything in Premium",
        "Paint Correction",
        "9H Ceramic Coating",
        "Hydrophobic Protection",
        "UV & Scratch Resistance",
        "2-Year Warranty",
        "Free Maintenance Wash",
      ],
      popular: false,
    },
  ],
  beforeAfter: [
    {
      before:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80&auto=format",
      after:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&auto=format",
      label: "Exterior Detailing",
    },
    {
      before:
        "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80&auto=format",
      after:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&q=80&auto=format",
      label: "Interior Restoration",
    },
  ],
  about: {
    title: "About A1 Car Detailing",
    description:
      "Founded with a passion for automotive excellence, A1 Car Detailing has been transforming vehicles across Bangalore for over a decade. Our team of certified professionals uses only premium products and cutting-edge techniques to deliver results that exceed expectations.",
    highlights: [
      { label: "Founded", value: "2014" },
      { label: "Team Size", value: "50+" },
      { label: "Cars Serviced", value: "15,000+" },
      { label: "5-Star Reviews", value: "4,200+" },
    ],
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80&auto=format",
  },
  faq: [
    {
      question: "How long does a full detail take?",
      answer:
        "A basic wash takes about 45 minutes. A premium detail takes 3-4 hours, and ceramic coating requires 1-2 days for proper curing.",
    },
    {
      question: "How long does ceramic coating last?",
      answer:
        "Our 9H ceramic coating lasts 2-3 years with proper maintenance. We also offer a complimentary maintenance wash every 3 months.",
    },
    {
      question: "Do you offer pickup and drop service?",
      answer:
        "Yes! We offer free pickup and drop within a 10km radius of our studio for Premium Detail and Ceramic Shield packages.",
    },
    {
      question: "What products do you use?",
      answer:
        "We exclusively use premium detailing products from brands like Gtechniq, CarPro, and Koch Chemie — trusted globally by professional detailers.",
    },
    {
      question: "Can I wait while my car is being detailed?",
      answer:
        "Absolutely! Our studio has a comfortable waiting lounge with Wi-Fi, refreshments, and a live view of your car being detailed.",
    },
    {
      question: "Do you work on luxury and exotic cars?",
      answer:
        "Yes, we specialize in luxury, exotic, and high-end vehicles. Our technicians are trained to handle all makes including BMW, Mercedes, Audi, Porsche, and more.",
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80&auto=format",
      alt: "Black luxury car front view",
    },
    {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&q=80&auto=format",
      alt: "Red sports car detailing",
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80&auto=format",
      alt: "BMW front grille close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&q=80&auto=format",
      alt: "Classic car paint finish",
    },
    {
      src: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&q=80&auto=format",
      alt: "Luxury car interior leather",
    },
    {
      src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&q=80&auto=format",
      alt: "Sports car side profile",
    },
    {
      src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&q=80&auto=format",
      alt: "Porsche dark shot",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
