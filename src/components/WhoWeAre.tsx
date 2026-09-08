"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Server, LayoutGrid, ChevronsRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { WHO_WE_ARE_FLOW, FlowStepItem } from "@/data/websiteData";
import DetailModal, { DetailModalData } from "./DetailModal";

const stepIcons: Record<string, React.ElementType> = {
  silicon: Cpu,
  systems: Server,
  software: LayoutGrid,
  strategy: ChevronsRight,
};

export default function WhoWeAre() {
  const [activeStep, setActiveStep] = useState<FlowStepItem | null>(null);

  const modalData: DetailModalData | null = activeStep
    ? {
        title: activeStep.title,
        category: `Who We Are • ${activeStep.label}`,
        subtitle: activeStep.subtitle,
        image: activeStep.image,
        imageAlt: activeStep.title,
        overview: activeStep.description,
        capabilitiesTitle: "Core Engineering Scope",
        capabilities: activeStep.capabilities,
        secondaryTitle: "Key Technical Deliverables",
        secondaryItems: activeStep.deliverables,
        ctaText: `Inquire for ${activeStep.label}`,
        ctaHref: "/contact-us",
      }
    : null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Story and 2-per-row interactive grid */}
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
              A Semiconductor &amp; Engineering Technology Services Company
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-brand-slate leading-relaxed mb-7 font-normal">
              Tranquelent helps technology-driven organizations solve complex engineering challenges across silicon, embedded platforms and software. We bring together deep engineering expertise and a collaborative approach to help you turn complexity into intelligent systems.
            </p>

            {/* 2-per-row grid of Silicon, Systems, Software, Strategy (opens popup on click) */}
            <div className="pt-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Click to explore each core focus area
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {WHO_WE_ARE_FLOW.map((step) => {
                  const StepIcon = stepIcons[step.slug] || Cpu;
                  return (
                    <button
                      key={step.slug}
                      type="button"
                      onClick={() => setActiveStep(step)}
                      className="group relative flex items-center gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white hover:bg-brand-light-grey/60 hover:border-brand-blue/50 text-left transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-brand-light-grey group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center text-brand-blue shadow-2xs border border-slate-100 transition-all duration-200 flex-shrink-0">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-bold text-brand-dark-navy group-hover:text-brand-blue transition-colors">
                            {step.label}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <span className="text-2xs sm:text-xs text-slate-400 group-hover:text-slate-500 line-clamp-1">
                          View details
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Composite visual */}
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

      {/* Interactive Detail Modal for Silicon, Systems, Software, Strategy */}
      <DetailModal
        isOpen={Boolean(activeStep)}
        onClose={() => setActiveStep(null)}
        data={modalData}
      />
    </section>
  );
}
