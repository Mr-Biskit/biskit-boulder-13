"use client";
import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  delayFactor: number;
  highlightedText?: string;
};

const AnimatedTextCharacter = ({
  text,
  delayFactor,
  highlightedText,
}: AnimatedTextProps) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 * delayFactor },
    },
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 60,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 40,
        stiffness: 60,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          className={`tracking-widest lg:tracking-[0.35em] font-heading text-white ${
            highlightedText?.includes(letter)
              ? "lg:text-5xl font-bold text-4xl xl:text-6xl"
              : "lg:text-2xl text-lg xl:text-3xl"
          }`}
          variants={child}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
