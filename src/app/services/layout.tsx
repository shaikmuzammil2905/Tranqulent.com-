import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tranquelent - Semiconductor & Engineering Solutions",
  description:
    "Explore Tranquelent's full range of engineering services: semiconductor design, embedded & hardware engineering, software & digital engineering, and engineering technology consulting.",
  alternates: {
    canonical: "https://www.tranquelent.com/services",
  },
  openGraph: {
    title: "Services | Tranquelent - Semiconductor & Engineering Solutions",
    description:
      "Explore Tranquelent's full range of engineering services: semiconductor design, embedded & hardware engineering, software & digital engineering, and engineering technology consulting.",
    url: "https://www.tranquelent.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
