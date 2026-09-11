"use client";

import { useState } from "react";
import { MapPin, Globe, Send, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/websiteData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    areaOfInterest: "Semiconductor Engineering",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Send form state to API route
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Failed to send inquiry.");
        }
        return data;
      })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          areaOfInterest: "Semiconductor Engineering",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Form submit error:", err);
        alert(err.message || "Failed to send inquiry. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <div className="bg-white">
      {/* Contact Banner */}
      <section className="bg-brand-dark-navy text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#168BFF] uppercase mb-3">
              GET IN TOUCH
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Talk to Our Experts
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Connect with our technical leadership to discuss your silicon design, embedded systems, or software engineering initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Form and Location Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-extrabold text-brand-dark-navy mb-2">
              Send an Engineering Inquiry
            </h2>
            <p className="text-sm text-brand-slate mb-8">
              Fill out the form below and our engineering team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-brand-light-grey border border-brand-blue/30 text-center space-y-4">
                <div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-navy">
                  Inquiry Received
                </h3>
                <p className="text-sm text-brand-slate max-w-md mx-auto">
                  Thank you for reaching out to Tranquelent. Our engineering solutions team will review your requirements and follow up with you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-brand-dark-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  >
                    <option value="Semiconductor Engineering">Semiconductor Engineering</option>
                    <option value="Embedded & Hardware Engineering">Embedded & Hardware Engineering</option>
                    <option value="Software & Digital Engineering">Software & Digital Engineering</option>
                    <option value="Engineering & Technology Consulting">Engineering & Technology Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-brand-dark-navy uppercase mb-2">
                    Project / Engineering Overview *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements, timeline, or engineering challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-light-grey border border-slate-200 text-sm text-brand-dark-navy focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-blue hover:bg-brand-electric-blue text-white rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-blue/20"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Locations and Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-dark-navy text-white p-8 rounded-2xl border border-white/10 shadow-xl space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Global Locations
                </h3>
                <p className="text-sm text-slate-300">
                  Operating with global engineering hubs to support worldwide clients.
                </p>
              </div>

              {/* USA Headquarters */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 text-brand-electric-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-electric-blue uppercase">
                    USA
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    5900 Balcones Drive STE 100
                  </div>
                  <div className="text-sm text-slate-300">
                    Austin, TX 78731
                  </div>
                </div>
              </div>

              {/* India Hub */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 text-brand-electric-blue">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-electric-blue uppercase">
                    India
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    Bangalore
                  </div>
                  <div className="text-sm text-slate-300">
                    Karnataka, India
                  </div>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 text-brand-electric-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-brand-electric-blue uppercase">
                    Email
                  </div>
                  <a
                    href="mailto:hello@tranquelent.com"
                    className="text-base font-bold text-white mt-1 block hover:text-brand-electric-blue transition-colors"
                  >
                    hello@tranquelent.com
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  Tranquelent Private Limited is committed to engineering precision, strict client IP confidentiality, and reliable delivery.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
