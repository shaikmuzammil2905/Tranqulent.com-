import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Code2, Layers, LineChart, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Careers | Tranquelent - Engineering What's Next",
  description: "Explore engineering and technology careers at Tranquelent across silicon design, embedded hardware, software engineering, and technical consulting.",
};

const disciplines = [
  {
    title: "Silicon & VLSI Engineering",
    icon: Cpu,
    desc: "ASIC/SoC design, RTL, UVM verification, synthesis, and physical design engineering.",
  },
  {
    title: "Embedded & Firmware Systems",
    icon: Layers,
    desc: "RTOS, BSP development, Linux kernel customization, and hardware-software integration.",
  },
  {
    title: "Software & Digital Platforms",
    icon: Code2,
    desc: "Cloud infrastructure, AI/ML pipelines, real-time data streaming, and scalable web platforms.",
  },
  {
    title: "Technical Advisory & Architecture",
    icon: LineChart,
    desc: "System architecture, feasibility assessment, and strategic technology consulting.",
  },
];

const reasons = [
  "Solve complex, mission-critical engineering problems",
  "Work on advanced semiconductor nodes and emerging hardware platforms",
  "Collaborative culture focused on technical depth and innovation",
  "Engage with high-caliber engineering teams and industry leaders",
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Careers Banner */}
      <section className="bg-brand-dark-navy text-white py-18 lg:py-22 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              CAREERS AT TRANQUELENT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              Engineer What's Next With Us
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
              Tranquelent is a home for passionate engineers and technology specialists dedicated to building intelligent systems from silicon to software.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines Section (image copy 15) with increased heading and smooth popup effects */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase mb-2.5">
            ENGINEERING DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-brand-dark-navy tracking-tight">
            Where Technical Excellence Thrives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {disciplines.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/40 cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light-grey text-brand-blue flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark-navy mb-2.5 transition-colors group-hover:text-brand-blue">
                    {d.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mt-2">
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Build Your Career at Tranquelent */}
        <div className="bg-brand-light-grey rounded-2xl p-8 sm:p-12 border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl font-extrabold text-brand-dark-navy">
                Why Engineers Choose Tranquelent
              </h3>
              <p className="text-sm sm:text-base text-brand-slate leading-relaxed font-normal">
                We believe in deep technical specialization, continuous learning, and providing engineers the freedom to solve complex challenges alongside global peers.
              </p>
              <ul className="space-y-2.5 pt-2">
                {reasons.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-sm font-semibold text-brand-dark-navy">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center space-y-5">
              <div className="inline-block text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-light-grey px-3.5 py-1 rounded-full">
                OPPORTUNITIES
              </div>
              <h4 className="text-xl font-bold text-brand-dark-navy">
                Explore Opportunities with Tranquelent
              </h4>
              <p className="text-sm text-brand-slate">
                We are always seeking talented silicon, hardware, and software engineers to join our growing global team.
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-sm hover:scale-[1.02]"
                >
                  <span>Connect with Our Talent Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
