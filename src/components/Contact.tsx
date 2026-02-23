"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Visit Us Today
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src={siteConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </motion.div>

          {/* Contact info + form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <MapPin className="text-accent mb-3" size={24} />
                <h4 className="text-white font-semibold mb-1">Address</h4>
                <p className="text-muted text-sm">{siteConfig.address}</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Phone className="text-accent mb-3" size={24} />
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <p className="text-muted text-sm">{siteConfig.phone}</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Mail className="text-accent mb-3" size={24} />
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-muted text-sm">{siteConfig.email}</p>
              </div>
              <div className="glass-card rounded-xl p-6">
                <Clock className="text-accent mb-3" size={24} />
                <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                <p className="text-muted text-sm">{siteConfig.workingHours.weekdays}</p>
                <p className="text-muted text-sm">{siteConfig.workingHours.weekend}</p>
              </div>
            </div>

            {/* Contact form */}
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const message = formData.get("message");
                const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm ${name}. ${message}`)}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  required
                  className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={4}
                required
                className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-white placeholder-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-semibold transition-colors text-sm"
              >
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
