"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, ChevronsRight, Scale, ArrowUpRight } from "lucide-react";
import { WHY_TRANQUELENT_PILLARS, WhyPillarItem } from "@/data/websiteData";
import DetailModal, { DetailModalData } from "./DetailModal";

export default function WhyTranquelent() {
  const [activePillar, setActivePillar] = useState<WhyPillarItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "expertise":
        return <Cpu className="w-5 h-5" />;
      case "industry":
        return <Globe className="w-5 h-5" />;
      case "delivery":
        return <ChevronsRight className="w-5 h-5" />;
      case "scale":
        return <Scale className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  const modalData: DetailModalData | null = activePillar
    ? {
        title: activePillar.title,
        category: `Why Tranquelent • ${activePillar.title}`,
        image: activePillar.image,
        imageAlt: activePillar.title,
        overview: activePillar.fullOverview,
        capabilitiesTitle: "Key Strengths & Differentiators",
        capabilities: activePillar.keyStrengths,
        ctaText: "Talk to Our Experts",
        ctaHref: "/contact-us",
      }
    : null;

  return (
    <section className="py-18 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase mb-2">
            WHY TRANQUELENT?
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy tracking-tight">
            Built on Engineering Principles
          </h2>
        </div>

        {/* 4 Pillars with Vertical Divider Lines on Desktop and smooth hover interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200"
        >
          {WHY_TRANQUELENT_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => setActivePillar(pillar)}
              className={`group flex flex-col p-4 sm:p-5 lg:p-0 rounded-2xl lg:rounded-none transition-all duration-300 hover:bg-brand-light-grey/40 lg:hover:bg-transparent text-left cursor-pointer ${
                idx === 0 ? "lg:pr-8" : idx === 3 ? "lg:pl-8" : "lg:px-8"
              }`}
            >
              {/* Pillar Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5 shadow-xs border border-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                {getIcon(pillar.icon)}
              </div>

              {/* Pillar Title with Arrow */}
              <div className="flex items-center gap-2 mb-2.5">
                <h3 className="text-lg font-bold text-brand-dark-navy transition-colors group-hover:text-brand-blue">
                  {pillar.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Pillar Description */}
              <p className="text-sm text-brand-slate leading-relaxed font-normal">
                {pillar.description}
              </p>

              {/* Explore link hint */}
              <span className="mt-3 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                Click to explore →
              </span>
            </button>
          ))}
        </motion.div>

      </div>

      {/* Interactive Detail Modal for each pillar */}
      <DetailModal
        isOpen={Boolean(activePillar)}
        onClose={() => setActivePillar(null)}
        data={modalData}
      />
    </section>
  );
}
