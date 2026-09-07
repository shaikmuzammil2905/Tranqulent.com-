"use client";

import Image from "next/image";
import Link from "next/link";
import { Cpu, Server, LayoutGrid, ChevronsRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const flowSteps = [
  { label: "Silicon", icon: Cpu },
  { label: "Systems", icon: Server },
  { label: "Software", icon: LayoutGrid },
  { label: "Strategy", icon: ChevronsRight },
];

export default function WhoWeAre() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story and Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase mb-2 sm:mb-3">
              WHO WE ARE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy leading-tight mb-5">
              A Semiconductor & Engineering Technology Services Company
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-brand-slate leading-relaxed mb-8 font-normal">
              Tranquelent helps technology-driven organizations solve complex engineering challenges across silicon, embedded platforms and software. We bring together deep engineering expertise and a collaborative approach to help you turn complexity into intelligent systems.
            </p>

            {/* Silicon -> Systems -> Software -> Strategy Flow */}
            <div className="pt-1">
              <div className="grid grid-cols-4 sm:flex sm:items-center sm:gap-3">
                {flowSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center">
                      <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-light-grey flex items-center justify-center text-brand-blue shadow-xs border border-slate-100 transition-transform duration-300 hover:scale-105">
                          <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-brand-dark-navy">
                          {step.label}
                        </span>
                      </div>
                      {idx < flowSteps.length - 1 && (
                        <div className="hidden sm:flex items-center px-2.5 text-slate-300">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Res Composite Image (image copy 6.png) with balanced size & popup effect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/15">
              <div className="relative aspect-[16/7.5] sm:aspect-[16/7] w-full">
                <Image
                  src="/images/who-we-are-composite.png"
                  alt="Tranquelent - From Silicon to Intelligent Systems"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
