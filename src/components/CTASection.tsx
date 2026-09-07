"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-[#03182E] text-white overflow-hidden py-16 lg:py-20 border-t border-white/5">
      {/* Background visual with glowing globe/network */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full opacity-70 lg:opacity-90">
          <Image
            src="/images/cta-globe-bg.jpg"
            alt="Global Engineering Technology Network"
            fill
            className="object-cover object-right"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03182E] via-[#03182E]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              LET'S BUILD WHAT'S NEXT
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Turn Your Engineering Challenges into Intelligent Systems
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-[#087CF5] hover:bg-[#168BFF] text-white px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#087CF5]/30 hover:shadow-[#168BFF]/40"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
