"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={siteConfig.heroBg}
          alt="Premium car detailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label mb-8"
          >
            Car Detailing Service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            The Ultimate{" "}
            <span className="text-accent">Car Detailing</span>{" "}
            Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            At {siteConfig.businessName}, we deliver reliable, efficient detailing for
            personal cars and fleets, restoring showroom shine, extending vehicle life, and
            protecting your investment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
