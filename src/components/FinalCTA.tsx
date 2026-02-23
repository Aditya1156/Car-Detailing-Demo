"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-background to-accent/20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="text-accent mx-auto mb-6" size={40} />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Give Your Car the Shine It Deserves.
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Experience the difference of professional car detailing. Book your appointment
            today and let us transform your vehicle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-accent text-white px-10 py-4 rounded-lg font-semibold transition-colors"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
