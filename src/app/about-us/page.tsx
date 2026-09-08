"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, Code, Briefcase, ArrowUpRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { ABOUT_EXPERTISE, ABOUT_APPROACH, AboutExpertiseItem, AboutApproachItem } from "@/data/websiteData";
import DetailModal, { DetailModalData } from "@/components/DetailModal";

const expertiseIcons: Record<string, React.ElementType> = {
  semiconductor: Cpu,
  embedded: Layers,
  software: Code,
  consulting: Briefcase,
};

export default function AboutUsPage() {
  const [activeExpertise, setActiveExpertise] = useState<AboutExpertiseItem | null>(null);
  const [activeApproach, setActiveApproach] = useState<AboutApproachItem | null>(null);

  const expertiseModalData: DetailModalData | null = activeExpertise
    ? {
        title: activeExpertise.name,
        category: `About Us • ${activeExpertise.name}`,
        image: activeExpertise.image,
        imageAlt: activeExpertise.name,
        overview: activeExpertise.fullOverview,
        capabilitiesTitle: "Core Engineering Capabilities",
        capabilities: activeExpertise.capabilities,
        ctaText: `Inquire for ${activeExpertise.name}`,
        ctaHref: "/contact-us",
      }
    : null;

  const approachModalData: DetailModalData | null = activeApproach
    ? {
        title: activeApproach.title,
        category: `Our Approach • ${activeApproach.title}`,
        image: activeApproach.image,
        imageAlt: activeApproach.title,
        overview: activeApproach.fullOverview,
        capabilitiesTitle: "Key Principles",
        capabilities: activeApproach.keyPrinciples,
        ctaText: "Talk to Our Experts",
        ctaHref: "/contact-us",
      }
    : null;

  return (
    <div className="bg-white">
      {/* About Us Hero Banner */}
      <section className="bg-brand-dark-navy text-white py-18 lg:py-22 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              ABOUT TRANQUELENT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Engineering What&apos;s Next
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
              Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations solve complex engineering challenges across silicon, embedded platforms and software.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-18 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">
              WHO WE ARE & WHAT WE DO
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-navy leading-tight">
              Solving Complex Engineering Challenges
            </h2>
            <p className="text-base text-brand-slate leading-relaxed font-normal">
              Tranquelent brings together deep domain expertise across silicon architecture, hardware design, embedded firmware, and modern cloud platforms. We partner with technology leaders to engineer intelligent systems that power the next generation of computing.
            </p>
            <p className="text-base text-brand-slate leading-relaxed font-normal">
              Whether architecting advanced node ASICs, verifying mission-critical embedded systems, or deploying scalable cloud platforms, we engineer with precision, reliability, and scale.
            </p>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-sm hover:scale-[1.02]"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/7.5] sm:aspect-[16/7] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-blue/15">
            <Image
              src="/images/who-we-are-composite.png"
              alt="Silicon, Systems, Software & Strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Core Components / Our Areas of Expertise Section - CLICKABLE POPUPS */}
      <section className="py-20 bg-brand-light-grey border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2.5">
              CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-dark-navy tracking-tight">
              Our Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_EXPERTISE.map((exp) => {
              const Icon = expertiseIcons[exp.slug] || Cpu;
              return (
                <button
                  key={exp.name}
                  type="button"
                  onClick={() => setActiveExpertise(exp)}
                  className="group bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/40 cursor-pointer text-left"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <h3 className="text-lg font-bold text-brand-dark-navy transition-colors group-hover:text-brand-blue">
                        {exp.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-2">
                    {exp.desc}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Engineering Approach - CLICKABLE POPUPS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2.5">
            OUR APPROACH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-dark-navy tracking-tight">
            Built on Principles of Precision & Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_APPROACH.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActiveApproach(p)}
              className="group p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/40 text-left cursor-pointer flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-light-grey flex items-center justify-center mb-5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 mb-2.5">
                <h3 className="text-lg font-bold text-brand-dark-navy transition-colors group-hover:text-brand-blue">
                  {p.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-0 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-brand-slate leading-relaxed">
                {p.desc}
              </p>
              <span className="mt-3 text-xs font-semibold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                Click to explore →
              </span>
            </button>
          ))}
        </div>
      </section>

      <CTASection />

      {/* Expertise Detail Modal */}
      <DetailModal
        isOpen={Boolean(activeExpertise)}
        onClose={() => setActiveExpertise(null)}
        data={expertiseModalData}
      />

      {/* Approach Detail Modal */}
      <DetailModal
        isOpen={Boolean(activeApproach)}
        onClose={() => setActiveApproach(null)}
        data={approachModalData}
      />
    </div>
  );
}
