import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Capabilities from "@/components/Capabilities";
import WhyTranquelent from "@/components/WhyTranquelent";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.tranquelent.com",
  },
  openGraph: {
    url: "https://www.tranquelent.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tranquelent.com/#organization",
        name: "Tranquelent",
        url: "https://www.tranquelent.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.tranquelent.com/tranquelent-logo.png",
        },
        description:
          "Tranquelent provides semiconductor, embedded, hardware, software and digital engineering services to help technology-driven organizations engineer intelligent systems.",
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          url: "https://www.tranquelent.com/contact-us",
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tranquelent.com/#website",
        name: "Tranquelent",
        url: "https://www.tranquelent.com",
        publisher: {
          "@id": "https://www.tranquelent.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.tranquelent.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.tranquelent.com/#webpage",
        url: "https://www.tranquelent.com",
        name: "Tranquelent | Semiconductor & Engineering Technology Services",
        isPartOf: {
          "@id": "https://www.tranquelent.com/#website",
        },
        about: {
          "@id": "https://www.tranquelent.com/#organization",
        },
        description:
          "Tranquelent provides semiconductor, embedded, hardware, software and digital engineering services to help technology-driven organizations engineer intelligent systems.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhoWeAre />
      <Capabilities />
      <WhyTranquelent />
      <HowWeWork />
      <Industries />
      <CTASection />
    </>
  );
}
