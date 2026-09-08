import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Globe, Mail } from "lucide-react";
import { COMPANY_INFO, CAPABILITIES_DATA } from "@/data/websiteData";

export default function Footer() {
  const mainNav = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About Us", href: "/about-us" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#021226] text-white pt-16 pb-12 border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-56">
                <Image
                  src="/tranquelent-logo.png"
                  alt="Tranquelent Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="224px"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#168BFF] uppercase">
              ENGINEERING WHAT'S NEXT
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              A semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 sm:col-span-4">
            <h3 className="text-xs font-bold text-white tracking-[0.15em] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {mainNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#168BFF] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links Column */}
          <div className="lg:col-span-3 sm:col-span-4">
            <h3 className="text-xs font-bold text-white tracking-[0.15em] uppercase mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CAPABILITIES_DATA.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-slate-300 hover:text-[#168BFF] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-3 sm:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-white tracking-[0.15em] uppercase mb-4">
              Locations
            </h3>
            <div className="text-sm text-slate-300 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#168BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">USA</div>
                  <div className="text-slate-400 text-xs">5900 Balcones Drive STE 100</div>
                  <div className="text-slate-400 text-xs">Austin, TX 78731</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-[#168BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">India</div>
                  <div className="text-slate-400 text-xs">Bangalore, Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#168BFF] flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:contact@tranquelent.com"
                    className="text-sm text-slate-300 hover:text-[#168BFF] transition-colors font-semibold"
                  >
                    contact@tranquelent.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} TRANQUELENT PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Talk to Our Experts →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
