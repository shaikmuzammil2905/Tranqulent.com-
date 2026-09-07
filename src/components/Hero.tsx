"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#041935] text-white overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center">
      {/* Background ambient lighting and subtle circuit overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041935] via-[#041935]/90 to-transparent z-10 hidden lg:block" />
        <div className="absolute inset-0 bg-[#041935]/75 z-10 lg:hidden" />
        
        {/* Right side cinematic semiconductor visual */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] h-full">
          <Image
            src="/images/hero-chip-visual.jpg"
            alt="Advanced Semiconductor Chip & Circuit Architecture"
            fill
            className="object-cover object-center lg:object-right opacity-80 lg:opacity-100"
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Subtle cyan & electric blue glow overlays */}
        <div className="absolute right-[20%] top-[40%] w-72 h-72 rounded-full bg-[#087CF5]/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-5"
          >
            <p className="text-[#168BFF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2">
              <span>ENGINEERING</span>
              <span className="text-[#168BFF]/60">•</span>
              <span>TECHNOLOGY</span>
              <span className="text-[#168BFF]/60">•</span>
              <span>INNOVATION</span>
            </p>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight mb-5 sm:mb-6"
          >
            Engineering Intelligent Systems for{" "}
            <span className="text-[#168BFF] inline-block font-black">
              What's Next
            </span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Advanced semiconductor, embedded, software and digital engineering solutions designed to accelerate innovation from concept to scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-14"
          >
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-[#087CF5] hover:bg-[#168BFF] text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#087CF5]/25 hover:shadow-[#168BFF]/40"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center bg-[#03152B]/80 hover:bg-[#062449] border border-white/20 hover:border-white/40 text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Brand Tagline Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 pt-2"
          >
            <div className="h-[2px] w-8 sm:w-10 bg-[#087CF5] rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-slate-300 uppercase">
              ENGINEERING WHAT'S NEXT
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
