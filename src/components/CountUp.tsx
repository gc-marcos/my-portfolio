import {
    animate,
    motion,
    useInView,
    useMotionValue,
    useTransform,
  } from "framer-motion";
  import { useEffect, useRef } from "react";
  
  // Tipagem dos props
  type Props = {
    value: number;
    className?: string;
  };
  
  export default function CountUp({ value, className }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref);
    const count = useMotionValue(0);
  
    // Transforma valor em número inteiro
    const rounded = useTransform(count, (latest) => Math.round(latest));
  
    useEffect(() => {
      // Anima somente quando o elemento entra na viewport
      if (isInView) {
        animate(count, value, { duration: 2 });
      }
    }, [count, value, isInView]);
  
    return (
      <motion.span ref={ref} className={className}>
        {rounded}
      </motion.span>
    );
  }
  