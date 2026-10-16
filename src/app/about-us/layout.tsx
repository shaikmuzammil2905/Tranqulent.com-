import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tranquelent - Engineering What's Next",
  description:
    "Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.",
  alternates: {
    canonical: "https://www.tranquelent.com/about-us",
  },
  openGraph: {
    title: "About Us | Tranquelent - Engineering What's Next",
    description:
      "Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.",
    url: "https://www.tranquelent.com/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
