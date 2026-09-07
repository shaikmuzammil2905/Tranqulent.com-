import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, Code, Briefcase, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Tranquelent - Engineering What's Next",
  description: "Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.",
};

const expertiseList = [
  { name: "Semiconductor Engineering", icon: Cpu, desc: "VLSI, ASIC/SoC, RTL Design, UVM Verification, Physical Design" },
  { name: "Embedded & Hardware Engineering", icon: Layers, desc: "Firmware, RTOS, FPGA, Board Bring-Up, Connected Devices" },
  { name: "Software & Digital Engineering", icon: Code, desc: "Cloud Architecture, AI & Data Engineering, Platforms" },
  { name: "Engineering & Technology Consulting", icon: Briefcase, desc: "System Architecture, Roadmaps, Technical Advisory" },
];

const corePillars = [
  { title: "Engineering Excellence", desc: "Rigorous technical methodologies and specialized domain depth." },
  { title: "Collaboration", desc: "Working as a seamless extension of your engineering leadership and teams." },
  { title: "Innovation", desc: "Translating cutting-edge silicon and software concepts into robust systems." },
  { title: "Scalable Delivery", desc: "Flexible engagement models designed to adapt from concept to scale." },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* About Us Hero Banner */}
      <section className="bg-brand-dark-navy text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              ABOUT TRANQUELENT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Engineering What's Next
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations solve complex engineering challenges across silicon, embedded platforms and software.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Connect With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/images/who-we-are-collage.png"
              alt="Silicon, Systems, Software & Strategy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="py-20 bg-brand-light-grey border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2">
              CORE CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-navy">
              Our Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseList.map((exp) => {
              const Icon = exp.icon;
              return (
                <div key={exp.name} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark-navy mb-2">
                      {exp.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-2">
                    {exp.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Engineering Approach */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2">
            OUR APPROACH
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-navy">
            Built on Principles of Precision & Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl bg-white border border-slate-200">
              <CheckCircle2 className="w-6 h-6 text-brand-blue mb-4" />
              <h3 className="text-lg font-bold text-brand-dark-navy mb-2">{p.title}</h3>
              <p className="text-sm text-brand-slate leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
