"use client";

import { services } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

function TiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((e.clientX - cx) / (rect.width / 2)) * 8;
    const y = ((e.clientY - cy) / (rect.height / 2)) * -8;
    setTilt({ x, y });

    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPos({ x: px, y: py });
  };

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: isHovered ? "transform 0.1s ease" : "transform 0.4s ease",
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-2xl"
          style={{
            inset: 0,
            background: `radial-gradient(circle 150px at ${glowPos.x}% ${glowPos.y}%, rgba(124,58,237,0.12), transparent)`,
            zIndex: 1,
          }}
        />
      )}
      {children}
    </div>
  );
}

export default function Services() {
  return (
    <section
      className="min-h-screen py-24 px-4 relative"
      style={{ backgroundColor: "#0F1527" }}
    >
      <div
        className="absolute inset-0 pointer-events-none grid-bg"
        style={{ opacity: 0.5 }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(249,115,22,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-orange-400 to-purple-500" />
            <span className="text-sm font-medium text-orange-400 tracking-widest uppercase">
              O que ofereço
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Meus{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F97316, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Serviços
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard
                className="group relative p-8 rounded-2xl overflow-hidden h-full"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        color: "#9D5CF6",
                      }}
                    >
                      {service.icon}
                    </div>
                    <span
                      className="text-5xl font-bold font-mono"
                      style={{ color: "rgba(124,58,237,0.08)" }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200"
                        style={{
                          background: "rgba(249,115,22,0.08)",
                          color: "#FB923C",
                          border: "1px solid rgba(249,115,22,0.2)",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: "linear-gradient(90deg, #7C3AED, #F97316)" }}
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
