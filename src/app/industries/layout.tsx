import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Tranquelent - Semiconductor & Technology Solutions",
  description: "Tranquelent delivers specialized engineering services for Semiconductor & Electronics, Digital Engineering, AI Solutions, Automotive, Industrial Technology, Telecom & Networking, and Aerospace & Defense.",
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
