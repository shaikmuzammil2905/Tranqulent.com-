import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertCircle, ArrowUpRight, Cpu, Layers, Cloud, Users } from "lucide-react";
import { CAPABILITIES_DATA } from "@/data/websiteData";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Engineering Capabilities | Tranquelent",
  description: "Explore Tranquelent's engineering capabilities across semiconductor, embedded systems, software & digital, and technology consulting.",
};

export default function ServicesPage() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "chip":
        return <Cpu className="w-8 h-8 text-brand-blue" />;
      case "embedded":
        return <Layers className="w-8 h-8 text-brand-blue" />;
      case "software":
        return <Cloud className="w-8 h-8 text-brand-blue" />;
      case "consulting":
        return <Users className="w-8 h-8 text-brand-blue" />;
      default:
        return <Cpu className="w-8 h-8 text-brand-blue" />;
    }
  };

  return (
    <div className="bg-white">
      {/* Services Header Banner */}
      <section className="bg-brand-dark-navy text-white py-18 lg:py-22 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              SERVICES & CAPABILITIES
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Engineering Capabilities
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
              Engineering expertise across silicon, systems, software and strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Sections (4 Engineering Service Sections) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {CAPABILITIES_DATA.map((svc) => (
            <div
              key={svc.id}
              id={svc.slug}
              className="scroll-mt-28 border-b border-slate-100 pb-20 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left Header Column */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-light-grey flex items-center justify-center shadow-xs border border-slate-100">
                      {getIcon(svc.iconType)}
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase block mb-1">
                        CAPABILITY {svc.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark-navy leading-tight mb-3">
                        {svc.title}
                      </h2>
                      <p className="text-sm sm:text-base text-brand-slate leading-relaxed font-normal">
                        {svc.shortDescription}
                      </p>
                    </div>

                    {/* Dedicated Service Image with Smooth Popup/Hover Effect */}
                    <div className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-slate-200/80 transition-all duration-300 hover:scale-[1.025] hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/15">
                      <Image
                        src={svc.image}
                        alt={`${svc.title} Engineering Execution`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>

                    <div>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-brand-electric-blue transition-colors group"
                      >
                        <span>Explore Dedicated {svc.title} Page</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Content Columns */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Overview */}
                  <div className="bg-brand-card-bg rounded-2xl p-6 sm:p-8 border border-slate-100">
                    <h3 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-3">
                      Overview
                    </h3>
                    <p className="text-base sm:text-lg text-brand-dark-navy leading-relaxed font-normal">
                      {svc.fullOverview}
                    </p>
                  </div>

                  {/* Key Services Scope */}
                  <div>
                    <h3 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-4">
                      Key Services & Scope
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.services.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs transition-all duration-200 hover:scale-[1.01] hover:border-brand-blue/30"
                        >
                          <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                          <span className="text-sm font-bold text-brand-dark-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions 2-col */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Typical Challenges */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/30">
                      <h4 className="text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-brand-blue" />
                        Engineering Deliverables
                      </h4>
                      <ul className="space-y-2 text-sm text-brand-slate font-normal">
                        {svc.serviceDeliverables.map((ch: string) => (
                          <li key={ch} className="flex items-start gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How Tranquelent Supports */}
                    <div className="bg-[#041935] text-white rounded-2xl p-6 border border-white/10 shadow-xs transition-all duration-300 hover:shadow-md hover:border-brand-blue/30">
                      <h4 className="text-xs font-bold tracking-wider text-[#168BFF] uppercase mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#168BFF]" />
                        How Tranquelent Supports Clients
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-300 font-normal">
                        {svc.howWeHelp.map((sol) => (
                          <li key={sol} className="flex items-start gap-2">
                            <span className="text-[#168BFF] font-bold">•</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Section CTA */}
                  <div className="pt-2">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-electric-blue text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm hover:scale-[1.02]"
                    >
                      <span>Consult on {svc.title}</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
