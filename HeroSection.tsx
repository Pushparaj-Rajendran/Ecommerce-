import React from "react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-saffron via-gold to-indigo z-0"
      />
      <motion.h1
        className="z-10 text-white text-5xl font-bold drop-shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Legendary Indian Fashion
      </motion.h1>
      <motion.p
        className="z-10 text-white text-xl mt-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Sarees, Kurtas, Lehengas & more — Authentic, Diverse, Sexy
      </motion.p>
    </section>
  );
}