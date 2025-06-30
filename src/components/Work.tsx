"use client"

import { projects } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Work(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const project = projects[currentIndex];

    return(
        <section className="min-h-screen bg-gray-900 text-white pt -10">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        {/* TEXTO */}
                        <div>
                            <div className="text-8xl font-bold text-gray-700">
                                {project.number}
                            </div>
                            <h2 className="text-4xl font-bold mb-4">
                                {project.title}
                            </h2>
                            <p className="text-gray-400 mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech, index) =>(
                                    <span
                                    key={index}
                                    className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm font-medium inline-block"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <motion.a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <ArrowUpRight size={20} />                              
                                </motion.a>
                                <motion.a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferror"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <Github size={20} />                                    
                                </motion.a>
                            </div>

                        </div>
                        {/* IMAGEM */}
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900"
                        >
                            <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            />
                        </motion.div>
                    </motion.div>

                </AnimatePresence>

                {/*CONTROLE  SLIDE*/}
                <div className="flex justify-end gap-4 mt-8">
                    <motion.button
                    onClick={prevProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>

                    <motion.button
                    onClick={nextProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-emerald-400 rounded-xl flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </motion.button>

                </div>
            </div>
        </section>


    )
}