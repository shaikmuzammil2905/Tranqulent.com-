"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative bg-[#03152B] text-white overflow-hidden min-h-[55vh] md:min-h-[45vh] lg:min-h-[55vh] flex items-center">
      {/* Desktop background image */}
      <div className="absolute inset-0 z-0 w-full h-full hidden md:block">
        <Image
          src="/images/hero-bg-cover.png"
          alt="Advanced Semiconductor Circuit Architecture"
          fill
          priority
          className="object-cover object-center opacity-100"
          sizes="100vw"
        />
        {/* Slight left gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03152B] via-[#03152B]/60 to-transparent z-10" />
      </div>
      {/* Mobile background image */}
      <div className="absolute inset-0 z-0 w-full h-full block md:hidden">
        <Image
          src="/images/hero-bg-mobile.png"
          alt="Mobile Hero Background"
          fill
          priority
          className="object-cover object-center opacity-100"
          sizes="100vw"
        />
        {/* Slight left gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03152B] via-[#03152B]/60 to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-3.5 sm:mb-4">
            <p className="text-[#168BFF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase inline-flex items-center gap-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]">
              <span>ENGINEERING</span>
              <span className="text-[#168BFF]/60">•</span>
              <span>TECHNOLOGY</span>
              <span className="text-[#168BFF]/60">•</span>
              <span>INNOVATION</span>
            </p>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-white leading-[1.15] tracking-tight mb-4 sm:mb-5 drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
            Engineering Intelligent Systems for <span className="text-[#168BFF] inline-block font-black">What's Next</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-7 sm:mb-8 max-w-xl drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]">
            Advanced semiconductor, embedded, software and digital engineering solutions designed to accelerate innovation from concept to scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Link href="/contact-us" className="group inline-flex items-center justify-center bg-[#087CF5] hover:bg-[#168BFF] text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#087CF5]/25 hover:shadow-[#168BFF]/40 hover:scale-[1.02]">
              <span>Talk to Our Experts</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="group inline-flex items-center justify-center bg-[#03152B]/80 hover:bg-[#062449] border border-white/25 hover:border-white/50 text-white px-6 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02]">
              <span>Explore Our Services</span>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform opacity-70 group-hover:opacity-100" />
            </Link>
          </motion.div>

          {/* Brand Tagline Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3.5 sm:mb-4"
          >
          </motion.div>


        </div>
      </div>
    </section>
  );
}
