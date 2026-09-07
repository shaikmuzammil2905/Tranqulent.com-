"use client";

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

  const isFlagship = item.isFlagship;

  return (
    <div
      onClick={() => onSelect(item)}
      className={`group cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
        isFlagship
          ? "bg-[#062B55] border-[#087CF5]/40 text-white shadow-xl hover:shadow-2xl hover:shadow-[#087CF5]/25 hover:border-[#168BFF]"
          : "bg-white border-slate-200/80 text-brand-dark-navy shadow-sm hover:shadow-xl hover:border-brand-blue/50 hover:-translate-y-1"
      }`}
    >
      {/* Top Header: Icon + Number & Title */}
      <div>
        <div className="flex items-start gap-4 mb-5">
          {/* Minimal Technical Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
              isFlagship
                ? "bg-[#087CF5]/20 text-[#168BFF] group-hover:bg-[#087CF5] group-hover:text-white"
                : "bg-brand-light-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white"
            }`}
          >
            {getIcon()}
          </div>

          <div>
            <span
              className={`text-xs font-bold tracking-widest block uppercase mb-1 ${
                isFlagship ? "text-[#168BFF]" : "text-brand-blue"
              }`}
            >
              {item.number}
            </span>
            <h3
              className={`text-lg sm:text-xl font-bold leading-tight ${
                isFlagship ? "text-white" : "text-brand-dark-navy group-hover:text-brand-blue"
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
                isFlagship ? "text-slate-200" : "text-brand-slate"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  isFlagship ? "bg-[#168BFF]" : "bg-brand-blue"
                }`}
              />
              <span className="font-medium">{serviceName}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Action: Circular Arrow Button */}
      <div className="pt-2">
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isFlagship
              ? "bg-[#087CF5] text-white group-hover:bg-[#168BFF] group-hover:scale-110 shadow-md shadow-[#087CF5]/40"
              : "bg-brand-light-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110"
          }`}
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}
