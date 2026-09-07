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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story and Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase mb-3">
              WHO WE ARE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy leading-tight mb-6">
              A Semiconductor & Engineering Technology Services Company
            </h2>
            <p className="text-base sm:text-lg text-brand-slate leading-relaxed mb-10 font-normal">
              Tranquelent helps technology-driven organizations solve complex engineering challenges across silicon, embedded platforms and software. We bring together deep engineering expertise and a collaborative approach to help you turn complexity into intelligent systems.
            </p>

            {/* Silicon -> Systems -> Software -> Strategy Flow */}
            <div className="pt-2">
              <div className="grid grid-cols-4 sm:flex sm:items-center sm:gap-3">
                {flowSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.label} className="flex items-center">
                      <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-light-grey flex items-center justify-center text-brand-blue shadow-sm border border-slate-100">
                          <StepIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-brand-dark-navy">
                          {step.label}
                        </span>
                      </div>
                      {idx < flowSteps.length - 1 && (
                        <div className="hidden sm:flex items-center px-3 text-slate-300">
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

          {/* Right Column: 3-Tile Image Composition with Diagonal Corners */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Image Collage Grid */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 relative">
                
                {/* Tile 1: Silicon Wafer & Chip (Left Column) */}
                <div className="col-span-6 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="/images/collage-wafer.jpg"
                    alt="Silicon Wafer & Advanced Chip Engineering"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Floating Overlay Badge on bottom */}
                  <div className="absolute inset-x-2 bottom-2 bg-brand-dark-navy/90 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl shadow-md border border-white/10">
                    <Link href="/services" className="group flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold leading-tight">
                        From silicon to intelligent systems.
                      </span>
                      <div className="w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Right Stack (Tiles 2 & 3) */}
                <div className="col-span-6 flex flex-col gap-3 sm:gap-4">
                  {/* Tile 2: Automotive / Mobility System */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                    <Image
                      src="/images/collage-car.jpg"
                      alt="Automotive & Embedded Systems"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  {/* Tile 3: Datacenter Server Racks */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                    <Image
                      src="/images/collage-server.jpg"
                      alt="Software & Datacenter Infrastructure"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
