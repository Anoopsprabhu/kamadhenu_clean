'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from './LanguageContext'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { lang, setLang, t }    = useLanguage()
  const pathname = usePathname()

  const isGallery = pathname === '/gallery'
  const isScrolledStyle = scrolled || isGallery

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll() // Trigger initially
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('About', 'ನಮ್ಮ ಬಗ್ಗೆ'),           href: '/#about' },
    { label: t('Our Cows', 'ನಮ್ಮ ಹಸುಗಳು'),       href: '/#cows' },
    { label: t('Impact', 'ಪ್ರಭಾವ'),               href: '/#impact' },
    { label: t('Caretakers', 'ಆರೈಕೆದಾರರು'),       href: '/#caretakers' },
    { label: t('Gallery', 'ಗ್ಯಾಲರಿ'),              href: '/gallery' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolledStyle
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-saffron-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — clicking goes Home */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image src="/logo.png" alt="Kamadhenu Trust Logo" width={100} height={100} className="w-full h-full object-contain drop-shadow-md" priority />
          </div>
          <div className="flex flex-col justify-center">
            <p className={`font-cinzel font-bold text-xl md:text-2xl leading-none tracking-wide transition-colors ${isScrolledStyle ? 'text-saffron-600' : 'text-white'}`}>Kamadhenu</p>
            <p className={`font-lora text-base md:text-lg leading-tight mt-1 transition-colors ${isScrolledStyle ? 'text-saffron-700' : 'text-white/80'}`}>Trust</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link font-lora text-base font-medium transition-colors hover:text-saffron-500 ${isScrolledStyle ? 'text-saffron-900' : 'text-white hover:text-saffron-200'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + Donate */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ka' : 'en')}
            className={`flex items-center gap-1.5 font-medium transition-all duration-300 rounded-full px-3 py-1.5 ${isScrolledStyle ? 'text-saffron-600 hover:bg-saffron-50' : 'text-white hover:bg-white/10'}`}
            title={t('Switch to Kannada', 'Switch to English')}
          >
            <Globe size={18} />
            <span className="text-sm font-semibold uppercase">{lang === 'en' ? 'KA' : 'EN'}</span>
          </button>
          
          <Link
            href="/#donate"
            className={`inline-flex items-center gap-2 font-cinzel text-base font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${isScrolledStyle ? 'bg-saffron-500 hover:bg-saffron-600 text-white' : 'bg-white hover:bg-gray-50 text-saffron-600 shadow-md'}`}
          >
            {t('Donate Now', 'ದಾನ ಮಾಡಿ')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${isScrolledStyle ? 'text-saffron-800 hover:bg-saffron-100' : 'text-white hover:bg-white/20'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-saffron-200/40 px-6 py-6 flex flex-col gap-6 shadow-2xl absolute w-full top-full left-0">
          {navLinks.map(link => (
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
            <button
              onClick={() => { setLang(lang === 'en' ? 'ka' : 'en'); setOpen(false); }}
              className="flex items-center justify-center gap-2 font-medium text-saffron-600 bg-saffron-50 py-3 rounded-full shadow-sm border border-saffron-100"
            >
              <Globe size={20} />
              <span className="uppercase font-semibold tracking-wide">{lang === 'en' ? 'ಕನ್ನಡ (KA)' : 'English (EN)'}</span>
            </button>
            <Link
              href="/#donate"
              className="bg-saffron-500 hover:bg-saffron-600 transition-colors text-white font-cinzel font-bold text-lg px-6 py-4 rounded-full text-center shadow-md"
              onClick={() => setOpen(false)}
            >
              {t('Donate Now', 'ದಾನ ಮಾಡಿ')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
