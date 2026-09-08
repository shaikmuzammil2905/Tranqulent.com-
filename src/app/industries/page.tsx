"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Car, Factory, Radio, Cpu, Sparkles, ShieldCheck } from "lucide-react";
import { INDUSTRIES_DATA, ADDITIONAL_INDUSTRIES } from "@/data/websiteData";
import CTASection from "@/components/CTASection";

export default function IndustriesPage() {

  const getAdditionalIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="w-5 h-5 text-brand-blue" />;
      case "factory":
        return <Factory className="w-5 h-5 text-brand-blue" />;
      case "network":
        return <Radio className="w-5 h-5 text-brand-blue" />;
      case "tech":
        return <ShieldCheck className="w-5 h-5 text-brand-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  // Map industry IDs to match header dropdown anchors
  const getAnchorId = (id: string) => {
    if (id.includes("semiconductor")) return "semiconductor";
    if (id.includes("digital")) return "digital";
    if (id.includes("ai")) return "ai-solutions";
    return id;
  };

  return (
    <div className="bg-white">
      {/* Industries Banner */}
      <section className="bg-brand-dark-navy text-white py-18 lg:py-22 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              TARGET SECTORS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Industries We Serve
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
              Delivering specialized, mission-critical engineering solutions across semiconductor ecosystems, smart mobility, industrial automation, telecommunications, and cutting-edge digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Industries (Semiconductor, Digital, AI) */}
      <section className="py-18 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {INDUSTRIES_DATA.map((ind, idx) => (
          <div
            key={ind.id}
            id={getAnchorId(ind.id)}
            className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-light-grey text-brand-blue text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <span>{ind.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy leading-tight">
                {ind.title}
              </h2>
              <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
                {ind.description}
              </p>

              <div>
                <h3 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-3">
                  Domain Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ind.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-sm font-semibold text-brand-dark-navy">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm hover:scale-[1.02]"
                >
                  <span>Inquire for {ind.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/15 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Additional Industries — Full Page Sections (no modal) */}
      <section className="py-18 lg:py-24 bg-brand-light-grey border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2.5">
              EXPANDING REACH
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-dark-navy tracking-tight">
              Additional Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-brand-slate mt-3 leading-relaxed">
              Bringing high-reliability engineering practices to technology-driven verticals.
            </p>
          </div>

          <div className="space-y-20">
            {ADDITIONAL_INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.slug}
                id={ind.slug}
                className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-brand-blue text-xs font-bold uppercase tracking-wider shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    <span>{ind.name}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy leading-tight">
                    {ind.name}
                  </h2>
                  <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
                    {ind.fullOverview}
                  </p>

                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-3">
                      Domain Engineering Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {ind.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-sm font-semibold text-brand-dark-navy">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm hover:scale-[1.02]"
                    >
                      <span>Inquire for {ind.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/15 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
