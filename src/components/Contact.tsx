"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { contactInfo } from "@/lib/constants";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const inputClass =
  "w-full rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all duration-200 focus:ring-1";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send("service_okuffl1", "template_v03kzyd", data, "zYFm-qCgwU9wQ1TFw");
      reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
    setIsSubmitting(false);
  };

  return (
    <section
      className="min-h-screen py-24 px-4 relative"
      style={{ backgroundColor: "#0F1527" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 30% 40%, rgba(124,58,237,0.08) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 80% 70%, rgba(249,115,22,0.06) 0%, transparent 60%)",
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
            <span className="text-sm font-medium text-purple-400 tracking-widest uppercase">
              Contato
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Vamos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7C3AED, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conversar
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              Sou Marcos, desenvolvedor frontend & mobile focado em criar soluções com impacto real.
              Se busca estagiário, freelancer ou parceiro de projeto, fale comigo — respondo em até 24h.
            </p>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "#111827",
                  border: "1px solid rgba(124,58,237,0.12)",
                }}
              >
                <div
                  className="p-2.5 rounded-lg"
                  style={{ background: "rgba(124,58,237,0.12)", color: "#9D5CF6" }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{info.title}</p>
                  <p className="text-white font-medium text-sm">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-7 rounded-2xl"
            style={{
              background: "#111827",
              border: "1px solid rgba(124,58,237,0.15)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <CheckCircle size={48} style={{ color: "#22D3EE" }} />
                <h3 className="text-xl font-bold text-white">Mensagem enviada!</h3>
                <p className="text-slate-400 text-sm">Responderei em até 24h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("firstName", { required: true })}
                      placeholder="Nome"
                      className={inputClass}
                      style={{
                        background: "#0B0F19",
                        border: errors.firstName
                          ? "1px solid #F97316"
                          : "1px solid rgba(124,58,237,0.2)",
                        ["--tw-ring-color" as string]: "#7C3AED",
                      }}
                    />
                    {errors.firstName && (
                      <span className="text-xs mt-1 block" style={{ color: "#F97316" }}>
                        Obrigatório
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Sobrenome"
                      className={inputClass}
                      style={{
                        background: "#0B0F19",
                        border: errors.lastName
                          ? "1px solid #F97316"
                          : "1px solid rgba(124,58,237,0.2)",
                      }}
                    />
                    {errors.lastName && (
                      <span className="text-xs mt-1 block" style={{ color: "#F97316" }}>
                        Obrigatório
                      </span>
                    )}
                  </div>
                </div>

                {[
                  { name: "email" as const, placeholder: "Email", required: true },
                  { name: "phone" as const, placeholder: "Telefone", required: false },
                ].map((field) => (
                  <input
                    key={field.name}
                    {...register(field.name, { required: field.required })}
                    placeholder={field.placeholder}
                    className={inputClass}
                    style={{
                      background: "#0B0F19",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  />
                ))}

                <select
                  {...register("service")}
                  className={inputClass}
                  style={{
                    background: "#0B0F19",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  <option value="estagio">Estágio</option>
                  <option value="junior">Junior</option>
                  <option value="freelance">Freelance</option>
                </select>

                <textarea
                  {...register("message", { required: true })}
                  placeholder="Sua mensagem..."
                  rows={5}
                  className={inputClass}
                  style={{
                    background: "#0B0F19",
                    border: errors.message
                      ? "1px solid #F97316"
                      : "1px solid rgba(124,58,237,0.2)",
                    resize: "none",
                  }}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
