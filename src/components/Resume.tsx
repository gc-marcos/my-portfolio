"use client"

import { ExperienceTabs, resumeData, skillsData } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';


export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");

    const renderContent = () => {
        switch (activeTab) {
            case "experience":
                return (
                    <div className="grid md:grid-cols-2 gap-8">
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
                                <h3 className="text-xl font-bold mt-2">
                                    {experience.title}
                                </h3>
                                <p className="text-emerald-400 mt-1">{experience.company}</p>
                                <p className="text-gray-400 mt-2">{experience.description}</p>
                            </motion.div>
                        ))}
                    </div>
                )
            case "education":
                return  <div className="grid md:grid-cols-2 gap-8">
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
                        <h3 className="text-xl font-bold mt-2">
                            {education.title}
                        </h3>
                        <p className="text-emerald-400 mt-1">{education.institution}</p>
                        <p className="text-gray-400 mt-2">{education.description}</p>
                    </motion.div>
                ))}
            </div>
            case "skills":
                return (
                    <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-4 gap-4 sm:gap-8 mt-10 lg:mt-12">
                        {skillsData.map((skill, index) => (
                            <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-emerald-400/50 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center">
                                <Image 
                                src={skill.icon}
                                alt={skill.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-contain"
                                />
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 bg-emerald-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                            </motion.div>
                        ))}
                    </div>
                )
            case "about":
                return (
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid md:grid-cols-2 gap-8"
                    >
                        <div className="bg-gray-900 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4">Sobre Mim</h3>
                            <p className="text-gray-400">{resumeData.about.description}</p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4">Interesses</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.about.interests.map((interest, index) => (
                                    <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-800 text-emerald-400 rounded-full text-sm"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                )
            default:
                return null;
        }
    };

    return (
        <section className="min-h-screen bg-gray-950 text-white pt-10">
            <div className="w-full max-w-5xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-[200px_1fr] gap-12">
                    {/* Sidebar */}
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
                                    className={`w-full text-left p-4 rounded-md font-medium transition-colors ${tab.id === activeTab
                                            ? "bg-emerald-400 text-gray-900"
                                            : "bg-gray-900 text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {tab.title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="">
                            <motion.h2
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl font-bold mb-8"
                            >
                             {ExperienceTabs.find(tab => tab.id === activeTab)?.title}   
                            </motion.h2>

                        <AnimatePresence mode="wait">
                        {renderContent()}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
