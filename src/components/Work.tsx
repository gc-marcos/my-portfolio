"use client"

import { projects } from "@/lib/constants"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Work() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-8">
            <div className="max-w-5xl w-full space-y-8 overflow-hidden">
                <div className="flex justify-between items-center">
                    <button onClick={handlePrev} className="p-2 hover:text-emerald-400">
                        <ChevronLeft size={32} />
                    </button>
                    <h2 className="text-2xl font-bold text-center">Meus Projetos</h2>
                    <button onClick={handleNext} className="p-2 hover:text-emerald-400">
                        <ChevronRight size={32} />
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={projects[currentIndex].title}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <Image
                                src={projects[currentIndex].image}
                                alt={projects[currentIndex].title}
                                width={400}
                                height={300}
                                className="rounded-lg object-cover max-h-[300px]"
                            />

                            <div className="flex-1 space-y-4">
                                <h3 className="text-xl font-semibold">
                                    {projects[currentIndex].title}
                                </h3>
                                <p className="text-gray-400">
                                    {projects[currentIndex].description}
                                </p>
                                <div className="flex gap-4">
                                    {projects[currentIndex].demoLink && (
                                        <a
                                            href={projects[currentIndex].demoLink}
                                            target="_blank"
                                            className="flex items-center gap-1 hover:text-emerald-400 transition"
                                        >
                                            <ArrowUpRight size={18} />
                                            Demo
                                        </a>
                                    )}
                                    {projects[currentIndex].githubLink && (
                                        <a
                                            href={projects[currentIndex].githubLink}
                                            target="_blank"
                                            className="flex items-center gap-1 hover:text-emerald-400 transition"
                                        >
                                            <Github size={18} />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
