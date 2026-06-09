"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const sectionColors: Record<string, string> = {
  "/": "#7C3AED",
  "/services": "#F97316",
  "/resume": "#22D3EE",
  "/work": "#7C3AED",
  "/contact": "#F97316",
};

export default function CustomCursor() {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorColor = sectionColors[pathname] || "#7C3AED";

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { damping: 22, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 22, stiffness: 400 });

  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          borderRadius: "50%",
          border: `1.5px solid ${cursorColor}`,
          opacity: 0.6,
        }}
        animate={{
          width: isHovering ? 40 : 28,
          height: isHovering ? 40 : 28,
        }}
        transition={{ duration: 0.18 }}
      />
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 10000,
          borderRadius: "50%",
          backgroundColor: cursorColor,
        }}
        animate={{
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
