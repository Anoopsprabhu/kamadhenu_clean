import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Kamadhenu Goshala Mahasangha Trust",
  description: "View our gallery to see glimpses of daily Gau Seva, sacred cow protection, and life at Kamadhenu Goshala in Udupi. Witness the care and devotion we provide to 300+ cows.",
  keywords: [
    "Kamadhenu Goshala Gallery",
    "Cow Protection Photos",
    "Gau Seva Images",
    "Brahmavar Goshala Photos",
    "Sacred Cows Udupi",
    "Desi Cow Breeds India",
    "Goshala Daily Life",
  ],
  openGraph: {
    title: "Gallery | Kamadhenu Goshala Mahasangha Trust",
    description: "Explore the sacred mission of cow protection through our visual gallery. See the impact of your support at our Udupi Goshala.",
    images: [
      {
        url: "/images/IMG_8876.jpg",
        width: 1200,
        height: 630,
        alt: "Kamadhenu Goshala Gallery - Sacred Cow Care",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
