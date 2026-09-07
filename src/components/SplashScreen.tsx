"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen briefly for a premium first impression
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03152B]"
        >
          {/* Glowing ambient ring */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-52 sm:w-64 h-16 sm:h-20 bg-white rounded-2xl p-3 shadow-2xl flex items-center justify-center border border-white/20"
            >
              <Image
                src="/tranquelent-logo.png"
                alt="Tranquelent Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </motion.div>

            {/* Glowing progress line */}
            <div className="w-40 sm:w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#168BFF] to-transparent rounded-full shadow-[0_0_12px_#168BFF]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] font-bold tracking-[0.25em] text-[#168BFF] uppercase mt-3"
            >
              ENGINEERING WHAT'S NEXT
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
