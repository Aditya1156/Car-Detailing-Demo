"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Our Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            From quick washes to full ceramic protection — pick the package that
            suits your car and budget.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {siteConfig.pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-accent border-2 border-accent"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? "text-white/80" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "text-white" : "text-white"
                  }`}
                >
                  &#8377;{plan.price}
                </span>
                <span
                  className={`text-sm ml-2 ${
                    plan.popular ? "text-white/70" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/90" : "text-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                  plan.popular
                    ? "bg-white text-accent hover:bg-white/90"
                    : "bg-accent hover:bg-accent-dark text-white"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
