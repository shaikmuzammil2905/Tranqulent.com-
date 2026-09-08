"use client";

import Image from "next/image";
import { Cpu, Layers, Cloud, Users, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/websiteData";

interface CapabilityCardProps {
  item: ServiceItem;
  onSelect: (item: ServiceItem) => void;
}

export default function CapabilityCard({ item, onSelect }: CapabilityCardProps) {
  const getIcon = () => {
    switch (item.iconType) {
      case "chip":
        return <Cpu className="w-6 h-6" />;
      case "embedded":
        return <Layers className="w-6 h-6" />;
      case "software":
        return <Cloud className="w-6 h-6" />;
      case "consulting":
        return <Users className="w-6 h-6" />;
    }
  };

  const hasBgImage = Boolean(item.cardBgImage);
  const isDark = hasBgImage || item.isFlagship;

  return (
    <div
      onClick={() => onSelect(item)}
      className={`group cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out relative overflow-hidden border ${
        hasBgImage
          ? "border-[#087CF5]/50 text-white shadow-xl hover:shadow-2xl hover:shadow-[#087CF5]/30 hover:border-[#168BFF] hover:-translate-y-1.5 hover:scale-[1.02]"
          : item.isFlagship
          ? "bg-[#062B55] border-[#087CF5]/40 text-white shadow-xl hover:shadow-2xl hover:shadow-[#087CF5]/30 hover:border-[#168BFF] hover:-translate-y-1.5 hover:scale-[1.02]"
          : "bg-white border-slate-200/80 text-brand-dark-navy shadow-sm hover:shadow-xl hover:shadow-brand-blue/15 hover:border-brand-blue/50 hover:-translate-y-1.5 hover:scale-[1.02]"
      }`}
    >
      {/* Background image if specified */}
      {hasBgImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={item.cardBgImage!}
              alt={item.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          {/* Deep dark gradient overlay for crystal clear text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#021024]/95 via-[#031B38]/90 to-[#021024]/85 z-1" />
        </>
      )}

      {/* Content wrapper relative to overlay */}
      <div className="relative z-10">
        {/* Top Header: Icon & Title (Numbering removed per request) */}
        <div className="flex items-start gap-3.5 mb-5">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
              isDark
                ? "bg-[#087CF5]/25 text-[#168BFF] group-hover:bg-[#087CF5] group-hover:text-white group-hover:scale-110 shadow-xs"
                : "bg-brand-light-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 shadow-xs"
            }`}
          >
            {getIcon()}
          </div>

          <div>
            <h3
              className={`text-lg sm:text-xl font-bold leading-tight ${
                isDark ? "text-white" : "text-brand-dark-navy group-hover:text-brand-blue"
              } transition-colors`}
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* Services Bullet List */}
        <ul className="space-y-2 mb-8 pl-1">
          {item.services.map((serviceName) => (
            <li
              key={serviceName}
              className={`text-xs sm:text-[13px] flex items-center gap-2 ${
                isDark ? "text-slate-200" : "text-brand-slate"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125 ${
                  isDark ? "bg-[#168BFF]" : "bg-brand-blue"
                }`}
              />
              <span className="font-medium">{serviceName}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action: Circular Arrow Button */}
      <div className="relative z-10 pt-2 flex items-center justify-between">
        <span
          className={`text-xs font-semibold ${
            isDark ? "text-slate-300 group-hover:text-white" : "text-brand-slate group-hover:text-brand-blue"
          } transition-colors`}
        >
          Explore Service
        </span>
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isDark
              ? "bg-[#087CF5] text-white group-hover:bg-[#168BFF] group-hover:scale-110 shadow-md shadow-[#087CF5]/40"
              : "bg-brand-light-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 shadow-xs"
          }`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
