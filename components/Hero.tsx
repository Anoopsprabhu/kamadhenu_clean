"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "/images/hero1.jpg",
      title: t("Sanctuary of Peace", "ಶಾಂತಿಯ ತಾಣ"),
      subtitle: t(
        "Providing a loving home for 300+ sacred cows in the heart of Udupi.",
        "ಉಡುಪಿಯ ಹೃದಯಭಾಗದಲ್ಲಿ 300 ಕ್ಕೂ ಹೆಚ್ಚು ಪವಿತ್ರ ಹಸುಗಳಿಗೆ ಪ್ರೀತಿಯ ನೆಲೆಯನ್ನು ಒದಗಿಸುತ್ತಿದ್ದೇವೆ.",
      ),
    },
    {
      image: "/images/hero2.jpg",
      title: t("Protecting the Sacred", "ಪವಿತ್ರತೆಯನ್ನು ರಕ್ಷಿಸುವುದು"),
      subtitle: t(
        "Upholding the timeless tradition of Goseva with pure devotion and care.",
        "ಗೋಸೇವೆಯ ಶಾಶ್ವತ ಸಂಪ್ರದಾಯವನ್ನು ಶುದ್ಧ ಭಕ್ತಿ ಮತ್ತು ಕಾಳಜಿಯೊಂದಿಗೆ ಎತ್ತಿಹಿಡಿಯುತ್ತಿದ್ದೇವೆ.",
      ),
    },
    {
      image: "/images/hero3.jpg",
      title: t("Join the Mission", "ಧ್ಯೇಯದಲ್ಲಿ ಜೊತೆಯಾಗಿ"),
      subtitle: t(
        "Your support helps us nurture and protect these gentle beings every day.",
        "ಈ ಸೌಮ್ಯ ಜೀವಗಳ ಪೋಷಣೆ ಮತ್ತು ರಕ್ಷಣೆಗಾಗಿ ನಿಮ್ಮ ಬೆಂಬಲ ಅತ್ಯಗತ್ಯ.",
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">
        {/* Subtle Ken Burns effect */}
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "linear" }}
          className="relative w-full h-full"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Enhanced Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="max-w-5xl px-6 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pointer-events-auto"
            >
              <h1 className="font-cinzel text-5xl md:text-8xl font-bold mb-6 tracking-wider drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                {slides[current].title}
              </h1>
              <p className="font-lora text-xl md:text-3xl mb-12 text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed italic">
                {slides[current].subtitle}
              </p>
              {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="#donate"
                  className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white font-cinzel font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95"
                >
                  {t("Support Our Cause", "ನಮ್ಮ ಉದ್ದೇಶವನ್ನು ಬೆಂಬಲಿಸಿ")}
                </a>
                <a
                  href="#about"
                  className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-cinzel font-bold text-xl px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
                >
                  {t("Learn More", "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ")}
                </a>
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              current === i
                ? "bg-saffron-500 w-10 h-3"
                : "bg-white/40 hover:bg-white/70 w-3 h-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Side Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 pointer-events-none z-20">
        <button
          onClick={prev}
          className="pointer-events-auto p-3 rounded-full bg-black/10 hover:bg-black/30 backdrop-blur-sm text-white/70 hover:text-white transition-all duration-300 hidden md:flex"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto p-3 rounded-full bg-black/10 hover:bg-black/30 backdrop-blur-sm text-white/70 hover:text-white transition-all duration-300 hidden md:flex"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
