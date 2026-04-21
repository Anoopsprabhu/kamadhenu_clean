"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const isScrolledStyle = scrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll(); // Trigger initially
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("About", "ನಮ್ಮ ಬಗ್ಗೆ"), href: "/#about" },
    { label: t("Gallery", "ಗ್ಯಾಲರಿ"), href: "/gallery" },
    { label: t("Donate Now", "ದಾನ ಮಾಡಿ"), href: "/#donate" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolledStyle
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-14 py-2 flex items-center justify-between">
        {/* Logo — clicking goes Home */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          {/* <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image
              src="/logo.png"
              alt="Kamadhenu Trust Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain drop-shadow-md"
              priority
            />
          </div> */}
          <div className="flex flex-col justify-center gap-0">
            <p
              className={`font-cinzel font-bold text-xl md:text-2xl leading-none tracking-wide transition-colors ${isScrolledStyle ? "text-saffron-600" : "text-white"}`}
            >
              {t("Kamadhenu", "ಕಾಮಧೇನು")}
            </p>
            <p
              className={`font-lora text-base md:text-lg leading-tight transition-colors ${isScrolledStyle ? "text-saffron-700" : "text-white/80"}`}
            >
              {t("Trust", "ಟ್ರಸ್ಟ್")}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link font-lora text-base font-medium transition-colors hover:text-saffron-500 ${isScrolledStyle ? "text-saffron-900" : "text-white hover:text-saffron-200"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + Donate */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ka" : "en")}
            className={`flex items-center gap-1.5 font-medium transition-all duration-300 rounded-full px-3 py-1.5 ${isScrolledStyle ? "text-saffron-600 hover:bg-saffron-50" : "text-white hover:bg-white/10"}`}
            title={t("Switch to Kannada", "Switch to English")}
          >
            <Globe size={18} />
            <span className="text-sm font-semibold uppercase">
              {lang === "en" ? "KA" : "EN"}
            </span>
          </button>

          <Link
            href="/#donate"
            className={`inline-flex items-center gap-2 font-cinzel text-base font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isScrolledStyle ? "bg-saffron-500 hover:bg-saffron-600 text-white" : "bg-white hover:bg-gray-50 text-saffron-600 shadow-md"}`}
          >
            {t("Donate Now", "ದಾನ ಮಾಡಿ")}
          </Link>
        </div>

        {/* Mobile Controls (Globe + Hamburger) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ka" : "en")}
            className={`flex items-center gap-1 font-medium transition-all duration-300 px-2 py-1 ${isScrolledStyle ? "text-saffron-600" : "text-white"}`}
            title={t("Switch to Kannada", "Switch to English")}
          >
            <Globe size={22} />
            <span className="text-xs font-bold uppercase tracking-tight">
              {lang === "en" ? "KA" : "EN"}
            </span>
          </button>

          <button
            className={`p-2 rounded-full transition-colors ${isScrolledStyle ? "text-saffron-800 hover:bg-saffron-100" : "text-white hover:bg-white/20"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden bg-white/98 backdrop-blur-md border-t border-saffron-200/40 px-6 py-6 flex flex-col gap-6 shadow-2xl absolute w-full top-full left-0"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-lora text-saffron-900 hover:text-saffron-600 text-lg font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="/#donate"
              className="bg-saffron-500 hover:bg-saffron-600 transition-colors text-white font-cinzel font-bold text-lg px-6 py-4 rounded-full text-center shadow-md"
              onClick={() => setOpen(false)}
            >
              {t("Donate Now", "ದಾನ ಮಾಡಿ")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
