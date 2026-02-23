"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-white font-semibold text-sm md:text-base pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted text-sm leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
