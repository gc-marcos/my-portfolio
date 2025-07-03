"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceTabs, resumeData, skillsData } from "@/lib/constants";

export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");

    // Renderiza conteúdo baseado na aba ativa

    const renderContent = () => {
        switch (activeTab) {
            case "experience":
                return (
                    <motion.div 
                        className="grid md:grid-cols-2 gap-8"
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {resumeData.experience.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full"
                            >
                                <span className="text-emerald-500 text-sm font-medium">
                                    {experience.period}
                                </span>
                                <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
                                <p className="text-emerald-400 mt-1">{experience.company}</p>
                                <p className="text-gray-400 mt-2">{experience.description}</p>
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
                        variants={{
                            animate: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {resumeData.education.map((education, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-emerald-400 before:rounded-full"
                            >
                                <span className="text-emerald-500 text-sm font-medium">
                                    {education.period}
                                </span>
                                <h3 className="text-xl font-bold mt-2">{education.title}</h3>
                                <p className="text-emerald-400 mt-1">{education.institution}</p>
                                <p className="text-gray-400 mt-2">{education.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            case "skills":
                return (
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-10 lg:mt-12"
                        initial="initial"
                        animate="animate"
                        variants={{
                            animate: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: index * 0.1
                                }}
                                whileHover={{ 
                                    y: -8,
                                    scale: 1.05,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15
                                    }
                                }}
                                className="group relative bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden"
                            >
                                {/* Efeito de brilho no hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                
                                <div className="relative z-10 flex flex-col items-center">
                                    <motion.div
                                        whileHover={{ rotate: [0, -5, 5, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-4"
                                    >
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={96}
                                            height={96}
                                            className="w-16 h-16 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] transition-all duration-300"
                                        />
                                    </motion.div>
                                    
                                    {/* Nome da skill com fade-in no hover */}
                                    <motion.h4
                                        className="text-sm font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ y: 10 }}
                                        animate={{ y: 0 }}
                                    >
                                        {skill.name}
                                    </motion.h4>
                                </div>
                                
                                {/* Barra de progresso animada */}
                                <motion.div 
                                    className="absolute bottom-0 left-0 h-1 bg-emerald-400/50 rounded-b-xl"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ transformOrigin: "left" }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                );

            case "about":
                return (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div 
                            className="bg-gray-900 p-6 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Sobre Mim</h3>
                            <p className="text-gray-400">{resumeData.about.description}</p>
                        </motion.div>

                        <motion.div 
                            className="bg-gray-900 p-6 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold mb-4">Interesses</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.about.interests.map((interest, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-3 py-1 bg-gray-800 text-emerald-400 rounded-full text-sm cursor-default"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
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
        <section className="min-h-screen bg-gray-950 text-white pt-2">
            <div className="w-full max-w-5xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-[200px_1fr] gap-12">
                    {/* Sidebar com tabs */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold mb-8"
                        >
                            Por que me contratar?
                        </motion.h2>

                        <div className="space-y-3">
                            {ExperienceTabs.map((tab, index) => (
                                <motion.button
                                    key={tab.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveTab(tab.id)}
                                    whileHover={{ x: 4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full text-left p-4 rounded-md font-medium transition-colors ${
                                        tab.id === activeTab
                                            ? "bg-emerald-400 text-gray-900"
                                            : "bg-gray-900 text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {tab.title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Conteúdo principal */}
                    <div>
                        <motion.h2
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold mb-8"
                        >
                            {ExperienceTabs.find((tab) => tab.id === activeTab)?.title}
                        </motion.h2>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
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