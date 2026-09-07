"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, ChevronsRight, Scale } from "lucide-react";
import { WHY_TRANQUELENT_PILLARS } from "@/data/websiteData";

export default function WhyTranquelent() {
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
            <div
              key={pillar.title}
              className={`group flex flex-col p-4 sm:p-5 lg:p-0 rounded-2xl lg:rounded-none transition-all duration-300 hover:bg-brand-light-grey/40 lg:hover:bg-transparent ${
                idx === 0 ? "lg:pr-8" : idx === 3 ? "lg:pl-8" : "lg:px-8"
              }`}
            >
              {/* Pillar Icon */}
              <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5 shadow-xs border border-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                {getIcon(pillar.icon)}
              </div>

              {/* Pillar Title */}
              <h3 className="text-lg font-bold text-brand-dark-navy mb-2.5 transition-colors group-hover:text-brand-blue">
                {pillar.title}
              </h3>

              {/* Pillar Description */}
              <p className="text-sm text-brand-slate leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
