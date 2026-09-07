"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { ServiceItem } from "@/data/websiteData";

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-dark-navy/70 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 my-8"
        >
          {/* Header */}
          <div className="bg-brand-dark-navy text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-brand-electric-blue text-sm font-bold tracking-widest uppercase mb-1">
              Capability {service.number}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              {service.shortDescription}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            <div>
              <h4 className="text-sm font-bold tracking-wider text-brand-slate uppercase mb-2">
                Overview
              </h4>
              <p className="text-base text-brand-dark-navy leading-relaxed">
                {service.fullOverview}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-wider text-brand-slate uppercase mb-3">
                Core Services & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.services.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm font-semibold text-brand-dark-navy">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-light-grey rounded-xl p-5 border border-slate-100">
              <h4 className="text-sm font-bold tracking-wider text-brand-dark-navy uppercase mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-brand-blue" />
                Key Engineering Challenges Solved
              </h4>
              <ul className="space-y-1.5 text-sm text-brand-slate">
                {service.keyChallenges.map((ch) => (
                  <li key={ch} className="flex items-start gap-2">
                    <span className="text-brand-blue font-bold">•</span>
                    <span>{ch}</span>
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
              className="text-sm font-bold text-brand-blue hover:text-brand-electric-blue inline-flex items-center gap-1"
            >
              <span>View Full Service Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact-us"
              onClick={onClose}
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-electric-blue text-white px-5 py-2.5 rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
