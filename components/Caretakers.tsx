"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import ScrollReveal from "./ScrollReveal";

const placeholderNews = [
  {
    id: 1,
    title: "Health Camp Completed",
    date: "April 2026",
    bgColor: "bg-saffron-100",
  },
  {
    id: 2,
    title: "New Fodder Supply Arrived",
    date: "March 2026",
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "Rescued 5 Calves",
    date: "February 2026",
    bgColor: "bg-white",
  },
  {
    id: 4,
    title: "Community Visit Day",
    date: "January 2026",
    bgColor: "bg-saffron-50",
  },
  {
    id: 5,
    title: "Winter Shed Preparations",
    date: "December 2025",
    bgColor: "bg-orange-50",
  },
];

export default function Caretakers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % placeholderNews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="caretakers"
      className="py-16 px-6"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-cinzel text-saffron-500 text-xs tracking-[0.3em] uppercase mb-3">
              {t("The Heart Behind It All", "ಇದರ ಹಿಂದಿನ ಹೃದಯ")}
            </p>
            <h2
              className="font-cinzel font-bold text-saffron-900"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {t("Meet the Caretakers", "ಆರೈಕೆದಾರರನ್ನು ಭೇಟಿ ಮಾಡಿ")}
            </h2>
            <div className="divider-sacred max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Story card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-saffron-200/40 relative">
              {/* Quote mark */}
              <span className="absolute top-6 left-8 font-cinzel text-saffron-200 text-7xl leading-none pointer-events-none select-none">
                "
              </span>
              <div className="pt-10">
                <p className="font-lora italic text-saffron-800 text-lg leading-relaxed mb-6">
                  {t(
                    "We did not choose this work — this work chose us. Every morning when we step into the goshala and the cows turn to look at us, we feel the presence of God. That is enough. That has always been enough.",
                    "ನಾವು ಈ ಕೆಲಸವನ್ನು ಆರಿಸಿಕೊಳ್ಳಲಿಲ್ಲ - ಈ ಕೆಲಸವು ನಮ್ಮನ್ನು ಆರಿಸಿಕೊಂಡಿದೆ. ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ ನಾವು ಗೋಶಾಲೆಗೆ ಕಾಲಿಟ್ಟಾಗ ಮತ್ತು ಹಸುಗಳು ನಮ್ಮ ಕಡೆಗೆ ತಿರುಗಿದಾಗ, ನಾವು ದೇವರ ಉಪಸ್ಥಿತಿಯನ್ನು ಅನುಭವಿಸುತ್ತೇವೆ. ಅಷ್ಟು ಸಾಕು. ಅದು ಯಾವಾಗಲೂ ಸಾಕಾಗುತ್ತದೆ.",
                  )}
                </p>
                <div className="border-t border-saffron-200/60 pt-5">
                  <p className="font-cinzel font-semibold text-saffron-900 text-sm">
                    {t("The Founders", "ಸ್ಥಾಪಕರು")}
                  </p>
                  <p className="font-lora text-saffron-700 text-xs mt-0.5">
                    {t(
                      "Kamadhenu Trust, Brahmavar, Udupi",
                      "ಕಾಮಧೇನು ಟ್ರಸ್ಟ್, ಬ್ರಹ್ಮಾವರ, ಉಡುಪಿ",
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <h3 className="font-cinzel font-semibold text-saffron-900 text-xl">
                {t(
                  "Two Lives, One Sacred Purpose",
                  "ಎರಡು ಜೀವನಗಳು, ಒಂದು ಪವಿತ್ರ ಉದ್ದೇಶ",
                )}
              </h3>
              <div className="space-y-4 font-lora text-saffron-800 leading-relaxed">
                <p>
                  {t(
                    "The trust is managed entirely by a husband and wife who wake before sunrise to begin the morning feeding ritual — carrying hay, mixing fodder, and ensuring every cow receives personal attention.",
                    "ಟ್ರಸ್ಟ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಗಂಡ ಮತ್ತು ಹೆಂಡತಿ ನಿರ್ವಹಿಸುತ್ತಾರೆ, ಅವರು ಮುಂಜಾನೆಯ ಆಹಾರದ ಆಚರಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸೂರ್ಯೋದಯದ ಮೊದಲು ಎಚ್ಚರಗೊಳ್ಳುತ್ತಾರೆ - ಹುಲ್ಲು ಹೊರುವುದು, ಮೇವು ಬೆರೆಸುವುದು ಮತ್ತು ಪ್ರತಿಯೊಂದು ಹಸುವಿಗೂ ವೈಯಕ್ತಿಕ ಗಮನ ಸಿಗುವಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತಾರೆ.",
                  )}
                </p>
                <p>
                  {t(
                    "From treating injuries and infections with traditional remedies, to sitting through the night with calving mothers, they do everything themselves — with no support staff and no weekends off.",
                    "ಸಾಂಪ್ರದಾಯಿಕ ಪರಿಹಾರಗಳೊಂದಿಗೆ ಗಾಯಗಳು ಮತ್ತು ಸೋಂಕುಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುವುದರಿಂದ ಹಿಡಿದು, ಕರುಹಾಕುವ ತಾಯಂದಿರೊಂದಿಗೆ ರಾತ್ರಿಯಿಡೀ ಕುಳಿತುಕೊಳ್ಳುವವರೆಗೆ, ಅವರು ಎಲ್ಲವನ್ನೂ ತಾವೇ ಮಾಡುತ್ತಾರೆ - ಯಾವುದೇ ಸಹಾಯಕ ಸಿಬ್ಬಂದಿ ಇಲ್ಲದೆ ಮತ್ತು ವಾರಾಂತ್ಯದ ರಜೆಗಳಿಲ್ಲದೆ.",
                  )}
                </p>
                <p>
                  {t(
                    "Their dedication is matched only by their humility. They accept no personal salary from the trust. Everything — every rupee donated — goes directly to the cows.",
                    "ಅವರ ಸಮರ್ಪಣೆಯನ್ನು ಅವರ ನಮ್ರತೆಯಿಂದ ಮಾತ್ರ ಅಳೆಯಬಹುದು. ಅವರು ಟ್ರಸ್ಟ್‌ನಿಂದ ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಸಂಬಳವನ್ನು ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ. ದಾನ ಮಾಡಿದ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯೂ ನೇರವಾಗಿ ಹಸುಗಳಿಗೆ ಹೋಗುತ್ತದೆ.",
                  )}
                </p>
              </div>

              {/* Attribute pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  t("No Paid Staff", "ವೇತನ ಪಡೆಯುವ ಸಿಬ್ಬಂದಿಯಿಲ್ಲ"),
                  t("All Donations → Cows", "ಎಲ್ಲಾ ದೇಣಿಗೆಗಳು → ಹಸುಗಳಿಗೆ"),
                  t("Traditional Care", "ಸಾಂಪ್ರದಾಯಿಕ ಆರೈಕೆ"),
                  t("12+ Years Service", "12+ ವರ್ಷಗಳ ಸೇವೆ"),
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-cinzel text-xs bg-saffron-50 text-saffron-700 border border-saffron-200 px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
