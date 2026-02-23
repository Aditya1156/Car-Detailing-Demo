"use client";

import { motion } from "framer-motion";
import { Users, Settings, BadgeDollarSign, Headphones } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Settings,
  BadgeDollarSign,
  HeadphonesIcon: Headphones,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Trusted & Affordable
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Choose Our Car Detailing?
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 md:p-8 hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
