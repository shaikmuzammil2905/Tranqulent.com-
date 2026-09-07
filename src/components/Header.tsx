"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Cpu, Layers, Code, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "Semiconductor Engineering",
        href: "/services/semiconductor-engineering",
        description: "ASIC/SoC, RTL Design, Verification & Physical Design",
        icon: Cpu,
      },
      {
        name: "Embedded & Hardware Engineering",
        href: "/services/embedded-hardware-engineering",
        description: "Firmware, RTOS, FPGA & Connected Systems",
        icon: Layers,
      },
      {
        name: "Software & Digital Engineering",
        href: "/services/software-digital-engineering",
        description: "Cloud, AI & Data Engineering, DevOps & Platforms",
        icon: Code,
      },
      {
        name: "Engineering & Technology Consulting",
        href: "/services/engineering-technology-consulting",
        description: "Architecture, Strategy & Technical Advisory",
        icon: Briefcase,
      },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Official Horizontal Logo: [Symbol] TRANQUELENT */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 sm:h-11 w-48 sm:w-56 transition-transform group-hover:scale-[1.01]">
              <Image
                src="/tranquelent-logo.png"
                alt="Tranquelent Logo - Engineering What's Next"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 190px, 230px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors inline-flex items-center gap-1 ${
                        isActive
                          ? "text-brand-blue font-bold"
                          : "text-brand-dark-navy hover:text-brand-blue"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-brand-blue" : "text-brand-slate"
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-96 bg-white shadow-xl rounded-xl p-3 border border-slate-100 ring-1 ring-black/5 mt-1"
                        >
                          <div className="space-y-1">
                            {item.dropdown.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-light-grey transition-all"
                                >
                                  <div className="p-2 rounded-md bg-brand-light-grey text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mt-0.5">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-brand-dark-navy group-hover:text-brand-blue transition-colors">
                                      {subItem.name}
                                    </div>
                                    <div className="text-xs text-brand-slate line-clamp-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors relative ${
                    isActive
                      ? "text-brand-blue font-bold"
                      : "text-brand-dark-navy hover:text-brand-blue"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-blue rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact-us"
              className="group inline-flex items-center justify-center bg-brand-blue hover:bg-brand-electric-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-brand-blue/30"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-brand-dark-navy hover:text-brand-blue hover:bg-brand-light-grey transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 sm:px-6">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="py-1">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex justify-between items-center px-3 py-2.5 text-base font-bold text-brand-dark-navy hover:text-brand-blue rounded-lg"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-brand-blue" : "text-brand-slate"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 pr-2 py-1 space-y-1 bg-brand-light-grey/60 rounded-lg mt-1"
                          >
                            <Link
                              href="/services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm font-bold text-brand-blue"
                            >
                              All Capabilities →
                            </Link>
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-brand-dark-navy hover:text-brand-blue"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 text-base font-bold text-brand-dark-navy hover:text-brand-blue rounded-lg"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-4 pb-2">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-electric-blue text-white py-3 px-6 rounded-full font-semibold text-center text-sm transition-all"
                >
                  <span>Talk to Our Experts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
