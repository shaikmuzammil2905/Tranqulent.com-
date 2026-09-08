"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import Link from "next/link";
import { ServiceItem } from "@/data/websiteData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (!service) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const deliverables =
    service.serviceDeliverables && service.serviceDeliverables.length > 0
      ? service.serviceDeliverables
      : service.howWeHelp;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Full-screen backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#021226]/80 backdrop-blur-sm transition-opacity"
        />

        {/* Scroll container */}
        <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header without numbering */}
            <div className="bg-[#031B38] text-white p-6 sm:p-8 relative">
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-10 touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-[#168BFF] text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">
                Core Service
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white pr-10">
                {service.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                {service.shortDescription}
              </p>
            </div>

            {/* Body Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[55vh] sm:max-h-[60vh]">
              <div>
                <h4 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-2">
                  Service Overview
                </h4>
                <p className="text-sm sm:text-base text-brand-dark-navy leading-relaxed">
                  {service.fullOverview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-wider text-brand-slate uppercase mb-3">
                  Core Engineering Capabilities &amp; Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-2 rounded-lg bg-brand-light-grey/60 border border-slate-100 text-xs sm:text-sm font-semibold text-brand-dark-navy"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-oriented deliverables section (Replacing "Key Engineering Challenges Solved") */}
              <div className="bg-brand-light-grey/80 rounded-xl p-5 border border-slate-200/80">
                <h4 className="text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-blue" />
                  <span>Engineering Deliverables &amp; Service Highlights</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-slate">
                  {deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-blue font-bold text-base leading-none">•</span>
                      <span className="text-brand-dark-navy font-medium">{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                href={`/services/${service.slug}`}
                onClick={onClose}
                className="text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-electric-blue inline-flex items-center gap-1"
              >
                <span>View Full Service Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-electric-blue text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
