"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Factory, Radio, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { ADDITIONAL_INDUSTRIES } from "@/data/websiteData";

export default function Industries() {
  const getAdditionalIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="w-4 h-4 text-brand-blue" />;
      case "factory":
        return <Factory className="w-4 h-4 text-brand-blue" />;
      case "network":
        return <Radio className="w-4 h-4 text-brand-blue" />;
      case "tech":
        return <Cpu className="w-4 h-4 text-brand-blue" />;
      default:
        return <Cpu className="w-4 h-4 text-brand-blue" />;
    }
  };

  return (
    <section className="py-18 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Content & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 lg:mb-14">
          <div className="lg:col-span-8">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase mb-2">
              INDUSTRIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy tracking-tight mb-3">
              Focused on What Matters
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-brand-slate max-w-2xl font-normal leading-relaxed">
              We primarily serve the <strong className="font-semibold text-brand-dark-navy">Semiconductor & Electronics</strong> industry, with a growing focus on <strong className="font-semibold text-brand-dark-navy">Technology & Digital Engineering</strong>.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/industries"
              className="group inline-flex items-center justify-center border border-brand-blue/40 text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-md hover:shadow-brand-blue/20"
            >
              <span>Explore Industries</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Industry Visual Cards Grid with smooth popup/hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Card 1: Semiconductor & Electronics (Primary / SOC Chip image copy 2.png) */}
          <Link
            href="/industries#semiconductor"
            className="group md:col-span-6 lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col justify-end p-6 transition-all duration-300 hover:scale-[1.025] hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20"
          >
            <Image
              src="/images/ind-semiconductor-soc.jpg"
              alt="Semiconductor & Electronics Industry - SOC Architecture"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/95 via-brand-dark-navy/35 to-transparent z-10" />

            <div className="relative z-20">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1 group-hover:text-brand-electric-blue transition-colors">
                Semiconductor & Electronics
              </h3>

            </div>
          </Link>

          {/* Card 2: Technology & Digital Engineering (Secondary Focus / Robotics & Automation image copy 4.png) */}
          <Link
            href="/industries#digital"
            className="group md:col-span-6 lg:col-span-4 relative aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col justify-end p-6 transition-all duration-300 hover:scale-[1.025] hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20"
          >
            <Image
              src="/images/ind-digital-robotics.jpg"
              alt="Technology & Digital Engineering Industry - Smart Automation"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/95 via-brand-dark-navy/35 to-transparent z-10" />

            <div className="relative z-20">
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1 group-hover:text-brand-electric-blue transition-colors">
                Technology & Digital Engineering
              </h3>

            </div>
          </Link>

          {/* Card 3: Additional Focus Areas List */}
          <div className="md:col-span-12 lg:col-span-3 bg-brand-light-grey rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-brand-blue/30">
            <div>
              <h3 className="text-sm font-extrabold text-brand-dark-navy tracking-wider uppercase mb-5">
                Additional Focus Areas
              </h3>

              <div className="space-y-3">
                {ADDITIONAL_INDUSTRIES.map((ind) => (
                  <div
                    key={ind.name}
                    className="flex items-center gap-3 p-2 rounded-xl transition-all duration-200 hover:bg-white hover:scale-[1.02] hover:shadow-xs cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white shadow-xs flex items-center justify-center flex-shrink-0 border border-slate-100">
                      {getAdditionalIcon(ind.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-dark-navy">
                      {ind.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5">
              <Link
                href="/industries"
                className="text-xs font-bold text-brand-blue hover:text-brand-electric-blue inline-flex items-center gap-1 group"
              >
                <span>View Domain Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
