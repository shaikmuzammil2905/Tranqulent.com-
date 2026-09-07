"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CAPABILITIES_DATA, ServiceItem } from "@/data/websiteData";
import CapabilityCard from "./CapabilityCard";
import ServiceModal from "./ServiceModal";

export default function Capabilities() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-blue uppercase mb-2">
              OUR CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark-navy tracking-tight">
              Core Engineering Capabilities
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-electric-blue transition-colors self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CAPABILITIES_DATA.map((item) => (
            <CapabilityCard
              key={item.id}
              item={item}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </motion.div>

      </div>

      {/* Interactive Detail Modal on Card Click */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
