"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

function Slider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percent);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After image (background) */}
        <img
          src={after}
          alt="After detailing"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt="Before detailing"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minWidth: containerRef.current?.offsetWidth || "100%" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
          style={{ left: `${position}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-background"
            >
              <path
                d="M6 10L2 10M2 10L4.5 7.5M2 10L4.5 12.5M14 10L18 10M18 10L15.5 7.5M18 10L15.5 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white z-10">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-accent/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white z-10">
          After
        </div>
      </div>
      <p className="text-center text-muted text-sm">{label}</p>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-6"
          >
            See The Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Before & After
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted max-w-2xl mx-auto"
          >
            Drag the slider to see the transformation. Our detailing speaks for
            itself.
          </motion.p>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.beforeAfter.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Slider
                before={item.before}
                after={item.after}
                label={item.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
