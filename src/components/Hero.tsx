"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

import { socialLinks, stats } from "@/lib/constants";
import CountUp from "./CountUp";

export default function Hero() {
    return (
        <section className="min-h-screen bg-gray-950 text-white pt-8">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Container principal: texto + imagem */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
                    {/* Bloco de texto e links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col"
                    >
                        <span className="text-gray-400 mb-4 block text-center lg:text-left">
                            Estagiário
                        </span>
                        <h1 className="text-5xl font-bold mb-4 text-center lg:text-left">
                            Olá, Eu Sou
                            <span className="block text-emerald-400 mt-2">Marcos Carvalho</span>
                        </h1>
                        <p className="text-gray-400 mb-10 text-center lg:text-left max-w-lg">
                            Olá! Sou Marcos, com foco em desenvolvimento frontend e mobile.
                            Tenho atuado na criação de soluções úteis, acessíveis e com impacto real
                            na vida das pessoas. Explore meu portfólio e veja como a tecnologia pode
                            transformar desafios em oportunidades!
                        </p>

                        <div className="flex flex-col items-center gap-4 lg:flex-row">
                            <motion.a
                                href="https://drive.google.com/file/d/1UoIYFYEMIQXtp3iRJrx-Q8f_UqKuqITF/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full lg:w-auto bg-emerald-400 text-gray-900 px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors"
                            >
                                <Download size={20} />
                                Download CV
                            </motion.a>

                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={`Link para ${social.name}`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Bloco da imagem com animações */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex-1 flex justify-center"
                    >
                        <div className="w-[350px] h-[350px] relative mx-auto">
                            {/* Círculo externo animado */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                className="absolute inset-0 rounded-full border-2 border-emerald-400/20"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                                className="absolute inset-[-10px] rounded-full border-2 border-emerald-400/10"
                            />
                            <motion.div
                                animate={{ rotate: -360, scale: [1, 1.02, 1] }}
                                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                                className="absolute inset-[-20px] rounded-full border-2 border-dashed border-emerald-400/5"
                            />

                            <Image
                                src="/avatar.jpg"
                                alt="Foto de perfil de Marcos Carvalho"
                                fill
                                className="object-cover rounded-full p-4"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bloco com estatísticas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <h2 className="text-4xl font-bold text-emerald-400">
                                <CountUp value={Number(stat.number)} />
                            </h2>
                            <p className="text-gray-400 text-sm">{stat.text}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
