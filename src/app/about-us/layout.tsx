import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Tranquelent - Engineering What's Next",
  description: "Tranquelent is a semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
