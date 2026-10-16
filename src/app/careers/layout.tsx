import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Tranquelent - Join Our Engineering Team",
  description:
    "Join Tranquelent and work on cutting-edge semiconductor, embedded, hardware, and software engineering projects. Explore open positions and build your career with us.",
  alternates: {
    canonical: "https://www.tranquelent.com/careers",
  },
  openGraph: {
    title: "Careers | Tranquelent - Join Our Engineering Team",
    description:
      "Join Tranquelent and work on cutting-edge semiconductor, embedded, hardware, and software engineering projects. Explore open positions and build your career with us.",
    url: "https://www.tranquelent.com/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
