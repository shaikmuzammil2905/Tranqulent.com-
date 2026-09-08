"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Car, Factory, Radio, Cpu, Sparkles } from "lucide-react";
import { INDUSTRIES_DATA, ADDITIONAL_INDUSTRIES, AdditionalIndustryItem } from "@/data/websiteData";
import CTASection from "@/components/CTASection";
import DetailModal, { DetailModalData } from "@/components/DetailModal";

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState<AdditionalIndustryItem | null>(null);

  const getAdditionalIcon = (iconName: string) => {
    switch (iconName) {
      case "car":
        return <Car className="w-5 h-5 text-brand-blue" />;
      case "factory":
        return <Factory className="w-5 h-5 text-brand-blue" />;
      case "network":
        return <Radio className="w-5 h-5 text-brand-blue" />;
      case "tech":
        return <Cpu className="w-5 h-5 text-brand-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  const modalData: DetailModalData | null = activeIndustry
    ? {
        title: activeIndustry.name,
        category: `Industries • ${activeIndustry.name}`,
        image: activeIndustry.image,
        imageAlt: activeIndustry.name,
        overview: activeIndustry.fullOverview,
        capabilitiesTitle: "Domain Engineering Capabilities",
        capabilities: activeIndustry.capabilities,
        ctaText: `Inquire for ${activeIndustry.name}`,
        ctaHref: "/contact-us",
      }
    : null;

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

      {/* Primary & Secondary Industries */}
      <section className="py-18 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {INDUSTRIES_DATA.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.id.includes("semiconductor") ? "semiconductor" : ind.id.includes("digital") ? "digital" : `ind-${ind.id}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
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

      {/* Expanding Reach Section - Additional Industries as Clickable Popup Cards */}
      <section className="py-20 bg-brand-light-grey border-y border-slate-200/60">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDITIONAL_INDUSTRIES.map((ind) => (
              <button
                key={ind.name}
                type="button"
                onClick={() => setActiveIndustry(ind)}
                className="group bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/40 cursor-pointer text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white shadow-2xs">
                    {getAdditionalIcon(ind.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark-navy mb-2.5 transition-colors group-hover:text-brand-blue">
                    {ind.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-2">
                  {ind.description}
                </p>
                <span className="mt-3 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Industry Detail Popup Modal */}
      <DetailModal
        isOpen={Boolean(activeIndustry)}
        onClose={() => setActiveIndustry(null)}
        data={modalData}
      />
    </div>
  );
}
