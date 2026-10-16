import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tranquelent.com"),
  title: {
    default: "Tranquelent | Semiconductor & Engineering Technology Services",
    template: "%s | Tranquelent",
  },
  description:
    "Tranquelent provides semiconductor, embedded, hardware, software and digital engineering services to help technology-driven organizations engineer intelligent systems.",
  alternates: {
    canonical: "https://www.tranquelent.com",
  },
  openGraph: {
    type: "website",
    siteName: "Tranquelent",
    title: "Tranquelent | Semiconductor & Engineering Technology Services",
    description:
      "Tranquelent provides semiconductor, embedded, hardware, software and digital engineering services to help technology-driven organizations engineer intelligent systems.",
    url: "https://www.tranquelent.com",
    images: [
      {
        url: "/tranquelent-logo.png",
        width: 1200,
        height: 630,
        alt: "Tranquelent — Engineering What's Next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquelent | Semiconductor & Engineering Technology Services",
    description:
      "Tranquelent provides semiconductor, embedded, hardware, software and digital engineering services to help technology-driven organizations engineer intelligent systems.",
    images: ["/tranquelent-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-blue selection:text-white">
        <SplashScreen />
        <Header />
        <main className="flex-grow pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
