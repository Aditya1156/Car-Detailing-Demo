"use client";

import { motion } from "framer-motion";
import { Wrench, SmilePlus, Users, Award } from "lucide-react";
import { siteConfig } from "@/config/site";

const icons = [Wrench, SmilePlus, Users, Award];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background car image overlay */}
      <div className="absolute inset-0 bg-surface" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/stats-bg.svg')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="text-accent" size={36} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
