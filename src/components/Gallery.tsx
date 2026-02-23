"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % siteConfig.gallery.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + siteConfig.gallery.length) %
        siteConfig.gallery.length
    );
  };

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            Our Instagram
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            @a1cardetailing_works
          </motion.h2>
        </div>
      </div>

      {/* Full-width gallery strip */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-0"
        >
          {siteConfig.gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-square group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={32}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Nav buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 text-white/70 hover:text-white p-2"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={siteConfig.gallery[lightboxIndex].src}
                alt={siteConfig.gallery[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Counter */}
            <p className="absolute bottom-4 text-white/50 text-sm">
              {lightboxIndex + 1} / {siteConfig.gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
