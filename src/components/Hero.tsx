"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { socialLinks, stats } from "@/lib/constants";
import CountUp from "./CountUp";
import ParticlesBg from "./ParticlesBg";

const ThreeHero = dynamic(() => import("./ThreeHero"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
      style={{ backgroundColor: "#0B0F19" }}
    >
      <ParticlesBg />
      <ThreeHero />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(124,58,237,0.1) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(34,211,238,0.07) 0%, transparent 60%)",
          zIndex: 2,
        }}
      />

      <div
        className="relative max-w-5xl mx-auto px-6 py-24 w-full"
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex flex-col max-w-xl">
            <div className="hero-fade-up hero-fade-up-1 flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-cyan-400" />
              <span className="text-sm font-medium text-cyan-400 tracking-widest uppercase">
                Desenvolvedor Frontend & Mobile
              </span>
            </div>

            <h1 className="hero-fade-up hero-fade-up-2 text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Olá, Eu Sou
              <span className="block gradient-text mt-2">Marcos Carvalho</span>
            </h1>

            <p className="hero-fade-up hero-fade-up-3 text-slate-400 mb-10 leading-relaxed text-base">
              Foco em desenvolvimento frontend e mobile, criando soluções úteis,
              acessíveis e com impacto real. Transformo desafios em oportunidades
              através da tecnologia.
            </p>

            <div className="hero-fade-up hero-fade-up-4 flex flex-col items-center gap-4 sm:flex-row">
              <motion.a
                href="https://drive.google.com/file/d/1UoIYFYEMIQXtp3iRJrx-Q8f_UqKuqITF/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-white flex items-center justify-center gap-2 overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                    style={{
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-fade-up hero-fade-up-img relative flex-shrink-0">
            <div className="relative w-[260px] h-[260px] lg:w-[320px] lg:h-[320px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="absolute inset-[-16px] rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #7C3AED, #22D3EE, #F97316, #7C3AED)",
                  opacity: 0.3,
                  filter: "blur(1px)",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="absolute inset-[-8px] rounded-full border border-dashed"
                style={{ borderColor: "rgba(124,58,237,0.2)" }}
              />
              <Image
                src="/avatar.jpg"
                alt="Foto de perfil de Marcos Carvalho"
                fill
                sizes="(max-width: 768px) 260px, 320px"
                className="object-cover rounded-full p-3"
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="hero-fade-up hero-fade-up-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t"
          style={{ borderColor: "rgba(124,58,237,0.15)" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-1 group"
            >
              <h2 className="text-3xl font-bold gradient-text">
                <CountUp value={Number(stat.number)} />+
              </h2>
              <p className="text-slate-500 text-sm group-hover:text-slate-400 transition-colors">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="hero-fade-up hero-fade-up-5 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        style={{ zIndex: 3 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
