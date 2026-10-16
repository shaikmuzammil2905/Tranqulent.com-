import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tranquelent - Talk to Our Engineering Experts",
  description:
    "Get in touch with Tranquelent's engineering team. Contact us to discuss your semiconductor, embedded, hardware, software, or technology consulting requirements.",
  alternates: {
    canonical: "https://www.tranquelent.com/contact-us",
  },
  openGraph: {
    title: "Contact Us | Tranquelent - Talk to Our Engineering Experts",
    description:
      "Get in touch with Tranquelent's engineering team. Contact us to discuss your semiconductor, embedded, hardware, software, or technology consulting requirements.",
    url: "https://www.tranquelent.com/contact-us",
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
