"use client";

import { menuItems } from "@/lib/constants";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Abre conversa no WhatsApp
    const openWhatsApp = () => {
        window.open(
            "https://wa.me/5511996840013?text=Olá%20Marcos,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar!",
            "_blank"
        );
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 overflow-visible px-6">
                    {/* Logo do site */}
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-white"
                        >
                            <span className="text-emerald-400">Marcos Carvalho</span>
                        </motion.div>
                    </Link>

                    {/* Menu para telas médias ou maiores */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <motion.div key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={item.path}
                                    className={`${pathname === item.path ? "text-emerald-400" : "text-gray-300"
                                        } hover:text-emerald-400 transition-colors relative group`}
                                >
                                    {item.title}
                                    {pathname === item.path && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400" />
                                    )}
                                </Link>
                            </motion.div>
                        ))}

                        {/* Botão Me Contrate (Desktop) */}
                        <motion.button
                            onClick={openWhatsApp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-emerald-300 transition-colors"
                        >
                            Me Contrate
                        </motion.button>
                    </div>

                    {/* Botão de menu para mobile */}
                    <button
                        className="md:hidden text-white"
                        aria-label="Abrir menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-gray-900 px-4 py-4"
                >
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.path}
                            className={`block py-3 ${pathname === item.path ? "text-emerald-400" : "text-gray-300"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}

                    {/* Botão Me Contrate (Mobile) */}
                    <button
                        onClick={() => {
                            openWhatsApp();
                            setIsMenuOpen(false);
                        }}
                        className="w-full bg-emerald-400 text-gray-900 px-6 py-2 rounded-full font-medium mt-4 hover:bg-emerald-300 transition-colors"
                    >
                        Me Contrate
                    </button>
                </motion.div>
            )}
        </nav>
    );
}
