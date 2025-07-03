"use client"

import { services } from "@/lib/constants"
import { motion } from "framer-motion"

export default function Services() {
    return (
        <section className="min-h-screen bg-gray-950 text-white pt-5">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Grid responsiva para os cards de serviços */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            // Animação de entrada com efeito de desfoque, subida e leve rotação
                            initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -4, filter: "blur(4px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 70,
                                damping: 14,
                            }}
                            // Animação ao passar o mouse: leve inclinação, brilho e zoom sutil
                            whileHover={{
                                rotate: 2,
                                scale: 1.03,
                                boxShadow: "0px 10px 30px rgba(52, 211, 153, 0.3)",
                                transition: { type: "spring", stiffness: 120, damping: 10 },
                            }}
                            className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-emerald-400/50 transition-all duration-300 shadow-md"
                        >
                            {/* Número decorativo no canto superior direito */}
                            <div className="absolute top-4 right-4 text-4xl font-bold text-emerald-400/10 group-hover:text-emerald-500/20 transition-all">
                                {service.number}
                            </div>

                            {/* Ícone com fundo em destaque */}
                            <div className="mb-6 text-emerald-400 p-3 bg-emerald-400/10 rounded-lg w-fit shadow-inner">
                                {service.icon}
                            </div>

                            {/* Título do serviço */}
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                            {/* Descrição curta do serviço */}
                            <p className="text-gray-400 mb-6">{service.description}</p>

                            {/* Lista de features apresentadas como badges */}
                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-emerald-500/90 text-gray-900 font-medium rounded-full shadow-sm hover:bg-emerald-400 transition"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Barra inferior animada ativada no hover */}
                            <div className="absolute bottom-0 left-0 h-1 bg-emerald-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
