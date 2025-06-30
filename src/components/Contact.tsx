"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { motion } from "framer-motion"
import { contactInfo } from "@/lib/constants"
import { Send } from "lucide-react"

type FormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    service: string
    message: string
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await emailjs.send(
                'service_okuffl1',
                'template_v03kzyd',
                data,
                'zYFm-qCgwU9wQ1TFw',
            )
            reset();
            alert('Mensagem Enviada com Sucesso!')
        } catch (error) {
            console.error(error)
            alert('Erro ao enviar mensagem. Tente novamente.')
        }
        setIsSubmitting(false);
    }
    return (
        <section className="min-h-screen bg-gray-950 text-white pt-10">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-start gap-4"
                            >
                                <div className={`p-4 rounded-xl ${info.bg}`}>
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-gray-400 mb-1">{info.title}</h3>
                                    <p className="text-xl">{info.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-900/50 p-8 rounded-2xl lg:order-1"
                    >
                        <h2 className="text-3xl font-bold text-emerald-400 mb-4">
                            Vamos Trabalhar Juntos!
                        </h2>
                        <p className="text-gray-400 mb-8">
                        Sou Marcos, desenvolvedor frontend & mobile focado em criar soluções que gerem impacto social e valor real aos usuários. Se você busca alguém comprometido com inovação, acessibilidade e entrega ágil, envie sua mensagem — seja para estágio, projeto freelance ou parceria de longo prazo. Respondo em até 24h. Vamos transformar ideias em resultados!
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input
                                        {...register("firstName", { required: true })}
                                        placeholder="Nome"
                                        className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                                    />
                                    {formState.errors.firstName &&
                                        <span className="text-red-500 text-sm">Nome é obrigatório!</span>
                                    }
                                </div>
                                <div>
                                    <input
                                        {...register("lastName", { required: true })}
                                        placeholder="Sobrenome"
                                        className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                                    />
                                    {formState.errors.lastName &&
                                        <span className="text-red-500 text-sm">Sobrenome é obrigatório!</span>
                                    }
                                </div>
                            </div>
                            <input
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                placeholder="Email"
                                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                            />
                            <input
                                {...register("phone")}
                                placeholder="Telefone"
                                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                            />
                            <select
                                {...register("service")}
                                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                            >
                                <option value="estagio">Estágio</option>
                                <option value="junior">Junior</option>
                            </select>
                            <textarea
                                {...register("message", { required: true })}
                                placeholder="Digite sua mensagem aqui."
                                rows={6}
                                className="w-full bg-gray-800 rounded-lg p-3 text-white border border-gray-700 focus:border-emerald-400 focus:outline-none"
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                disabled={isSubmitting}
                                className="bg-emerald-400 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-emerald-300 transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}