import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Cpu, Layers, Cloud, Users } from "lucide-react";
import { CAPABILITIES_DATA } from "@/data/websiteData";
import CTASection from "@/components/CTASection";

export async function generateStaticParams() {
  return CAPABILITIES_DATA.map((svc) => ({
    slug: svc.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = CAPABILITIES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const getIcon = () => {
    switch (service.iconType) {
      case "chip":
        return <Cpu className="w-10 h-10 text-brand-blue" />;
      case "embedded":
        return <Layers className="w-10 h-10 text-brand-blue" />;
      case "software":
        return <Cloud className="w-10 h-10 text-brand-blue" />;
      case "consulting":
        return <Users className="w-10 h-10 text-brand-blue" />;
    }
  };

  return (
    <div className="bg-white">
      {/* Detail Header Banner */}
      <section className="bg-brand-dark-navy text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-bold tracking-widest text-[#168BFF] uppercase hover:text-white transition-colors mb-6 gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Capabilities</span>
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#168BFF] uppercase block mb-2">
              CAPABILITY {service.number}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-xs font-bold tracking-widest text-brand-blue uppercase mb-3">
                DOMAIN OVERVIEW
              </h2>
              <h3 className="text-2xl font-bold text-brand-dark-navy mb-4">
                Engineering Excellence & Technical Execution
              </h3>
              <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
                {service.fullOverview}
              </p>
            </div>

            {/* Scope of Services */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark-navy mb-6">
                Specialized Service Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.services.map((svc) => (
                  <div
                    key={svc}
                    className="flex items-start gap-3 p-4 rounded-xl bg-brand-light-grey border border-slate-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-brand-dark-navy">{svc}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Challenges & How Tranquelent Supports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h4 className="text-sm font-bold text-brand-dark-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-brand-blue" />
                  Key Challenges Solved
                </h4>
                <ul className="space-y-3 text-sm text-brand-slate">
                  {service.keyChallenges.map((ch) => (
                    <li key={ch} className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-dark-navy text-white rounded-2xl p-6 border border-white/10 shadow-sm">
                <h4 className="text-sm font-bold text-[#168BFF] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#168BFF]" />
                  How Tranquelent Delivers
                </h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  {service.howWeHelp.map((sol) => (
                    <li key={sol} className="flex items-start gap-2">
                      <span className="text-[#168BFF] font-bold">•</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar CTA Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#031D3B] text-white p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-[#087CF5]/20 flex items-center justify-center mb-6">
                {getIcon()}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Need specialized {service.title} expertise?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                Connect with our technical leads to review your architecture, verification strategy, or team scaling requirements.
              </p>
              <Link
                href="/contact-us"
                className="w-full bg-brand-blue hover:bg-brand-electric-blue text-white py-3.5 px-6 rounded-full font-semibold text-center text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
