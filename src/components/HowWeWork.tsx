"use client";

import { motion } from "framer-motion";
import { Users, CalendarCheck, Lightbulb } from "lucide-react";
import { HOW_WE_WORK_MODELS } from "@/data/websiteData";

export default function HowWeWork() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "team":
        return <Users className="w-6 h-6 text-[#168BFF]" />;
      case "project":
        return <CalendarCheck className="w-6 h-6 text-[#168BFF]" />;
      case "consulting":
        return <Lightbulb className="w-6 h-6 text-[#168BFF]" />;
      default:
        return <Users className="w-6 h-6 text-[#168BFF]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#031D3B] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#087CF5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              HOW WE WORK
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              Collaborative. Focused. Outcome-Driven.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We work as an extension of your team, bringing the right expertise, processes and technology to deliver real engineering outcomes.
            </p>
          </motion.div>

          {/* Right Column: 3 Engagement Models */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {HOW_WE_WORK_MODELS.map((model) => (
              <div
                key={model.title}
                className="bg-[#052449]/70 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#168BFF]/50 hover:bg-[#062B55] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#087CF5]/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {getIcon(model.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {model.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mt-2">
                  {model.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
