"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-accent text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="font-medium">
            Premium Auto Care Services in {siteConfig.city}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail size={14} />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-background/80 backdrop-blur-sm"
        } border-b border-card-border`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A1</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              {siteConfig.businessName}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden md:inline-flex bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Book Appointment
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full bg-surface z-50 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A1</span>
                  </div>
                  <span className="text-white font-bold">
                    {siteConfig.businessName}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-1"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-1 mb-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      activeSection === link.href
                        ? "text-white bg-accent/10 border-l-2 border-accent"
                        : "text-muted hover:text-white hover:bg-card"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-card-border pt-6 space-y-4">
                <h4 className="text-accent font-semibold text-sm">
                  Our Services
                </h4>
                {siteConfig.services.map((s) => (
                  <p key={s.id} className="text-muted text-sm">
                    {s.title}
                  </p>
                ))}
              </div>

              <div className="border-t border-card-border pt-6 mt-6 space-y-3">
                <h4 className="text-accent font-semibold text-sm">
                  Contact Us
                </h4>
                <p className="text-muted text-sm">
                  {siteConfig.workingHours.weekdays}
                </p>
                <p className="text-muted text-sm">{siteConfig.address}</p>
                <p className="text-muted text-sm">{siteConfig.email}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
