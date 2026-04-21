import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Kamadhenu Trust — Protecting Sacred Cows, Brahmavar, Udupi",
  description:
    "Kamadhenu Trust is a rural cow protection initiative in Brahmavar Taluk, Udupi, India. We care for 300+ cows and welcome your support to continue this sacred mission.",
  keywords: [
    "cow protection",
    "goshala",
    "udupi",
    "brahmavar",
    "donate",
    "NGO",
    "India",
    "kamadhenu",
  ],
  openGraph: {
    title: "Kamadhenu Trust",
    description:
      "A sacred mission to protect and nurture 300+ cows in rural Udupi, India.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
