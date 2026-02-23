"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function AboutUs() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src={about.image}
              alt="About our team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label mb-6">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {about.title}
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              {about.description}
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{item.value}</p>
                  <p className="text-muted text-sm mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
