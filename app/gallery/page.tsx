"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

const galleryItems = [
  {
    id: 1,
    src: "/images/IMG_8695.jpg",
    en: { caption: "Gentle cows grazing", category: "Grazing" },
    ka: { caption: "ಸೌಮ್ಯ ಹಸುಗಳ ಮೇಯುವಿಕೆ", category: "ಮೇಯುವಿಕೆ" },
  },
  {
    id: 2,
    src: "/images/IMG_8699.jpg",
    en: { caption: "Afternoon rest at peace", category: "Daily Life" },
    ka: { caption: "ಮಧ್ಯಾಹ್ನದ ವಿಶ್ರಾಂತಿ", category: "ದೈನಂದಿನ ಜೀವನ" },
  },
  {
    id: 3,
    src: "/images/IMG_8705.jpg",
    en: { caption: "The curious young calf", category: "Calves" },
    ka: { caption: "ಕುತೂಹಲಕಾರಿ ಕರು", category: "ಕರುಗಳು" },
  },
  {
    id: 4,
    src: "/images/IMG_8735.jpg",
    en: { caption: "Providing traditional care", category: "Healthcare" },
    ka: { caption: "ಸಾಂಪ್ರದಾಯಿಕ ಆರೈಕೆ", category: "ಆರೋಗ್ಯ ರಕ್ಷಣೆ" },
  },
  {
    id: 5,
    src: "/images/IMG_8744.jpg",
    en: { caption: "Freedom in rural meadows", category: "Grazing" },
    ka: { caption: "ಗ್ರಾಮೀಣ ಬಯಲಿನಲ್ಲಿ ಸ್ವಾತಂತ್ರ್ಯ", category: "ಮೇಯುವಿಕೆ" },
  },
  {
    id: 6,
    src: "/images/IMG_8762.jpg",
    en: { caption: "A bond beyond words", category: "People" },
    ka: { caption: "ಮಾತಿಗೆ ಮೀರಿದ ಬಂಧ", category: "ಜನರು" },
  },
  {
    id: 7,
    src: "/images/IMG_8813.jpg",
    en: { caption: "Feeding time rituals", category: "Daily Life" },
    ka: { caption: "ಆಹಾರ ನೀಡುವ ಸಮಯದ ಆಚರಣೆ", category: "ದೈನಂದಿನ ಜೀವನ" },
  },
  {
    id: 8,
    src: "/images/IMG_8870.jpg",
    en: { caption: "The sacred Gomata", category: "Spirituality" },
    ka: { caption: "ಪವಿತ್ರ ಗೋಮಾತೆ", category: "ಧಾರ್ಮಿಕ" },
  },
  {
    id: 9,
    src: "/images/IMG_8876.jpg",
    en: { caption: "Goshala at the golden hour", category: "Goshala" },
    ka: { caption: "ಸುವರ್ಣ ಸಮಯದಲ್ಲಿ ಗೋಶಾಲೆ", category: "ಗೋಶಾಲೆ" },
  },
  {
    id: 10,
    src: "/images/IMG_8888.jpg",
    en: { caption: "Preserving local bovines", category: "Mission" },
    ka: { caption: "ಸ್ಥಳೀಯ ಗೋವುಗಳ ಸಂರಕ್ಷಣೆ", category: "ಧ್ಯೇಯ" },
  },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main
        className="pt-24 min-h-screen pb-20"
        style={{ background: "#FDF8F0" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.4em] uppercase mb-4">
              {t("Glimpses of Seva", "ಸೇವೆಯ ನೋಟಗಳು")}
            </p>
            <h1 className="font-cinzel font-bold text-saffron-950 text-5xl mb-6">
              {t("Our Gallery", "ನಮ್ಮ ಚಿತ್ರಸಂಪುಟ")}
            </h1>
            <div className="divider-sacred max-w-sm mx-auto mb-8" />
            <p className="font-lora text-saffron-900 mt-2 max-w-2xl mx-auto text-lg leading-relaxed p-4 rounded-xl">
              {t(
                "Explore the daily life at Kamadhenu Trust — where every cow is cherished, every morning is sacred, and every act of care is an act of worship.",
                "ಕಾಮಧೇನು ಟ್ರಸ್ಟ್‌ನ ದೈನಂದಿನ ಜೀವನವನ್ನು ಅನ್ವೇಷಿಸಿ - ಇಲ್ಲಿ ಪ್ರತಿ ಹಸುವೂ ಪಾಲಿಸಲ್ಪಡುತ್ತದೆ, ಪ್ರತಿ ಬೆಳಿಗ್ಗೆ ಪವಿತ್ರವಾಗಿದೆ ಮತ್ತು ಆರೈಕೆಯ ಪ್ರತಿಯೊಂದು ಕ್ರಿಯೆಯೂ ಪೂಜೆಯಾಗಿದೆ.",
              )}
            </p>
          </div>

          {/* Gallery grid — Real images with translations */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-white break-inside-avoid transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl mb-6"
              >
                <div className="relative">
                  <Image
                    src={item.src}
                    alt={t(item.en.caption, item.ka.caption)}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Hover overlay with modern design and translation */}
                <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/90 via-saffron-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8 text-center">
                  <span className="mb-3 font-cinzel text-[10px] text-saffron-200 tracking-[0.3em] uppercase border border-saffron-200/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {t(item.en.category, item.ka.category)}
                  </span>
                  <p className="font-cinzel text-white font-bold text-xl leading-tight mb-2 transform translateY-4 group-hover:translateY-0 transition-transform duration-500">
                    {t(item.en.caption, item.ka.caption)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
