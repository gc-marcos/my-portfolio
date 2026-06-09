"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";

type Message = {
  from: "user" | "bot";
  text: string;
};

const KNOWLEDGE_BASE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["nome", "quem é", "quem e", "você é", "voce e", "marcos"],
    answer:
      "Sou Marcos Carvalho, desenvolvedor frontend e mobile em formação, estudante de Informática para Negócios na FATEC Mauá. Estou em busca da minha primeira oportunidade como estagiário.",
  },
  {
    keywords: ["tecnologia", "tecnologias", "stack", "usa", "linguagem"],
    answer:
      "Trabalho principalmente com React, Next.js, TypeScript e Tailwind no frontend. No mobile uso React Native e Expo. No backend tenho experiência com Node.js, Express e Python. Para dados, uso SQLite e PostgreSQL.",
  },
  {
    keywords: ["projeto", "projetos", "trabalho", "trabalhos", "portfólio", "portfolio"],
    answer:
      "Tenho 5 projetos principais: este portfólio em Next.js, um app de hamburgeria em Android/Java, o jogo Campo Minado em React Native, um site responsivo em HTML/CSS e um app de persistência de dados com Ionic/Angular. Acesse a aba 'Projetos' para ver os detalhes de cada um!",
  },
  {
    keywords: ["contato", "contratar", "whatsapp", "email", "falar"],
    answer:
      "Você pode me contatar pelo WhatsApp (11) 99684-0013, pelo email gcmarcoss@gmail.com ou pela página de Contato aqui no portfólio. Respondo em até 24h!",
  },
  {
    keywords: ["experiencia", "experiência", "trabalhou", "histórico", "carreira"],
    answer:
      "Venho de uma transição de carreira: trabalhei 10 anos como Conferente na Inoxplasma, otimizando processos logísticos com ERP e Power BI. Desde 2022 me dedico exclusivamente à tecnologia, desenvolvendo projetos acadêmicos e pessoais.",
  },
  {
    keywords: ["formação", "educação", "faculdade", "curso", "estudo", "estudando"],
    answer:
      "Estou cursando Informática para Negócios na FATEC Mauá (2024-2026). Também sou formado em Desenvolvimento Mobile pela Anhanguera e Técnico em Desenvolvimento de Sistemas pela ETEC Mauá.",
  },
  {
    keywords: ["mobile", "app", "aplicativo", "android", "ios", "react native"],
    answer:
      "Desenvolvo apps com React Native e Expo para cross-platform, e tenho experiência com Android Studio em Java. Já criei apps de jogos, pedidos e persistência de dados local com Ionic/Angular.",
  },
  {
    keywords: ["estágio", "estagio", "vaga", "oportunidade", "disponível"],
    answer:
      "Estou disponível para estágio em desenvolvimento frontend, mobile ou fullstack! Busco uma oportunidade onde possa aplicar meus conhecimentos e crescer com uma equipe experiente. Entre em contato pelo WhatsApp ou email.",
  },
  {
    keywords: ["habilidade", "habilidades", "skill", "skills", "sabe fazer"],
    answer:
      "Minhas principais habilidades: HTML, CSS, JavaScript, TypeScript, React, Next.js, React Native, Node.js, Python, SQL, Git e GitHub. Também tenho foco em UX, acessibilidade e impacto social.",
  },
  {
    keywords: ["impacto", "diferencial", "destaque", "por que", "contratar"],
    answer:
      "Meu diferencial é unir tecnologia com propósito social. Desenvolvi um app de monitoramento de crises para smartwatch e organizei oficinas de IA focadas em saúde. Sou rápido para aprender e motivado a resolver problemas reais.",
  },
];

function getBotResponse(input: string): string {
  const text = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some((kw) => text.includes(kw))) {
      return entry.answer;
    }
  }
  return "Boa pergunta! Não tenho uma resposta específica para isso ainda, mas você pode me contatar diretamente pelo WhatsApp (11) 99684-0013 ou pelo email gcmarcoss@gmail.com. 😊";
}

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Olá! Sou o assistente do Marcos. Pergunte qualquer coisa sobre mim — tecnologias, projetos, experiência, contato ou oportunidades!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, isTyping]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: getBotResponse(trimmed) }]);
    }, 900 + Math.random() * 500);
  };

  const suggestions = ["Quais tecnologias você usa?", "Fala sobre seus projetos", "Como entrar em contato?"];

  return (
    <section
      className="py-24 px-4 relative"
      style={{ backgroundColor: "#0F1527" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles size={18} style={{ color: "#7C3AED" }} />
            <span className="text-sm font-medium text-purple-400 tracking-widest uppercase">
              IA Interativa
            </span>
            <Sparkles size={18} style={{ color: "#7C3AED" }} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Pergunte{" "}
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-slate-500 text-sm">
            Faça qualquer pergunta sobre minha experiência, projetos ou tecnologias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(17,24,39,0.7)",
            border: "1px solid rgba(124,58,237,0.2)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ borderBottom: "1px solid rgba(124,58,237,0.12)" }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-slate-500 ml-2 font-mono">assistente-marcos.ai</span>
          </div>

          <div className="h-72 overflow-y-auto px-5 py-5 space-y-4 flex flex-col">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-3 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        msg.from === "bot"
                          ? "linear-gradient(135deg, #7C3AED, #22D3EE)"
                          : "rgba(249,115,22,0.2)",
                      border: msg.from === "user" ? "1px solid rgba(249,115,22,0.3)" : "none",
                    }}
                  >
                    {msg.from === "bot" ? (
                      <Bot size={14} className="text-white" />
                    ) : (
                      <User size={14} style={{ color: "#F97316" }} />
                    )}
                  </div>
                  <div
                    className="max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      msg.from === "bot"
                        ? {
                            background: "rgba(124,58,237,0.1)",
                            border: "1px solid rgba(124,58,237,0.15)",
                            color: "#E2E8F0",
                            borderRadius: "4px 16px 16px 16px",
                          }
                        : {
                            background: "rgba(249,115,22,0.12)",
                            border: "1px solid rgba(249,115,22,0.2)",
                            color: "#F8FAFC",
                            borderRadius: "16px 4px 16px 16px",
                          }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
                  >
                    <Bot size={14} className="text-white" />
                  </div>
                  <div
                    className="px-4 py-3 rounded-2xl flex items-center gap-1"
                    style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.15)" }}
                  >
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#7C3AED" }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, delay, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          <div
            className="px-4 py-3"
            style={{ borderTop: "1px solid rgba(124,58,237,0.1)" }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(s);
                  }}
                  className="text-xs px-3 py-1 rounded-full transition-all"
                  style={{
                    background: "rgba(124,58,237,0.08)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    color: "#9D5CF6",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            <div
              className="flex gap-2 rounded-xl px-3 py-2"
              style={{ background: "#0B0F19", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Digite sua pergunta..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-600 outline-none"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
