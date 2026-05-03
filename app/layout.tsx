import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default:
      "Kamadhenu Goshala Mahasangha Trust | Protecting Sacred Cows in Udupi, India",
    template: "%s | Kamadhenu Goshala Mahasangha Trust",
  },
  description:
    "Kamadhenu Goshala Mahasangha Trust is a dedicated cow protection initiative in Brahmavar, Udupi. We care for over 300+ rescued cows and rely on your support for our sacred mission. Join us in Gau Seva.",
  keywords: [
    "Kamadhenu Goshala",
    "Kamadhenu Trust",
    "Kamadhenu Goshala Mahasangha Trust",
    "Kamadhenu Udupi",
    "Kamadhenu Brahmavar",
    "Gau Seva Udupi",
    "Cow Protection India",
    "Brahmavar Goshala",
    "Donate for Cows",
    "Sacred Cow Care",
    "Udupi NGO",
    "Animal Welfare India",
    "CSR Eligibility Karnataka",
    "Kamadhenu Goshala Mahasangha Trust",
    "Kamadhenu Trust Udupi",
    "Gau Seva Brahmavar",
    "Cow Sanctuary Karnataka",
    "Save Desi Cows",
    "Goshala Donation India",
    "Cow Protection NGO",
    "Sacred Cow Welfare",
    "Udupi Charity",
    "Animal Welfare Karnataka",
    "CSR Cow Protection",
    "Adopt a Cow Udupi",
    "Vedic Goshala India",
    "Hindu Cow Protection Trust",
    "Gau Raksha Udupi",
    "Brahmavar Social Service",
    "Indian Cow Breeds Protection",
    "Kamadhenu Gau Seva",
    "Cow Shelter Brahmavar",
    "Animal Rescue Udupi",
  ],
  alternates: {
    canonical: "https://kamadhenutrust.in",
  },
  authors: [{ name: "Kamadhenu Goshala Mahasangha Trust" }],
  creator: "Kamadhenu Goshala Mahasangha Trust",
  publisher: "Kamadhenu Goshala Mahasangha Trust",
  openGraph: {
    title: "Kamadhenu Trust | Protecting Sacred Cows in Udupi, India",
    description:
      "Join our mission to protect and nurture 300+ cows in rural Udupi. Every contribution helps in providing food, shelter, and medical care for our sacred cows.",
    url: "https://kamadhenutrust.in", // Replace with your actual domain
    siteName: "Kamadhenu Goshala Mahasangha Trust",
    images: [
      {
        url: "/images/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Kamadhenu Goshala Mahasangha Trust - Sacred Cow Protection",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kamadhenu Goshala Mahasangha Trust | Protecting Sacred Cows in Udupi, India",
    description:
      "A sacred mission to protect and nurture 300+ cows in rural Udupi, India. Support Gau Seva today.",
    images: ["/images/hero1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Kamadhenu Trust",
              url: "https://kamadhenutrust.in",
              logo: "https://kamadhenutrust.in/logo.png",
              description:
                "Kamadhenu Trust is a rural cow protection initiative in Brahmavar, Udupi, dedicated to caring for 300+ cows.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brahmavar",
                addressRegion: "Udupi",
                addressCountry: "India",
              },
            }),
          }}
        />
        <LanguageProvider>
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
