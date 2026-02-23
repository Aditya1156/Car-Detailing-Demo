"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, SmilePlus, Users, Award } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const icons = [Wrench, SmilePlus, Users, Award];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(target * progress);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background car image overlay */}
      <div className="absolute inset-0 bg-surface" />
      <Image
        src={siteConfig.statsBg}
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
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
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
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
