"use client";

import { menuItems } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5511996840013?text=Olá%20Marcos,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar!",
      "_blank"
    );
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(11,15,25,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(124,58,237,0.12)",
              boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 px-2">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg font-bold tracking-tight"
            >
              <span className="gradient-text">Marcos</span>
              <span className="text-white/70"> Carvalho</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -1 }}
              >
                <Link
                  href={item.path}
                  className={`relative text-sm font-medium transition-colors group ${
                    pathname === item.path ? "text-purple-400" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${
                      pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={openWhatsApp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
            >
              <span className="relative z-10">Me Contrate</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden px-6 pb-6"
            style={{
              background: "rgba(11,15,25,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(124,58,237,0.12)",
            }}
          >
            <div className="pt-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={item.path}
                    className={`block py-3 text-sm font-medium border-b transition-colors ${
                      pathname === item.path ? "text-purple-400" : "text-slate-400"
                    }`}
                    style={{ borderColor: "rgba(124,58,237,0.08)" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <button
                onClick={() => { openWhatsApp(); setIsMenuOpen(false); }}
                className="w-full mt-4 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #7C3AED, #22D3EE)" }}
              >
                Me Contrate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
