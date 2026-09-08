"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export interface DetailModalData {
  title: string;
  category?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  overview: string;
  capabilitiesTitle?: string;
  capabilities?: string[];
  secondaryTitle?: string;
  secondaryItems?: string[];
  ctaText?: string;
  ctaHref?: string;
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: DetailModalData | null;
}

export default function DetailModal({ isOpen, onClose, data }: DetailModalProps) {
  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#021226]/80 backdrop-blur-sm transition-opacity"
        />

        {/* Dialog centering wrapper */}
        <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/90 my-6 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3.5 right-3.5 z-30 p-2.5 rounded-full bg-[#021226]/60 hover:bg-[#021226]/90 text-white backdrop-blur-md transition-all shadow-md hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Optional Image Banner with Gradient Overlay */}
            {data.image && (
              <div className="relative aspect-[16/8.5] sm:aspect-[16/7.5] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.imageAlt || data.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03152B] via-[#03152B]/40 to-transparent" />
                
                {/* Overlay Title / Category info */}
                <div className="absolute bottom-4 left-5 right-5 z-20">
                  {data.category && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087CF5]/90 text-white text-xs font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>{data.category}</span>
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                    {data.title}
                  </h3>
                  {data.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-200 font-medium mt-1 drop-shadow-sm line-clamp-1">
                      {data.subtitle}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Content Body */}
            <div className="p-5 sm:p-7 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* If no image banner was present, display title inside body */}
              {!data.image && (
                <div className="border-b border-slate-100 pb-4">
                  {data.category && (
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">
                      {data.category}
                    </div>
                  )}
                  <h3 className="text-2xl font-extrabold text-brand-dark-navy">
                    {data.title}
                  </h3>
                </div>
              )}

              {/* Overview text */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-brand-slate uppercase mb-2">
                  Overview
                </h4>
                <p className="text-sm sm:text-base text-brand-dark-navy leading-relaxed">
                  {data.overview}
                </p>
              </div>

              {/* Capabilities List */}
              {data.capabilities && data.capabilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-brand-slate uppercase mb-3">
                    {data.capabilitiesTitle || "Key Capabilities & Engineering Scope"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.capabilities.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2 rounded-lg bg-brand-light-grey/60 border border-slate-100"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-dark-navy">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Secondary deliverables list if provided */}
              {data.secondaryItems && data.secondaryItems.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-xs font-bold tracking-widest text-brand-dark-navy uppercase mb-2">
                    {data.secondaryTitle || "Engineering Deliverables"}
                  </h4>
                  <ul className="space-y-1.5">
                    {data.secondaryItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-slate">
                        <span className="text-brand-blue font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-5 sm:px-7 py-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-xs sm:text-sm font-semibold text-brand-slate hover:text-brand-dark-navy transition-colors order-2 sm:order-1"
              >
                Close
              </button>
              <Link
                href={data.ctaHref || "/contact-us"}
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-brand-blue/20 transition-all hover:scale-102 order-1 sm:order-2"
              >
                <span>{data.ctaText || "Talk to Our Experts"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
