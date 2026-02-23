"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="bg-accent">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white text-xl md:text-2xl font-bold text-center md:text-left"
        >
          Want your car to shine like new again?
        </motion.h3>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="#contact"
          className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-3 rounded-lg font-semibold transition-colors text-sm whitespace-nowrap"
        >
          Make Appointment
        </motion.a>
      </div>
    </section>
  );
}
