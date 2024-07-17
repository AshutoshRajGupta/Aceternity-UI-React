import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, contentHeight * 0.2]),
    { stiffness: 100, damping: 30 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, contentHeight * 0.08]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <motion.div ref={ref} className={`relative w-full ${className}`}>
      <div className="fixed left-0 top-0 h-full w-16 bg-transparent pointer-events-none z-10">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="ml-[35px] h-4 w-4 rounded-full border border-neutral-200 shadow-sm flex items-center justify-left"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-500)",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "var(--emerald-600)",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 40 ${contentHeight}`}
          width="40"
          height={contentHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 20 0
                L 40 ${contentHeight * 0.2}
                L 20 ${contentHeight * 0.4}
                L 0 ${contentHeight * 0.6}
                L 20 ${contentHeight * 0.8}
                L 40 ${contentHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 20 0
                L 40 ${contentHeight * 0.2}
                L 20 ${contentHeight * 0.4}
                L 0 ${contentHeight * 0.6}
                L 20 ${contentHeight * 0.8}
                L 40 ${contentHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="relative">
        {children}
      </div>
    </motion.div>
  );
};
