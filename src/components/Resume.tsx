"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExperienceTabs, resumeData, skillsData } from "@/lib/constants";

const skillCategories = [
  {
    label: "Frontend",
    color: "#7C3AED",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Framer Motion", level: 65 },
    ],
  },
  {
    label: "Mobile",
    color: "#F97316",
    skills: [
      { name: "React Native", level: 75 },
      { name: "Expo", level: 70 },
      { name: "Ionic / Angular", level: 60 },
      { name: "Android (Java)", level: 65 },
    ],
  },
  {
    label: "Backend & Dados",
    color: "#22D3EE",
    skills: [
      { name: "Node.js / Express", level: 60 },
      { name: "Python", level: 55 },
      { name: "SQLite / PostgreSQL", level: 60 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];

function ProgressBar({ level, color, delay }: { level: number; color: string; delay: number }) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className="h-1.5 w-full rounded-full overflow-hidden"
      style={{ background: "rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        initial={{ width: 0 }}
        animate={{ width: prefersReduced ? `${level}%` : 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: prefersReduced ? 0 : 1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const prefersReduced = useReducedMotion();

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } } }}
          >
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                style={{
                  borderLeft: "1px solid rgba(124,58,237,0.2)",
                  paddingLeft: "1.25rem",
                }}
              >
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[5px]"
                  style={{ background: "#7C3AED" }}
                />
                <span className="text-sm font-medium" style={{ color: "#9D5CF6" }}>
                  {exp.period}
                </span>
                <h3 className="text-lg font-bold mt-1 text-white">{exp.title}</h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: "#22D3EE" }}>
                  {exp.company}
                </p>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "education":
        return (
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: prefersReduced ? 0 : 0.1 } } }}
          >
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                style={{ borderLeft: "1px solid rgba(34,211,238,0.2)", paddingLeft: "1.25rem" }}
              >
                <div
                  className="absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[5px]"
                  style={{ background: "#22D3EE" }}
                />
                <span className="text-sm font-medium" style={{ color: "#22D3EE" }}>
                  {edu.period}
                </span>
                <h3 className="text-lg font-bold mt-1 text-white">{edu.title}</h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: "#9D5CF6" }}>
                  {edu.institution}
                </p>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        );

      case "skills":
        return (
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: prefersReduced ? 0 : 0.12 } } }}
          >
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.12 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(17,24,39,0.7)",
                  border: `1px solid ${cat.color}20`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-5 rounded-full"
                    style={{ background: cat.color }}
                  />
                  <h3 className="font-bold text-base" style={{ color: cat.color }}>
                    {cat.label}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className="text-xs font-mono" style={{ color: `${cat.color}99` }}>
                          {skill.level}%
                        </span>
                      </div>
                      <ProgressBar
                        level={skill.level}
                        color={cat.color}
                        delay={catIdx * 0.12 + skillIdx * 0.08}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(17,24,39,0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3 className="font-bold text-sm text-slate-400 mb-4 uppercase tracking-widest">
                Ícones de Tecnologias
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: prefersReduced ? 0 : -4, scale: 1.05 }}
                    className="flex flex-col items-center gap-1 p-3 rounded-xl"
                    style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.1)" }}
                  >
                    <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8 object-contain" />
                    <span className="text-xs text-slate-500">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      case "about":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: prefersReduced ? 0 : -4 }}
              className="p-6 rounded-xl"
              style={{ background: "#111827", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">Sobre Mim</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{resumeData.about.description}</p>
            </motion.div>
            <motion.div
              whileHover={{ y: prefersReduced ? 0 : -4 }}
              className="p-6 rounded-xl"
              style={{ background: "#111827", border: "1px solid rgba(34,211,238,0.15)" }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.about.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.06 }}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(34,211,238,0.08)",
                      color: "#22D3EE",
                      border: "1px solid rgba(34,211,238,0.2)",
                    }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="min-h-screen py-24 px-4 relative"
      style={{ backgroundColor: "#0B0F19" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 80% 60%, rgba(34,211,238,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <span className="text-sm font-medium text-cyan-400 tracking-widest uppercase">
              Experiência
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Por que me <span className="gradient-text">contratar?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10">
          <div className="space-y-2">
            {ExperienceTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ x: prefersReduced ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
                style={
                  tab.id === activeTab
                    ? {
                        background: "linear-gradient(135deg, #7C3AED, #22D3EE)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                      }
                    : {
                        background: "#111827",
                        color: "#94A3B8",
                        border: "1px solid rgba(124,58,237,0.1)",
                      }
                }
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.28 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
