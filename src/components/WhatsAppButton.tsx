"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi! I'd like to know about your car detailing services.")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-white" size={26} />
    </motion.a>
  );
}
