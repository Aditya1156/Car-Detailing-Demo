"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Welcome to {siteConfig.businessName}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Premium Car Detailing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            From deep interior cleaning to long-lasting ceramic coating, we restore and
            protect your vehicle with precision, care, and a commitment to perfection.
          </motion.p>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 md:h-80 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-colors duration-300" />

              {/* Number */}
              <div className="absolute top-4 left-5">
                <span className="text-4xl font-bold text-white/20 group-hover:text-accent/40 transition-colors duration-300">
                  {String(service.id).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
