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
    { label: t("Certificates", "ಪ್ರಮಾಣಪತ್ರಗಳು"), href: "/#csr" },
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
      <div className="max-w-7xl mx-auto px-4 md:px-14 py-3 flex items-center justify-between">
        {/* Logo — clicking goes Home */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group min-w-0 md:flex-1">
          <div className="flex flex-col justify-center gap-0 min-w-0 overflow-hidden">
            <p
              className={`font-cinzel font-bold text-lg md:text-2xl leading-none tracking-tight md:tracking-wide transition-colors whitespace-nowrap md:whitespace-normal ${isScrolledStyle ? "text-saffron-600" : "text-white"}`}
            >
              {t("Kamadhenu Goshala", "ಕಾಮಧೇನು ಗೋಶಾಲೆ")}
            </p>
            <p
              className={`font-cinzel text-xs md:text-lg leading-tight transition-colors truncate md:whitespace-normal ${isScrolledStyle ? "text-saffron-700" : "text-white/80"}`}
            >
              {t("Mahasangha Trust", "ಮಹಾಸಂಘ ಟ್ರಸ್ಟ್")}
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-[2]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link font-lora text-base font-medium transition-colors hover:text-saffron-500 whitespace-nowrap ${isScrolledStyle ? "text-saffron-900" : "text-white hover:text-saffron-200"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + Donate */}
        <div className="hidden md:flex items-center justify-end gap-4 md:flex-1">
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

          <a
            href="https://www.lcodetechnologies.com/csr-disclosures"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-2 border-l border-saffron-200/30 pl-4 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/LCode-CSR-Logo.png"
              alt="LCode Initiative"
              width={100}
              height={50}
              className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolledStyle ? "brightness-100" : "brightness-100 hover:brightness-100 hover:invert-0"}`}
            />
          </a>
        </div>

        {/* Mobile Controls (LCode Logo + Globe + Hamburger) */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a
            href="https://www.lcodetechnologies.com/csr-disclosures"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center shrink-0"
          >
            <Image
              src="/images/LCode-CSR-Logo.png"
              alt="LCode Initiative"
              width={70}
              height={35}
              className="h-8 w-auto object-contain"
            />
          </a>

          <button
            onClick={() => setLang(lang === "en" ? "ka" : "en")}
            className={`flex items-center gap-1 font-medium transition-all duration-300 px-1 py-1 shrink-0 ${isScrolledStyle ? "text-saffron-600" : "text-white"}`}
            title={t("Switch to Kannada", "Switch to English")}
          >
            <Globe size={20} />
            <span className="text-[10px] font-bold uppercase tracking-tight">
              {lang === "en" ? "KA" : "EN"}
            </span>
          </button>

          <button
            className={`p-1 rounded-full transition-colors shrink-0 ${isScrolledStyle ? "text-saffron-800 hover:bg-saffron-100" : "text-white hover:bg-white/20"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
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
            {/* Logo moved to header */}
          </div>
        </div>
      )}
    </header>
  );
}
