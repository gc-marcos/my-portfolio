"use client";

import { projects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X, Layers, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Project {
  number: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  problem?: string;
  solution?: string;
  result?: string;
}

const enrichedProjects: Project[] = projects.map((p, i) => ({
  ...p,
  problem: [
    "Falta de um portfólio moderno que demonstrasse habilidades reais de frontend com boas práticas.",
    "Processo manual e lento para calcular pedidos em hamburguerias, causando erros e demora no atendimento.",
    "Necessidade de praticar lógica e UX em dispositivos móveis com jogos clássicos.",
    "Sites não responsivos geravam má experiência em mobile, perdendo usuários.",
    "Dificuldade em persistir dados simples de formulários sem back-end.",
  ][i],
  solution: [
    "Desenvolvimento de portfolio com Next.js, animações com Framer Motion e deploy automatizado.",
    "App Android com interface intuitiva para montar pedidos, calcular total e enviar resumo por e-mail.",
    "Jogo Campo Minado em React Native com lógica completa e UX fluida para telas touch.",
    "Site com grid flexível, media queries e imagens otimizadas para todos os tamanhos de tela.",
    "App híbrido com Ionic e Angular usando Ionic Storage para persistência local sem servidor.",
  ][i],
  result: [
    "Portfolio online acessível globalmente, gerando novas oportunidades de networking e contato.",
    "Redução do tempo de atendimento com cálculo automático e envio de pedido por e-mail.",
    "Jogo funcional publicado com feedback positivo de usuários iniciantes.",
    "100% responsivo em mobile e desktop, melhorando engajamento e retenção.",
    "Dados persistidos localmente com zero dependência de servidor ou internet.",
  ][i],
}));

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      className="min-h-screen py-24 px-4 relative"
      style={{ backgroundColor: "#0B0F19" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 10% 80%, rgba(249,115,22,0.06) 0%, transparent 60%)",
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
            <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-orange-400" />
            <span className="text-sm font-medium text-orange-400 tracking-widest uppercase">
              Portfólio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Meus{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projetos
            </span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            Clique em qualquer projeto para ver o caso completo — problema, solução e resultado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {enrichedProjects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "#111827",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.7)" }}
                >
                  <span className="text-white font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                    <Layers size={16} />
                    Ver Case
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className="text-xs font-mono shrink-0 ml-2 mt-0.5"
                    style={{ color: "rgba(124,58,237,0.6)" }}
                  >
                    {project.number}
                  </span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-full font-medium"
                      style={{
                        background: "rgba(124,58,237,0.1)",
                        color: "#9D5CF6",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="px-2 py-0.5 text-xs rounded-full"
                      style={{ color: "rgba(148,163,184,0.6)" }}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #7C3AED, #F97316)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(11,15,25,0.92)", backdropFilter: "blur(12px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: "#111827",
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "0 40px 100px rgba(124,58,237,0.2)",
              }}
            >
              <div className="relative h-52 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, #111827 100%)",
                  }}
                />
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                <X size={18} />
              </button>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "rgba(124,58,237,0.6)" }}
                  >
                    {selectedProject.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{selectedProject.title}</h3>

                <div className="space-y-5">
                  <CaseBlock
                    icon={<Lightbulb size={16} />}
                    label="Problema"
                    color="#F97316"
                    text={selectedProject.problem || ""}
                  />
                  <CaseBlock
                    icon={<Wrench size={16} />}
                    label="Solução"
                    color="#7C3AED"
                    text={selectedProject.solution || ""}
                  />
                  <CaseBlock
                    icon={<TrendingUp size={16} />}
                    label="Resultado"
                    color="#22D3EE"
                    text={selectedProject.result || ""}
                  />

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                      Tecnologias
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full font-medium"
                          style={{
                            background: "rgba(124,58,237,0.1)",
                            color: "#9D5CF6",
                            border: "1px solid rgba(124,58,237,0.2)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8 pt-6" style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}>
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                      style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
                    >
                      <ArrowUpRight size={16} />
                      Ver Demo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-colors"
                      style={{ border: "1px solid rgba(124,58,237,0.25)" }}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CaseBlock({
  icon,
  label,
  color,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  text: string;
}) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{ background: `${color}08`, border: `1px solid ${color}20` }}
    >
      <div className="flex items-center gap-2 mb-2" style={{ color }}>
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
